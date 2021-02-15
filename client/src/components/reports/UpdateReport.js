import { useMutation, useQuery } from "@apollo/client";
import {
  GET_REPORT_QUERY,
  UPDATE_REPORT_MUTATION,
} from "apollo/queries/reportQuery";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { compiler } from "markdown-to-jsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import ReactMde from "react-mde";
import { Notification } from "rsuite";
import styled from "styled-components";
import { Select, Spinner } from "theme-ui";
import { APPEAL_COURT, SUPREME_COURT } from "utils/constants";
import { volumes } from "utils/reportUtils";
import ThemeButton from "../shared/ThemeButton";

dayjs.extend(utc);

const UpdateReportsComp = ({ slug, onUpdate, onCancel }) => {
  const [selectedTab, setSelectedTab] = useState("write");
  const { loading } = useQuery(GET_REPORT_QUERY, {
    variables: { slug },
    onCompleted: (data) => {
      const { __typeName, ...rest } = data.getReport;
      setInfo(rest);
    },

    onError: (err) => console.log(err),
  });
  const [updateReport, { loading: updating }] = useMutation(
    UPDATE_REPORT_MUTATION
  );
  const [info, setInfo] = useState({});

  const notify = (funcName, title, content) => {
    Notification[funcName]({
      title: title,
      description: <p>{content}</p>,
    });
  };

  // console.log(dayjs(info.date).format("dd-MM-YYYY"));
  const submit = async () => {
    const { court, date, title, vol, summary, body, _id } = info;

    try {
      const { data } = await updateReport({
        variables: { input: { court, date, title, vol, summary, body, _id } },
      });
      notify(
        "success",
        "Success",
        `Successfully add ${data.updateReport.title}`
      );
      onUpdate(data.updateReport);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading || !slug) return <Spinner />;

  return (
    <Wrapper>
      <div className="card mt-4">
        <h5 className="text-center text-uppercase">Update Report</h5>
        <form>
          <div className="form-group">
            <label>Court</label>
            <Select
              className=""
              aria-label="Select Court"
              value={info.court}
              onChange={(e) => setInfo({ ...info, court: e.target.value })}
            >
              <option value=""></option>
              <option>{SUPREME_COURT}</option>
              <option>{APPEAL_COURT} </option>
            </Select>
          </div>
          <div className="form-group">
            <label>Volume</label>
            <Select
              className=""
              aria-label="Select Volume"
              value={info.vol}
              onChange={(e) => setInfo({ ...info, vol: e.target.value })}
            >
              <option value=""></option>
              {volumes.map((vol, i) => (
                <option key={i}>{vol}</option>
              ))}
            </Select>
          </div>

          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-conrol"
              value={info.title}
              onChange={(e) => setInfo({ ...info, title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              type="date"
              className="form-conrol"
              value={new Date(info.date)}
              onChange={(e) => setInfo({ ...info, date: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Summary</label>
            <ReactMde
              value={info.summary}
              onChange={(e) => setInfo({ ...info, summary: e })}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              generateMarkdownPreview={(markdown) =>
                Promise.resolve(compiler(markdown))
              }
            />
          </div>

          <div className="form-group">
            <label>Judgement</label>
            <ReactMde
              value={info.body}
              onChange={(e) => setInfo({ ...info, body: e })}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              generateMarkdownPreview={(markdown) =>
                Promise.resolve(compiler(markdown))
              }
            />
          </div>

          <div className=" text-center">
            <button
              className="btn btn-secondary "
              type="button"
              style={{ marginRight: "0.8rem" }}
              onClick={onCancel}
            >
              Cancel
            </button>
            <ThemeButton
              isLoading={updating}
              type="button"
              onClick={submit}
              className="btn btn-primary"
            >
              Update Report
            </ThemeButton>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

UpdateReportsComp.propTypes = {
  onUpdate: PropTypes.func,
  onCancel: PropTypes.func,
  slug: PropTypes.string,
};

const Wrapper = styled.div``;

export default UpdateReportsComp;
