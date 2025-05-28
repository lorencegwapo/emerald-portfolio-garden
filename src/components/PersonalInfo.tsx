
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';

export const PersonalInfo = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gradient mb-4">Personal Information</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get to know me better through my background, skills, and what drives me forward.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardTitle className="flex items-center space-x-2">
              <User size={20} />
              <span>About Me</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Basic Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Name:</strong> Lorence Alfanta </p>
                  <p><strong>Location:</strong> Gusa , CDOC</p>
                  <p><strong>Email:</strong> alfantalorence@gmail.com</p>
                  <p><strong>Phone:</strong> +63 994 226 5996 </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Professional Summary</h3>
                <p className="text-gray-600">
                  Passionate software developer with 5+ years of experience in creating 
                  innovative solutions. I love turning complex problems into simple, 
                  beautiful designs that users enjoy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardTitle>Skills & Expertise</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-green-800 mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-green-800 mb-3">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Leadership', 'Communication', 'Problem Solving', 'Team Work'].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-green-300 text-green-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Languages</h3>
                <p className="text-gray-600">English (Native), Spanish (Conversational)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
