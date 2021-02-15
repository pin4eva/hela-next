import { useMutation } from "@apollo/client";
import { SEARCH_REPORT } from "apollo/queries/reportQuery";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import { Spinner } from "theme-ui";

const SearchReportComp = ({ getResults }) => {
  const [query, setQuery] = useState("");
  const [search, { loading }] = useMutation(SEARCH_REPORT);
  const searchReport = async () => {
    const { data } = await search({ variables: { query } });
    // isLoading(loading);
    getResults(data.searchReport);
  };
  return (
    <Wrapper>
      <input
        type="search"
        name="reports-search-input"
        className="form-control"
        placeholder="Search reports"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading ? (
        <Spinner />
      ) : (
        <i className="fas fa-search c-hand" onClick={searchReport}></i>
      )}
    </Wrapper>
  );
};

SearchReportComp.propTypes = {
  isLoading: PropTypes.func,
  getResults: PropTypes.func,
};

const Wrapper = styled.div`
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
`;

export default SearchReportComp;
