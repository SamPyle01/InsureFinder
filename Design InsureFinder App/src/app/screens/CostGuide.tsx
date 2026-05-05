import { ArrowLeft, DollarSign, TrendingDown, Shield } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function CostGuide() {
  const navigate = useNavigate();

  const costTerms = [
    {
      term: 'Premium',
      icon: DollarSign,
      color: 'bg-blue-100 text-blue-600',
      definition: 'The amount you pay every month for your health insurance coverage.',
      example: 'If your premium is $400/month, you pay this even if you don\'t use any healthcare services.',
      tips: [
        'Lower premiums usually mean higher deductibles',
        'Premiums are due whether you use healthcare or not',
        'Some employers pay part of your premium'
      ]
    },
    {
      term: 'Deductible',
      icon: TrendingDown,
      color: 'bg-purple-100 text-purple-600',
      definition: 'The amount you pay for healthcare services before your insurance starts paying.',
      example: 'With a $2,000 deductible, you pay the first $2,000 of covered services, then insurance helps pay.',
      tips: [
        'Lower deductibles mean higher premiums',
        'Preventive care is usually free (no deductible)',
        'Family deductibles work differently than individual'
      ]
    },
    {
      term: 'Out-of-Pocket Maximum',
      icon: Shield,
      color: 'bg-green-100 text-green-600',
      definition: 'The most you\'ll pay for covered services in a year. After this, insurance pays 100%.',
      example: 'With a $7,000 max, once you\'ve paid $7,000 in deductibles and copays, your insurance covers everything else.',
      tips: [
        'This protects you from catastrophic costs',
        'Premiums don\'t count toward this limit',
        'Out-of-network care may not count'
      ]
    }
  ];

  const additionalCosts = [
    {
      name: 'Copayment (Copay)',
      description: 'A fixed amount you pay for a covered service',
      example: '$25 to see your primary doctor, $50 for a specialist'
    },
    {
      name: 'Coinsurance',
      description: 'Your share of costs after meeting your deductible',
      example: 'You pay 20% and insurance pays 80% of the cost'
    },
    {
      name: 'Prior Authorization',
      description: 'Approval needed before insurance covers certain services',
      example: 'May be required for expensive procedures or medications'
    }
  ];

  const scenarios = [
    {
      title: 'Healthy Individual',
      description: 'Rarely visits doctor, no ongoing conditions',
      recommendation: 'Consider a plan with lower premium and higher deductible',
      reasoning: 'You\'ll save on monthly costs since you don\'t use healthcare often'
    },
    {
      title: 'Frequent Medical Needs',
      description: 'Regular doctor visits, ongoing medications',
      recommendation: 'Choose a plan with higher premium but lower deductible',
      reasoning: 'Lower deductible means insurance starts helping sooner'
    },
    {
      title: 'Unpredictable Health',
      description: 'Not sure what healthcare you\'ll need',
      recommendation: 'Look for balanced premium and deductible',
      reasoning: 'Middle-ground plans offer flexibility for various situations'
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
          <h1 className="text-xl font-semibold text-gray-900">Cost Guide</h1>
        </div>
        <p className="text-sm text-gray-600 ml-12">Understanding health insurance costs</p>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-4 pb-24">
        {/* Main Cost Terms */}
        {costTerms.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.term} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">{item.term}</h2>
                  <p className="text-sm text-gray-700">{item.definition}</p>
                </div>
              </div>

              {/* Example */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-3">
                <p className="text-xs font-medium text-blue-900 mb-1">Example</p>
                <p className="text-sm text-blue-800">{item.example}</p>
              </div>

              {/* Tips */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-700">Things to Know</p>
                <ul className="space-y-1.5">
                  {item.tips.map((tip, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        {/* Additional Cost Terms */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Other Important Terms</h2>
          <div className="space-y-3">
            {additionalCosts.map((cost, idx) => (
              <div key={idx} className={idx < additionalCosts.length - 1 ? 'pb-3 border-b border-gray-100' : ''}>
                <h3 className="font-medium text-gray-900 mb-1">{cost.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{cost.description}</p>
                <p className="text-xs text-gray-500 bg-gray-50 px-2 py-1.5 rounded inline-block">
                  {cost.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Strategy by Health Needs */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Choosing Based on Your Needs</h2>
          <div className="space-y-3">
            {scenarios.map((scenario, idx) => (
              <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-1">{scenario.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{scenario.description}</p>
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <p className="text-xs font-medium text-blue-900 mb-1">Recommendation</p>
                  <p className="text-sm font-medium text-gray-900 mb-1">{scenario.recommendation}</p>
                  <p className="text-xs text-gray-600">{scenario.reasoning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Calculator Tip */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-5 text-white">
          <h2 className="font-semibold mb-2">Pro Tip</h2>
          <p className="text-sm text-white/90 mb-3">
            Calculate your total annual cost by adding: (Premium × 12) + Expected deductible + Expected copays
          </p>
          <div className="bg-white/20 rounded-xl p-3 text-sm">
            <p className="font-medium mb-1">Example Calculation:</p>
            <p className="text-white/90">$400/mo premium × 12 = $4,800</p>
            <p className="text-white/90">+ $2,000 deductible</p>
            <p className="text-white/90">+ $500 estimated copays</p>
            <p className="font-semibold mt-2 pt-2 border-t border-white/20">= $7,300 total annual cost</p>
          </div>
        </div>
      </div>
    </div>
  );
}