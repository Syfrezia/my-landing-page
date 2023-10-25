import MentorCard from "./MentorCard";
import { mentors, mentorSection } from "../constants";
import { BsPatchCheckFill } from "react-icons/bs";

const MentorList = () => {
  return (
    <section
      id="mentor-kami"
      className="w-full h-[100vh] md:h-[80vh] flex flex-col lg:flex-row mt-16 lg:mt-8 lg:px-16 xl:px-32 justify-center lg:items-center"
    >
      <div className="order-first lg:order-last px-6 lg:flex lg:flex-col lg:justify-center">
        <h2 className="text-primary text-3xl text-center lg:text-start font-bold">
          {mentorSection.title}
        </h2>
        <p className="mt-4 lg:mt-8 text-off-black">{mentorSection.desc}</p>
        <ul className="list-none mt-4">
          {mentorSection.points.map((point, index) => (
            <li
              key={index}
              className="w-full flex items-center gap-2 mt-2 lg:mt-8"
            >
              <span className="text-secondary text-xl">
                <BsPatchCheckFill />
              </span>
              <span className="leading-5 text-lg text-off-black">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-[50%] md:h-[60%] xl:h-[90%] flex-center-center lg:justify-start order-last lg:order-first md:mt-16">
        <div className="xl:w-[50vw] flex justify-center">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorList;
