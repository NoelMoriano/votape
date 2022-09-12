import React from "react";
import styled from "styled-components";

export const CardPresentation = ({
  url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <img src={url} alt="candidate" />
    </Container>
  );
};

const Container = styled.div`
  width: auto;
  height: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
