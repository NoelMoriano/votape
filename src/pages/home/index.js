import React, { useState } from "react";
import styled from "styled-components";
import { CardPresentation, PopUpBottom } from "../../components";
import { PedroCastillo } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";

const candidates = [
  {
    name: "panchito pistolas",
    candidateImg: PedroCastillo,
    partidoImg: PedroCastillo,
  },
  {
    name: "Uresti Coima",
    candidateImg: PedroCastillo,
    partidoImg: PedroCastillo,
  },
  {
    name: "Porky Esto es esto es todo amigos",
    candidateImg: PedroCastillo,
    partidoImg: PedroCastillo,
  },
  {
    name: "panchito pistolas",
    candidateImg: PedroCastillo,
    partidoImg: PedroCastillo,
  },
  {
    name: "Uresti Coima",
    candidateImg: PedroCastillo,
    partidoImg: PedroCastillo,
  },
  {
    name: "Porky Esto es esto es todo amigos",
    candidateImg: PedroCastillo,
    partidoImg: PedroCastillo,
  },
  {
    name: "panchito pistolas",
    candidateImg: PedroCastillo,
    partidoImg: PedroCastillo,
  },
  {
    name: "Uresti Coima",
    candidateImg: PedroCastillo,
    partidoImg: PedroCastillo,
  },
  {
    name: "Porky Esto es esto es todo amigos",
    candidateImg: PedroCastillo,
    partidoImg: PedroCastillo,
  },
];

export const Home = () => {
  const [isVisiblePopUpBottom, setIsVisiblePopUpBottom] = useState(false);
  const [candidate, setCandidate] = useState(null);

  const viewCandidate = (_candidate) => {
    setIsVisiblePopUpBottom(true);
    setCandidate(_candidate);
  };

  const closePopUpBottom = () => setIsVisiblePopUpBottom(false);

  return (
    <Container>
      <div className="wrapper-candidates">
        {candidates.map((candidate, index) => (
          <CardPresentation
            url={candidate.candidateImg}
            onClick={() => viewCandidate(candidate)}
          />
        ))}
      </div>
      {isVisiblePopUpBottom && (
        <PopUpBottom
          name={candidate.name}
          candidateImg={candidate.candidateImg}
          partidoImg={candidate.partidoImg}
          partido={candidate.name}
          onSetIsVisiblePopUpBottom={closePopUpBottom}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 1em;
  position: relative;

  .wrapper-candidates {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
    ${mediaQuery.minTablet} {
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }
  }
`;
