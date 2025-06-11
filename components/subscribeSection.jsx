export default function SubscribeSection() {
  return (
    <>
      <section className="w-full relative">
        <img
          src="/Graphic_Elements.svg"
          alt="element"
          className="hidden md:flex absolute -top-1/12 -left-10"
        />
        <div className="py-16 md:py-32 px-8 md:px-16 rounded-4xl bg-yellow-soft flex flex-col gap-16">
          <div className="flex flex-col gap-8 font-bold text-center w-full">
            <p className="tracking-widest text-pink-flamingo text-base md:text-2xl">
              SUBSCRIBE TO OUR NEWSLETTER
            </p>
            <h2 className="leading-12 text-3xl md:text-4xl xl:text-6xl">
              Prepare yourself & let’s explore the
              <span className="xl:block">beauty of the world</span>
            </h2>
          </div>
          <form className="flex flex-col md:flex-row gap-16">
            <div className="w-full h-full flex items-center gap-4 py-6 px-8 md:p-8 bg-white rounded-2xl md:rounded-3xl">
              <img src="/message.svg" alt="message" className="" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="flex grow"
              />
            </div>
            <button className="py-6 md:py-8 px-16 rounded-2xl md:rounded-4xl bg-purple-royal font-bold md:text-2xl text-white">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
