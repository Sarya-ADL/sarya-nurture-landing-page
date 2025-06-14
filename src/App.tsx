import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { FC, Suspense, lazy } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";
import SEO from "@/components/SEO";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Legal = lazy(() => import("./pages/Legal"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Navbar = lazy(() => import("@/components/Navbar"));
const Footer = lazy(() => import("@/components/Footer"));

// Create a single instance of QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Loading component
const LoadingSpinner: FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Layout component with Outlet for nested routes
const Layout: FC = () => (
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-sarya-purple/5 to-sarya-peach/5 dark:from-zinc-950 dark:via-sarya-purple/10 dark:to-sarya-peach/10">
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
    </Suspense>
    <main className="flex-grow">
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </main>
    <Suspense fallback={<LoadingSpinner />}>
      <Footer />
    </Suspense>
  </div>
);

const App: FC = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <SEO />
      <ThemeProvider defaultTheme="system">
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Index />} />
                  <Route path="/legal" element={<Legal />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
