import Link from 'next/link';
import styled from 'styled-components';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <StyledContainer>
        You must be lost.&nbsp;
        <Link href="/">Let me take you home</Link>
      </StyledContainer>
    </DefaultLayout>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: var(--themeAccentColor);
    border-radius: 5px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
