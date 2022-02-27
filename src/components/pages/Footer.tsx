import styled from '@emotion/styled';
import React from 'react';
import StyledLink from '../base/StyledLink';

type FooterProps = {
  className?: string;
};

type PolycyLink = {
  title: string;
  link: string;
};

const PolycyLinks: ReadonlyArray<PolycyLink> = [
  {
    title: 'Политика обработки персональных данных',
    link: '/documents/policy',
  },
  {
    title: 'Регламент по работе с клиентами',
    link: '/documents/regulations',
  },
  {
    title: 'Свидетельство о регистрации',
    link: '/documents/registry',
  },
];

const LeftInnerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CenterInnerContainer = styled(LeftInnerContainer)`
  align-items: center;
  flex: 1;
`;

const RightInnerContainer = styled(LeftInnerContainer)`
  flex: 1;
`;

const Link = styled(StyledLink)`
  color: #b00102;
  text-decoration: underline;
  font-size: 14px;
  line-height: 1.55;
  text-align: center;
  margin-bottom: 10px;
  font-weight: 500;
`;

const CompanyName = styled.div`
  color: #8f8f8f;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.55;
  font-weight: 700;
`;

const CompanyInformation = styled.div`
  color: #8f8f8f;
  font-size: 14px;
  line-height: 1.55;
  font-weight: 500;
  opacity: 0.6;
`;

const MadeBy = styled.div`
  color: #8f8f8f;
  font-size: 14px;
  line-height: 1.55;
  font-weight: 500;
  text-align: end;
  opacity: 0.8;
  a {
    color: #8f8f8f;
    text-decoration: none;
  }
`;

const Container = styled.div`
  white-space: nowrap;
  display: flex;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;

    ${MadeBy} {
      flex-direction: column;
      text-align: center;
    }

    ${CenterInnerContainer} {
      margin-top: 30px;
    }
  }
`;

const policyLinkRender = (linkData: PolycyLink, index: number) => {
  return (
    <Link key={linkData.link + index} href={linkData.link}>
      {linkData.title}
    </Link>
  );
};

const Footer = ({ className }: FooterProps) => {
  return (
    <Container className={className}>
      <LeftInnerContainer>
        <CompanyName>Название компании</CompanyName>
        <CompanyInformation>
          ООО «Рога и Копыта»
          <br />
          ИНН: 1234567890
          <br />
          КПП: 1234567890
          <br />
          ОГРН: 1234567890
        </CompanyInformation>
      </LeftInnerContainer>

      <CenterInnerContainer>
        {PolycyLinks.map(policyLinkRender)}
      </CenterInnerContainer>

      <RightInnerContainer>
        <MadeBy>
          Создано в{' '}
          <StyledLink href="https://aqulasoft.com">aqulasoft.com</StyledLink>
        </MadeBy>
      </RightInnerContainer>
    </Container>
  );
};

export default Footer;
