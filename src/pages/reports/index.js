import HeaderBannerComp from "@/components/HeaderBanner";
import SearchReportComp from "@/components/reports/SearchReport";
import FrontLayout from "@/layouts/FrontLayout";
import { useLazyQuery } from "@apollo/client";
import { GET_LIMITED_REPORTS } from "apollo/queries/reportQuery";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";
import { Spinner } from "theme-ui";
import { APPEAL_COURT, SUPREME_COURT } from "utils/constants";

const ReportsListPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  // const [count, setCount] = useState(0);
  const [reports, setReports] = useState([]);
  const [getReports, { loading, data }] = useLazyQuery(GET_LIMITED_REPORTS, {
    onCompleted: (data) => setReports(data.getLimitedReports),
    onError: (err) => console.log(err),
  });

  useEffect(() => {
    const getReport = async () => {
      await getReports({ variables: { skip: 0, limit: 5 } });
    };
    getReport();
  }, []);

  useEffect(() => {
    if (activeTab !== "All") {
      setReports(
        data?.getLimitedReports.filter((rep) => rep.court === activeTab)
      );
    }

    return () => setReports(data?.getLimitedReports);
  }, [activeTab]);

  const handleResults = (data) => {
    setReports(data);
  };

  // if (loading) return <Spinner />;
  return (
    <FrontLayout>
      <HeaderBannerComp image="/images/reports-banner.png" />
      <Wrapper>
        <div className="reports">
          <div className="container">
            <SearchReportComp getResults={handleResults} />
            {loading ? (
              <Spinner />
            ) : (
              <Fragment>
                <div className="reports-tab mt-4">
                  <ul className="nav nav-tabs">
                    {tabList.map((tab, i) => (
                      <li className="nav-item" key={i}>
                        <a
                          className={`nav-link c-hand ${
                            activeTab === tab ? "active" : ""
                          }`}
                          onClick={() => setActiveTab(tab)}
                        >
                          {tab}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="reports-map">
                  {reports?.map((report, i) => (
                    <div className="wrapper my-3 " key={i}>
                      <div className="wrapper-header">
                        <Link href={`/reports/${report.slug}`}>
                          <h6 className="mt-3 mb-0 c-hand hover-primary">
                            {report.title}
                          </h6>
                        </Link>
                        <div className="small font-italic d-flex justify-content-between mb-3">
                          <small className="text-uppercase">
                            {report.court}
                          </small>
                          <small className="text-uppercase">
                            {report.caseRef}
                          </small>
                        </div>
                      </div>

                      <p className="text-small">{report.summary}</p>
                    </div>
                  ))}
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </Wrapper>
    </FrontLayout>
  );
};

const Wrapper = styled.div`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  .reports {
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

const tabList = ["All", SUPREME_COURT, APPEAL_COURT];
