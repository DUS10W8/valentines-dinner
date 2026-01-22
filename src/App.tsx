import { useState } from 'react';
import TicketWidget from './components/TicketWidget';
import Gallery from './components/Gallery';

function App() {
  const [selectedPrice, setSelectedPrice] = useState<'early' | 'standard'>('early');
  const [showFlyer, setShowFlyer] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-cream relative overflow-x-hidden">
      {/* Floating Heart Decorations */}
      <div className="heart-decoration top-10 left-4 hidden md:block">♥</div>
      <div className="heart-decoration top-32 right-8 hidden md:block">♥</div>
      <div className="heart-decoration bottom-20 left-12 hidden md:block">♥</div>
      <div className="heart-decoration bottom-40 right-16 hidden md:block">♥</div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-soft-pink/30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-script text-wine-red">Foodies</div>
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('details')}
                className="text-gray-700 hover:text-wine-red transition-colors font-serif"
              >
                Details
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-wine-red transition-colors font-serif"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('tickets')}
                className="text-gray-700 hover:text-wine-red transition-colors font-serif"
              >
                Tickets
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-wine-red transition-colors font-serif"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-gray-700 hover:text-wine-red transition-colors font-serif"
              >
                Location
              </button>
            </nav>
            <button
              onClick={() => scrollToSection('tickets')}
              className="bg-wine-red text-white px-4 py-2 rounded-full hover:bg-wine-red/90 transition-colors font-serif text-sm md:text-base"
            >
              Buy Tickets
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-script text-wine-red mb-4">
            Valentine's Dinner
          </h1>
          <p className="text-2xl md:text-3xl font-serif text-gray-700 mb-8">
            An intimate evening at Foodies
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-2xl">🍽️</span>
              <span className="font-serif">Three-course dinner</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-2xl">🍷</span>
              <span className="font-serif">Two Valentine-themed drinks included</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-2xl">🎵</span>
              <span className="font-serif">Live music by My Frazer</span>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mb-8 border border-soft-pink/20">
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-script text-wine-red mb-2">$150</p>
                <p className="text-gray-600 font-serif">for 2 guests</p>
              </div>
              <div className="border-t border-soft-pink/30 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blush text-wine-red px-2 py-1 rounded text-sm font-semibold">
                    Early Bird
                  </span>
                  <p className="text-2xl font-script text-wine-red">$140</p>
                </div>
                <p className="text-gray-600 font-serif text-sm">for 2 guests</p>
              </div>
              <p className="text-xs text-gray-500 font-serif italic">
                Limited seating • Reservations required
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('tickets')}
              className="bg-wine-red text-white px-8 py-3 rounded-full hover:bg-wine-red/90 transition-colors font-serif text-lg shadow-md"
            >
              Buy Tickets
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="bg-white text-wine-red border-2 border-wine-red px-8 py-3 rounded-full hover:bg-wine-red hover:text-white transition-colors font-serif text-lg shadow-md"
            >
              See Menu
            </button>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section id="tickets" className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-script text-wine-red text-center mb-8">
            Tickets
          </h2>

          {/* Price Toggle */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-soft-pink/20">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button
                onClick={() => setSelectedPrice('early')}
                className={`flex-1 px-6 py-4 rounded-lg border-2 transition-all font-serif ${
                  selectedPrice === 'early'
                    ? 'border-wine-red bg-wine-red text-white'
                    : 'border-soft-pink text-gray-700 hover:border-wine-red/50'
                }`}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="bg-blush text-wine-red px-2 py-1 rounded text-xs font-semibold">
                    Early Bird
                  </span>
                </div>
                <p className="text-2xl font-script">$140</p>
                <p className="text-sm">for 2 people</p>
              </button>
              <button
                onClick={() => setSelectedPrice('standard')}
                className={`flex-1 px-6 py-4 rounded-lg border-2 transition-all font-serif ${
                  selectedPrice === 'standard'
                    ? 'border-wine-red bg-wine-red text-white'
                    : 'border-soft-pink text-gray-700 hover:border-wine-red/50'
                }`}
              >
                <p className="text-2xl font-script mb-1">$150</p>
                <p className="text-sm">for 2 people</p>
              </button>
            </div>
            {selectedPrice === 'early' && (
              <p className="text-center text-green-700 font-serif text-sm">
                ✓ You're saving $10
              </p>
            )}
          </div>

          {/* Ticket Widget */}
          <div className="mb-6">
            <TicketWidget />
          </div>

          {/* Questions Box */}
          <div className="bg-cream rounded-lg p-6 border border-soft-pink/20">
            <h3 className="font-serif font-semibold text-wine-red mb-3">Questions?</h3>
            <div className="space-y-2 text-gray-700 font-serif text-sm">
              <p>Phone: <a href="tel:+1-XXX-XXX-XXXX" className="text-wine-red hover:underline">(XXX) XXX-XXXX</a></p>
              <p>Email: <a href="mailto:info@foodies.com" className="text-wine-red hover:underline">info@foodies.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-script text-wine-red text-center mb-12">
          Event Details
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-start gap-4 bg-white rounded-lg shadow-md p-6 border border-soft-pink/20">
            <span className="text-3xl">📅</span>
            <div>
              <p className="font-serif font-semibold text-wine-red mb-1">Date</p>
              <p className="font-serif text-gray-700">Valentine's Day (Feb 14)</p>
              <p className="font-serif text-gray-600 text-sm">Evening</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-lg shadow-md p-6 border border-soft-pink/20">
            <span className="text-3xl">📍</span>
            <div>
              <p className="font-serif font-semibold text-wine-red mb-1">Location</p>
              <p className="font-serif text-gray-700">Foodies — Kennewick, WA</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-lg shadow-md p-6 border border-soft-pink/20">
            <span className="text-3xl">ℹ️</span>
            <div>
              <p className="font-serif font-semibold text-wine-red mb-1">Important</p>
              <p className="font-serif text-gray-700">Limited seating • Reservations required</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-soft-pink/20 mt-8">
            <h3 className="font-serif font-semibold text-wine-red mb-4">What's Included</h3>
            <ul className="space-y-3 font-serif text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-wine-red">✓</span>
                <span>Three-course dinner (choice of one per course)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wine-red">✓</span>
                <span>Two Valentine-themed drinks per couple</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wine-red">✓</span>
                <span>Live music by My Frazer</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-soft-pink/30"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-cream px-6 py-2 border-2 border-soft-pink/30 rounded-full">
                <h2 className="text-2xl md:text-3xl font-script text-wine-red">
                  MENU (Choice of One Per Course)
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border border-soft-pink/20">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif font-semibold text-wine-red text-lg mb-3">Appetizer</h3>
                <div className="flex flex-wrap gap-4 text-gray-700 font-serif">
                  <span>Mozzarella</span>
                  <span className="text-soft-pink">•</span>
                  <span>Ahi Ceviche</span>
                </div>
              </div>
              <div className="border-t border-soft-pink/20 pt-6">
                <h3 className="font-serif font-semibold text-wine-red text-lg mb-3">Entrée</h3>
                <div className="flex flex-wrap gap-4 text-gray-700 font-serif">
                  <span>Steak & Shrimp</span>
                  <span className="text-soft-pink">•</span>
                  <span>Salmon</span>
                </div>
              </div>
              <div className="border-t border-soft-pink/20 pt-6">
                <h3 className="font-serif font-semibold text-wine-red text-lg mb-3">Dessert</h3>
                <div className="flex flex-wrap gap-4 text-gray-700 font-serif">
                  <span>Chocolate Cake</span>
                  <span className="text-soft-pink">•</span>
                  <span>Carrot Cake</span>
                  <span className="text-soft-pink">•</span>
                  <span>Cherry Brownies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-script text-wine-red text-center mb-12">
          Gallery
        </h2>
        <div className="max-w-4xl mx-auto">
          <Gallery />
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-script text-wine-red text-center mb-8">
            Location
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 border border-soft-pink/20 mb-6">
            <p className="font-serif text-gray-700 mb-4 text-center">Foodies — Kennewick, WA</p>
            <div className="aspect-video bg-cream rounded-lg flex items-center justify-center mb-4">
              <p className="text-gray-500 font-serif">Map embed placeholder</p>
            </div>
            <div className="text-center">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-wine-red text-white px-6 py-3 rounded-full hover:bg-wine-red/90 transition-colors font-serif"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 border-t border-soft-pink/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <button
            onClick={() => scrollToSection('tickets')}
            className="bg-wine-red text-white px-8 py-3 rounded-full hover:bg-wine-red/90 transition-colors font-serif text-lg shadow-md mb-6"
          >
            Buy Tickets
          </button>
          <p className="text-gray-600 font-serif text-sm">
            Foodies Kennewick • Valentine's Night • Limited Seating
          </p>
        </div>
      </footer>

      {/* Flyer Modal (if flyer image exists) */}
      {showFlyer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setShowFlyer(false)}
        >
          <div
            className="relative max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFlyer(false)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-soft-pink transition-colors"
              aria-label="Close flyer"
            >
              ✕
            </button>
            <img
              src="/assets/valentines-flyer.png"
              alt="Valentine's Dinner Flyer"
              className="max-w-full rounded-lg shadow-2xl"
              onError={() => setShowFlyer(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
