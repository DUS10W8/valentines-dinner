import { useEffect, useRef } from 'react';

export default function TicketWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const widgetHtml = import.meta.env.VITE_TICKET_WIDGET_HTML;
    
    if (widgetHtml && widgetRef.current) {
      // Note: In production, consider sanitizing this HTML
      // For now, we trust the environment variable source
      widgetRef.current.innerHTML = widgetHtml;
    }
  }, []);

  const widgetHtml = import.meta.env.VITE_TICKET_WIDGET_HTML;

  if (!widgetHtml) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 border-2 border-dashed border-soft-pink">
        <div className="text-center">
          <div className="text-4xl mb-4">🎫</div>
          <h3 className="text-xl font-semibold text-wine-red mb-2">
            Ticket Sales Widget
          </h3>
          <p className="text-gray-600 mb-4">
            Ticket sales widget will appear here
          </p>
          <div className="bg-cream rounded p-4 text-sm text-gray-700">
            <p className="font-semibold mb-1">To add your widget:</p>
            <p>Set the <code className="bg-white px-2 py-1 rounded">VITE_TICKET_WIDGET_HTML</code> environment variable</p>
            <p className="mt-2 text-xs">Paste your embed code into your <code className="bg-white px-1 rounded">.env</code> file</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={widgetRef}
      className="bg-white rounded-lg shadow-md p-4 min-h-[400px]"
    />
  );
}
