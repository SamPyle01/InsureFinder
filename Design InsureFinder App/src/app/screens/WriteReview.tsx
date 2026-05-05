import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { mockPlans } from '../data/mockData';
import { toast } from 'sonner';

export default function WriteReview() {
  const { planId } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  
  const plan = mockPlans.find(p => p.id === planId);

  if (!plan) {
    return <div>Plan not found</div>;
  }

  const handleSubmit = () => {
    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }

    // In a real app, this would submit to a backend
    toast.success('Review submitted successfully!');
    setTimeout(() => {
      navigate(`/plans/${planId}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 pt-[59px] pb-4 border-b border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Write a Review</h1>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Plan Info */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Reviewing</p>
          <h2 className="font-semibold text-gray-900">{plan.provider}</h2>
          <p className="text-sm text-gray-600">{plan.planName}</p>
        </div>

        {/* Rating */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <label className="text-sm font-medium text-gray-900 mb-3 block">
            How would you rate this plan?
          </label>
          <div className="flex gap-2 justify-center py-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`w-12 h-12 ${
                    star <= (hoveredRating || rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-center text-sm text-gray-600 mt-2">
              {rating === 1 && 'Poor'}
              {rating === 2 && 'Fair'}
              {rating === 3 && 'Good'}
              {rating === 4 && 'Very Good'}
              {rating === 5 && 'Excellent'}
            </p>
          )}
        </div>

        {/* Comment */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <label className="text-sm font-medium text-gray-900 mb-3 block">
            Share your experience (optional)
          </label>
          <Textarea
            placeholder="What did you like or dislike about this plan?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={6}
            className="resize-none"
          />
          <p className="text-xs text-gray-500 mt-2">
            {comment.length}/500 characters
          </p>
        </div>

        {/* Guidelines */}
        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
          <h3 className="font-medium text-gray-900 mb-2">Review Guidelines</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Be honest and specific about your experience</li>
            <li>• Focus on the plan's features and value</li>
            <li>• Avoid personal information</li>
            <li>• Be respectful and constructive</li>
          </ul>
        </div>

        {/* Submit */}
        <Button
          onClick={handleSubmit}
          disabled={rating === 0}
          className="w-full bg-[#0A84FF] hover:bg-[#0066CC] text-white rounded-xl h-12 disabled:opacity-50"
        >
          Submit Review
        </Button>
      </div>
    </div>
  );
}