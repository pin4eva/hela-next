import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ThemeButton from "../shared/ThemeButton";
import PropTypes from "prop-types";

const LoginComp = ({ onSwitch }) => {
  return (
    <Wrapper className="container">
      <div className="login">
        <div className="login-left">
          <div className="container">
            <div className="login-left-wrapper">
              <h4 className="text-center">HELA</h4>

              <div className="social-button my-5">
                <button className="s-btn">
                  <div className="social-button-icon">
                    <i className="fab fa-google fa-2x"></i>
                  </div>
                  <div className="social-button-text">Sign in with Google</div>
                </button>
              </div>

              <form>
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />

                <div className="text-center  mb-5">
                  <ThemeButton className="btn btn-primary">Login</ThemeButton>
                </div>
              </form>

              <p className="text-center">
                Don't have an account yet?{" "}
                <a className="c-hand text-bold " onClick={onSwitch}>
                  Sign Up
                </a>{" "}
              </p>
              <Link href="/">
                <a className="text-center">
                  <i className="fas fa-home "></i>{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="login-right">
          <div className="login-right-wrapper">
            <h4
              className="fs-2 mb-4 text-bold text-lead "
              style={{ lineHeight: "2rem" }}
            >
              Reports at the palm of your hands
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              congue purus eros hendrerit condimentum amet sed ut et. Nulla
              habitant.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
LoginComp.propTypes = {
  onSwitch: PropTypes.func,
};
export default LoginComp;
