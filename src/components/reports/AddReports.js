import React from "react";

import styled from "styled-components";
import { Select } from "theme-ui";
import ReactMde from "react-mde";
import { Converter } from "showdown";
import { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Notification } from "rsuite";
import { volumes } from "utils/reportUtils";
import { useMutation } from "@apollo/client";
import { ADD_REPORT_MUTATION } from "apollo/queries/reportQuery";
import ThemeButton from "../shared/ThemeButton";
import { APPEAL_COURT, SUPREME_COURT } from "utils/constants";
import { compiler } from "markdown-to-jsx";
import { useRecoilState } from "recoil";
import { ReportsAtom } from "atoms/ReportsAtom";

dayjs.extend(utc);

const converter = new Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

// const mdCompiler = (data) => {
//   compiler()
// }

const AddReportsComp = ({ onAdd, onCancel }) => {
  const [selectedTab, setSelectedTab] = useState("write");
  const [reports, setReports] = useRecoilState(ReportsAtom);
  const [addReport, { loading }] = useMutation(ADD_REPORT_MUTATION);
  const [info, setInfo] = useState({
    title: "",
    date: "",
    court: "",
    summary: "",
    body: "",
    vol: "",
  });

  const notify = (funcName, title, content) => {
    Notification[funcName]({
      title: title,
      description: <p>{content}</p>,
    });
  };

  // console.log(dayjs(info.date).format("dd-MM-YYYY"));
  const submit = async () => {
    const { court, date, title } = info;

    if (!court) return notify("error", "Error", "Please select court");
    if (!title)
      return notify(
        "error",
        "Error",
        "Please add a title, (eg Apeallent V. Respondent)"
      );
    if (!date)
      return notify("error", "Error", "Please make sure you choose a date");

    const reportData = {
      ...info,
      date: dayjs(info.date),
    };

    try {
      const { data } = await addReport({ variables: { input: reportData } });
      notify("success", "Success", `Successfully add ${data.addReport.title}`);
      setReports([...reports, data.addReport]);
      onCancel();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="card mt-4">
        <h5 className="text-center text-uppercase">New Report</h5>
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
              value={info.date}
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
              generateMarkdownPreview={
                (markdown) => Promise.resolve(compiler(markdown))
                // Promise.resolve(converter.makeHtml(markdown))
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
              generateMarkdownPreview={
                (markdown) => Promise.resolve(compiler(markdown))
                // Promise.resolve(converter.makeHtml(markdown))
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
              isLoading={loading}
              type="button"
              onClick={submit}
              className="btn btn-primary"
            >
              Add Report
            </ThemeButton>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

AddReportsComp.propTypes = {
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
};

const Wrapper = styled.div``;

export default AddReportsComp;
