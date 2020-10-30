import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
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
      <StyledHeader
        style={{ boxShadow: showMenu ? 'none' : 'var(--modalShadow)' }}
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
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.header`
  padding: 1em 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
`;

export default Header;
