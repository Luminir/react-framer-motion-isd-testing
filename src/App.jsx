import Header from "./components/HeaderNav";
import Banner from "./components/RunningText";
import Loader from "./components/LoadingScreen";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import './App.css'
import image2 from './assets/images/image-2.png'
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className='transition-image final'>
                <motion.img
                  transition={{ ease: [0.42, 0, 0.58, 1], duration: 1.6 }}
                  src={image2}
                  layoutId='main-image-1'
                />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}

export default App;
