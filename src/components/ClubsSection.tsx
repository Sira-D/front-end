const clubs = [
  { name: 'ชื่อชมรม', type: 'ประเภทชมรม' },
  { name: 'ชื่อชมรม', type: 'ประเภทชมรม' },
  { name: 'ชื่อชมรม', type: 'ประเภทชมรม' },
];

export default function ClubsSection() {
  return (
    <section className="my-12">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-heading-24 font-bold text-grey-900">club</h2>
        <div className="flex gap-3 text-[18px] text-grey-400">
          <button className="hover:text-grey-700 transition-colors cursor-pointer">⊞</button>
          <button className="hover:text-grey-700 transition-colors cursor-pointer">☰</button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4">
        {clubs.map((club, i) => (
          <div
            key={i}
            className="bg-base-white rounded-lg border border-grey-100 overflow-hidden hover:border-grey-200 transition-colors cursor-pointer"
          >
            <div className="bg-red-200 h-[110px]" />
            <div className="p-4">
              <p className="text-[13px] font-bold text-grey-800 mb-1">{club.name}</p>
              <p className="text-[11px] text-grey-500">{club.type}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between mt-6">
        <button className="w-7 h-7 rounded-full border border-grey-200 bg-base-white flex items-center justify-center text-grey-600 hover:bg-grey-50 transition-colors">
          ←
        </button>
        <button className="bg-grey-100 border border-grey-200 rounded-full px-8 py-2 text-[13px] text-grey-700 hover:bg-grey-200 transition-colors">
          see all
        </button>
        <button className="w-7 h-7 rounded-full border border-grey-200 bg-base-white flex items-center justify-center text-grey-600 hover:bg-grey-50 transition-colors">
          →
        </button>
      </div>

    </section>
  );
}
