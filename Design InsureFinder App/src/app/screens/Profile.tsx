import { 
  User, 
  Mail, 
  Users, 
  DollarSign, 
  Heart, 
  CreditCard, 
  Settings, 
  Bell, 
  Shield,
  LogOut,
  ChevronRight 
} from 'lucide-react';
import { mockUserProfile, mockPlans } from '../data/mockData';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Link, useNavigate } from 'react-router';

export default function Profile() {
  const navigate = useNavigate();
  const userProfile = JSON.parse(localStorage.getItem('userProfile') || 'null');
  const userName = userProfile?.name || mockUserProfile.name;
  const userAge = userProfile?.age ? parseInt(userProfile.age) : mockUserProfile.age;
  const userHouseholdSize = userProfile?.householdSize || mockUserProfile.householdSize;

  const savedPlans = mockPlans.filter(plan =>
    mockUserProfile.savedPlans.includes(plan.id)
  );

  const handleLogout = () => {
    localStorage.removeItem('userLocation');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0A84FF] to-[#0066CC] text-white px-6 pt-[59px] pb-8 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="w-20 h-20 border-4 border-white/20">
            <AvatarFallback className="bg-white/20 text-white text-xl">
              {userName.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-semibold">{userName}</h1>
            {/*  <p className="text-blue-100">{mockUserProfile.email}</p> */}
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6 pb-24">
        {/* Personal Information */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="font-semibold text-gray-900 px-5 pt-5 pb-3">Personal Information</h2>
          <div className="divide-y divide-gray-100">
            <div className="flex items-center gap-3 px-5 py-3">
              <User className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-xs text-gray-500">Age</p>
                <p className="text-sm font-medium text-gray-900">{userAge} years old</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-3 px-5 py-3">
              <Users className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-xs text-gray-500">Household Size</p>
                <p className="text-sm font-medium text-gray-900">{userHouseholdSize} {userHouseholdSize === '1' ? 'person' : 'people'}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-3 px-5 py-3">
              <DollarSign className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-xs text-gray-500">Estimated Annual Income</p>
                <p className="text-sm font-medium text-gray-900">${mockUserProfile.estimatedAnnualIncome.toLocaleString()}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Saved Plans */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Saved Plans</h2>
            <span className="text-sm text-gray-500">{savedPlans.length} saved</span>
          </div>
          
          {savedPlans.length > 0 ? (
            <div className="space-y-3">
              {savedPlans.map(plan => (
                <Link key={plan.id} to={`/plans/${plan.id}`}>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div>
                      <p className="font-medium text-gray-900">{plan.provider}</p>
                      <p className="text-sm text-gray-600">{plan.planName}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 text-center py-4">No saved plans yet</p>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="font-semibold text-gray-900 px-5 pt-5 pb-3">Quick Actions</h2>
          <div className="divide-y divide-gray-100">
            <button 
              onClick={() => navigate('/settings')}
              className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-400" />
              <span className="flex-1 text-left text-sm font-medium text-gray-900">Settings</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button 
              onClick={() => navigate('/health-profile')}
              className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors"
            >
              <Heart className="w-5 h-5 text-gray-400" />
              <span className="flex-1 text-left text-sm font-medium text-gray-900">Health Profile</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <CreditCard className="w-5 h-5 text-gray-400" />
              <span className="flex-1 text-left text-sm font-medium text-gray-900">Payment Methods</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="flex-1 text-left text-sm font-medium text-gray-900">Contact Support</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Logout */}
        <button 
          onClick={handleLogout}
          className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4 flex items-center justify-center gap-2 text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log Out</span>
        </button>

        {/* Version */}
        <p className="text-center text-sm text-gray-400">Version 1.0.0</p>
      </div>
    </div>
  );
}