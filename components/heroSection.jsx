export default function HeroSection() {
  return (
    <>
      <section className="flex pt-16 relative flex-col-reverse xl:flex-row items-center">
        <div className="w-fit flex flex-col gap-11 h-fit xl:my-32 items-center text-center xl:text-start">
          <div className="flex text-pink-flamingo font-bold gap-4 shadow-xl shadow-black/10 px-8 w-fit py-5 rounded-full">
            <p>Explore the world!</p>
            <img src="/bag.svg" alt="mail" />
          </div>
          <h2 className="font-bold text-4xl xl:text-6xl leading-[1.2]">
            Travel <span className="text-pink-flamingo">top destination</span>
            <br /> of the world
          </h2>
          <p className="font-normal text-base md:text-lg text-gray-500 whitespace-pre-line">
            We always make our customer happy by <br /> providing as many
            choices as possible
          </p>
          <div className="flex flex-col w-full md:flex-row text-sm font-bold gap-4">
            <button className="px-8 py-4 bg-purple-royal text-white rounded-full shadow-xl shadow-black/20">
              Get Started
            </button>
            <button className="flex px-8 py-5 gap-2 border border-gray-300 rounded-full justify-center">
              <img src="/play.svg" alt="" /> Watch Demo
            </button>
            <img
              src="/arrow.svg"
              alt="arrow"
              className="absolute -left-20 -bottom-12"
            />
          </div>
        </div>
        <img src="/Group 1.svg" alt="" className="w-full" />
      </section>
    </>
  );
}
