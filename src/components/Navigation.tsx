
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { BookOpen, GraduationCap, MessageCircle, Download, Home } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    try {
      navigate(path);
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback to window.location if React Router fails
      window.location.href = path;
    }
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <NavigationMenu.Root className="relative z-10 flex max-w-max flex-1 items-center justify-center">
          <NavigationMenu.List className="group flex flex-1 list-none items-center justify-center space-x-1">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-4 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7 data-[state=open]:bg-violet3">
                <Home className="w-4 h-4 mr-2" />
                Home
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                <div className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                  <button 
                    onClick={() => handleNavigation('/')}
                    className="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-gradient-to-br hover:from-violet9 hover:to-purple9 hover:text-white focus:bg-gradient-to-br focus:from-violet9 focus:to-purple9 focus:text-white block select-none rounded-[6px] p-[12px] text-[15px] leading-none no-underline outline-none transition-colors"
                  >
                    Dashboard
                  </button>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-4 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7 data-[state=open]:bg-violet3">
                <GraduationCap className="w-4 h-4 mr-2" />
                Grade Levels
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                <div className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                  <button onClick={() => handleNavigation('/grade-10')} className="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-gradient-to-br hover:from-violet9 hover:to-purple9 hover:text-white focus:bg-gradient-to-br focus:from-violet9 focus:to-purple9 focus:text-white block select-none rounded-[6px] p-[12px] text-[15px] leading-none no-underline outline-none transition-colors">
                    Grade 10
                  </button>
                  <button onClick={() => handleNavigation('/grade-11')} className="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-gradient-to-br hover:from-violet9 hover:to-purple9 hover:text-white focus:bg-gradient-to-br focus:from-violet9 focus:to-purple9 focus:text-white block select-none rounded-[6px] p-[12px] text-[15px] leading-none no-underline outline-none transition-colors">
                    Grade 11
                  </button>
                  <button onClick={() => handleNavigation('/grade-12')} className="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-gradient-to-br hover:from-violet9 hover:to-purple9 hover:text-white focus:bg-gradient-to-br focus:from-violet9 focus:to-purple9 focus:text-white block select-none rounded-[6px] p-[12px] text-[15px] leading-none no-underline outline-none transition-colors">
                    Grade 12
                  </button>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-4 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7 data-[state=open]:bg-violet3">
                <BookOpen className="w-4 h-4 mr-2" />
                Subjects
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                <div className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-4">
                  <button onClick={() => handleNavigation('/subject/mathematics')} className="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-gradient-to-br hover:from-violet9 hover:to-purple9 hover:text-white focus:bg-gradient-to-br focus:from-violet9 focus:to-purple9 focus:text-white block select-none rounded-[6px] p-[12px] text-[15px] leading-none no-underline outline-none transition-colors">
                    Mathematics
                  </button>
                  <button onClick={() => handleNavigation('/subject/physics')} className="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-gradient-to-br hover:from-violet9 hover:to-purple9 hover:text-white focus:bg-gradient-to-br focus:from-violet9 focus:to-purple9 focus:text-white block select-none rounded-[6px] p-[12px] text-[15px] leading-none no-underline outline-none transition-colors">
                    Physics
                  </button>
                  <button onClick={() => handleNavigation('/subject/chemistry')} className="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-gradient-to-br hover:from-violet9 hover:to-purple9 hover:text-white focus:bg-gradient-to-br focus:from-violet9 focus:to-purple9 focus:text-white block select-none rounded-[6px] p-[12px] text-[15px] leading-none no-underline outline-none transition-colors">
                    Chemistry
                  </button>
                  <button onClick={() => handleNavigation('/subject/biology')} className="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-gradient-to-br hover:from-violet9 hover:to-purple9 hover:text-white focus:bg-gradient-to-br focus:from-violet9 focus:to-purple9 focus:text-white block select-none rounded-[6px] p-[12px] text-[15px] leading-none no-underline outline-none transition-colors">
                    Biology
                  </button>
                  <button onClick={() => handleNavigation('/subject/history')} className="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-gradient-to-br hover:from-violet9 hover:to-purple9 hover:text-white focus:bg-gradient-to-br focus:from-violet9 focus:to-purple9 focus:text-white block select-none rounded-[6px] p-[12px] text-[15px] leading-none no-underline outline-none transition-colors">
                    History
                  </button>
                  <button onClick={() => handleNavigation('/subject/geography')} className="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-gradient-to-br hover:from-violet9 hover:to-purple9 hover:text-white focus:bg-gradient-to-br focus:from-violet9 focus:to-purple9 focus:text-white block select-none rounded-[6px] p-[12px] text-[15px] leading-none no-underline outline-none transition-colors">
                    Geography
                  </button>
                  <button onClick={() => handleNavigation('/subject/english')} className="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-gradient-to-br hover:from-violet9 hover:to-purple9 hover:text-white focus:bg-gradient-to-br focus:from-violet9 focus:to-purple9 focus:text-white block select-none rounded-[6px] p-[12px] text-[15px] leading-none no-underline outline-none transition-colors">
                    English
                  </button>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-4 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                href="#"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                AI Assistant
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-4 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                href="#"
              >
                <Download className="w-4 h-4 mr-2" />
                Features
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
              <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white border-l border-t border-gray-200" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
            <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)] border border-gray-200 shadow-lg" />
          </div>
        </NavigationMenu.Root>
      </div>
    </div>
  );
};

export default Navigation;
