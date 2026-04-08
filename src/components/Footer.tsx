// src/components/Footer.tsx
import React from 'react';
import { Phone, Facebook, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-color-surface-subtle border-t-[8px] border-color-border-primary mt-12 relative overflow-hidden font-serif">
 

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo_goz_horizontal.ico" className="h-10 w-auto object-contain" />
            
          </div>
          <p className="text-desktop-caption-lg text-color-text-subtle">
            อาคารมหาจักรีสิรินธร จุฬาลงกรณ์มหาวิทยาลัย<br/>
            ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพฯ 10330
          </p>
          <div className="flex flex-col gap-3 text-desktop-caption-lg text-color-text-primary">
            <span className="flex items-center gap-2"><Phone size={16} /> 02-218-4861</span>
            <span className="flex items-center gap-2"><Facebook size={16} /> Arts Chulalongkorn University</span>
            <span className="flex items-center gap-2"><Globe size={16} /> www.arts.chula.ac.th</span>
            <span className="flex items-center gap-2"><Mail size={16} /> arts@chula.ac.th</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-desktop-caption-lg text-color-text-subtle">
          <h5 className="text-color-text-primary font-bold mb-2">เกี่ยวกับองค์กร</h5>
          <a href="#" className="hover:text-color-text-default">ประวัติความเป็นมา</a>
          <a href="#" className="hover:text-color-text-default">วิสัยทัศน์และพันธกิจ</a>
          <a href="#" className="hover:text-color-text-default">โครงสร้างองค์กร</a>
        </div>

        <div className="flex flex-col gap-3 text-desktop-caption-lg text-color-text-subtle">
          <h5 className="text-color-text-primary font-bold mb-2">บริการนิสิต</h5>
          <a href="#" className="hover:text-color-text-default">ทุนการศึกษา</a>
          <a href="#" className="hover:text-color-text-default">การลงทะเบียนเรียน</a>
          <a href="#" className="hover:text-color-text-default">ติดต่อสอบถาม</a>
        </div>

        <div className="flex flex-col gap-3 text-desktop-caption-lg text-color-text-subtle">
          <h5 className="text-color-text-primary font-bold mb-2">กิจกรรม</h5>
          <a href="#" className="hover:text-color-text-default">ปฏิทินกิจกรรม</a>
          <a href="#" className="hover:text-color-text-default">ข่าวสารประชาสัมพันธ์</a>
          <a href="#" className="hover:text-color-text-default">รวมภาพถ่าย</a>
        </div>
      </div>
      
      <div className="absolute -bottom-16 -right-16 w-[300px] h-[300px] bg-color-background-subtler rounded-radius-full blur-3xl opacity-50 pointer-events-none" />
    </footer>
  );
}