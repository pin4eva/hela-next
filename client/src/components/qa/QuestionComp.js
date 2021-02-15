import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import QaUserCardComp from "@/components/qa/QaUserCardComp";

const QuestionComp = (props) => {
  return (
    <Wrapper>
      <div className="question">
        <div className="question-top">
          <div className="d-flex justify-content-between">
            <p className="text-muted m-0">Last month</p>
            <div className="right d-flex align-items-center">
              <p className="text-muted my-0 mr-3">(24 comments)</p>
              <p className="text-info m-0">Reply</p>
            </div>
          </div>
          <hr />
        </div>
        <p className="question-title fs-5 ">How to make money very fast</p>
        <div className="question-body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
          repudiandae quisquam aperiam obcaecati? Doloribus impedit animi
          reiciendis consectetur praesentium id deserunt, velit sapiente tenetur
          nesciunt dolore excepturi voluptatibus esse. Nesciunt!
        </div>
        <div className="user-profile">
          <QaUserCardComp />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .user-profile {
    /* background-color: red; */
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
  }
`;
QuestionComp.propTypes = {};

export default QuestionComp;
