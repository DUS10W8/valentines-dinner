const MAP_QUERY = 'Foodies Kennewick, WA';
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

export default function LocationMap() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-soft-pink/20 mb-6">
      <p className="font-serif text-gray-700 mb-4 text-center">Foodies — Kennewick, WA</p>
      <div className="overflow-hidden rounded-lg shadow-sm border border-soft-pink/20 mb-4 w-full h-[300px] sm:h-[360px] md:h-[400px] lg:h-[420px] max-h-[420px]">
        <iframe
          src={MAP_EMBED_SRC}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Foodies Kennewick location map"
        />
      </div>
      <div className="text-center">
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-wine-red text-white px-6 py-3 rounded-full hover:bg-wine-red/90 transition-colors font-serif"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}
