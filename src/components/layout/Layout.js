import React, { useState } from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { WrapperContainer } from "../ui";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Drawer } from "./Drawer";
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
          {/*<Footer />*/}
        </LayoutContent>
      </WrapperContainer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100vw;
  background: ${({ theme }) => theme.colors.secondary};
`;

const LayoutContent = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: grid;
  background: inherit;

  .body {
  }
`;
