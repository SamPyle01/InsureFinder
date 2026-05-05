import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export default function LocationSetup() {
  const navigate = useNavigate();
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [zipCode, setZipCode] = useState('');

  useEffect(() => {
    // Check if onboarding is complete
    const onboardingComplete = localStorage.getItem('onboardingComplete');
    if (!onboardingComplete) {
      navigate('/onboarding');
    }
  }, [navigate]);

  const handleEnableLocation = () => {
    // Simulate GPS location detection
    localStorage.setItem('userLocation', JSON.stringify({
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102'
    }));
    navigate('/home');
  };

  const handleManualEntry = () => {
    if (zipCode.length === 5) {
      localStorage.setItem('userLocation', JSON.stringify({
        city: 'Your City',
        state: 'State',
        zipCode: zipCode
      }));
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-white pt-[59px]">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 bg-[#0A84FF] rounded-full mx-auto flex items-center justify-center">
            <MapPin className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Find Health Plans Near You
          </h1>
          <p className="text-gray-600">
            We'll use your location to show you available health insurance plans in your area
          </p>
        </div>

        {!showManualEntry ? (
          <div className="space-y-3">
            <Button
              onClick={handleEnableLocation}
              className="w-full h-12 bg-[#0A84FF] hover:bg-[#0066CC] text-white rounded-xl"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Allow Location Access
            </Button>
            <Button
              onClick={() => setShowManualEntry(true)}
              variant="outline"
              className="w-full h-12 border-2 border-gray-300 rounded-xl"
            >
              Enter Location Manually
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                ZIP Code
              </label>
              <Input
                type="text"
                placeholder="Enter your ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value.slice(0, 5))}
                maxLength={5}
                className="h-12 rounded-xl"
              />
            </div>
            <Button
              onClick={handleManualEntry}
              disabled={zipCode.length !== 5}
              className="w-full h-12 bg-[#0A84FF] hover:bg-[#0066CC] text-white rounded-xl disabled:opacity-50"
            >
              Find Plans Near Me
            </Button>
            <Button
              onClick={() => setShowManualEntry(false)}
              variant="ghost"
              className="w-full"
            >
              Back
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}