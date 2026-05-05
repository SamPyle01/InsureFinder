import { MapPin, ArrowRight, TrendingUp, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';
import { mockPlans, mockUserProfile } from '../data/mockData';

export default function Home() {
  const location = JSON.parse(localStorage.getItem('userLocation') || '{}');
  const userProfile = JSON.parse(localStorage.getItem('userProfile') || 'null');
  const userName = userProfile?.name ? userProfile.name.split(' ')[0] : mockUserProfile.name.split(' ')[0];
  
  // Get recommended plan (highest rated with moderate premium)
  const recommendedPlan = mockPlans.find(p => p.id === '2');
  
  // Calculate premium range
  const premiums = mockPlans.map(p => p.monthlyPremium);
  const minPremium = Math.min(...premiums);
  const maxPremium = Math.max(...premiums);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0A84FF] to-[#0066CC] text-white px-6 pt-[59px] pb-8 rounded-b-3xl">
        <div className="space-y-4">
          <div>
            <p className="text-blue-100 text-sm">Good morning</p>
            <h1 className="text-2xl font-semibold">Hi, {userName}</h1>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <div>
                <p className="text-xs text-blue-100">Current Location</p>
                <p className="font-medium">{location.city}, {location.state}</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                Change
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6 pb-24">
        {/* Quick Stats */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#0A84FF]" />
            <h2 className="font-semibold text-gray-900">Available Plans</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Plans in your area</span>
              <span className="font-semibold text-gray-900">{mockPlans.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Premium range</span>
              <span className="font-semibold text-gray-900">
                ${minPremium} - ${maxPremium}/mo
              </span>
            </div>
          </div>
        </div>

        {/* Recommended Plan */}
        {recommendedPlan && (
          <div className="space-y-3">
            <h2 className="font-semibold text-gray-900">Recommended for You</h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border-2 border-[#0A84FF]/20">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-[#0A84FF] font-medium mb-1">TOP PICK</p>
                    <h3 className="font-semibold text-gray-900">{recommendedPlan.provider}</h3>
                    <p className="text-sm text-gray-600 mb-2">{recommendedPlan.planName}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm text-gray-900">{recommendedPlan.rating}</span>
                      <span className="text-xs text-gray-500">({recommendedPlan.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-[#0A84FF] text-white text-xs font-medium rounded-full">
                    {recommendedPlan.planType}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <p className="text-xs text-gray-500">Monthly</p>
                    <p className="font-semibold text-gray-900">${recommendedPlan.monthlyPremium}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Deductible</p>
                    <p className="font-semibold text-gray-900">${recommendedPlan.deductible.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Max OOP</p>
                    <p className="font-semibold text-gray-900">${recommendedPlan.outOfPocketMax.toLocaleString()}</p>
                  </div>
                </div>

                <Link to={`/plans/${recommendedPlan.id}`}>
                  <Button className="w-full bg-[#0A84FF] hover:bg-[#0066CC] text-white rounded-xl h-11">
                    View Plan Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Browse All Plans CTA */}
        <Link to="/plans">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center justify-between hover:border-[#0A84FF] transition-colors">
            <div>
              <h3 className="font-semibold text-gray-900">Browse All Plans</h3>
              <p className="text-sm text-gray-600">Compare {mockPlans.length} available options</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[#0A84FF]" />
          </div>
        </Link>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <Link to="/learn">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center hover:border-[#0A84FF] transition-colors">
              <h4 className="font-medium text-gray-900 mb-1">Learn</h4>
              <p className="text-xs text-gray-600">Insurance basics</p>
            </div>
          </Link>
          <Link to="/profile">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center hover:border-[#0A84FF] transition-colors">
              <h4 className="font-medium text-gray-900 mb-1">Profile</h4>
              <p className="text-xs text-gray-600">Your information</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}