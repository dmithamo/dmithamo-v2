import PropTypes from 'prop-types';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import constants from '../../utils/config/constants';
import Footer from '../Footer';
import Header from '../Header';

export default function DefaultLayout({ children, pageTitle }) {
  const [showFullPageMenu, setShowFullPageMenu] = useState(false);

  return (
    <>
      <Helmet titleTemplate="%s | @dmithamo">
        <html lang="en"></html>
        <title>{pageTitle}</title>
        <meta name="description" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="Homepage of Dennis Mithamo, a made-in-Kenya Software Engineer"
        ></meta>
      </Helmet>
      <StyledRootContainer>
        <Header
          showMenu={showFullPageMenu}
          onToggleShowMenu={setShowFullPageMenu}
        />
        <StyledSection className={showFullPageMenu ? 'blur-this' : ''}>
          {children}
        </StyledSection>
        <Footer />
      </StyledRootContainer>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
};

DefaultLayout.defaultProps = {
  pageTitle: 'Dennis Mithamo',
};

const StyledRootContainer = styled.div`
  min-height: 100vh;
  position: relative;
  color: var(--themeTextColor);
  background-color: var(--themeBG);
`;

const StyledSection = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 0 1em;
  @media (max-width: ${constants.smallLaptopBreakPoint}) {
    width: 99%;
  }
`;
