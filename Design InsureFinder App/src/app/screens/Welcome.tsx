import { Shield, Check } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';

export default function Welcome() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/onboarding');
  };

  const handleLogin = () => {
    // For now, go straight to location setup since we don't have a login flow yet
    navigate('/location');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A84FF] to-[#0066CC] flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center px-6 pt-[59px] pb-12">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">InsureFinder</h1>
          <p className="text-xl text-blue-100 mb-8">
            Find the perfect health insurance plan for you
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-12">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Compare Plans Side-by-Side</p>
              <p className="text-sm text-blue-100">See detailed comparisons of up to 3 plans at once</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Personalized Recommendations</p>
              <p className="text-sm text-blue-100">Plans tailored to your location and needs</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Real User Reviews</p>
              <p className="text-sm text-blue-100">Learn from others' experiences with each plan</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Expert Guidance</p>
              <p className="text-sm text-blue-100">Educational content to help you make informed decisions</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="px-6 pb-8 space-y-3">
        <Button
          onClick={handleGetStarted}
          className="w-full bg-white text-[#0A84FF] hover:bg-gray-100 rounded-2xl h-14 text-lg shadow-lg"
        >
          Sign Up
        </Button>
        <Button
          onClick={handleLogin}
          variant="outline"
          className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-2xl h-14 text-lg"
        >
          Log In
        </Button>
        <p className="text-xs text-center text-blue-100 mt-4 px-4">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}