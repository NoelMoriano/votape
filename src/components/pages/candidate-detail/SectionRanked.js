import React from "react";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../../styles/constants/mediaQuery";

export const SectionRanked = () => {
  return (
    <Container>
      <div className="item-candidate">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bandera_de_Renovaci%C3%B3n_Popular.svg/800px-Bandera_de_Renovaci%C3%B3n_Popular.svg.png"
          alt="candidate"
        />
      </div>
      <div className="item-candidate">
        <img
          src="data:image/jpeg;base64,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"
          alt="candidate"
        />
      </div>
      <div className="item-candidate data-candidate">
        <div className="content-left">
          <h3>Lopez Aeaa</h3>
          <h3>Vamos UG gaa</h3>
        </div>
        <div className="content-right">
          <span>322</span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    display: grid;
    grid-template-columns: 20% 20% 60%;
    ${mediaQuery.minTablet} {
      max-width: 25em;
      margin: 0 auto;
    }

    .item-candidate {
      img {
        width: 100%;
        height: 100%;
        max-height: 5em;
        max-width: 5em;
      }
    }
    .data-candidate {
      padding: 0.5em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        color: ${theme.colors.white};
        font-size: ${theme.font_sizes.small};
      }
      span {
        color: ${theme.colors.white};
        font-size: ${theme.font_sizes.large};
        font-weight: 800;
      }
    }
  `}
`;
