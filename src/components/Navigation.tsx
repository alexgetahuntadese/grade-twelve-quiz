
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { BookOpen, GraduationCap, MessageCircle, Download, Home } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Add error boundary for navigation
  const handleNavigation = (path: string) => {
    try {
      navigate(path);
    } catch (error) {
      console.error('Navigation error:', error);
      window.location.href = path; // Fallback to regular navigation
    }
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <Menubar className="border-0">
          <MenubarMenu>
            <MenubarTrigger className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Home
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => handleNavigation('/')}>
                Dashboard
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Grade Levels
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => handleNavigation('/grade-10')}>
                Grade 10
              </MenubarItem>
              <MenubarItem onClick={() => handleNavigation('/grade-11')}>
                Grade 11
              </MenubarItem>
              <MenubarItem onClick={() => handleNavigation('/grade-12')}>
                Grade 12
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Subjects
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => handleNavigation('/subject/mathematics')}>
                Mathematics
              </MenubarItem>
              <MenubarItem onClick={() => handleNavigation('/subject/physics')}>
                Physics
              </MenubarItem>
              <MenubarItem onClick={() => handleNavigation('/subject/chemistry')}>
                Chemistry
              </MenubarItem>
              <MenubarItem onClick={() => handleNavigation('/subject/biology')}>
                Biology
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem onClick={() => handleNavigation('/subject/history')}>
                History
              </MenubarItem>
              <MenubarItem onClick={() => handleNavigation('/subject/geography')}>
                Geography
              </MenubarItem>
              <MenubarItem onClick={() => handleNavigation('/subject/english')}>
                English
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              AI Assistant
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Ask Questions
              </MenubarItem>
              <MenubarItem>
                Study Tips
              </MenubarItem>
              <MenubarItem>
                Subject Help
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Features
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Offline Download
              </MenubarItem>
              <MenubarItem>
                Premium Features
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default Navigation;
