const MENUS = [
  {
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/c/a0/65b7d7ba90f6b/portrait_uncanny.jpg",
    title: "comics",
    descroption: "dwdqfalfkldfmdlfsmgdflkjgmjkldfgnffklhgfhngfhk",
  },
  {
    image:
      "https://dsi523du1o5iq.cloudfront.net/fit-in/904x0/production/article/967fe9bb5f/62d22f81e9_1659767360",
    title: "comics",
    descroption: "dwdqfalfkldfmdlfsmgdflkjgmjkldfgnffklhgfhngfhk",
  },
  {
    image:
      "https://dsi523du1o5iq.cloudfront.net/fit-in/904x0/production/article/967fe9bb5f/62d22f81e9_1659767360",
    title: "comics",
    descroption: "dwdqfalfkldfmdlfsmgdflkjgmjkldfgnffklhgfhngfhk",
  },
];

export default function ComicsComponent() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full py-16 flex flex-col items-center space-y-8">
        <h1 className="font-bold text-3xl uppercase">latest comics</h1>
        <div className="flex  space-x-4">
          {MENUS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-40 aspect-[9/16] space-y-4 "
            >
              <div className="w-full h-[70%]">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt="submenu_image"
                />
              </div>
              <div className="px-2">
                <h2>{item.title}</h2>
                <p className="text-sm text-gray-700">{item.descroption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
