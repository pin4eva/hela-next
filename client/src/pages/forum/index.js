import ForumListCardCOmp from "@/components/forum/ForumListCard";
import HeaderBannerComp from "@/components/HeaderBanner";
import AnswerComp from "@/components/qa/AnswerComp";
import QaReplyComp from "@/components/qa/QaReplyComp";
import QuestionComp from "@/components/qa/QuestionComp";
import FrontLayout from "@/layouts/FrontLayout";
import Image from "next/image";
import React, { useState } from "react";
import { Pagination, Rate } from "rsuite";
import styled from "styled-components";
import Paginate from "react-paginate";
import PaginationComp from "@/components/shared/Pagination";
import ForumCategoryComp from "@/components/forum/ForumCategoryComp";
import AddForumTopicComp from "@/components/forum/AddForumTopic";
import ModalComp from "@/components/Modal";

const QuestionAnwserPage = () => {
  const [posts, setPosts] = useState(comments);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const [modalOpen, setModalOpen] = useState(false);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <FrontLayout title="Question and Answers">
      <HeaderBannerComp desc="Questions and advice" />
      <Wrapper>
        <ModalComp show={modalOpen} onClose={() => setModalOpen(false)}>
          <AddForumTopicComp />
        </ModalComp>
        <div className="forum">
          <div className="forum-search">
            <div className="container d-md-flex align-items-center justify-between">
              <div className="forum-search-input">
                <div className="d-flex">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="form-control rounded-0"
                  />
                  <button className="btn btn-primary">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <button
                className="btn btn-primary btn-rounded"
                onClick={() => setModalOpen(true)}
              >
                {" "}
                <i className="fas fa-plus"></i>{" "}
              </button>
            </div>
          </div>
          <div className="container py-3 d-flex justify-center">
            <PaginationComp
              postsPerPage={postsPerPage}
              totalPosts={comments.length}
              paginate={paginate}
            />
          </div>

          <div className="container forum-list">
            <div className="forum-list-left">
              {posts
                .slice(indexOfFirstPost, indexOfLastPost)
                .map((comment, i) => (
                  <ForumListCardCOmp key={i} comment={comment} />
                ))}
            </div>
            <div className="forum-list-right">
              <ForumCategoryComp />
            </div>
          </div>
        </div>
      </Wrapper>
    </FrontLayout>
  );
};

const Wrapper = styled.div``;

export default QuestionAnwserPage;

const comments = [
  { title: "Item 1" },
  { title: "Item 2" },
  { title: "Item 3" },
  { title: "Item 4" },
  { title: "Item 5" },
  { title: "Item 6" },
  { title: "Item 7" },
  { title: "Item 8" },
  { title: "Item 9" },
  { title: "Item 11" },
  { title: "Item 12" },
  { title: "Item 13" },
  { title: "Item 14" },
  { title: "Item 15" },
  { title: "Item 16" },
  { title: "Item 17" },
  { title: "Item 18" },
  { title: "Item 19" },
  { title: "Item 20" },
  { title: "Item 21" },
  { title: "Item 22" },
  { title: "Item 23" },
  { title: "Item 24" },
  { title: "Item 25" },
  { title: "Item 26" },
  { title: "Item 27" },
  { title: "Item 28" },
  { title: "Item 29" },
  { title: "Item 30" },
  { title: "Item 31" },
  { title: "Item 32" },
  { title: "Item 33" },
  { title: "Item 34" },
];
