import { useAwayListener } from "@/components/AwayListner";
import { ModalAtom } from "atoms/ModalAtom";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";

const ModalComp = ({ show, header, children }) => {
  const setShow = useSetRecoilState(ModalAtom);
  const ref = useRef(null);
  useAwayListener(ref);

  return (
    <div id="modal-wrapper" className={!show ? "d-none" : "d-flex"}>
      <AnimatePresence>
        {show && (
          <motion.div
            className="theme-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={ref}
          >
            <div className="theme-modal-header d-flex justify-content-between">
              <h3>{header}</h3>
              <span className="close c-hand" onClick={() => setShow(false)}>
                {" "}
                X{" "}
              </span>
            </div>
            <div className="theme-modal-body">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

ModalComp.propTypes = {
  show: PropTypes.bool,
  header: PropTypes.string,
  children: PropTypes.element,
};

export default ModalComp;
