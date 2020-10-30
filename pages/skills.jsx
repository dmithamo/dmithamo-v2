import { css } from '@emotion/core';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function SkillsPage() {
  return (
    <DefaultLayout pageTitle="Skillset">
      <span
        css={css`
          width: 100%;
          height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        And here will be an emuneration of what I can do
      </span>
    </DefaultLayout>
  );
}
