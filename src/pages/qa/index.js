import ForumListCardCOmp from "@/components/forum/ForumListCard";
import HeaderBannerComp from "@/components/HeaderBanner";
import AnswerComp from "@/components/qa/AnswerComp";
import QaReplyComp from "@/components/qa/QaReplyComp";
import QuestionComp from "@/components/qa/QuestionComp";
import FrontLayout from "@/layouts/FrontLayout";
import Image from "next/image";
import React from "react";
import { Pagination, Rate } from "rsuite";
import styled from "styled-components";
import Paginate from "react-paginate";
import PaginationComp from "@/components/shared/Pagination";

const QuestionAnwserPage = () => {
  const handlePageClick = () => {
    console.log("hi");
  };
  return (
    <FrontLayout title="Question and Answers">
      <HeaderBannerComp desc="Questions and advice" />
      <Wrapper>
        <div className="forum">
          <div className="forum-search">
            <div className="container">
              <div className="w-75 mx-auto">
                <div className="d-flex">
                  <input type="search" name="" id="" className="form-control" />
                  <button className="btn btn-primary w-1  rounded-0">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-3 d-flex justify-center">
            <PaginationComp />
            {/* <Paginate
              previousLabel="Previous"
              nextLabel="Next"
              pageCount={comments.length}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              breakLabel={"..."}
              breakClassName={"break-me"}
              containerClassName="pagination"
              subContainerClassName="page-item"
              pageClassName="page"
              activeClassName="active"
              onPageChange={handlePageClick}
            /> */}
          </div>
          <div className="container forum-list">
            <div className="forum-list-left">
              {comments.map((comment, i) => (
                <ForumListCardCOmp key={i} comment={comment} />
              ))}
            </div>
            <div className="forum-main-right">
              <div className="card">
                <div className="container">
                  <div className="header">
                    <p className="f5 m-0 ">Categories</p>
                    <hr />
                  </div>
                  <div className="body">
                    <ul>
                      {categorieList.map((category, i) => (
                        <li className="d-flex justify-content-between" key={i}>
                          <p>{category.title}</p>
                          <p className="rounded-pill text-light px-1 bg-gray-400">
                            {category.count}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </FrontLayout>
  );
};

const Wrapper = styled.div`
  background-color: #f2f2f2;
  height: 100%;
`;

export default QuestionAnwserPage;

const categorieList = [
  { title: "Trading for Money", count: 20 },
  { title: "Vault Keys Giveway", count: 10 },
  { title: "Misc Guns Locations", count: 50 },
  { title: "Looking for Players", count: 36 },
  { title: "Stupid Bugs & Solves", count: 41 },
  { title: "Video & Audio Drivers", count: 11 },
];

const comments = [
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
  { title: "10 Kids Unaware of Their Halloween Costume" },
  { title: "Pinterest Now Worth $3.8 Billion" },
];
