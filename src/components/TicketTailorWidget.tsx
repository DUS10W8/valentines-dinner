import { useEffect, useMemo, useRef, useState } from 'react';

interface TicketTailorWidgetProps {
  className?: string;
}

export default function TicketTailorWidget({ className = '' }: TicketTailorWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptMountRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'loaded' | 'loaded_no_render' | 'error' | 'timeout'
  >('idle');

  const widgetUrl = useMemo(
    () => {
      // Prefer env-provided embed URL (copy/paste from Ticket Tailor → Promote → Website embed codes).
      // The generic "all tickets" listing page often does NOT render properly in the inline widget.
      const fromEnv = import.meta.env.VITE_TICKETTAILOR_WIDGET_URL as string | undefined;
      return (
        fromEnv?.trim() ||
        'https://www.tickettailor.com/all-tickets/foodies/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true'
      );
    },
    []
  );

  useEffect(() => {
    const mount = scriptMountRef.current;
    if (!mount) {
      return;
    }

    // Ticket Tailor inline embed uses a script tag with `data-*` attributes.
    // Some builds/docs reference `widget.js` (not `tt-widget.js`), and if the wrong
    // script is used the widget will never replace the fallback.
    const WIDGET_SRC = 'https://cdn.tickettailor.com/js/widgets/min/widget.js';

    // React 18 StrictMode intentionally mounts/unmounts components twice in dev.
    // If we inject the widget script and then immediately "cleanup remove" it,
    // Ticket Tailor may never initialize. So: make this effect idempotent and
    // avoid tearing down the injected script on cleanup.
    const existingInjected = mount.querySelector(
      `script[src="${WIDGET_SRC}"][data-tt-react-embed="true"]`
    );
    if (existingInjected) {
      return;
    }

    // Ticket Tailor's embed is driven by a script tag with `data-*` attributes.
    // In React/SPAs, we create that script tag on mount so the widget initializes
    // AFTER the component exists in the DOM.
    setStatus('loading');

    const script = document.createElement('script');
    script.src = WIDGET_SRC;
    script.async = true;
    script.setAttribute('data-url', widgetUrl);
    script.setAttribute('data-type', 'inline');
    script.setAttribute('data-inline-minimal', 'true');
    script.setAttribute('data-inline-show-logo', 'false');
    script.setAttribute('data-inline-bg-fill', 'false');
    script.setAttribute('data-inline-inherit-ref-from-url-param', '');
    script.setAttribute('data-inline-ref', 'website_widget');
    script.setAttribute('data-tt-react-embed', 'true');

    // Append after the existing fallback markup (matches Ticket Tailor snippet).
    mount.appendChild(script);

    const timeoutId = window.setTimeout(() => {
      setStatus((s) => (s === 'loaded' || s === 'loaded_no_render' || s === 'error' ? s : 'timeout'));
    }, 6000);

    const onLoad = () => {
      window.clearTimeout(timeoutId);
      setStatus('loaded');

      // If the script loads but the widget doesn't replace the fallback,
      // surface that explicitly (usually URL/embed config, CSP, or blocked XHRs).
      window.setTimeout(() => {
        const stillFallback = !!mount.querySelector('.tt-widget-fallback');
        if (stillFallback) {
          setStatus((s) => (s === 'loaded' ? 'loaded_no_render' : s));
        }
      }, 1500);
    };
    const onError = () => {
      window.clearTimeout(timeoutId);
      setStatus('error');
    };

    script.addEventListener('load', onLoad);
    script.addEventListener('error', onError);

    return () => {
      window.clearTimeout(timeoutId);
      script.removeEventListener('load', onLoad);
      script.removeEventListener('error', onError);
      // Intentionally do NOT remove the injected script; see StrictMode note above.
    };
  }, [widgetUrl]);

  return (
    <div className={className} ref={containerRef}>
      <div className="text-xs font-serif mb-2 text-gray-600">
        <span className="font-semibold">Widget status:</span> {status}
        {(status === 'loaded_no_render' || status === 'error' || status === 'timeout') && (
          <>
            {' '}
            —{' '}
            {status === 'loaded_no_render'
              ? 'script loaded, but widget did not initialize (usually embed URL/config or blocked follow-up requests).'
              : 'likely blocked by an ad/tracker blocker or network/privacy settings.'}
          </>
        )}
      </div>

      <div className="tt-widget" ref={scriptMountRef}>
        <div className="tt-widget-fallback">
          <p>
            <a href={widgetUrl} target="_blank" rel="noopener noreferrer">
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
    </div>
  );
}
