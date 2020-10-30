import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import constants from '../utils/config/constants';
import useClickOutside, {
  useEcapeKeyPress,
} from '../utils/hooks/useClickOutside';
import Button from './Button';
import { NAV_LINKS } from './Nav';

export default function FullPageMenu({ onClose }) {
  const ref = useRef(null);
  const router = useRouter();
  useClickOutside(ref, onClose);
  useEcapeKeyPress(onClose);

  const navCTA = NAV_LINKS.find(n => n.isCTA);
  return (
    <div
      ref={ref}
      css={css`
        position: fixed;
        padding: 1em 0;
        top: 0vh;
        right: 0;
        height: 100vh;
        width: 50%;
        z-index: 1001;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.75em;

        background-color: var(--themeBG);
        box-shadow: var(--modalShadow);

        @media (max-width: ${constants.smallLaptopBreakPoint}) {
          width: 65%;
        }

        button.close-btn {
          font-size: 1.2em;
        }

        button.nav-link {
          width: 75%;
          display: flex;
          flex-direction: row-reverse;
          margin: auto;
          padding: 0.8em 1em;
          font-size: 1.1em;
          margin-bottom: 1em;
          text-decoration: none;
          border-radius: 0;
          border-bottom: 1px solid var(--black);

          svg {
            font-size: 1em;
          }

          &:hover {
            color: var(--themeAccentColor);
          }
        }

        button.nav-cta {
          border-radius: 5px;
          border: 1px solid var(--themeAccentColor);
          &:hover {
            color: var(--trueBlack);
          }
        }
      `}
    >
      <>
        {NAV_LINKS.filter(nav => !nav.isCTA).map(link => (
          <Button
            key={link.path}
            onClick={() => {
              onClose();
              router.push(link.path);
            }}
            category="link"
            classes="nav-link"
          >
            <FontAwesomeIcon icon={link.icon} />
            <span>{link.name}</span>
          </Button>
        ))}

        <Button
          key={navCTA.path}
          onClick={() => {
            onClose();
            router.push(navCTA.path);
          }}
          category="primary"
          classes="nav-link nav-cta"
        >
          <FontAwesomeIcon icon={navCTA.icon} />
          <span>{navCTA.name}</span>
        </Button>
      </>

      <Button
        category="link"
        onClick={() => {
          onClose();
        }}
        classes="close-btn"
        alignCenter
      >
        <FontAwesomeIcon icon={['far', 'times-circle']} />
      </Button>
    </div>
  );
}

FullPageMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
