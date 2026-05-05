import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function PlanTypes() {
  const navigate = useNavigate();

  const planTypes = [
    {
      type: 'HMO',
      fullName: 'Health Maintenance Organization',
      color: 'from-blue-500 to-blue-600',
      pros: [
        'Lower monthly premiums',
        'Lower out-of-pocket costs',
        'Coordinated care through primary doctor',
        'Good for routine healthcare needs'
      ],
      cons: [
        'Must choose a primary care physician',
        'Need referrals for specialists',
        'Limited to network providers',
        'Less flexibility in choosing doctors'
      ],
      bestFor: 'People who want lower costs and don\'t mind coordinating care through a primary doctor.'
    },
    {
      type: 'PPO',
      fullName: 'Preferred Provider Organization',
      color: 'from-indigo-500 to-indigo-600',
      pros: [
        'No referrals needed for specialists',
        'Can see out-of-network doctors',
        'More provider flexibility',
        'Good for frequent specialist visits'
      ],
      cons: [
        'Higher monthly premiums',
        'Higher out-of-pocket costs',
        'More expensive out-of-network care',
        'May require more paperwork'
      ],
      bestFor: 'People who want flexibility and don\'t mind paying more for it.'
    },
    {
      type: 'EPO',
      fullName: 'Exclusive Provider Organization',
      color: 'from-purple-500 to-purple-600',
      pros: [
        'No referrals needed',
        'Lower premiums than PPO',
        'Good network of providers',
        'Simplified care process'
      ],
      cons: [
        'No out-of-network coverage (except emergencies)',
        'Must stay in network',
        'Limited provider choice',
        'Less flexibility than PPO'
      ],
      bestFor: 'People who want PPO-like flexibility without out-of-network coverage.'
    },
    {
      type: 'POS',
      fullName: 'Point of Service',
      color: 'from-teal-500 to-teal-600',
      pros: [
        'Can go out-of-network',
        'Primary care coordination',
        'Balance of cost and flexibility',
        'Some out-of-network coverage'
      ],
      cons: [
        'Need referrals for specialists',
        'Higher costs for out-of-network',
        'More complex than HMO or PPO',
        'May require more paperwork'
      ],
      bestFor: 'People who want a middle ground between HMO and PPO plans.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 pt-[59px] pb-4 border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Plan Types</h1>
        </div>
        <p className="text-sm text-gray-600 ml-12">Understanding different health insurance plans</p>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-4 pb-24">
        {planTypes.map((plan) => (
          <div key={plan.type} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {/* Header */}
            <div className={`bg-gradient-to-r ${plan.color} p-5 text-white`}>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold">{plan.type}</h2>
                <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                  {plan.type}
                </div>
              </div>
              <p className="text-white/90 text-sm">{plan.fullName}</p>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              {/* Pros */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs">✓</span>
                  Advantages
                </h3>
                <ul className="space-y-1.5">
                  {plan.pros.map((pro, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="pt-2 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xs">!</span>
                  Considerations
                </h3>
                <ul className="space-y-1.5">
                  {plan.cons.map((con, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <div className="pt-2 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Best For</h3>
                <p className="text-sm text-gray-700 bg-blue-50 p-3 rounded-xl border border-blue-100">
                  {plan.bestFor}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Quick Comparison */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Quick Comparison</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Most Flexible</span>
              <span className="text-sm font-medium text-gray-900">PPO</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Lowest Cost</span>
              <span className="text-sm font-medium text-gray-900">HMO</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">No Referrals</span>
              <span className="text-sm font-medium text-gray-900">PPO, EPO</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Best Balance</span>
              <span className="text-sm font-medium text-gray-900">POS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}