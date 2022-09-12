import React, { useState } from "react";
import styled from "styled-components";
import { Button, CardPresentation, PopUpBottom } from "../../components";
import { PedroCastillo } from "../../images";

const candidates = [
  { name: "panchito pistolas", img: PedroCastillo },
  { name: "Uresti Coima", img: PedroCastillo },
  {
    name: "Porky Esto es esto es todo amigos",
    img: PedroCastillo,
  },
];

export const Home = () => {
  const [isVisiblePopUpBottom, setIsVisiblePopUpBottom] = useState(false);
  const [candidate, setCandidate] = useState(null);

  const viewCandidate = (_candidate) => {
    setIsVisiblePopUpBottom(true);
    setCandidate(_candidate);
  };

  const closePopUp = () => setIsVisiblePopUpBottom(false);

  return (
    <Container>
      <div className="wrapper-candidates">
        {candidates.map((candidate, index) => (
          <CardPresentation
            url={candidate.img}
            onClick={() => viewCandidate(candidate)}
          />
        ))}
      </div>
      {isVisiblePopUpBottom && (
        <PopUpBottom
          name={candidate.name}
          candidateImg={candidate.img}
          partidoImg={candidate.img}
          partido={candidate.name}
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
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  }
`;
