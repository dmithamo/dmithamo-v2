import { css } from '@emotion/core';
import Link from 'next/link';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <span
        css={css`
          width: 100%;
          height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        You must be lost.&nbsp;
        <Link
          css={css`
            color: var(--themeAccentColor);
            border-radius: 5px;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          `}
          href="/"
        >
          Let me take you home
        </Link>
      </span>
    </DefaultLayout>
  );
}
