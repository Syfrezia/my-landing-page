import { Mentor } from "../constants";
import { FaStar } from "react-icons/fa";

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard = ({ mentor }: MentorCardProps) => {
  return (
    <div className="flex justify-start items-center flex-col">
      <div className="w-[30vw] lg:w-[15vw] h-fit object-cover border-b-4 border-sky-700 rounded-lg">
        <img src={mentor.img} alt="mentor" />
      </div>
      <div className="w-[30vw] lg:w-[15vw]">
        <div className="mt-2 md:text-2xl text-center text-primary font-semibold">
          {mentor.name}
        </div>
        <div className="text-xs md:text-lg text-center h-fit">
          {mentor.alumni}
        </div>
        <div className="mt-1 text-xs md:text-lg text-center text-secondary">{mentor.major}</div>
        <div className="mt-1 md:text-xl text-center flex-center-center gap-2">
          <FaStar className="text-yellow-400" />
          {mentor.rating}
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
