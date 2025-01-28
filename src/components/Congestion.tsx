
const CongestionStats = () => {
  return (
    <dl className="mt-4 max-w-6xl mx-auto font-inter font-outfit grid grid-cols-1 gap-3 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3 px-4">
      <div className="flex rounded-xl flex-col bg-[#1d2d36] p-8">
        <dt className="text-lg font-medium leading-6 text-white">Hours Lost in Traffic</dt>
        <dd className="text-5xl font-semibold tracking-tight text-white">
          <span>119</span> <span>Billion</span>
        </dd>
      </div>
      <div className="flex flex-col rounded-xl bg-[#1d2d36] p-8">
        <dt className="text-lg font-medium leading-6 text-white">People Affected by Congestion</dt>
        <dd className="text-5xl font-semibold tracking-tight text-white">
          <span>55</span> <span>Million</span>
        </dd>
      </div>
      <div className="flex flex-col rounded-xl bg-[#1d2d36] p-8">
        <dt className="text-lg font-medium leading-6 text-white">Roads Overcrowded</dt>
        <dd className="text-5xl font-semibold tracking-tight text-white">
          <span>40</span><span>%</span>
        </dd>
      </div>
    </dl>
  );
};

export default CongestionStats;
