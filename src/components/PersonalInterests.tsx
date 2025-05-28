
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export const PersonalInterests = () => {
  const interests = [
    {
      category: "Technology & Learning",
      items: [
        "Open Source Contributing",
        "Artificial Intelligence & Machine Learning",
        "Blockchain Technology",
        "Mobile App Development",
        "Cloud Computing"
      ]
    },
    {
      category: "Creative Pursuits",
      items: [
        "Photography",
        "Digital Art & Design",
        "Writing Technical Blogs",
        "Video Editing",
        "Music Production"
      ]
    },
    {
      category: "Physical Activities",
      items: [
        "Hiking & Nature Photography",
        "Rock Climbing",
        "Cycling",
        "Swimming",
        "Yoga & Meditation"
      ]
    },
    {
      category: "Hobbies & Interests",
      items: [
        "Reading Sci-Fi Novels",
        "Board Games & Strategy Games",
        "Cooking International Cuisine",
        "Traveling & Cultural Exploration",
        "Volunteering at Local Tech Meetups"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gradient mb-4">Personal Interests</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Beyond work, these are the passions and activities that fuel my creativity and keep me balanced.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle className="flex items-center space-x-2">
                <BookOpen size={20} />
                <span>{interest.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {interest.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-green-800 mb-3">How These Interests Shape My Work</h3>
          <p className="text-gray-600 leading-relaxed">
            My diverse interests contribute to my professional growth in unique ways. Photography enhances my eye for 
            design and user interface aesthetics. Rock climbing teaches me patience and problem-solving under pressure. 
            Contributing to open source projects keeps me connected with the developer community and current with 
            industry trends. These activities provide fresh perspectives that I bring to every project I work on.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
