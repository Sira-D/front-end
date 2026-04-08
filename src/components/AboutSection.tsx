export default function AboutSection() {
  return (
    <section className="my-12">
      <h2 className="font-serif text-heading-24 font-bold text-grey-900 mb-6">เกี่ยวกับกอศ.</h2>

      <div className="grid grid-cols-[200px_1fr] gap-8 items-start">

        {/* Image placeholder */}
        <div className="bg-grey-200 rounded-md h-[130px]" />

        {/* Info */}
        <div>
          <p className="text-[12px] font-bold text-grey-600 uppercase tracking-wide mb-4">ข้อมูล</p>
          <div className="flex flex-col gap-3">
            <div className="h-3 bg-grey-100 rounded w-[90%]" />
            <div className="h-3 bg-grey-100 rounded w-[75%]" />
            <div className="h-3 bg-grey-100 rounded w-[85%]" />
            <div className="h-3 bg-grey-100 rounded w-[60%]" />
          </div>
        </div>

      </div>
    </section>
  );
}
