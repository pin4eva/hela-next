import ForumCategoryComp from "@/components/forum/ForumCategoryComp";
import ForumCommentCard, {
  ForumQuestionCard,
} from "@/components/forum/ForumCommentCard";
import HeaderBannerComp from "@/components/HeaderBanner";
import FrontLayout from "@/layouts/FrontLayout";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const SingleForum = () => {
  return (
    <FrontLayout title="Forum">
      <HeaderBannerComp />
      <div className="forum">
        <div className="py-4 container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/forum">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Question
              </li>
            </ol>
          </nav>
        </div>
        <div className="container forum-single ">
          <div className="forum-single-card-list">
            <ForumQuestionCard />
            <ForumCommentCard />
            <ForumCommentCard />
            <ForumCommentCard />
          </div>
          <div className="forum-single-aside">
            <ForumCategoryComp />
          </div>
        </div>
      </div>
    </FrontLayout>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;
export default SingleForum;
