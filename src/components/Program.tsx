import { useRef, useState, MouseEvent } from "react";
import ProgramCard from "./ProgramCard";
import { programLists } from "../constants";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";

const Program = () => {
  const screenLG = useMediaQuery({ minWidth: "1024px" });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const cardWidth = screenLG ? 375 : 334;

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scroll = (direction: "prev" | "next") => {
    if (containerRef.current) {
      const currentScroll = containerRef.current.scrollLeft;
      const scrollAmount = direction === "prev" ? -cardWidth : cardWidth;
      const newScroll = currentScroll + scrollAmount;
      containerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="program-kami"
      className="w-full h-fit lg:mt-16 mt-6 flex-center-center drop-shadow-lg"
    >
      <div className="bg-gradient-custom w-full lg:w-[80%] h-fit lg:h-[750px] lg:px-6 py-12 lg:rounded-3xl flex flex-col justify-between">
        <div>
          <div className="flex flex-col md:flex-row justify-between px-6">
            <span className="mt-2 lg:mt-0 md:px-4 text-2xl text-primary font-semibold flex-center-center">
              Program Online STUDISINI.id:
            </span>
            <span className="mt-6 sm:mt-0 flex justify-center sm:justify-end gap-4">
              <button
                className="text-slate-50 bg-secondary hover:bg-blue-900 text-4xl p-1 rounded-full"
                onClick={() => scroll("prev")}
              >
                <HiChevronLeft />
              </button>
              <button
                className="text-slate-50 bg-secondary hover:bg-blue-900 text-4xl p-1 rounded-full"
                onClick={() => scroll("next")}
              >
                <HiChevronRight />
              </button>
            </span>
          </div>

          <div
            ref={containerRef}
            className="w-full mt-6 md:px-4 py-6 overflow-x-scroll snap-x scroll-draggable"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="w-fit flex gap-6 lg:gap-16 px-6 lg:px-9">
              {programLists.map((list, index) => (
                <ProgramCard key={index} list={list} />
              ))}
            </div>
          </div>
        </div>

        <div className="h-[200px] lg:h-[130px] flex-center-center flex-col lg:flex-row gap-6 px-6">
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

export default Program;
