import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

type NavLink = {
  path: string;
  name: string;
  icon: IconProp;
  isCTA: boolean;
};
export const NAV_LINKS: NavLink[] = [
  { path: '/', name: 'home', icon: 'home', isCTA: false },
  {
    path: '/experience',
    name: 'experience',
    icon: 'laptop-code',
    isCTA: false,
  },
  { path: '/skills', name: 'skills', icon: 'cogs', isCTA: false },
  { path: '/resume', name: 'resume`', icon: 'file-pdf', isCTA: false },
  { path: '/contacts', name: 'contacts', icon: 'address-card', isCTA: false },
  { path: '/projects', name: 'projects', icon: 'code-branch', isCTA: true },
];

export default function Nav() {
  const router = useRouter();
  const navCTA = NAV_LINKS.find(n => n.isCTA);
  return (
    <StyledNav>
      {NAV_LINKS.filter(n => !n.isCTA && n.name !== 'home').map(link => (
        <NavItem key={link.path} isCTA={link.isCTA} to={link.path}>
          {link.name}
        </NavItem>
      ))}
      <div className="nav-cta">
        <Button
          alignCenter
          category="primary"
          value={navCTA.name}
          onClick={() => {
            router.push(navCTA.path);
          }}
        />
      </div>
    </StyledNav>
  );
}

export const NavItem = ({ to, children }) => (
  <Link href={to}>
    <StyledNavlink>{children}</StyledNavlink>
  </Link>
);

const StyledNavlink = styled.a`
  text-decoration: none;
  color: var(--themeTextColor);
  padding-bottom: 0.2em;
  border-bottom: 4px solid var(--themeBG);
  cursor: pointer;
`;

NavItem.propTypes = {
  isCTA: PropTypes.bool,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  isCTA: false,
};

const StyledNav = styled.nav`
  a:hover,
  a.active {
    color: var(--themeAccentColor);
    border-bottom: 4px solid var(--themeAccentColor);
  }
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div.nav-cta {
    width: 150px;
  }
  @media (max-width: 1200px) {
    width: 40%;
  }
`;
