import { css } from '@emotion/core';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function Projects() {
  return (
    <DefaultLayout pageTitle="Projects">
      <span
        css={css`
          width: 100%;
          height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        And here will be details of the stuff I am working on for growth as a
        dev
      </span>
    </DefaultLayout>
  );
}
