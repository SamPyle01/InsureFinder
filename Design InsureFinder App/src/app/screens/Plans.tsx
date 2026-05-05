import { useState } from 'react';
import { MapPin, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import PlanCard from '../components/PlanCard';
import { mockPlans } from '../data/mockData';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../components/ui/sheet';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Slider } from '../components/ui/slider';

export default function Plans() {
  const navigate = useNavigate();
  const location = JSON.parse(localStorage.getItem('userLocation') || '{}');
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('recommended');
  const [maxPremium, setMaxPremium] = useState<number>(1000);
  const [planTypes, setPlanTypes] = useState<string[]>([]);
  const [careNeeds, setCareNeeds] = useState<string[]>([]);

  const handleCompareToggle = (planId: string) => {
    setSelectedPlans(prev => {
      if (prev.includes(planId)) {
        return prev.filter(id => id !== planId);
      } else if (prev.length < 3) {
        return [...prev, planId];
      }
      return prev;
    });
  };

  const handlePlanTypeToggle = (type: string) => {
    setPlanTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleCareNeedToggle = (need: string) => {
    setCareNeeds(prev =>
      prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]
    );
  };

  // Filter and sort plans
  let filteredPlans = mockPlans.filter(plan => {
    if (plan.monthlyPremium > maxPremium) return false;
    if (planTypes.length > 0 && !planTypes.includes(plan.planType)) return false;
    return true;
  });

  // Sort plans
  if (sortBy === 'lowestCost') {
    filteredPlans = [...filteredPlans].sort((a, b) => a.monthlyPremium - b.monthlyPremium);
  } else if (sortBy === 'bestRated') {
    filteredPlans = [...filteredPlans].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'lowestDeductible') {
    filteredPlans = [...filteredPlans].sort((a, b) => a.deductible - b.deductible);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 pt-[59px] pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Available Plans</h1>
        
        {/* Location */}
        <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Showing plans in</p>
              <p className="text-sm font-medium text-gray-900">{location.city}, {location.state} {location.zipCode}</p>
            </div>
          </div>
          <Link to="/location">
            <Button variant="ghost" size="sm" className="text-[#0A84FF]">
              Change
            </Button>
          </Link>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex-1 rounded-xl border-gray-300">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <SheetHeader className="px-6">
                <SheetTitle>Filter Plans</SheetTitle>
              </SheetHeader>
              <div className="space-y-6 mt-6 px-6 pb-6 overflow-y-auto max-h-[calc(80vh-80px)]">
                {/* Premium Range */}
                <div className="space-y-3">
                  <Label>Max Monthly Premium: ${maxPremium}</Label>
                  <Slider
                    value={[maxPremium]}
                    onValueChange={(value) => setMaxPremium(value[0])}
                    min={0}
                    max={1000}
                    step={50}
                  />
                </div>

                {/* Plan Types */}
                <div className="space-y-3">
                  <Label>Plan Type</Label>
                  <div className="space-y-2">
                    {['HMO', 'PPO', 'EPO', 'POS'].map(type => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={type}
                          checked={planTypes.includes(type)}
                          onCheckedChange={() => handlePlanTypeToggle(type)}
                        />
                        <label htmlFor={type} className="text-sm font-medium cursor-pointer">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialized Care Needs */}
                <div className="space-y-3">
                  <Label>Specialized Care Needs</Label>
                  <div className="space-y-2">
                    {[
                      'Pediatrics',
                      'Family Medicine',
                      'Orthopedics',
                      'Gynecology',
                      'Cardiology',
                      'Dermatology',
                      'Mental Health',
                      'Physical Therapy',
                      'Allergy & Immunology',
                      'Endocrinology'
                    ].map(need => (
                      <div key={need} className="flex items-center space-x-2">
                        <Checkbox
                          id={need}
                          checked={careNeeds.includes(need)}
                          onCheckedChange={() => handleCareNeedToggle(need)}
                        />
                        <label htmlFor={need} className="text-sm font-medium cursor-pointer">
                          {need}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={() => {
                    setMaxPremium(1000);
                    setPlanTypes([]);
                    setCareNeeds([]);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Reset Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="flex-1 rounded-xl">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="lowestCost">Lowest Cost</SelectItem>
              <SelectItem value="bestRated">Best Rated</SelectItem>
              <SelectItem value="lowestDeductible">Lowest Deductible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Plans List */}
      <div className="px-6 py-4 space-y-4 pb-24">
        <p className="text-sm text-gray-600">{filteredPlans.length} plans found</p>
        
        {filteredPlans.map(plan => (
          <PlanCard
            key={plan.id}
            plan={plan}
            onCompareToggle={handleCompareToggle}
            isSelected={selectedPlans.includes(plan.id)}
            showCompare={true}
          />
        ))}
      </div>

      {/* Compare Button */}
      {selectedPlans.length > 0 && (
        <div className="fixed bottom-20 left-0 right-0 px-6 max-w-lg mx-auto">
          <Button
            onClick={() => navigate(`/compare?ids=${selectedPlans.join(',')}`)}
            className="w-full bg-[#0A84FF] hover:bg-[#0066CC] text-white rounded-xl h-12 shadow-lg"
          >
            Compare {selectedPlans.length} Plan{selectedPlans.length > 1 ? 's' : ''}
          </Button>
        </div>
      )}
    </div>
  );
}