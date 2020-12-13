import HeaderBannerComp from "@/components/HeaderBanner";
import FrontLayout from "@/layouts/FrontLayout";
import React, { useState } from "react";
import styled from "styled-components";

const ReportsListPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <FrontLayout>
      <HeaderBannerComp image="/images/reports-banner.png" />
      <Wrapper>
        <div className="reports">
          <div className="container">
            <div className="reports-search">
              <input
                type="search"
                name="reports-search-input"
                className="form-control"
                placeholder="Search reports"
              />
              <i className="fas fa-search c-hand"></i>
            </div>

            <div className="reports-tab mt-4">
              <ul className="nav nav-tabs">
                {tabList.map((tab, i) => (
                  <li className="nav-item" key={i}>
                    <a
                      className={`nav-link c-hand ${
                        activeTab === i ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(i)}
                    >
                      {tab}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reports-map">
              {reports.map((report, i) => (
                <div className="wrapper my-3 " key={i}>
                  <div className="wrapper-header">
                    <h6 className="mt-3 mb-0">{report.title}</h6>
                    <div className="small font-italic d-flex justify-content-between mb-3">
                      <small>{report.court}</small>
                      <small>{report.caseRef}</small>
                    </div>
                  </div>

                  <p className="text-small">
                    Adipiscing luctus potenti nunc etiam mauris in mollis
                    tristique. Nibh integer iaculis vehicula interdum tristique
                    lectus magna. Sodales malesuada vel est metus. Faucibus
                    pretium pulvinar. Adipiscing luctus potenti nunc etiam
                    mauris in mollis tristique. Nibh integer iaculis vehicula
                    interdum tristique lectus magna. Sodales malesuada vel est
                    metus. Faucibus pretium pulvinar.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </FrontLayout>
  );
};

const Wrapper = styled.div`
  .reports {
    &-search {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 768px;
      margin: 4rem auto;

      input {
        margin-right: 1rem;
      }
      .fa-search {
        font-size: 1.5rem;
      }
    }

    &-tab {
      .nav-tabs {
        .nav-link {
          transition: 0.5s all ease-in-out;
          &.active {
            border-bottom: 2px solid red;
          }
        }
      }
    }

    &-map {
      h6 {
        font-size: 1rem;
      }
      /* background-color: red; */
    }
  }
`;

export default ReportsListPage;

const tabList = [" All", "Suppreme Court", "Court of Appeal"];

const reports = [
  {
    title: "OGUNSANYA OLUWASEYI V THE STATE",
    court: "Supprem Court",
    caseRef: "HELA-11323-vol-2-1125",
  },
  {
    title: "PETER AKALIRO V THE STATE",
    court: "Court of Appeal",
    caseRef: "HELA-11323-vol-2-1125",
  },
  {
    title: "OGUNSANYA OLUWASEYI V THE STATE",
    court: "Supprem Court",
    caseRef: "HELA-11323-vol-2-1125",
  },
  {
    title: "OGUNSANYA OLUWASEYI V THE STATE",
    court: "Court of Appeal",
    caseRef: "HELA-11323-vol-2-1125",
  },
];
