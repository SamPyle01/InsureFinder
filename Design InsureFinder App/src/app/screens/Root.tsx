import { Outlet, useLocation } from 'react-router';
import BottomNav from '../components/BottomNav';
import { Toaster } from '../components/ui/sonner';
import { useEffect, useRef } from 'react';

export default function Root() {
  const location = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Hide bottom nav on these screens
  const hideNav = 
    location.pathname === '/' || 
    location.pathname === '/location' ||
    location.pathname === '/health-profile' ||
    location.pathname.startsWith('/settings') ||
    location.pathname.startsWith('/learn/plan-types') ||
    location.pathname.startsWith('/learn/cost-guide') ||
    location.pathname.startsWith('/review/');

  // Reset scroll position on navigation
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div 
        ref={scrollContainerRef}
        className="w-[393px] bg-white min-h-screen relative pb-16 overflow-y-auto"
        style={{ maxHeight: '100vh' }}
      >
        <Outlet />
        {!hideNav && <BottomNav />}
      </div>
      <Toaster position="top-center" />
    </div>
  );
}