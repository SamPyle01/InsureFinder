import { Home, FileText, BookOpen, User } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export default function BottomNav() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/home') {
      return location.pathname === '/home';
    }
    return location.pathname.startsWith(path);
  };

  const tabs = [
    { path: '/home', icon: Home, label: 'Home' },
    { path: '/plans', icon: FileText, label: 'Plans' },
    { path: '/learn', icon: BookOpen, label: 'Learn' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-inset-bottom" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <div className="max-w-lg mx-auto flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = isActive(tab.path);
          
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className="flex flex-col items-center justify-center flex-1 h-full"
            >
              <Icon 
                className={`w-6 h-6 mb-0.5 ${
                  active ? 'text-[#0A84FF]' : 'text-gray-500'
                }`}
              />
              <span className={`text-[10px] ${
                active ? 'text-[#0A84FF] font-medium' : 'text-gray-500'
              }`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
