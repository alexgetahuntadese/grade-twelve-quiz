
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
              <MenubarItem onClick={() => navigate('/')}>
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
              <MenubarItem onClick={() => navigate('/grade-10')}>
                Grade 10
              </MenubarItem>
              <MenubarItem onClick={() => navigate('/grade-11')}>
                Grade 11
              </MenubarItem>
              <MenubarItem onClick={() => navigate('/grade-12')}>
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
              <MenubarItem onClick={() => navigate('/subject/mathematics')}>
                Mathematics
              </MenubarItem>
              <MenubarItem onClick={() => navigate('/subject/physics')}>
                Physics
              </MenubarItem>
              <MenubarItem onClick={() => navigate('/subject/chemistry')}>
                Chemistry
              </MenubarItem>
              <MenubarItem onClick={() => navigate('/subject/biology')}>
                Biology
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem onClick={() => navigate('/subject/history')}>
                History
              </MenubarItem>
              <MenubarItem onClick={() => navigate('/subject/geography')}>
                Geography
              </MenubarItem>
              <MenubarItem onClick={() => navigate('/subject/english')}>
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
