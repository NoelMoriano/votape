import React from "react";
import { PedroCastillo } from "../../../images";
import { Button } from "../../ui";
import styled from "styled-components";

export const PopUpBottom = ({
  name,
  partido,
  candidateImg = PedroCastillo,
  partidoImg = PedroCastillo,
}) => {
  return (
    <Container>
      <div className="wrapper-details">
        <div className="item-left">
          <img src={candidateImg} />
        </div>
        <div className="item-center">
          <ul>
            <li>
              <h3>{name}</h3>
            </li>
            <li>
              <h4>{partido}</h4>
            </li>
            <li>
              <a href="#">informacion</a>
            </li>
          </ul>
        </div>
        <div className="item-right">
          <img src={partidoImg} />
        </div>
      </div>
      <div className="wrapper-button">
        <Button block>Enviar</Button>
      </div>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  padding: 1em;
  background: #fff;
  .wrapper-details {
    display: grid;
    grid-template-columns: auto 1fr auto;
    .item-left {
      padding: 1em;
      img {
        width: 5em;
        height: 5em;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .item-center {
      padding: 1em;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          margin-bottom: 0.5em;
        }
      }
    }
    .item-right {
      padding: 1em;
      img {
        width: 4em;
        height: auto;
        object-fit: cover;
      }
    }
  }
`;
