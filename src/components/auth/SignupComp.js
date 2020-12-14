import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ThemeButton from "../shared/ThemeButton";
import PropTypes from "prop-types";

const SignupComp = ({ onSwitch }) => {
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
                  <div className="social-button-text">Sign up with Google</div>
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
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                />
                <div className="form-group">
                  <select name="accountType" className="form-control">
                    <option value="">Account Type</option>
                    <option>Lawyer</option>
                    <option>Student</option>
                    <option>Regular</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="radio" name="" />{" "}
                  <label>I Agree to the terms and conditions</label>
                </div>

                <div className="text-center mt-5 mb-5">
                  <ThemeButton className="btn btn-primary">Login</ThemeButton>
                </div>
              </form>

              <p className="text-center">
                Already registered?{" "}
                <a
                  className="c-hand hover-primary text-bold "
                  onClick={onSwitch}
                >
                  Login
                </a>
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

SignupComp.propTypes = {
  onSwitch: PropTypes.func,
};

const Wrapper = styled.div``;

export default SignupComp;
