export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      items: ["About", "Career", "Mobile"],
    },
    {
      title: "Contact",
      items: ["Why Travlog?", "Partner with us", "FAQ’s", "Blog"],
    },
    {
      title: "Meet Us",
      items: [
        "+00 92 1234 56789",
        "info@travlog.com",
        "205. R Street, New York",
        "BD23200",
      ],
    },
  ];

  return (
    <footer className="flex flex-col xl:flex-row gap-16 py-24 items-center relative">
      <div className="flex flex-col gap-8 md:gap-16 w-full xl:w-1/2">
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 items-center text-2xl font-black w-fit">
            <img src="/Vector.svg" alt="logo" />
            <p>Travlog</p>
          </div>
          <p className="text-base md:text-2xl font-normal text-gray-500 leading-10 md:leading-12">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="flex gap-8">
          <img src="/facebook.svg" alt="facebook" />
          <img src="/twitter.svg" alt="twitter" />
          <img src="/instagram.svg" alt="instagram" />
        </div>
      </div>

      <div className="w-full xl:w-1/2 grid md:grid-cols-3 text-lg text-gray-500 font-normal gap-8">
        {footerSections.map((part, index) => (
          <div key={index} className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold text-black">{part.title}</h3>
            {part.items.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        ))}
      </div>
      <img
        src="/OBJECTS.svg"
        alt="OBJECTS"
        className="absolute -right-32 -top-1/3"
      />
    </footer>
  );
}
