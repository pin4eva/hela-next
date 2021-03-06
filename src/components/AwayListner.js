import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useSetRecoilState } from "recoil";
import { ModalAtom } from "atoms/ModalAtom";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useAwayListener = (ref) => {
  const setModalActive = useSetRecoilState(ModalAtom);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        setModalActive(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

/**
 * Component that alerts if you click outside of it
 */
