import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FilterData = () => {
  return (
    <Main>
      <ul className="list">
        <Link to="/search">
          <span>All</span>
        </Link>
        <Link to="/search/images">
          <span>images</span>
        </Link>
        <Link to="/search/news">
          <span>News</span>
        </Link>
      </ul>
      <div>
        <h1>Tools</h1>
      </div>
      <div>
        <h1>System</h1>
      </div>
    </Main>
  );
};

export default FilterData;

const Main = styled.div`
  display: grid;
  padding-bottom: 10px;
  grid-template-columns: 4fr 1fr 1fr;
  border-bottom: 1px solid whitesmoke;

  .list {
    display: flex;
    justify-content: center;

    span {
      padding: 0px 35px;
    }
  }
`;
