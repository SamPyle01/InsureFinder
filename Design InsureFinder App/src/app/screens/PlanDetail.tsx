import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, Star, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { Button } from '../components/ui/button';
import { mockPlans, mockReviews } from '../data/mockData';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { format } from 'date-fns';

export default function PlanDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plan = mockPlans.find(p => p.id === id);
  const reviews = mockReviews.filter(r => r.planId === id);

  if (!plan) {
    return <div>Plan not found</div>;
  }

  const handleEnroll = () => {
    alert('Enrollment flow would start here. This would redirect to the insurance provider\'s enrollment portal.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 pt-[59px] pb-4 border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <div className="flex-1">
            <h1 className="font-semibold text-gray-900">{plan.provider}</h1>
            <p className="text-sm text-gray-600">{plan.planName}</p>
          </div>
          <span className="px-2.5 py-1 bg-blue-50 text-[#0A84FF] text-xs font-medium rounded-full">
            {plan.planType}
          </span>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6 pb-32">
        {/* Cost Overview */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Cost Overview</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Monthly Premium</span>
              <span className="font-semibold text-lg text-gray-900">${plan.monthlyPremium}/mo</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Deductible</span>
              <span className="font-semibold text-gray-900">${plan.deductible.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Out-of-Pocket Maximum</span>
              <span className="font-semibold text-gray-900">${plan.outOfPocketMax.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Personalized Analysis */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
          <div className="flex items-start justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Why this plan may (or may not) fit you</h2>
            <Info className="w-5 h-5 text-[#0A84FF]" />
          </div>
          
          <div className="space-y-3 mb-3">
            {plan.pros.map((pro, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/50 rounded-xl p-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">{pro}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {plan.cons.map((con, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/50 rounded-xl p-3">
                <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">{con}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4">Based on your profile</p>
        </div>

        {/* Coverage Details */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Coverage Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Primary Care Visit</span>
              <span className="font-medium text-gray-900">{plan.coverageDetails.primaryCare}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Specialist Visit</span>
              <span className="font-medium text-gray-900">{plan.coverageDetails.specialist}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Emergency Room</span>
              <span className="font-medium text-gray-900">{plan.coverageDetails.emergencyRoom}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Prescription Drugs</span>
              <span className="font-medium text-gray-900 text-right text-sm">{plan.coverageDetails.prescription}</span>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Key Benefits</h2>
          <div className="space-y-2">
            {plan.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-semibold text-gray-900">Reviews & Ratings</h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-lg">{plan.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({plan.reviewCount} reviews)</span>
              </div>
            </div>
            <Link to={`/review/${plan.id}`}>
              <Button variant="outline" size="sm" className="rounded-xl">
                Write Review
              </Button>
            </Link>
          </div>

          {reviews.length > 0 ? (
            <div className="space-y-4 mt-4">
              {reviews.map(review => (
                <div key={review.id} className="border-t border-gray-100 pt-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-blue-100 text-[#0A84FF]">
                        {review.userAvatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-gray-900">{review.userName}</p>
                        <p className="text-xs text-gray-500">
                          {format(new Date(review.date), 'MMM d, yyyy')}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-3 h-3 ${
                              idx < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 text-center py-4">No reviews yet. Be the first to review!</p>
          )}
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-4 w-[393px] mx-auto">
        <Button
          onClick={handleEnroll}
          className="w-full bg-[#0A84FF] hover:bg-[#0066CC] text-white rounded-xl h-12"
        >
          Enroll Now
        </Button>
      </div>
    </div>
  );
}