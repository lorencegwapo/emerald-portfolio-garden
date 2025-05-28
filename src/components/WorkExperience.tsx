
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

export const WorkExperience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      skills: ["React", "Node.js", "AWS", "TypeScript"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects from conception to deployment. Worked directly with clients to understand requirements.",
      achievements: [
        "Built 10+ successful web applications",
        "Maintained 99.9% uptime across all projects",
        "Reduced client onboarding time by 50%"
      ],
      skills: ["Vue.js", "Python", "Docker", "PostgreSQL"]
    },
    {
      title: "Junior Developer",
      company: "WebDev Agency",
      period: "2019 - 2020",
      description: "Started my professional journey working on small to medium-sized web projects. Focused on learning best practices and modern development workflows.",
      achievements: [
        "Completed 20+ client projects",
        "Earned certifications in React and AWS",
        "Contributed to open source projects"
      ],
      skills: ["HTML/CSS", "JavaScript", "PHP", "MySQL"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gradient mb-4">Work Experience</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          My professional journey through various roles and the impact I've made along the way.
        </p>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-green-200 hover:shadow-lg transition-all duration-300 hover:border-green-300">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase size={20} />
                  <span>{exp.title}</span>
                </CardTitle>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {exp.period}
                </Badge>
              </div>
              <p className="text-green-100 font-medium">{exp.company}</p>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">{exp.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Key Achievements</h4>
                  <ul className="text-gray-600 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-green-300 text-green-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
