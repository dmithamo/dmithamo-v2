import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Logo({ showName }) {
  return (
    <Link href="/">
      <StyledLogo>{showName && <h3>dmithamo&trade;</h3>}</StyledLogo>
    </Link>
  );
}

Logo.propTypes = {
  showName: PropTypes.bool,
};

Logo.defaultProps = {
  showName: true,
};

const StyledLogo = styled.a`
  cursor: pointer;

  h3 {
    color: var(--themeTextColor);
    font-family: var(--primaryBold);
    font-size: 1.5em;
  }

  :hover {
    filter: brightness(200%);
  }
`;
