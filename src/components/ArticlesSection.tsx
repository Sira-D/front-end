export default function ArticlesSection() {
  return (
    <section className="my-12">
      <h2 className="font-serif text-heading-24 font-bold text-grey-900 mb-6">บทความ</h2>

      {/* Article Card */}
      <div className="grid grid-cols-[180px_1fr] bg-base-white rounded-lg overflow-hidden border border-grey-100">

        {/* Image */}
        <div className="relative bg-grey-200 h-[120px] flex items-end p-3">
          <div className="absolute inset-0 bg-gradient-to-br from-grey-300 to-grey-500 flex items-center justify-center text-[11px] text-grey-700">
            Illustration
          </div>
          <span className="relative z-10 bg-black/35 text-white text-[10px] px-2 py-0.5 rounded">
            ข่าวบทความ
          </span>
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col justify-center gap-2">
          <span className="text-[11px] text-grey-600 bg-grey-50 rounded-full px-3 py-0.5 w-fit">
            หมวดหมู่
          </span>
          <p className="text-[13px] text-grey-700 leading-5 line-clamp-3">
            ชื่อบทความที่ยาวมากๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ
          </p>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 mt-8 text-[13px] text-grey-700">
        <button className="w-7 h-7 rounded-full border border-grey-200 bg-base-white flex items-center justify-center text-grey-600 hover:bg-grey-50 transition-colors">
          ←
        </button>
        <span className="font-bold">1</span>
        <span className="text-grey-400">2 …… ถ 10</span>
        <button className="w-7 h-7 rounded-full border border-grey-200 bg-base-white flex items-center justify-center text-grey-600 hover:bg-grey-50 transition-colors">
          →
        </button>
      </div>
    </section>
  );
}
