import React, { useState } from "react";
import styled from "styled-components";
import { WrapperContainer } from "../ui";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { DrawerMobile } from "./DrawerMobile";

export const Layout = ({ children }) => {
  const [visibleDrawer, setvisibleDrawer] = useState(false);

  return (
    <LayoutContainer>
      <DrawerMobile
        onSetVisibleDrawer={setvisibleDrawer}
        visibleDrawer={visibleDrawer}
      />
      <WrapperContainer>
        <LayoutContent>
          <Header onSetVisibleDrawer={setvisibleDrawer} />
          <div className="body">{children}</div>
          <Footer />
        </LayoutContent>
      </WrapperContainer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.secondary};
`;

const LayoutContent = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: inherit;
  .body {
    background: inherit;
    height: auto;
    min-height: 77vh;
  }
`;
