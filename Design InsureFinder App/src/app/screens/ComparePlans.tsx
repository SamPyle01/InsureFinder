import { useNavigate, useSearchParams } from 'react-router';
import { ArrowLeft, Star, CheckCircle2, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockPlans } from '../data/mockData';
import { useState, useRef } from 'react';
import { Button } from '../components/ui/button';

export default function ComparePlans() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const planIds = searchParams.get('ids')?.split(',') || [];
  const plans = planIds.map(id => mockPlans.find(p => p.id === id)).filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  if (plans.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No plans selected for comparison</p>
          <Button onClick={() => navigate('/plans')} className="bg-[#0A84FF] hover:bg-[#0066CC] text-white rounded-xl">
            Browse Plans
          </Button>
        </div>
      </div>
    );
  }

  // Find best values
  const lowestPremium = Math.min(...plans.map(p => p!.monthlyPremium));
  const lowestDeductible = Math.min(...plans.map(p => p!.deductible));
  const lowestOOP = Math.min(...plans.map(p => p!.outOfPocketMax));
  const highestRating = Math.max(...plans.map(p => p!.rating));

  const currentPlan = plans[currentIndex]!;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : plans.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < plans.length - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - go to next
        handleNext();
      } else {
        // Swiped right - go to previous
        handlePrevious();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const isBestValue = (plan: typeof currentPlan) => {
    const isLowest = plan.monthlyPremium === lowestPremium;
    const hasGoodRating = plan.rating >= 4.5;
    const hasLowDeductible = plan.deductible <= 2500;
    return isLowest || (hasGoodRating && hasLowDeductible);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 pt-[59px] pb-4 border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Compare Plans</h1>
        </div>
        {plans.length > 1 && (
          <p className="text-sm text-gray-500">Swipe or use arrows to compare • {currentIndex + 1} of {plans.length}</p>
        )}
      </div>

      {/* Navigation Dots */}
      {plans.length > 1 && (
        <div className="bg-white px-6 pb-4 flex items-center justify-center gap-2">
          {plans.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex 
                  ? 'w-8 bg-[#0A84FF]' 
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}

      {/* Plan Card */}
      <div
        className="px-6 py-6 space-y-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Plan Header */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">{currentPlan.provider}</h2>
              <p className="text-sm text-gray-600 mb-2">{currentPlan.planName}</p>
              <span className="inline-block px-3 py-1 bg-blue-50 text-[#0A84FF] text-sm font-medium rounded-full">
                {currentPlan.planType}
              </span>
            </div>
            {isBestValue(currentPlan) && (
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                Best Value
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
            <Star className={`w-5 h-5 ${
              currentPlan.rating === highestRating 
                ? 'fill-green-500 text-green-500' 
                : 'fill-yellow-400 text-yellow-400'
            }`} />
            <span className="font-semibold text-gray-900">{currentPlan.rating}</span>
            <span className="text-sm text-gray-500">({currentPlan.reviewCount} reviews)</span>
            {currentPlan.rating === highestRating && (
              <span className="ml-auto text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                Highest Rated
              </span>
            )}
          </div>
        </div>

        {/* Key Costs */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Key Costs</h3>
          <div className="space-y-3">
            {/* Monthly Premium */}
            <div className={`flex items-center justify-between p-3 rounded-xl ${
              currentPlan.monthlyPremium === lowestPremium
                ? 'bg-green-50 border border-green-200'
                : 'bg-gray-50'
            }`}>
              <div>
                <p className="text-sm text-gray-600 mb-0.5">Monthly Premium</p>
                <p className={`text-2xl font-semibold ${
                  currentPlan.monthlyPremium === lowestPremium ? 'text-green-700' : 'text-gray-900'
                }`}>
                  ${currentPlan.monthlyPremium}/mo
                </p>
              </div>
              {currentPlan.monthlyPremium === lowestPremium && (
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Lowest
                </div>
              )}
            </div>

            {/* Deductible */}
            <div className={`flex items-center justify-between p-3 rounded-xl ${
              currentPlan.deductible === lowestDeductible
                ? 'bg-green-50 border border-green-200'
                : 'bg-gray-50'
            }`}>
              <div>
                <p className="text-sm text-gray-600 mb-0.5">Deductible</p>
                <p className={`text-xl font-semibold ${
                  currentPlan.deductible === lowestDeductible ? 'text-green-700' : 'text-gray-900'
                }`}>
                  ${currentPlan.deductible.toLocaleString()}
                </p>
              </div>
              {currentPlan.deductible === lowestDeductible && (
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Lowest
                </div>
              )}
            </div>

            {/* Out-of-Pocket Max */}
            <div className={`flex items-center justify-between p-3 rounded-xl ${
              currentPlan.outOfPocketMax === lowestOOP
                ? 'bg-green-50 border border-green-200'
                : 'bg-gray-50'
            }`}>
              <div>
                <p className="text-sm text-gray-600 mb-0.5">Out-of-Pocket Maximum</p>
                <p className={`text-xl font-semibold ${
                  currentPlan.outOfPocketMax === lowestOOP ? 'text-green-700' : 'text-gray-900'
                }`}>
                  ${currentPlan.outOfPocketMax.toLocaleString()}
                </p>
              </div>
              {currentPlan.outOfPocketMax === lowestOOP && (
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Lowest
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Best For</h3>
          <div className="space-y-2">
            {currentPlan.pros.map((pro, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">{pro}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Considerations */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Potential Drawbacks</h3>
          <div className="space-y-2">
            {currentPlan.cons.map((con, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">{con}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Details */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Coverage Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Primary Care</span>
              <span className="text-sm font-medium text-gray-900">{currentPlan.coverageDetails.primaryCare}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Specialist</span>
              <span className="text-sm font-medium text-gray-900">{currentPlan.coverageDetails.specialist}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Emergency Room</span>
              <span className="text-sm font-medium text-gray-900">{currentPlan.coverageDetails.emergencyRoom}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-600">Prescription</span>
              <span className="text-sm font-medium text-gray-900 text-right">{currentPlan.coverageDetails.prescription}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 pb-4">
          <Button
            onClick={() => navigate(`/plans/${currentPlan.id}`)}
            className="w-full bg-[#0A84FF] hover:bg-[#0066CC] text-white rounded-xl h-12 font-medium"
          >
            View Full Details
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      {plans.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="fixed left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Previous plan"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="fixed right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Next plan"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </>
      )}
    </div>
  );
}