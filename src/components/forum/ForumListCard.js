import React from "react";
import PropTypes from "prop-types";
import { Avatar, Rate } from "rsuite";
import styled from "styled-components";
import Link from "next/link";

const CommentBox = (props) => {
  return (
    <BoxWrapper bg={props.bg} className={props.className} {...props}>
      560
      <div className="comment-box-bottom"></div>
    </BoxWrapper>
  );
};

CommentBox.propTypes = {
  className: PropTypes.string,
  bg: PropTypes.string,
};

CommentBox.defaultProps = {
  bg: "#E43F23", //"#bdc3c7",
};

const BoxWrapper = styled.div`
  background-color: ${({ bg }) => bg}; //#bdc3c7;
  border-radius: 2px;
  display: inline-block;
  /* padding: 12px 17px; */
  text-align: center;
  padding: 1rem 0;
  color: #ffffff;
  font-size: 14px;
  font-family: "Open Sans Bold", sans-serif;
  position: relative;
  .comment-box-bottom {
    width: 11px;
    height: 11px;
    background-color: ${({ bg }) => bg};
    position: absolute;
    bottom: 0;
    left: 43%;
    margin-bottom: -5px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;

const ForumListCardCOmp = ({ comment }) => {
  const { title } = comment;
  return (
    <Wrapper>
      <div className="forum-list-card">
        <div className="inner">
          <div className="left">
            <div className="left-wrapper">
              <Avatar circle className="d-none d-md-block" />
              <p>@pin4eva</p>
              <Rate defaultValue={3} size="sm" />
            </div>
          </div>
          <div className="middle">
            <div className="miidle-wrapper">
              <Link href="/forum/hello">
                <a>
                  {" "}
                  <p className="fs-16">{title}</p>
                </a>
              </Link>
              <p className="text-sm text-muted">
                t's one thing to subject yourself to a Halloween costume mishap
                because, hey, that's your prerogative
              </p>
            </div>
          </div>
          <div className="right">
            <div className="right-wrapper">
              <CommentBox className="mb-3 " />
              <hr className="m-0 my-2 " />
              <div className="sat text-muted">
                <i className="fas fa-eye"></i> 1,568
              </div>
              <hr className="m-0 my-2 " />
              <div className="sat text-muted">
                <i className="fas fa-clock"></i> 1,568
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

ForumListCardCOmp.propTypes = {
  title: PropTypes.string,
  comment: PropTypes.object,
};

export default ForumListCardCOmp;

const Wrapper = styled.div`
  margin-bottom: 1rem;
  .rs-rate-sm {
    font-size: 1rem;
    padding: 0;
    display: flex;
    li {
      margin: 0;
    }
  }
  .right {
    /* background-color: yellow; */
    &-wrapper {
      /* background-color: red; */
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;
