import React from 'react';
import { 
  Search, Menu, ChevronDown, ChevronRight, ArrowUp, 
  HelpCircle, User, Calendar, BookOpen, GraduationCap, 
  FileEdit, FileText, ThumbsUp, MapPin, Phone, Facebook, Mail, Globe 
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-color-background-default font-serif text-desktop-body-md text-grey-900">
      
      

      {/* ─── Main Content Container ──────────────────────────────────────── */}
      <main className="max-w-[1280px] mx-auto px-4 lg:px-8 py-8 flex flex-col gap-12 relative">
        
        {/* Floating Action Buttons */}
        <button className="fixed right-6 bottom-32 bg-pink-400 text-white p-3 rounded-full shadow-lg hover:bg-pink-500 z-40">
          <HelpCircle size={24} />
        </button>
        <button className="fixed right-6 bottom-16 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 z-40">
          <ArrowUp size={24} />
        </button>

        {/* ─── Hero Section ────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (Banner & Calendar) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-grey-200 w-full aspect-[4/3] rounded-radius-lg"></div>
            
            {/* Calendar Mockup */}
            <div className="border border-grey-200 rounded-radius-lg p-6 bg-base-white shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-desktop-heading-md font-bold text-grey-800">Mon, Aug 17</h3>
                <div className="flex gap-2">
                  <ChevronDown size={20} className="text-grey-500" />
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-desktop-caption-lg text-grey-500 mb-2">
                <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-desktop-body-md text-grey-800">
                <span className="text-grey-300">26</span><span className="text-grey-300">27</span><span className="text-grey-300">28</span><span className="text-grey-300">29</span><span className="text-grey-300">30</span><span className="text-grey-300">31</span><span>1</span>
                <span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                <span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
                <span>16</span>
                <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto shadow-sm">17</span>
                <span>18</span><span>19</span><span>20</span><span>21</span><span>22</span>
                <span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span>
                <span>30</span><span>31</span><span className="text-grey-300">1</span><span className="text-grey-300">2</span><span className="text-grey-300">3</span><span className="text-grey-300">4</span><span className="text-grey-300">5</span>
              </div>
            </div>
          </div>

          {/* Right Column (Quick Access) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-gradient-to-r from-pink-200 to-pink-100 rounded-radius-md py-3 px-6 shadow-sm">
              <h2 className="font-bold text-desktop-heading-4xl font-bold text-black">Quick Access</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 h-full">
              {[
                { icon: BookOpen, label: 'Tracking หน่วยกิต' },
                { icon: User, label: 'ค้นหาอาจารย์' },
                { icon: GraduationCap, label: 'บริการนิสิต' },
                { icon: FileEdit, label: 'เอกสาร/ฟอร์ม' },
                { icon: FileText, label: 'หลักสูตร' },
                { icon: ThumbsUp, label: 'รีวิวฝึกงาน' },
              ].map((item, i) => (
                <button key={i} className="flex flex-col items-center justify-center gap-3 p-6 border-2 border-pink-200 rounded-radius-2xl 
                bg-base-white hover:bg-pink-50 hover:border-pink-400 transition-all text-pink-500 group">
                  <item.icon size={40} className="group-hover:scale-110 transition-transform" />
                  <span className="text-desktop-heading-md font-bold">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Articles Section ────────────────────────────────────────────── */}
        <section className="flex flex-col gap-6">
          <div className="bg-pink-300 text-white rounded-radius-md py-3 px-6 shadow-sm">
            <h2 className="text-desktop-heading-lg font-bold">บทความจากคณะอักษรศาสตร์</h2>
          </div>
          
          <div className="relative w-full h-[300px] md:h-[400px] rounded-radius-xl overflow-hidden bg-blue-900 group cursor-pointer">
            {/* Placeholder Background Graphic */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-80" />
            <div className="absolute bottom-8 left-8 flex flex-col gap-4 text-white">
              <h3 className="text-desktop-heading-3xl font-bold">ชื่อบทความ 1</h3>
              <div className="flex gap-2">
                <span className="bg-pink-400 text-white px-4 py-1 rounded-radius-full text-desktop-caption-lg">หมวดหมู่</span>
                <span className="bg-pink-400 text-white px-4 py-1 rounded-radius-full text-desktop-caption-lg">แท็กบทความ</span>
              </div>
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center items-center gap-2 text-grey-400">
             <ChevronDown className="rotate-90 cursor-pointer" size={20} />
             <span className="text-pink-500 font-bold">1</span>
             <span>/</span>
             <span>5</span>
             <ChevronRight className="cursor-pointer" size={20} />
          </div>

          <button className="mx-auto mt-4 bg-pink-400 hover:bg-pink-500 text-white px-12 py-3 rounded-radius-md text-desktop-heading-md font-bold transition-colors">
            ดูบทความทั้งหมด
          </button>
        </section>

        {/* ─── Clubs Section ───────────────────────────────────────────────── */}
        <section className="flex flex-col gap-6">
          <div className="bg-pink-300 text-white rounded-radius-md py-3 px-6 shadow-sm">
            <h2 className="text-desktop-heading-lg font-bold">ชมรมในคณะอักษรศาสตร์</h2>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory hide-scrollbar">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="min-w-[280px] md:min-w-[320px] rounded-radius-xl overflow-hidden bg-base-white border border-grey-200 shadow-sm snap-start shrink-0">
                  <div className="h-[200px] bg-grey-300 relative">
                     {/* Image Placeholder */}
                     <div className="absolute inset-0 bg-gradient-to-br from-grey-400 to-grey-600" />
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h4 className="text-desktop-heading-md font-bold text-grey-900">Heading</h4>
                    <p className="text-desktop-body-md text-grey-600">Subheading</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Arrow */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-pink-300 text-white p-2 rounded-full shadow-md hidden md:block">
              <ChevronRight size={24} />
            </button>
          </div>

          <button className="mx-auto mt-4 bg-pink-400 hover:bg-pink-500 text-white px-12 py-3 rounded-radius-md text-desktop-heading-md font-bold transition-colors">
            ดูชมรมทั้งหมด
          </button>
        </section>

        {/* ─── About Section ───────────────────────────────────────────────── */}
        <section className="flex flex-col gap-6">
          <div className="bg-pink-300 text-white rounded-radius-md py-3 px-6 shadow-sm">
            <h2 className="text-desktop-heading-lg font-bold">เกี่ยวกับ ก.อศ.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start py-8">
            <div className="md:col-span-4 flex justify-center">
                {/* Logo */}
                <div className="flex items-center gap-3">
                  <img 
                    src="/logo_goz_vertical.ico" 
                    alt="คณะอักษรศาสตร์ Logo" 
                    className="h-15 w-auto object-contain" 
                  /> 
                </div>
            </div>
            
            <div className="md:col-span-8 flex flex-col gap-8">
              <div>
                <h3 className="text-desktop-heading-3xl font-bold text-black mb-4">คณะกรรมการนิสิตอักษรศาสตร์ (ก.อศ.)</h3>
                <p className="text-desktop-body-lg text-grey-700 leading-relaxed">
                  เป็นองค์กรนักศึกษาที่จัดตั้งขึ้นเพื่อส่งเสริมและสนับสนุนกิจกรรมของนิสิตคณะอักษรศาสตร์ 
                  ให้เกิดการพัฒนาทั้งทางด้านวิชาการ ศิลปวัฒนธรรม และกีฬา
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {['วิสัยทัศน์', 'นโยบาย', 'ดาวน์โหลด', 'ระเบียบการเบิกจ่าย ก.อศ.'].map((item, i) => (
                  <button key={i} className="flex justify-between items-center py-4 border-b border-grey-200 text-desktop-heading-md font-bold text-grey-800 hover:text-pink-500 transition-colors">
                    {item}
                    <ChevronDown size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}

  