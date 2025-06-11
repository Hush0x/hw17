import { LeftButton } from "./leftButton";
import { RightButton } from "./rightButton";

export default function SlideShowSection() {
  return (
    <section className="w-full pb-32 pt-16 z-10 relative">
      <div className="w-full hidden md:flex flex-row gap-14 items-center">
        <LeftButton />
        <div className="flex flex-col gap-14 items-center grow text-center md:w-min xl:w-max">
          <div className="flex flex-col gap-4 font-bold">
            <p className="tracking-widest text-base md:text-2xl text-pink-flamingo">
              TESTIMONIALS
            </p>
            <h3 className="text-3xl md:text-4xl xl:text-5xl">
              Trust our clients
            </h3>
          </div>
          <img src="/Ellipse.svg" alt="profile" />
          <div className="flex flex-col gap-8 items-center">
            <p className="font-bold text-2xl md:text-3xl text-gray-600">
              <span className="text-orange-500">Mark Smith</span> / Travel
              Enthusiast
            </p>
            <img src="/raking-stars.svg" alt="stars" />
          </div>
          <p className="text-gray-600 text-lg md:text-2xl font-medium">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots
            <span className="xl:block">
              in a piece of classical Latin literature from 45 BC.
            </span>
          </p>
          <div className="flex gap-6">
            <div className="size-6 bg-gray-300 rounded-full"></div>
            <div className="size-6 bg-pink-flamingo rounded-full"></div>
            <div className="size-6 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <RightButton />
      </div>
      <div className="flex flex-col md:hidden gap-8 items-center">
        <div className="flex flex-col gap-14 items-center text-center w-full">
          <div className="flex flex-col gap-4 font-bold">
            <p className="tracking-widest text-base text-pink-flamingo">
              TESTIMONIALS
            </p>
            <h3 className="text-3xl">Trust our clients</h3>
          </div>
          <img src="/Ellipse.svg" alt="profile" />
          <div className="flex flex-col gap-8 items-center">
            <p className="font-bold text-2xl text-gray-600">
              <span className="text-orange-500">Mark Smith</span> / Travel
              Enthusiast
            </p>
            <img src="/raking-stars.svg" alt="stars" />
          </div>
          <p className="text-gray-600 text-lg font-medium">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots
            <span className="block">
              in a piece of classical Latin literature from 45 BC.
            </span>
          </p>
          <div className="flex gap-6">
            <div className="size-6 bg-gray-300 rounded-full"></div>
            <div className="size-6 bg-pink-flamingo rounded-full"></div>
            <div className="size-6 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-8 justify-between w-full">
          <LeftButton />
          <RightButton />
        </div>
      </div>
    </section>
  );
}
