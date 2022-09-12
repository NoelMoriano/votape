import React from "react";
import styled from "styled-components";

export const CandidateCover = ({
  imgCover,
  imgProfile,
  candidate = "candidato",
}) => {
  return (
    <Container>
      <div className="cover-image">
        {imgCover && <img src={imgCover} alt={candidate} />}
      </div>
      <div className="first-content">
        <div className="item-left">
          {imgProfile && <img src={imgProfile} alt={candidate} />}
        </div>
        <div className="item-right">
          <span>{candidate}</span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.article`
  width: 100%;

  .cover-image {
    background: rgb(42 41 41 / 51%);
    width: 100vw;
    height: 8em;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .first-content {
    position: relative;
    display: grid;
    grid-template-columns: 35% 65%;
    padding: 0 0.5em;
    .item-left {
      width: 7em;
      height: 7em;
      background: rgb(200, 200, 200);
      border-radius: 50%;
      position: relative;
      top: -55%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .item-right {
      padding: 0.5em 1em 0.5em 0;
      text-align: justify;
      span {
        font-size: 1.5em;
        font-weight: 700;
      }
    }
  }
`;
