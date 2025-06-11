import { LeftButton } from "./leftButton";
import { RightButton } from "./rightButton";

export default function TravelPlanSection() {
  const detailArr = [
    {
      img: "/beach.png",
      title: `Paradise Beach, Bantayan Island`,
      location: "Rome, Italy",
      price: 550.16,
      star: "4.8",
    },
    {
      img: "/fish.png",
      title: "Ocean with full of Colors",
      location: "Maldives",
      price: 20.99,
      star: "4.5",
    },
    {
      img: "/mountain.png",
      title: "Mountain View, Above the cloud",
      location: "United Arab Emeries ",
      price: 150.99,
      star: "5.0",
    },
  ];
  return (
    <section className="w-full flex flex-col py-16 gap-16">
      <div className="flex flex-col xl:flex-row items-center text-center xl:text-start w-full gap-16 xl:gap-0">
        <div className="font-bold flex flex-col gap-4 grow">
          <p className="text-2xl text-pink-flamingo">Top Destination</p>
          <h3 className="text-3xl md:text-4xl xl:text-5xl">
            Explore top destination
          </h3>
        </div>
        <div className="flex gap-8 justify-between w-full md:w-fit font-bold">
          <LeftButton />
          <RightButton />
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 grid-rows-1 gap-8 ">
        {detailArr.map((item, index) => (
          <div
            key={index}
            className="w-fit flex flex-col shadow-xl rounded-4xl"
          >
            <img src={item.img} alt={item.title} />
            <div className="flex flex-col w-full gap-4 p-8 justify-between">
              <div className="flex flex-col-reverse xl:flex-row gap-4 xl:gap-0 font-bold text-2xl justify-between">
                <h6 className="w-full xl:w-min flex grow">{item.title}</h6>
                <p className="text-pink-flamingo shrink-0">${item.price}</p>
              </div>
              <p className="text-lg text-gray-500">{item.location}</p>
              <p className="flex text-2xl font-bold items-baseline text-orange-600 gap-2">
                {item.star}
                <span>
                  <img src="/star.svg" alt="star" />
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
