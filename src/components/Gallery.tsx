import { useState } from 'react';

interface GalleryImage {
  id: number;
  label: string;
  src: string;
}

const base = import.meta.env.BASE_URL;
const galleryImages: GalleryImage[] = [
  { id: 1, label: 'Food', src: `${base}assets/gallery-food.png` },
  { id: 2, label: 'Cocktails', src: `${base}assets/gallery-cocktails.png` },
  { id: 3, label: 'Ambience', src: `${base}assets/gallery-ambience.png` },
  { id: 4, label: 'Live Music', src: `${base}assets/gallery-live-music.jpg` },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const getGradient = (label: string) => {
    const gradients: Record<string, string> = {
      'Food': 'from-rose-200 to-pink-300',
      'Cocktails': 'from-pink-200 to-rose-300',
      'Ambience': 'from-rose-100 to-pink-200',
      'Live Music': 'from-pink-100 to-rose-200',
    };
    return gradients[label] || 'from-rose-200 to-pink-300';
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            onClick={() => handleImageClick(image.id)}
            className="relative aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow group"
          >
            <img
              src={image.src}
              alt={image.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${getGradient(image.label)} flex items-center justify-center"><span class="text-wine-red font-script text-xl">${image.label}</span></div>`;
                }
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-soft-pink transition-colors"
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <img
              src={galleryImages[selectedImage - 1].src}
              alt={galleryImages[selectedImage - 1].label}
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
