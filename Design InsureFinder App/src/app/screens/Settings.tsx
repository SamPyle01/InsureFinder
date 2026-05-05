import { 
  ArrowLeft, 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  HelpCircle, 
  LogOut, 
  ChevronRight,
  Mail,
  Lock,
  Globe,
  Moon,
  Smartphone
} from 'lucide-react';
import { useNavigate } from 'react-router';
import { Switch } from '../components/ui/switch';
import { useState } from 'react';

export default function Settings() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    planUpdates: true,
    priceAlerts: true,
    newsletter: false
  });

  const handleLogout = () => {
    localStorage.removeItem('userLocation');
    localStorage.removeItem('onboardingComplete');
    localStorage.removeItem('userProfile');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 pt-[59px] pb-4 border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6 pb-24">
        {/* Account Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="font-semibold text-gray-900 px-5 pt-5 pb-3">Account</h2>
          <div className="divide-y divide-gray-100">
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <User className="w-5 h-5 text-gray-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">Personal Information</p>
                <p className="text-xs text-gray-500">Update your name, age, and details</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <Mail className="w-5 h-5 text-gray-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">Email Address</p>
                <p className="text-xs text-gray-500">Change your email</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <Lock className="w-5 h-5 text-gray-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">Password</p>
                <p className="text-xs text-gray-500">Update your password</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="font-semibold text-gray-900 px-5 pt-5 pb-3">Notifications</h2>
          <div className="divide-y divide-gray-100">
            <div className="flex items-center justify-between px-5 py-3">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Push Notifications</p>
                  <p className="text-xs text-gray-500">Receive alerts on your device</p>
                </div>
              </div>
              <Switch 
                checked={notifications.push}
                onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
              />
            </div>
            <div className="flex items-center justify-between px-5 py-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                  <p className="text-xs text-gray-500">Get updates via email</p>
                </div>
              </div>
              <Switch 
                checked={notifications.email}
                onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
              />
            </div>
            <div className="flex items-center justify-between px-5 py-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Plan Updates</p>
                <p className="text-xs text-gray-500">Changes to your saved plans</p>
              </div>
              <Switch 
                checked={notifications.planUpdates}
                onCheckedChange={(checked) => setNotifications({...notifications, planUpdates: checked})}
              />
            </div>
            <div className="flex items-center justify-between px-5 py-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Price Alerts</p>
                <p className="text-xs text-gray-500">When plan prices change</p>
              </div>
              <Switch 
                checked={notifications.priceAlerts}
                onCheckedChange={(checked) => setNotifications({...notifications, priceAlerts: checked})}
              />
            </div>
            <div className="flex items-center justify-between px-5 py-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Newsletter</p>
                <p className="text-xs text-gray-500">Healthcare tips and news</p>
              </div>
              <Switch 
                checked={notifications.newsletter}
                onCheckedChange={(checked) => setNotifications({...notifications, newsletter: checked})}
              />
            </div>
          </div>
        </div>

        {/* Privacy & Security Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="font-semibold text-gray-900 px-5 pt-5 pb-3">Privacy & Security</h2>
          <div className="divide-y divide-gray-100">
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <Shield className="w-5 h-5 text-gray-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">Privacy Policy</p>
                <p className="text-xs text-gray-500">How we protect your data</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <Lock className="w-5 h-5 text-gray-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">Data & Privacy</p>
                <p className="text-xs text-gray-500">Manage your data preferences</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <Smartphone className="w-5 h-5 text-gray-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">Biometric Login</p>
                <p className="text-xs text-gray-500">Use Face ID or Touch ID</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="font-semibold text-gray-900 px-5 pt-5 pb-3">Payment Methods</h2>
          <div className="divide-y divide-gray-100">
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <CreditCard className="w-5 h-5 text-gray-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">Payment Cards</p>
                <p className="text-xs text-gray-500">Manage your payment methods</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <CreditCard className="w-5 h-5 text-gray-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">Billing History</p>
                <p className="text-xs text-gray-500">View past transactions</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="font-semibold text-gray-900 px-5 pt-5 pb-3">Preferences</h2>
          <div className="divide-y divide-gray-100">
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <Globe className="w-5 h-5 text-gray-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">Language</p>
                <p className="text-xs text-gray-500">English (US)</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <Moon className="w-5 h-5 text-gray-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">Appearance</p>
                <p className="text-xs text-gray-500">Light mode</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Help & Support Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="font-semibold text-gray-900 px-5 pt-5 pb-3">Help & Support</h2>
          <div className="divide-y divide-gray-100">
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <HelpCircle className="w-5 h-5 text-gray-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">Help Center</p>
                <p className="text-xs text-gray-500">FAQs and guides</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <Mail className="w-5 h-5 text-gray-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">Contact Support</p>
                <p className="text-xs text-gray-500">Get in touch with us</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">Terms of Service</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">About InsureFinder</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <div className="px-5 py-3">
              <p className="text-sm text-gray-500">Version 1.0.0</p>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button 
          onClick={handleLogout}
          className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4 flex items-center justify-center gap-2 text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
}