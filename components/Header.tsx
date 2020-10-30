import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import constants from '../utils/config/constants';
import Button from './Button';
import FullPageMenu from './FullPageMenu';
import Logo from './Logo';
import Nav from './Nav';

type HeaderProps = {
  showMenu: boolean;
  onToggleShowMenu: (arg0: any) => void;
};

const Header: React.FC<HeaderProps> = ({
  showMenu,
  onToggleShowMenu,
}: HeaderProps) => {
  return (
    <>
      <header
        css={css`
          padding: 1em 3em;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          box-shadow: ${showMenu ? 'none' : 'var(--modalShadow)'};
          position: relative;

          div.toggle-menu {
            display: none;
          }

          @media (max-width: ${constants.smallLaptopBreakPoint}) {
            div.toggle-menu {
              display: inline-block;
            }

            nav,
            div.cta {
              display: none;
            }
          }
        `}
      >
        <Logo />
        <Nav />
        <div className="toggle-menu">
          <Button
            category="link"
            onClick={() => {
              onToggleShowMenu(!showMenu);
            }}
          >
            <FontAwesomeIcon
              icon={showMenu ? ['far', 'times-circle'] : 'bars'}
            />
          </Button>
        </div>

        {showMenu && (
          <FullPageMenu
            onClose={() => {
              onToggleShowMenu(false);
            }}
          />
        )}
      </header>
    </>
  );
};

export default Header;
