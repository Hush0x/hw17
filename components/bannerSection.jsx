export default function BannerSection() {
  const details = [
    {
      count: "500+",
      detail: "Holiday Package",
    },
    {
      count: "100",
      detail: "Luxury Hotel",
    },
    {
      count: "7",
      detail: "Premium Airlines",
    },
    {
      count: "2k+",
      detail: "Happy Customer",
    },
  ];
  return (
    <section className="w-full flex flex-col xl:flex-row py-16 items-center gap-16 xl:gap-0">
      <img
        src="/banner.svg"
        alt="banner"
        className="relative xl:-left-32 w-full xl:max-w-8/12"
      />
      <div className="flex flex-col gap-16 md:w-min">
        <div className="flex flex-col gap-8 w-full relative md:shrink-0 text-center xl:text-start">
          <div className="flex flex-col gap-4 font-bold shrink-0">
            <p className="text-pink-flamingo tracking-widest text-base md:text-2xl">
              TRAVEL POINT
            </p>
            <h3 className="text-3xl md:text-4xl xl:text-5xl leading-[1.2] md:whitespace-nowrap flex flex-col xl:flex-col">
              We helping you find
              <span className="md:block">your dream location</span>
            </h3>
          </div>
          <p className=" text-gray-400 text-base md:text-lg leading-9 font-normal">
            Contrary to popular belief, Lorem Ipsum is not
            <span className="xl:block">
              simply random text. It has roots in a piece of
            </span>
            {""} classical Latin literature from 45 BC.
          </p>
          <img
            src="/Frame 50.svg"
            alt="Frame 50"
            className="hidden xl:flex absolute -bottom-11/12 -right-32"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-8 w-full">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {details.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-8 border rounded-4xl border-gray-300 gap-4 items-center justify-center whitespace-nowrap"
              >
                <h4 className="font-bold text-4xl text-orange-600">
                  {item.count}
                </h4>
                <p className="text-lg">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
