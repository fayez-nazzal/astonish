import { motion } from "framer-motion";
import React from "react";
import { ISlideProps } from "./index.types";
import {
  generateCustomTransition,
  getWrongParentErrorMessage,
} from "./index.utils";

const Slide = ({
  children,
  _childOfAstonish,
  transition = generateCustomTransition("spring", 0.32, {
    x: { from: "105%", to: 0 },
  }),
  _disableTransition,
  _disableInitialTransition,
}: ISlideProps) => {
  if (!_childOfAstonish) {
    throw Error(getWrongParentErrorMessage());
  }

  return (
    <motion.div
      {...(_disableTransition ? {} : transition)}
      {...(!_disableInitialTransition ? {} : { initial: false })}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "gray",
      }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export default Slide;