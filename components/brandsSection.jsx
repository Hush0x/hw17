export default function BrandsSection() {
  return (
    <>
      <section className="flex gap-8 flex-wrap justify-center xl:justify-between py-16 relative">
        <img src="/tripad.png" alt="tripad" />
        <img src="/expedia.png" alt="expedia" />
        <img src="/booking.png" alt="booking" />
        <img src="/airbnb.png" alt="airbnb" />
        <img src="/Rbitz.png" alt="Rbitz" />
        <div className="hidden md:flex bg-yellow-500 size-96 absolute blur-[200px] rounded-full -top-10 -right-7/12 xl:-right-5/12 z-0"></div>
      </section>
    </>
  );
}
