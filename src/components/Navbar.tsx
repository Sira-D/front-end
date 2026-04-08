// src/components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import { Search, Menu, ChevronDown, User } from 'lucide-react';

export default function Navbar() {
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-color-surface-subtle border-grey-100 border-color-border-subtle 
    shadow-lg h-[80px] flex items-center px-4 lg:px-8">
      <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between">
        
        {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo_goz_horizontal.ico" 
              alt="คณะอักษรศาสตร์ Logo" 
              className="h-10 w-auto object-contain" 
            /> 
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-spacing-nav-s text-color-text-subtle">
          <a href="#" className="hover:text-color-text-primary font-bold">หน้าแรก</a>
          <a href="#" className="hover:text-color-text-primary flex items-center gap-1">เกี่ยวกับ <ChevronDown size={16} /></a>
          <a href="#" className="hover:text-color-text-primary">ข้อมูลติดต่อ</a>
          <a href="#" className="hover:text-color-text-primary flex items-center gap-1">บุคลากร <ChevronDown size={16} /></a>
          <a href="#" className="hover:text-color-text-primary">หลักสูตร</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input type="text" placeholder="ค้นหา..." className="pl-4 pr-10 py-2 border border-color-border-default rounded-radius-full 
            focus:outline-none focus:border-color-border-primary text-desktop-caption-lg text-color-w-[200px] bg-color-background-default" />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-color-text-subtle" size={18} />
          </div>
          <div className="relative hidden md:block">
            <button 
              onClick={() => setShowLoginMenu(!showLoginMenu)}
              className="flex items-center gap-3 border border-color-border-primary text-color-text-primary px-5 py-2 rounded-radius-full hover:bg-color-background-subtler transition-all shadow-sm group"
              >
            <User size={18} className="group-hover:scale-110 transition-transform" />
            <span className="font-bold">เข้าสู่ระบบ</span>
              {/* The CU Logo inside the main button */}
              <img 
                src="/CU logo.ico" 
                alt="CU Logo" 
                className="h-5 w-auto object-contain" 
              />
            </button>
            
            {showLoginMenu && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-color-surface-subtle border border-color-border-subtle rounded-radius-md shadow-lg p-4 z-50 animate-in fade-in slide-in-from-top-2">
        <button className="w-full bg-base-white border border-color-border-subtle text-color-text-default px-4 py-3 rounded-radius-md hover:bg-color-surface-subtler font-bold flex items-center justify-center gap-3 shadow-sm transition-colors">
          {/* The Text */}
          <span>เข้าสู่ระบบ</span>
      
          {/* The CU Logo */}
          <img 
            src="/CU logo.ico" 
            alt="CU Logo" 
            className="h-5 w-auto object-contain" 
          />
        </button>
      </div>
    )}
          </div>

          <button className="lg:hidden text-color-text-default">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}