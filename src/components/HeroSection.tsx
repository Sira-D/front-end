export default function HeroSection() {
  return (
    <section className="my-6">
      <div className="grid grid-cols-2 gap-4 items-start">

        {/* Left: Banner + Calendar */}
        <div>
          {/* Banner */}
          <div className="bg-grey-200 rounded-lg h-40 flex items-center justify-center text-[20px] font-bold text-grey-700 font-serif tracking-wide">
            Banner
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-3 justify-center">
            <div className="w-2 h-2 rounded-full bg-grey-700" />
            <div className="w-2 h-2 rounded-full bg-grey-300" />
            <div className="w-2 h-2 rounded-full bg-grey-300" />
          </div>

          {/* Calendar */}
          <div className="bg-grey-100 rounded-lg h-[100px] flex items-center justify-center text-[14px] text-grey-600 mt-6">
            calendar
          </div>
        </div>

        {/* Right: Quick Access */}
        <div>
          <p className="text-[14px] font-bold text-grey-800 mb-3">Quick Access</p>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-grey-100 rounded-md h-[52px] hover:bg-grey-200 transition-colors cursor-pointer"
              />
            ))}
          </div>

          {/* Help button */}
          <div className="flex justify-end mt-4">
            <button className="w-8 h-8 rounded-full border border-grey-300 bg-base-white flex items-center justify-center text-[13px] text-grey-600 hover:bg-grey-50 transition-colors">
              ?
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
