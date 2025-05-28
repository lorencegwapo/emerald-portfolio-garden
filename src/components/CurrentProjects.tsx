
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';

export const CurrentProjects = () => {
  const projects = [
    {
      title: "EcoTrack - Environmental Impact Tracker",
      status: "In Development",
      progress: 75,
      description: "A mobile application that helps individuals track their carbon footprint and suggests eco-friendly alternatives for daily activities.",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      goals: [
        "Launch beta version by end of Q2 2024",
        "Partner with environmental organizations",
        "Implement gamification features"
      ],
      type: "Personal"
    },
    {
      title: "DevMentor - Coding Mentorship Platform",
      status: "Planning Phase",
      progress: 25,
      description: "A platform connecting experienced developers with newcomers for mentorship opportunities, featuring video calls, code reviews, and learning paths.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebRTC"],
      goals: [
        "Complete MVP design by March 2024",
        "Find co-founder with business background",
        "Secure initial funding"
      ],
      type: "Startup"
    },
    {
      title: "Open Source UI Component Library",
      status: "Active Development",
      progress: 60,
      description: "Contributing to and maintaining a React component library focused on accessibility and customization. Building reusable components for the developer community.",
      technologies: ["React", "TypeScript", "Storybook", "Jest"],
      goals: [
        "Reach 1000 GitHub stars",
        "Add 20 new components by year-end",
        "Improve documentation and examples"
      ],
      type: "Open Source"
    },
    {
      title: "AI-Powered Code Review Tool",
      status: "Research Phase",
      progress: 15,
      description: "Exploring the development of an AI tool that provides intelligent code reviews, suggests optimizations, and detects potential security vulnerabilities.",
      technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
      goals: [
        "Complete market research",
        "Build proof of concept",
        "Test with small development teams"
      ],
      type: "Research"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active Development":
        return "bg-green-100 text-green-800";
      case "In Development":
        return "bg-blue-100 text-blue-800";
      case "Planning Phase":
        return "bg-yellow-100 text-yellow-800";
      case "Research Phase":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Personal":
        return "bg-emerald-100 text-emerald-800";
      case "Startup":
        return "bg-orange-100 text-orange-800";
      case "Open Source":
        return "bg-indigo-100 text-indigo-800";
      case "Research":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gradient mb-4">Current Projects</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here's what I'm currently working on - a mix of personal projects, open source contributions, and innovative ideas.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="border-green-200 hover:shadow-lg transition-all duration-300 hover:border-green-300">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Book size={20} />
                  <span className="text-lg">{project.title}</span>
                </CardTitle>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
                <Badge className={getTypeColor(project.type)}>
                  {project.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-800">Progress</span>
                    <span className="text-sm text-gray-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <p className="text-gray-600">{project.description}</p>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-green-300 text-green-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Goals & Milestones</h4>
                  <ul className="text-gray-600 space-y-1">
                    {project.goals.map((goal, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-2">
                  <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold text-green-800 mb-3">Always Learning, Always Building</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            These projects represent my commitment to continuous learning and contribution to the tech community. 
            Each project teaches me something new and helps solve real-world problems. I believe in building 
            products that make a positive impact while pushing the boundaries of what's possible with technology.
          </p>
          <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
            Get In Touch About Collaboration
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
