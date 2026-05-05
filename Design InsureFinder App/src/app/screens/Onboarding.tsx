import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    income: '',
    householdSize: '1',
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Save to localStorage and navigate to location setup
      localStorage.setItem('onboardingComplete', 'true');
      localStorage.setItem('userProfile', JSON.stringify(formData));
      navigate('/location');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name.trim().length > 0;
      case 2:
        return formData.age && parseInt(formData.age) > 0 && parseInt(formData.age) < 120;
      case 3:
        return formData.income.length > 0;
      case 4:
        return formData.householdSize.length > 0;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A84FF] to-[#0066CC] text-white flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-white/20 h-1 mt-[59px]">
        <div 
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-2">
          {step > 1 && (
            <button onClick={handleBack} className="p-2 -ml-2">
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          <span className="ml-auto text-sm text-white/80">
            Step {step} of {totalSteps}
          </span>
        </div>
        <p className="text-sm text-white/80">Let's personalize your experience</p>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8">
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold">What's your name?</h1>
              <p className="text-white/80">We'll use this to personalize your experience</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white/90">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold">How old are you?</h1>
              <p className="text-white/80">This helps us find age-appropriate plans</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="age" className="text-white/90">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={formData.age}
                onChange={(e) => updateFormData('age', e.target.value)}
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
                min="1"
                max="120"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold">What's your income range?</h1>
              <p className="text-white/80">This helps us determine if you qualify for subsidies</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="income" className="text-white/90">Annual Income Range</Label>
              <Select value={formData.income} onValueChange={(value) => updateFormData('income', value)}>
                <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white rounded-xl">
                  <SelectValue placeholder="Select income range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-25000">Under $25,000</SelectItem>
                  <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50000-75000">$50,000 - $75,000</SelectItem>
                  <SelectItem value="75000-100000">$75,000 - $100,000</SelectItem>
                  <SelectItem value="100000+">Over $100,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold">Household size?</h1>
              <p className="text-white/80">How many people will be on this plan?</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="household" className="text-white/90">Number of People</Label>
              <Select value={formData.householdSize} onValueChange={(value) => updateFormData('householdSize', value)}>
                <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Just me</SelectItem>
                  <SelectItem value="2">2 people</SelectItem>
                  <SelectItem value="3">3 people</SelectItem>
                  <SelectItem value="4">4 people</SelectItem>
                  <SelectItem value="5">5 people</SelectItem>
                  <SelectItem value="6+">6+ people</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </div>

      {/* Footer Button */}
      <div className="px-6 pb-8">
        <Button
          onClick={handleNext}
          disabled={!canProceed()}
          className="w-full h-12 bg-white text-[#0A84FF] hover:bg-white/90 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {step === totalSteps ? 'Get Started' : 'Continue'}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}