import { useRef } from "react";
import ProgramCardSlick from "./ProgramCardSlick";
import { programLists } from "../constants";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }: any) => (
  <button
    className="text-slate-50 bg-secondary hover:bg-blue-900 text-4xl p-1 rounded-full"
    onClick={onClick}
  >
    <HiChevronLeft />
  </button>
);

const NextArrow = ({ onClick }: any) => (
  <button
    className="text-slate-50 bg-secondary hover:bg-blue-900 text-4xl p-1 rounded-full"
    onClick={onClick}
  >
    <HiChevronRight />
  </button>
);

const ProgramSlick = () => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <></>,
    prevArrow: <></>,
    dots: false,
  };

  return (
    <section id="program-kami" className="w-full py-6 flex-center-center">
      <div className="w-full bg-gradient-custom lg:w-[80%] px-6 py-12 h-fit lg:rounded-3xl">
        <div className="flex flex-col md:flex-row justify-between">
          <span className="mt-2 lg:mt-0 px-4 text-2xl text-primary font-semibold flex-center-center">
            Program Online STUDISINI.id:
          </span>
          <span className="flex justify-end gap-4">
            <PrevArrow onClick={() => sliderRef?.current?.slickPrev()} />
            <NextArrow onClick={() => sliderRef?.current?.slickNext()} />
          </span>
        </div>

        <div className="w-full h-fit mt-6 overflow-hidden">
          <Slider {...sliderSettings} ref={sliderRef}>
            {programLists.map((list, index) => (
              <ProgramCardSlick key={index} list={list} />
            ))}
          </Slider>
        </div>

        <div className="mt-6 flex-center-center flex-col lg:flex-row gap-6">
          <p className="text-xl text-off-white text-center flex-center-center">
            Masih belum dapat kelas yang cocok? Coba kelas gratis, yuk!
          </p>
          <button className="bg-off-white hover:bg-blue-500 text-blue-500 hover:text-slate-50 sm:mt-0 py-2 px-6 rounded-xl font-medium text-lg">
            Coba Kelas Gratis
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSlick;
