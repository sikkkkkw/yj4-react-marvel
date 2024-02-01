import Layout from "../components/Layout";
// import Button from "./Button";
import TitleImageBox from "../components/TitleImageBox";
export default function Comics() {
  return (
    <Layout>
      {/* 캐릭터 서브 페이지 이미지타이틀 */}
      <section className=" relative w-full h-[500px] object-center ">
        <img
          className=" w-full h-full object-cover flex justify-center  "
          src="https://cdn.marvel.com/u/prod/marvel/i/mg/b/d0/65b2b4bc56bd1.jpg"
          alt="comics_image"
        />
        {/* 필터처리 */}
        <div className="absolute top-0 left-0 w-full h-full bg-main-dark/70"></div>
        <div className="absolute top-1/4 left-1/4 text-white uppercase  p-6">
          <h3>'Immortal Thor'</h3>
          <h2 className=" text-3xl font-bold">
            Storm and Magneto's Friendship, Explained
          </h2>
          <TitleImageBox
            imgUrl="https://hips.hearstapps.com/hmg-prod/images/index-marvel2-6465218700ab4.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*"
            mainTitle="available now"
            subTitle="new on Marvel unlimited"
            description="Read these plus 30,000+ digital comics for $9.99 a month!"
            btnTxt="get marvel unlimited"
          />
        </div>
      </section>
    </Layout>
  );
}
