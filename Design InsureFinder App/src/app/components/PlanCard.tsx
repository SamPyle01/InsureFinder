import { Star, CheckCircle2, AlertCircle } from 'lucide-react';
import { HealthPlan } from '../data/mockData';
import { Button } from './ui/button';
import { Link } from 'react-router';

interface PlanCardProps {
  plan: HealthPlan;
  onCompareToggle?: (planId: string) => void;
  isSelected?: boolean;
  showCompare?: boolean;
}

export default function PlanCard({ plan, onCompareToggle, isSelected, showCompare }: PlanCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{plan.provider}</h3>
            <p className="text-sm text-gray-600">{plan.planName}</p>
          </div>
          <span className="px-2.5 py-1 bg-blue-50 text-[#0A84FF] text-xs font-medium rounded-full">
            {plan.planType}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium text-sm">{plan.rating}</span>
          <span className="text-xs text-gray-500">({plan.reviewCount} reviews)</span>
        </div>

        {/* Costs */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-xs text-gray-500">Monthly</p>
            <p className="font-semibold text-gray-900">${plan.monthlyPremium}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Deductible</p>
            <p className="font-semibold text-gray-900">${plan.deductible.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Max OOP</p>
            <p className="font-semibold text-gray-900">${plan.outOfPocketMax.toLocaleString()}</p>
          </div>
        </div>

        {/* Pros & Cons - Compact */}
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <div className="space-y-1">
            {plan.pros.slice(0, 2).map((pro, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-700">{pro}</p>
              </div>
            ))}
          </div>
          <div>
            {plan.cons.slice(0, 1).map((con, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-700">{con}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Link to={`/plans/${plan.id}`} className="flex-1">
            <Button variant="outline" className="w-full rounded-xl border-gray-300">
              View Details
            </Button>
          </Link>
          {showCompare && (
            <Button
              onClick={() => onCompareToggle?.(plan.id)}
              variant={isSelected ? "default" : "outline"}
              className={`rounded-xl ${
                isSelected 
                  ? 'bg-[#0A84FF] hover:bg-[#0066CC] text-white' 
                  : 'border-gray-300'
              }`}
            >
              {isSelected ? 'Selected' : 'Compare'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
