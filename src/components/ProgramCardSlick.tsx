import { ProgramListItem } from "../constants";

interface ProgramCardProps {
  list: ProgramListItem;
}

const ProgramCardSlick = ({ list }: ProgramCardProps) => {
  return (
    <div
      className={`${list.color} w-[310px] h-[330px] rounded-3xl outline outline-4 outline-slate-100 overflow-clip select-none scroll-smooth`}
    >
      <div className="pl-4 pt-4">
        <div className="bg-blue-600 border-solid border-2 border-white w-fit py-2 px-6 rounded-md text-sm text-off-white font-medium">
          {list.discount}
        </div>
        <div className="h-[125px] flex relative overflow-clip py-2">
          <div className="w-[70%] mt-2 text-white text-lg font-medium leading-5 drop-shadow-2xl text-stroke z-[2]">
            {list.title}{" "}
            <div className="text-primary font-semibold">{list.content}</div>{" "}
            {list.duration}
          </div>
          <div className="w-[150px] h-fit object-cover absolute right-0">
            <img
              src={list.model}
              alt="model"
              draggable="false"
              className="select-none"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-50 w-full h-[50%] rounded-md p-4">
        <div className="text-slate-700 font-medium text-lg">Harga Paket</div>
        <span className="text-slate-500 line-through">{list.priceBefore}</span>
        <span className="ml-4 text-xl font-semibold text-blue-700">
          {list.priceAfter}
        </span>
        <div>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-off-white text-lg font-medium mt-2 p-2 rounded-lg">
            Ikuti Kelas
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCardSlick;
