import { ChevronLeft, Heart, Activity, Pill, Stethoscope, Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useState } from 'react';

// Mock health profile data
const healthProfileData = {
  bloodType: 'O+',
  height: '5\'10"',
  weight: '165 lbs',
  conditions: [
    { id: '1', name: 'Seasonal Allergies', severity: 'Mild' },
    { id: '2', name: 'Asthma', severity: 'Moderate' },
  ],
  medications: [
    { id: '1', name: 'Albuterol Inhaler', dosage: '90 mcg, as needed' },
    { id: '2', name: 'Loratadine', dosage: '10 mg, daily' },
  ],
  careNeeds: [
    'Pediatrics',
    'Family Medicine',
    'Allergy & Immunology'
  ],
  allergies: [
    'Penicillin',
    'Pollen',
    'Dust'
  ],
  lastCheckup: 'January 15, 2026',
  primaryCarePhysician: 'Dr. Sarah Williams',
};

export default function HealthProfile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 pt-[59px] pb-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/profile')}
            className="flex items-center gap-2 text-[#0A84FF]"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
            className="text-[#0A84FF]"
          >
            {isEditing ? 'Done' : 'Edit'}
          </Button>
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">Health Profile</h1>
      </div>

      <div className="px-6 py-6 space-y-4 pb-24">
        {/* Basic Health Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 pt-5 pb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#0A84FF]" />
            <h2 className="font-semibold text-gray-900">Basic Health Information</h2>
          </div>
          <div className="divide-y divide-gray-100">
            <div className="px-5 py-3 flex items-center justify-between">
              <p className="text-sm text-gray-600">Blood Type</p>
              <p className="text-sm font-medium text-gray-900">{healthProfileData.bloodType}</p>
            </div>
            <div className="px-5 py-3 flex items-center justify-between">
              <p className="text-sm text-gray-600">Height</p>
              <p className="text-sm font-medium text-gray-900">{healthProfileData.height}</p>
            </div>
            <div className="px-5 py-3 flex items-center justify-between">
              <p className="text-sm text-gray-600">Weight</p>
              <p className="text-sm font-medium text-gray-900">{healthProfileData.weight}</p>
            </div>
            <div className="px-5 py-3 flex items-center justify-between">
              <p className="text-sm text-gray-600">Last Checkup</p>
              <p className="text-sm font-medium text-gray-900">{healthProfileData.lastCheckup}</p>
            </div>
          </div>
        </div>

        {/* Primary Care Physician */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Stethoscope className="w-5 h-5 text-[#0A84FF]" />
            <h2 className="font-semibold text-gray-900">Primary Care Physician</h2>
          </div>
          <p className="text-sm font-medium text-gray-900">{healthProfileData.primaryCarePhysician}</p>
          <p className="text-xs text-gray-500 mt-1">Family Medicine</p>
        </div>

        {/* Medical Conditions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#0A84FF]" />
              <h2 className="font-semibold text-gray-900">Medical Conditions</h2>
            </div>
            {isEditing && (
              <button className="text-[#0A84FF]">
                <Plus className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="space-y-3">
            {healthProfileData.conditions.map(condition => (
              <div key={condition.id} className="bg-gray-50 rounded-xl p-3 flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{condition.name}</p>
                  <p className="text-xs text-gray-500">Severity: {condition.severity}</p>
                </div>
                {isEditing && (
                  <button className="text-red-500 ml-2">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Medications */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Pill className="w-5 h-5 text-[#0A84FF]" />
              <h2 className="font-semibold text-gray-900">Current Medications</h2>
            </div>
            {isEditing && (
              <button className="text-[#0A84FF]">
                <Plus className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="space-y-3">
            {healthProfileData.medications.map(medication => (
              <div key={medication.id} className="bg-gray-50 rounded-xl p-3 flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{medication.name}</p>
                  <p className="text-xs text-gray-500">{medication.dosage}</p>
                </div>
                {isEditing && (
                  <button className="text-red-500 ml-2">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Allergies */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-900">Allergies</h2>
            {isEditing && (
              <button className="text-[#0A84FF]">
                <Plus className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {healthProfileData.allergies.map((allergy, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full"
              >
                {allergy}
                {isEditing && (
                  <button className="ml-2">
                    <X className="w-3 h-3" />
                  </button>
                )}
              </Badge>
            ))}
          </div>
        </div>

        {/* Care Needs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-900">Specialized Care Needs</h2>
            {isEditing && (
              <button className="text-[#0A84FF]">
                <Plus className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {healthProfileData.careNeeds.map((need, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-50 text-[#0A84FF] border border-blue-200 px-3 py-1 rounded-full"
              >
                {need}
                {isEditing && (
                  <button className="ml-2">
                    <X className="w-3 h-3" />
                  </button>
                )}
              </Badge>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Tip:</span> Keep your health profile updated to get better plan recommendations 
            tailored to your specific medical needs and conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
