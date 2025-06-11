export default function FeaturesSection() {
  const features = [
    {
      icon: "/location.svg",
      title: "We offer best services",
      description: "Lorem Ipsum is not simply random text",
      border: "",
    },
    {
      icon: "/schedule.svg",
      title: "Schedule your trip",
      description: "It has roots in a piece of classical",
      border: "border rounded-4xl border-gray-300",
    },
    {
      icon: "/coupon.svg",
      title: "Get discounted coupons",
      description: "Lorem Ipsum is not simply random text",
      border: "",
    },
  ];
  return (
    <section className="w-full flex flex-col-reverse xl:grid xl:grid-cols-2 py-16 gap-16 items-center">
      <div className="w-full flex flex-col gap-16">
        <div className="flex flex-col gap-8 text-center xl:text-start">
          <div className="flex flex-col gap-4 font-bold">
            <p className="text-base md:text-2xl text-pink-flamingo tracking-widest">
              KEY FEATURES
            </p>
            <h3 className="text-3xl md:text-4xl xl:text-5xl">
              We offer best services
            </h3>
          </div>
          <p className="text-base md:text-lg font-normal text-gray-400 leading-9">
            Contrary to popular belief, Lorem Ipsum is not simply random{" "}
            <span className="xl:block">
              text. It has roots in a piece of classical Latin literature
            </span>
            from 45 BC.
          </p>
        </div>
        <div className="w-full">
          {features.map((item, index) => (
            <div
              key={index}
              className={`p-8 flex flex-col md:flex-row gap-8 items-start md:items-center ${item.border}`}
            >
              <img src={item.icon} alt="image" />
              <div className="flex flex-col gap-2">
                <h6 className="font-bold text-2xl">{item.title}</h6>
                <p className="font-normal text-lg text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src="/BACKGROUND.svg" alt="image" />
    </section>
  );
}
