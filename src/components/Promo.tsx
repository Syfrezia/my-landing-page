import { femaleModelPromo } from "../assets";
import { motion } from "framer-motion";

const Promo = () => {
  return (
    <div className="w-full h-[500px] flex-center-center py-0 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full lg:w-[80%] h-full lg:h-[350px] flex flex-col lg:flex-row bg-container-promo rounded-2xl pt-6 lg:pt-0"
      >
        <div className="w-full lg:w-[60%] h-full flex-center-center flex-col px-6 py-6 lg:py-0">
          <p className="text-xl md:text-4xl text-center text-primary font-semibold leading-relaxed">
            Dapatkan potongan sampai 50% untuk 25 pendaftar pertama!
          </p>
          <button className="mt-6 lg:mt-12 py-4 px-6 bg-primary hover:bg-sky-700 text-white font-medium rounded-3xl">
            Daftar Sekarang
          </button>
        </div>
        <div className="w-full lg:w-[40%] h-full flex justify-center items-end overflow-clip">
          <div className="w-[200px] h-[180px] lg:w-[300px] lg:h-[270px] bg-transparent relative">
            <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-primary rounded-full"></div>
            <img
              src={femaleModelPromo}
              alt="Promo"
              className="absolute bottom-0 right-8 lg:right-10"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Promo;
