import { css } from 'emotion';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
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
      <div
        className="root-container"
        css={css`
          min-height: 100vh;
          position: relative;
          color: var(--themeTextColor);
          background-color: var(--themeBG);
        `}
      >
        <Header
          showMenu={showFullPageMenu}
          onToggleShowMenu={setShowFullPageMenu}
        />
        <section
          id="section-main"
          css={css`
            width: 90%;
            margin: 0 auto;
            padding: 0 1em;
            @media (max-width: ${constants.smallLaptopBreakPoint}) {
              width: 99%;
            }
            filter: blur(${showFullPageMenu ? '0.2em' : '0'});
            opacity: ${showFullPageMenu ? '0.75' : '1'};
          `}
        >
          {children}
        </section>
        <Footer />
      </div>
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
