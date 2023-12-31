import { maleModel1 } from "../assets";
import { heroTexts, alumni } from "../constants";
import { motion } from "framer-motion";

const Hero = () => (
  <section id="hero" className="relative h-[1000px] lg:h-[90vh]">
    <div className="sm:background-container-hero background-container-hero"></div>
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="absolute top-[5%] xl:top-[10%] flex flex-col lg:flex-row md:items-center w-full px-0 md:px-16 xl:px-32"
    >
      <div className="px-6 sm:px-0 sm:ps-0 flex-1">
        <h1 className="font-inter text-center lg:text-start text-5xl text-primary font-bold">
          {heroTexts.main}
        </h1>
        <p className="text-center lg:text-start text-primary text-lg text-primary font-medium mt-4">
          {heroTexts.desc}
        </p>
        <div className="mt-6 lg:mt-16 flex-center-center lg:items-start flex-col">
          <p className="font-semibold text-off-black text-center lg:text-left">
            Isi nomor WhatsApp untuk konsultasi dan dapatkan penawaran spesial!
          </p>
          <div className="bg-tertiary font-semibold h-[50px] w-[300px] md:w-[400px] flex items-center mt-2 px-4 rounded-lg">
            <span>+62</span>
            <input
              type="tel"
              className="bg-tertiary h-[30px] w-[230px] ml-2 px-2 outline-none"
            />
          </div>
          <button className="bg-secondary hover:bg-primary text-white h-[50px] w-[300px] md:w-[400px] font-semibold mt-2 py-2 px-6 rounded-lg">
            Coba Sekarang
          </button>
        </div>
      </div>

      <div className="flex-center-center w-full lg:w-[350px] lg:ms-16">
        <div className="flex-center-center flex-col object-cover lg:w-[350px] md:w-[300px] w-[200px] h-full mt-12 lg:mt-0">
          <img src={maleModel1} alt={alumni.name} />
          <div className="w-[350px] h-[100px] bg-primary text-tertiary flex-center-center flex-col rounded-lg">
            <p className="text-2xl font-inter font-semibold">{alumni.name}</p>
            <p>{alumni.desc}</p>
            <p>{alumni.uni}</p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
