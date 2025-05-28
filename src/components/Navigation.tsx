
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, Users, Briefcase, BookOpen, Book } from 'lucide-react';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('personal');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'personal', label: 'Personal', icon: User },
    { id: 'family', label: 'Family', icon: Users },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'interests', label: 'Interests', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: Book },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-gradient">My Portfolio</h1>
          
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 transition-all duration-200"
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </div>
          
          <div className="md:hidden">
            <Button variant="outline" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
