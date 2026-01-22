# Valentine's Dinner at Foodies

A mobile-first, single-page website for the Valentine's Dinner event at Foodies in Kennewick, WA.

## Features

- 🎫 Ticket sales widget embed (configurable via environment variable)
- 📱 Mobile-first responsive design
- 🎨 Elegant design matching the event flyer aesthetic
- 🖼️ Gallery with lightbox modal
- 📍 Location section with map placeholder
- ⚡ Optimized for Lighthouse performance

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS
- Mobile-first responsive design

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Configuration

### Ticket Widget

To add your ticket sales widget, create a `.env` file in the root directory:

```env
VITE_TICKET_WIDGET_HTML="<your-embed-code-here>"
```

The widget will automatically appear in the Tickets section when this environment variable is set.

## Assets

Place the following assets in the `public/assets/` directory:

- `valentines-flyer.png` - Event flyer image
- `gallery-1.jpg` through `gallery-4.jpg` - Gallery images (optional, placeholders will show if missing)

## Project Structure

```
src/
  ├── components/
  │   ├── TicketWidget.tsx  # Ticket sales widget component
  │   └── Gallery.tsx        # Gallery with lightbox
  ├── App.tsx                # Main page component
  ├── main.tsx               # Entry point
  └── index.css              # Global styles with Tailwind
```

## Design System

- **Background**: Warm cream (#F5F1E8)
- **Accents**: Blush pink hearts
- **Primary Color**: Deep wine red (#8B2635)
- **Typography**: 
  - Headlines: Dancing Script (script font)
  - Body: Crimson Text (elegant serif)

## License

Private project for Foodies Kennewick.
