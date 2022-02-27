import styled from "@emotion/styled";
import React, { useLayoutEffect } from "react";
import { accent, backgroundSecondary, primary } from "@/const/colors";
import StyledLink from "../base/StyledLink";

type TopBarProps = {
  className?: string;
  navButtons: ReadonlyArray<NavButton>;
  showAccountButton?: boolean;
};

export type NavButton = {
  title: string;
  link: string;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 180px;
  height: 18px;
`;

const LogoLink = styled(StyledLink)`
  align-self: center;
`;

const Link = styled(StyledLink)`
  color: ${primary};
  font-size: 14px;
  margin-left: 30px;
  font-weight: 600;
  border-width: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  :hover {
    color: ${accent};
  }
`;

const LinkContainer = styled.div`
  display: flex;
`;

const Drawer = styled.div`
  overflow: hidden;
  position: fixed;
  display: flex;
  z-index: 130;

  top: 0;
  right: 0;
  background: ${backgroundSecondary};
  width: 300px;
  height: 100vh;

  transition: transform ease-in-out 0.3s;
  transform: matrix(1, 0, 0, 1, 300, 0);

  &.open {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  ${LinkContainer} {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    margin-left: 0px;

    ${Link} {
      font-size: 16px;
      font-weight: 500;
      margin: 0;
      margin-top: 10px;
    }
  }
`;

const MainTopBarContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  @media (max-width: 730px) {
    ${Link} {
      font-size: 12px;
    }
  }
  @media (max-width: 670px) {
    ${Link} {
      display: none;
    }
    ${Image} {
      display: block;
    }
  }
  @media (max-width: 865px) {
    ${Image} {
      display: none;
    }
  }
`;

const renderLink = (linkData: NavButton, onClick?: () => void) => {
  return (
    <Link key={linkData.link} href={linkData.link} onClick={onClick}>
      {linkData.title}
    </Link>
  );
};

let siteOrigin = "https://chibarocket.ru/";

const TopBar = ({ className, navButtons }: TopBarProps) => {
  useLayoutEffect(() => {
    siteOrigin = location.origin;
  }, []);

  return (
    <Container className={className}>
      <MainTopBarContent>
        <LogoLink href={siteOrigin}>
          <Image src="/logo.svg" alt="TopBar Logo" />
        </LogoLink>
        <LinkContainer>{navButtons.map((b) => renderLink(b))}</LinkContainer>
      </MainTopBarContent>
    </Container>
  );
};

export default TopBar;
