import "../styles/globals.css";
import { DataContextProvider } from "../Context/dataContext";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const variant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  return (
    <DataContextProvider>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={variant}
        transition={{ duration: 0.5 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </DataContextProvider>
  );
}

export default MyApp;
