export default function ScrollBoxSection() {
  const boxDetails = [
    {
      img: "/destination.svg",
      title: "Best Tour Guide",
      description:
        "What looked like a small patch of purple grass, above five feet.",
      shadowed: "",
      border: "border border-gray-300",
      wrap: "xl:whitespace-nowrap",
      width: "w-4/12",
    },
    {
      img: "/booking.svg",
      title: "Easy Booking",
      description: "Square, was moving across the sand in their direction.",
      shadowed: "shadow-xl",
      border: "",
      wrap: "xl:whitespace-nowrap",
      width: "w-4/12",
    },
    {
      img: "/cloud.png",
      title: "Weather Forecast",
      description:
        "What looked like a small patch of purple grass, above five feet.",
      shadowed: "",
      border: "border border-gray-300",
      wrap: "",
      width: "xl:min-w-4/12",
    },
  ];
  return (
    <>
      <section className="flex flex-col xl:flex-row text-center xl:text-start items-center py-8 gap-16 xl:overflow-visible z-50 relative">
        <div className="font-bold md:w-max shrink-0 grow">
          <p className="text-2xl text-pink-flamingo">Services</p>
          <h3 className="text-3xl md:text-4xl xl:text-5xl leading-[1.2]">
            Our top value <span className="xl:block">categories for you</span>
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 xl:gap-5 xl:overflow-auto py-8 w-full ">
          {boxDetails.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-16 items-center justify-center p-16 text-center rounded-4xl bg-white ${item.border} ${item.shadowed} w-full md:w-1/3 ${item.width}`}
            >
              <img src={item.img} alt={item.img} className="size-16" />
              <h5 className={`font-bold text-3xl ${item.wrap}`}>
                {item.title}
              </h5>
              <p className="font-normal text-lg text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
