import { useEffect, useRef } from 'react';

interface TicketTailorWidgetProps {
  className?: string;
}

export default function TicketTailorWidget({ className = '' }: TicketTailorWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptInjectedRef = useRef(false);

  useEffect(() => {
    // Prevent duplicate script injection
    if (scriptInjectedRef.current) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    // Check if the script already exists in the document
    const existingScript = document.querySelector(
      'script[src="https://cdn.tickettailor.com/js/widgets/min/widget.js"]'
    );

    if (existingScript) {
      scriptInjectedRef.current = true;
      return;
    }

    // Create and inject the script element
    const script = document.createElement('script');
    script.src = 'https://cdn.tickettailor.com/js/widgets/min/widget.js';
    script.async = true;
    script.setAttribute('data-url', 'https://www.tickettailor.com/all-tickets/foodies/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true');
    script.setAttribute('data-type', 'inline');
    script.setAttribute('data-inline-minimal', 'true');
    script.setAttribute('data-inline-show-logo', 'false');
    script.setAttribute('data-inline-bg-fill', 'false');
    script.setAttribute('data-inline-inherit-ref-from-url-param', '');
    script.setAttribute('data-inline-ref', 'website_widget');

    // Append script to the container
    container.appendChild(script);

    // Mark as injected
    scriptInjectedRef.current = true;

    // Cleanup function (though script will remain in DOM)
    return () => {
      // Note: We don't remove the script on unmount as it may be needed
      // if the component remounts. The scriptInjectedRef prevents duplicates.
    };
  }, []);

  return (
    <div className={`tt-widget ${className}`} ref={containerRef}>
      <div className="tt-widget-fallback">
        <p>
          <a
            href="https://www.tickettailor.com/all-tickets/foodies/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to buy tickets
          </a>
          <br />
          <small>
            <a
              href="https://www.tickettailor.com?rf=wdg_272102"
              className="tt-widget-powered"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sell tickets online with Ticket Tailor
            </a>
          </small>
        </p>
      </div>
    </div>
  );
}
