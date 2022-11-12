import React from "react";
import Popular from "../Components/Popular";
import Veggie from "../Components/Veggie";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <Popular />
      <Veggie />
    </motion.div>
  );
}

export default Home;
