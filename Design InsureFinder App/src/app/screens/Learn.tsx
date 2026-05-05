import { Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { Input } from '../components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { faqData } from '../data/mockData';

export default function Learn() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 pt-[59px] pb-6 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Learn</h1>
        <p className="text-gray-600 mb-4">Understanding health insurance made simple</p>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search health insurance questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-11 rounded-xl border-gray-300"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6 pb-24">
        {/* Educational Cards */}
        <div className="grid grid-cols-2 gap-3">
          <Link to="/learn/plan-types" className="block">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white hover:from-blue-600 hover:to-blue-700 transition-all h-full min-h-[120px] flex flex-col justify-between">
              <h3 className="font-semibold mb-2">Plan Types</h3>
              <p className="text-sm text-blue-100">HMO, PPO, EPO, POS explained</p>
            </div>
          </Link>
          <Link to="/learn/cost-guide" className="block">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-4 text-white hover:from-indigo-600 hover:to-indigo-700 transition-all h-full min-h-[120px] flex flex-col justify-between">
              <h3 className="font-semibold mb-2">Cost Guide</h3>
              <p className="text-sm text-indigo-100">Understanding premiums & deductibles</p>
            </div>
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
          
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-sm font-medium text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-sm text-gray-500 text-center py-8">
              No results found. Try a different search term.
            </p>
          )}
        </div>

        {/* Quick Tips */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Quick Tips</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#0A84FF] font-semibold text-sm">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">Consider your health needs</p>
                <p className="text-sm text-gray-600">If you visit doctors frequently, a plan with a higher premium but lower deductible may save you money.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#0A84FF] font-semibold text-sm">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">Check the network</p>
                <p className="text-sm text-gray-600">Make sure your preferred doctors and hospitals are in the plan's network to avoid extra costs.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#0A84FF] font-semibold text-sm">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">Look at total costs</p>
                <p className="text-sm text-gray-600">Don't just focus on monthly premiums. Consider deductibles, copays, and out-of-pocket maximums too.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#0A84FF] font-semibold text-sm">4</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">Review annually</p>
                <p className="text-sm text-gray-600">Your health needs can change. Review your plan each year during open enrollment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Insurance Glossary</h2>
          <div className="space-y-3">
            <div className="border-b border-gray-100 pb-3">
              <p className="font-medium text-gray-900 mb-1">Copay</p>
              <p className="text-sm text-gray-600">A fixed amount you pay for a covered service, usually at the time of service.</p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <p className="font-medium text-gray-900 mb-1">Coinsurance</p>
              <p className="text-sm text-gray-600">Your share of costs for a covered service, calculated as a percentage.</p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <p className="font-medium text-gray-900 mb-1">Network</p>
              <p className="text-sm text-gray-600">Providers and facilities that have contracted with your health plan.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Formulary</p>
              <p className="text-sm text-gray-600">A list of prescription drugs covered by your health plan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}