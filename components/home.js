import save from "../images/save.png";
import browse from "../images/browse.png";
import share from "../images/share.png";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Sidebar from "./sidebar";

export default function Home() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  const variant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const control = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    // else {
    //   control.start("hidden");
    // }
  }, [control, inView]);

  useEffect(() => {
    if (inView2) {
      control2.start("visible");
    }
    // else {
    //   control2.start("hidden");
    // }
  }, [control2, inView2]);

  useEffect(() => {
    if (inView3) {
      control3.start("visible");
    }
    // else {
    //   control3.start("hidden");
    // }
  }, [control3, inView3]);

  return (
    <div className="flex flex-col w-full items-center">
      <div>
        <motion.div
          ref={ref}
          variants={variant}
          initial="hidden"
          animate={control}
          className="p-5 flex mb-10  flex-col space-y-6 bg-dblue rounded-md items-center md:flex-row md:justify-around max-w-[500px] md:max-w-[900px] "
        >
          <div className="flex flex-col space-y-4 justify-center md:w-7/12 ">
            <p className="text-opink text-center text-xl font-bold md:text-2xl md:text-left">
              Save code Snippets
            </p>
            <p className="text-owhite text-center text-md md:text-xl md:text-left">
              Save your favourite and most used code snippets to save time in
              development
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <Image src={save} />
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          variants={variant}
          initial="hidden"
          animate={control2}
          className="p-5 flex mb-10  flex-col space-y-6 bg-dblue rounded-md items-center md:flex-row md:justify-around max-w-[500px] md:max-w-[900px] "
        >
          <div className="flex flex-col space-y-4 justify-center md:w-7/12 ">
            <p className="text-opink text-center text-xl font-bold md:text-2xl md:text-left">
              Browse code snippets
            </p>
            <p className="text-owhite text-center text-md md:text-xl md:text-left">
              Browse open source code snippets from other developers
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <Image src={browse} />
          </div>
        </motion.div>

        <motion.div
          ref={ref3}
          variants={variant}
          initial="hidden"
          animate={control3}
          className="p-5 flex mb-10  flex-col space-y-6 bg-dblue rounded-md items-center md:flex-row md:justify-around max-w-[500px] md:max-w-[900px] "
        >
          <div className="flex flex-col space-y-4 justify-center md:w-7/12 ">
            <p className="text-opink text-center text-xl font-bold md:text-2xl md:text-left">
              Easily share with team
            </p>
            <p className="text-owhite text-center text-md md:text-xl md:text-left">
              Easily share your code snippets with you team with a single url
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <Image src={share} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
