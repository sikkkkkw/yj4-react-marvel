const MEUNS = [
  {
    image: "https://cdn.marvel.com/content/1x/017lok_ons_crd_03.jpg",
    title: "Loki",
  },
  {
    image: "https://cdn.marvel.com/content/1x/1078mob_ons_crd_01.jpg",
    title: "Agent Mobius",
  },
  {
    image: "https://cdn.marvel.com/content/1x/531esl_ons_crd_01.jpg",
    title: "Sylvie Laufeydottir",
  },
  {
    image: "https://cdn.marvel.com/content/1x/1081msm_ons_crd_02.jpg",
    title: "Miss Minutes",
  },
  {
    image: "https://cdn.marvel.com/content/1x/1080trr_ons_crd_01.jpg",
    title: "Ravonna Renslayer",
  },
  {
    image: "https://cdn.marvel.com/content/1x/546tva_ons_crd_01.jpg",
    title: "Time Variance Authority",
  },
];

export default function CharactersComponent() {
  return (
    <div className="w-full flex justify-center ">
      <div className="max-w-7xl w-full py-16 flex flex-col items-center space-y-8 ">
        <h1 className="font-bold text-3xl uppercase">component</h1>
        <div className="flex space-x-4 ">
          {MEUNS.map((item, index) => (
            <div
              style={{
                clipPath: "polygon(100% 0, 100% 87%, 82% 100%, 0 100%, 0 0)",
              }}
              className="w-full h-full flex flex-col bg-red-500"
            >
              <div key={index} className="h-[340px]  group cursor-pointer ">
                <div className="w-full h-[60%] overflow-hidden">
                  <img
                    className="w-full h-full object-cover duration-300 group-hover:scale-110"
                    src={item.image}
                    alt="image"
                  />
                </div>
                <div className=" relative w-full h-[40%] flex items-end ">
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                    <h2 className="font-semibold uppercase">{item?.title}</h2>
                  </div>
                  {/* 호버시 아래위로 작동하는 부분 */}
                  <div className="w-full h-[95%] bg-main-dark group-hover:h-0"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
