import { css } from '@emotion/core';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function ExperiencePage() {
  return (
    <DefaultLayout pageTitle="Experience">
      <span
        css={css`
          width: 100%;
          height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        And here will be an emuneration of what programming jobs I have held to
        date
      </span>
    </DefaultLayout>
  );
}
