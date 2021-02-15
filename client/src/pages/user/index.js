import React from "react";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";
import { Icon } from "rsuite";
import FrontLayout from "@/layouts/FrontLayout";
import HeaderComp from "@/components/HeaderComp";

const UserPage = () => {
  return (
    <FrontLayout title="User">
      <HeaderComp />

      <Wrapper>
        <div className="">
          <div className="inner-top">
            <div className="user-image mr-3">
              <img className="user-image-px" src="/images/pic-2.png" alt="" />
            </div>
            <div className="profile-desc ">
              <div className="wrapper">
                <h6>Peter Russel</h6>
                <small className="d-block">
                  Regional Manager, XYZ Chambers, Egbeda, Lagos
                </small>
                <small className="d-block">Member since 1960</small>

                <p className="d-flex align-items-center">
                  Verified <GoVerified className="ml-3 text-success" />
                </p>
              </div>
            </div>
          </div>

          <div className="bio">
            <h6 className="my-4">About</h6>

            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              odit numquam doloremque optio ratione maxime facilis, enim est
              laboriosam itaque ad in id animi omnis ipsa tenetur dolores a.
              Explicabo consectetur nesciunt distinctio, sed ut quisquam
              perspiciatis. Deserunt eaque nobis quos cum quidem ullam minus
              amet dolore cupiditate, illo, soluta consequuntur voluptatem
              maiores, distinctio eveniet debitis atque odio sit totam
              consectetur veniam eum? Deserunt explicabo nam reprehenderit sunt
              omnis, culpa minus illum quas ut officiis harum aperiam autem
              dolores consequatur.
            </div>
          </div>

          <div className="activities">
            <h6 className="my-4">Questions</h6>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
                quibusdam.
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </FrontLayout>
  );
};

const Wrapper = styled.div`
  .inner-top {
    display: flex;
    .profile-desc {
      flex: 1;

      display: flex;
      align-self: center;
    }
    .user-image {
      /* box-shadow: 5px 10px 40px rgba(0, 0, 0, 0.1);
      transform: matrix(-1, 0, 0, 1, 0, 0); */
      width: 100%;
      max-width: 300px;
      height: 339px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export default UserPage;
