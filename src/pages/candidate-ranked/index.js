import React from "react";
import styled, { css } from "styled-components";
import { SectionRanked } from "../../components";

export const CandidateRanked = () => {
  return (
    <Container>
      <h2>Seguimiento de Votaciones</h2>

      <SectionRanked />
      <SectionRanked />
      <SectionRanked />
      <SectionRanked />
      <SectionRanked />
      <SectionRanked />
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => css`
    padding: 1em;
    h2 {
      padding-top: 0.5em;
      padding-bottom: 1em;
      text-align: center;
      font-size: ${theme.font_sizes.x_large};
      color: ${theme.colors.primary};
    }
  `}
`;
