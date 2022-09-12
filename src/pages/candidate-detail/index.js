import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  Button,
  CandidateContent,
  CandidateCover,
  TabAntecedents,
  TabEducation,
  TabProposal,
} from "../../components";
import { ImgAvatar, ImgBackground } from "../../images";

export const CandidateDetail = () => {
  const [tabType, setTabType] = useState("proposal");

  const changeTabType = (_tabType) => setTabType(_tabType);

  return (
    <Container>
      <CandidateCover
        candidate="Panchita Pistolas"
        imgCover={ImgBackground}
        imgProfile={ImgAvatar}
      />

      <CandidateContent
        title="Victoria Nacional"
        image={ImgAvatar}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, rem."
      />

      <ArticleInformation>
        <WrapperTabs tabType={tabType}>
          <button
            className="item-tab first-button tab-proposal"
            onClick={() => changeTabType("proposal")}
          >
            Propuestas
          </button>
          <button
            className="item-tab tab-antecedents"
            onClick={() => changeTabType("antecedents")}
          >
            Antecedentes
          </button>
          <button
            className="item-tab last-button tab-education"
            onClick={() => changeTabType("education")}
          >
            Educación
          </button>
        </WrapperTabs>

        {tabType === "proposal" && (
          <div className="tab-body">
            <TabProposal />
          </div>
        )}
        {tabType === "antecedents" && (
          <div className="tab-body">
            <TabAntecedents />
          </div>
        )}
        {tabType === "education" && (
          <div className="tab-body">
            <TabEducation />
          </div>
        )}
      </ArticleInformation>

      <div className="section-button">
        <Button type="primary" width="90%" borderRadius=".5em">
          ENVIAR MI VOTO
        </Button>
      </div>
    </Container>
  );
};

const ArticleInformation = styled.article`
  width: 100%;
  height: auto;
  padding: 0 1.5em;
  .tab-body {
    padding: 0.5em;
    background: #dce8f2;
  }
`;

const WrapperTabs = styled.div`
  ${({ theme, tabType }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.1em;

    .item-tab {
      text-align: center;
      cursor: pointer;
      border: none;
      display: inline-block;
      padding: 1.5em 0.7em;
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      font-weight: 700;
      font-size: ${theme.font_sizes.x_small};
    }
    .first-button {
      border-radius: 1.5em 0 0 0;
    }
    .last-button {
      border-radius: 0 1.5em 0 0;
    }
    .tab-proposal {
      ${tabType === "proposal" &&
      css`
        transition: 0.5s;
        font-weight: 700;
        background: ${theme.colors.quaternary};
        color: ${theme.colors.primary};
      `}
    }
    .tab-antecedents {
      ${tabType === "antecedents" &&
      css`
        transition: 0.5s;
        font-weight: 700;
        background: ${theme.colors.quaternary};
        color: ${theme.colors.primary};
      `}
    }
    .tab-education {
      ${tabType === "education" &&
      css`
        transition: 0.5s;
        font-weight: 700;
        background: ${theme.colors.quaternary};
        color: ${theme.colors.primary};
      `}
    }
  `}
`;

const Container = styled.section`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};

  .section-button {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
