import React from "react";
import styled from "styled-components";

export const CandidateContent = ({ title, description, image }) => {
  return (
    <Container>
      <div className="item-left">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      <div className="item-right">
        <img src={image} alt={title} />
      </div>
    </Container>
  );
};

const Container = styled.article`
  padding: 0 1em 1em 1em;
  display: grid;
  grid-template-columns: 70% 30%;
  .item-left {
    padding: 0.3em;
    h3 {
      font-size: 1.5em;
      padding: 0 0 0.5em 0;
    }
  }
  .item-right {
    width: 100%;
    img {
      width: 7em;
      border-radius: 50%;
    }
  }
`;
