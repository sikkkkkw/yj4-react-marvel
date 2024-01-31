import Layout from "../components/Layout";
import TitleRotate from "../components/TitleRotate";
import { apiGetCharacters } from "../api";
import { useQuery } from "react-query";
import { ScaleLoader } from "react-spinners";

export default function Characters() {
  let characters;
  const { data, isLoding } = useQuery(
    ["getCharacters", { limit: 36 }],
    apiGetCharacters
  );
  if (!isLoding) {
    characters = data?.data.results;
  }
  console.log(characters);
  return (
    <Layout>
      {/* 캐릭터 서브페이지 이미지타이틀 */}
      <section className="relative w-full h-[400px]">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.mos.cms.futurecdn.net/rZUHqzbf6DGLby64JFWVVo.jpg"
          alt="characters_image"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900 via-gray-900 via-30% to-transparent"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-white text-center">
          <h1 className="text-4xl font-semibold">MARVEL CHARACTERS</h1>
          <p>
            Get hooked on a hearty helping of heroes and villains from the
            humble House of Ideas!
          </p>
        </div>
      </section>
      {/* 리스트 */}
      <section className="w-full flex justify-center py-4">
        <div className="max-w-7xl w-full">
          {/* 제목 */}
          <TitleRotate text="featured characters" />
          {isLoding ? (
            <div className="w-full flex justify-center py-16">
              <ScaleLoader color="red" />
            </div>
          ) : (
            <div className="grid grid-cols-6 gap-4">
              {characters?.map((item, index) => (
                <div key={index} className="h-[340px]  group cursor-pointer ">
                  <div
                    style={{
                      clipPath:
                        "polygon(100% 0, 100% 87%, 82% 100%, 0 100%, 0 0)",
                    }}
                    className="w-full h-full flex flex-col bg-red-500"
                  >
                    {/* 이미지 */}
                    <div className="w-full h-[60%] overflow-hidden">
                      <img
                        className="w-full h-full  object-cover duration-300 group-hover:scale-110"
                        src={`${item.thumbnail?.path}.${item.thumbnail.extension}`}
                        alt="character_image"
                      />
                    </div>
                    {/* 타이틀 */}
                    <div className=" relative w-full h-[40%] flex items-end ">
                      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                        <h2 className="font-semibold">{item?.name}</h2>
                        <p className="text-sm text-gray-300">
                          {item?.description?.substr(0, 10)}
                        </p>
                      </div>
                      {/* 호버시 아래위로 작동하는 부분 */}
                      <div className="w-full h-[95%] bg-main-dark group-hover:h-0"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
