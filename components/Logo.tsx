import { css } from '@emotion/core';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Logo({ showName }) {
  return (
    <Link
      css={css`
        text-decoration: none;
      `}
      href="/"
    >
      <h3
        css={css`
          color: var(--themeTextColor);
          font-family: var(--primaryBold);
        `}
      >
        {showName && 'dmithamo'}
      </h3>
    </Link>
  );
}

Logo.propTypes = {
  showName: PropTypes.bool,
};

Logo.defaultProps = {
  showName: true,
};
