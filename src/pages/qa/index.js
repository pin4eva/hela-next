import HeaderBannerComp from "@/components/HeaderBanner";
import AnswerComp from "@/components/qa/AnswerComp";
import QaReplyComp from "@/components/qa/QaReplyComp";
import QuestionComp from "@/components/qa/QuestionComp";
import FrontLayout from "@/layouts/FrontLayout";
import Image from "next/image";
import React from "react";
import { Rate } from "rsuite";
import styled from "styled-components";

const QuestionAnwserPage = () => {
  return (
    <FrontLayout title="Question and Answers">
      <HeaderBannerComp desc="Questions and advice" />
      <Wrapper>
        <div className="qa container">
          <div className="qa-question">
            <QuestionComp />
            <QaReplyComp />
            <AnswerComp />
            <AnswerComp />
            <AnswerComp />
          </div>
        </div>
      </Wrapper>
    </FrontLayout>
  );
};

const Wrapper = styled.div``;

export default QuestionAnwserPage;
