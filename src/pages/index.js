import HeaderComp from "@/components/HeaderComp";
import ModalComp from "@/components/Modal";
import PricingComp from "@/components/Pricing";
import FrontLayout from "@/layouts/FrontLayout";
import { ModalAtom } from "atoms/ModalAtom";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
// import "./index.scss";

const Home = (props) => {
  const modalActive = useRecoilValue(ModalAtom);
  return (
    <FrontLayout>
      <HeaderComp />
      <HomeWrapper id="home" className="container">
        <div className="banner">
          <div className="banner-wrapper">
            <div className="banner-wrapper-left">
              <div className="wrapper">
                <h1>Law reports at your fingertips</h1>
                <p>
                  Vestibulum gravida aenean ullamcorper eget lacus purus cras.
                  Habitant in sed pharetra mi pharetra. Metus cras sed imperdiet
                  id etiam eget. Lobortis tortor, vitae commodo ipsum ut
                  volutpat. Diam mauris maecenas velit a velit faucibus nulla
                  vel ridiculus.
                </p>
              </div>
            </div>
            <div className="banner-wrapper-right">
              <div className="wrapper">
                <Image
                  src="/images/banner-phone.png"
                  height="643"
                  width="625"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/login">
              <a className="btn btn-primary">Get started</a>
            </Link>
          </div>
        </div>

        <div className="explore mt-4">
          <h2 className="text-center">Explore our useful features</h2>

          <div className="grid">
            <div className="grid-item">
              <div className="icon my-3 text-center">
                <i className="fas fa-balance-scale fa-2x text-primary"></i>
              </div>
              <h6 className="">
                Feature 1 ectetur morbi orcid magna quis diam.{" "}
              </h6>
              <p className="thin">
                Condimentum nibh sit hendrerit aliquet interdum proin sodales.
                Consectetur morbi orci, id magna quis diam pellentesque nisl.
                Diam est non, ultrices donec orci, risus ut lorem enim. Non
                massa posuere orci et{" "}
              </p>
            </div>
            <div className="grid-item">
              <div className="icon my-3 text-center">
                <i className="fas fa-balance-scale fa-2x text-primary"></i>
              </div>
              <h6 className="">
                Feature 1 ectetur morbi orcid magna quis diam.{" "}
              </h6>
              <p className="thin">
                Condimentum nibh sit hendrerit aliquet interdum proin sodales.
                Consectetur morbi orci, id magna quis diam pellentesque nisl.
                Diam est non, ultrices donec orci, risus ut lorem enim. Non
                massa posuere orci et{" "}
              </p>
            </div>
            <div className="grid-item">
              <div className="icon my-3 text-center">
                <i className="fas fa-balance-scale fa-2x text-primary"></i>
              </div>
              <h6 className="">
                Feature 1 ectetur morbi orcid magna quis diam.{" "}
              </h6>
              <p className="thin">
                Condimentum nibh sit hendrerit aliquet interdum proin sodales.
                Consectetur morbi orci, id magna quis diam pellentesque nisl.
                Diam est non, ultrices donec orci, risus ut lorem enim. Non
                massa posuere orci et{" "}
              </p>
            </div>
            <div className="grid-item">
              <div className="icon my-3 text-center">
                <i className="fas fa-balance-scale fa-2x text-primary"></i>
              </div>
              <h6 className="">
                Feature 1 ectetur morbi orcid magna quis diam.{" "}
              </h6>
              <p className="thin">
                Condimentum nibh sit hendrerit aliquet interdum proin sodales.
                Consectetur morbi orci, id magna quis diam pellentesque nisl.
                Diam est non, ultrices donec orci, risus ut lorem enim. Non
                massa posuere orci et{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="mobile-showcase">
          <div className="mobile-showcase-wrapper d-md-flex align-items-center">
            <div className="mobile-showcase-wrapper-left ">
              <div className="wrapper">
                <h3>Law reports in the palm of your hands</h3>
                <p className="thin">
                  Condimentum nibh sit hendrerit aliquet interdum proin sodales.
                  Consectetur morbi orci, id magna quis diam pellentesque nisl.
                  Diam est non, ultrices donec orci, risus ut lorem enim. Non
                  massa posuere orci et Condimentum nibh sit hendrerit aliquet
                  interdum proin sodales. Consectetur morbi orci, id magna quis
                  diam pellentesque nisl. Diam est non, ultrices donec orci,
                  risus ut lorem enim. Non massa posuere orci et{" "}
                </p>
                <div className="btn-wrapper">
                  <div className="d-flex text-center">
                    <button className="btn ">
                      <Image
                        src="/images/android-store.svg"
                        width="320"
                        height="100"
                        className=""
                      />
                    </button>
                    <button className="btn">
                      <Image
                        src="/images/ios-store.svg"
                        width="320"
                        height="100"
                        className=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-showcase-wrapper-right">
              <Image src="/images/pic-1.png" width="510" height="615" />
            </div>
          </div>
        </div>

        <div className="about-ceo">
          <div className="about-ceo-wrapper d-md-flex align-items-center">
            <div className="about-ceo-wrapper-left ">
              <div className="wrapper ">
                <h3>We are taking lawyers into the future</h3>
                <p className="thin">
                  Condimentum nibh sit hendrerit aliquet interdum proin sodales.
                  Consectetur morbi orci, id magna quis diam pellentesque nisl.
                  Diam est non, ultrices donec orci, risus ut lorem enim. Non
                  massa posuere orci et Condimentum nibh sit hendrerit aliquet
                  interdum proin sodales
                </p>
                <div className="text-center text-md-right my-3">
                  <button className="btn btn-outline-primary">
                    Find out more
                  </button>
                </div>
              </div>
            </div>
            <div className="about-ceo-wrapper-right">
              <Image src="/images/pic-2.png" width="426" height="572" />
            </div>
          </div>
        </div>

        <div className="testimonial mb-5 ">
          <div className="testimonial-wrapper">
            <div className="testimonial-wrapper-display-pic">
              <Image src="/images/pic-3.png" width="566" height="466" />
            </div>

            <div className="testimonial-wrapper-twitter-card">
              <div className=" bg-dark px-3 py-1 text-light">
                <div className="wrapper">
                  <div className="text-right">
                    <i className="fab fa-twitter"></i>
                  </div>
                  <p className="text-content">
                    Consectetur eget vulputate egestas blandit. Integer egestas
                    eu cras mauris fermentum,{" "}
                  </p>
                  <small className="mb-3 d-block">Ejiro, Lagos, Nigeria</small>
                </div>
              </div>
              <div className="circle bg-primary rounded-circle "></div>
            </div>
          </div>
          <div className="text-center">
            <ul className="indicators">
              <li className="indicators-item"></li>
              <li className="indicators-item"></li>
              <li className="indicators-item"></li>
              <li className="indicators-item"></li>
            </ul>
          </div>
        </div>

        <PricingComp />
      </HomeWrapper>
      <ModalComp show={modalActive} header="Heading">
        <div className="container">
          <form>
            <div className="form-group">
              <label>Label</label>
              <input type="text" className="form-control" />
            </div>
          </form>
        </div>
      </ModalComp>
    </FrontLayout>
  );
};

Home.propTypes = {
  props: PropTypes.any,
};

const HomeWrapper = styled.div``;

export default Home;
