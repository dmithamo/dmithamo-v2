import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooter>
      <span>
        <a
          href="https://github.com/dmithamo"
          target="_blank"
          rel="noreferrer external noopener"
        >
          &copy;{new Date().getFullYear()} dmithamo
        </a>
      </span>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 0.2em;
  font-family: var(-primaryFontThin);

  span {
    opacity: 0.2;

    a {
      text-decoration: none;
      color: var(--themeAccentColor);
    }

    &:hover {
      opacity: 1;
    }
  }
`;
