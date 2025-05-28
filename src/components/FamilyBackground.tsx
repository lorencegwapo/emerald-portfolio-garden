
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

export const FamilyBackground = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gradient mb-4">Family Background</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The foundation of who I am today - my family roots and the values that shape me.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardTitle className="flex items-center space-x-2">
              <Users size={20} />
              <span>Family Heritage</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Origins</h3>
                <p className="text-gray-600">
                  Born and raised in a loving family in the heart of the Midwest. 
                  My parents emigrated from Ireland in the 1980s, bringing with them 
                  a strong work ethic and the importance of education.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Family Values</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Hard work and perseverance</li>
                  <li>• Respect for education and learning</li>
                  <li>• Importance of community service</li>
                  <li>• Family comes first mentality</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardTitle>Family Influence</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Parents</h3>
                <p className="text-gray-600">
                  My father is a retired engineer who taught me logical thinking and 
                  problem-solving. My mother, a former teacher, instilled in me the 
                  love for learning and helping others.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Siblings</h3>
                <p className="text-gray-600">
                  I'm the middle child of three siblings. My older sister is a doctor, 
                  and my younger brother is an artist. This diverse environment taught 
                  me to appreciate different perspectives and approaches to life.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Impact on Career</h3>
                <p className="text-gray-600">
                  The blend of technical thinking from my father and educational passion 
                  from my mother led me to pursue technology as a means to educate and 
                  empower others.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
