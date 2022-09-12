import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {mediaQuery} from "../../styles/constants/mediaQuery";

export const Footer = () => {
  return (
    <Container>
      <div className="social-container">
        {/*<h3>Siguenos en:</h3>*/}
        {/*<div className="socials-list">*/}
        {/*  <FontAwesomeIcon icon={faFacebook} size="2x" />*/}
        {/*  <FontAwesomeIcon icon={faTiktok} size="2x" />*/}
        {/*  <FontAwesomeIcon icon={faInstagram} size="2x" />*/}
        {/*</div>*/}
      </div>
      <div className="wrapper-content">
        <div>
          Vota.pe - Una iniciativa desarrollada por el pueblo para el pueblo.
        </div>
        <div>
          Desarrollado con
          <span className="item-icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          para el prueblo.
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #0e0e0e;
  color: #fff;

  .social-container {
    padding: 1.5rem;
    text-align: center;
    ${mediaQuery.minTablet} {
      text-align: left;
    }
    h3 {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.light};
    }
    .socials-list {
      display: flex;
      margin-top: 1rem;
      gap: 1.7rem;
      justify-content: center;
      ${mediaQuery.minTablet} {
        justify-content: left;
      }
    }
  }

  .wrapper-content {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${mediaQuery.minTablet} {
      flex-direction: row;
      justify-content: space-between;
    }

    div {
      font-size: 0.8rem;
      font-weight: 500;
      text-align: center;
      color: ${({ theme }) => theme.colors.light};
      .item-icon {
        margin: 0 0.3rem;
        color: red;
      }
    }
    div:first-child {
      text-align: center;
      margin-top: 0.5rem;
      ${mediaQuery.minTablet} {
        text-align: left;
      }
    }
    div:last-child {
      text-align: center;
      margin-top: 0.7rem;
      ${mediaQuery.minTablet} {
        text-align: right;
      }
    }
  }
`;
