import React from "react";
import { PedroCastillo } from "../../../images";
import { Button } from "../../layout/public/ui";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const PopUpBottom = ({
  name,
  partido,
  candidateImg = PedroCastillo,
  partidoImg = PedroCastillo,
  onSetIsVisiblePopUpBottom,
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
              <h4>{name}</h4>
            </li>
            <li>
              <h5>
                <strong>Partido:</strong> {partido}
              </h5>
            </li>
            <li>
              <Link to={`/candidate/${name}`}>informacion</Link>
            </li>
          </ul>
        </div>
        <div className="item-right">
          <img src={partidoImg} />
        </div>

        <div
          className="item-close-absolute"
          onClick={() => onSetIsVisiblePopUpBottom(false)}
        >
          <span>
            <FontAwesomeIcon icon={faClose} />
          </span>
        </div>
      </div>
      <div className="wrapper-button">
        <Button block margin="0">
          Enviar mi voto
        </Button>
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
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 1em 1em 0 0;

  .wrapper-details {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding-top: 1.5em;
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
        color: inherit;

        li {
          h4,
          h5 {
            color: ${({ theme }) => theme.colors.light};
          }
          a {
            color: ${({ theme }) => theme.colors.quaternary};
          }
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

    .item-close-absolute {
      position: absolute;
      top: -40px;
      right: 0;
      background: ${({ theme }) => theme.colors.quaternary};
      color: ${({ theme }) => theme.colors.primary};
      width: 3em;
      height: 3em;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      span {
        font-size: 1.5em;
      }
    }
  }
`;
