import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export default function Button({
  children,
  type,
  category,
  value,
  onClick,
  title,
  disabled,
  alignCenter,
  classes,
}) {
  return (
    <StyledButton className="button">
      <button
        title={title}
        className={`${classes} ${category} ${disabled ? 'disabled' : ''}`}
        onClick={onClick}
        type={type}
        value={value}
        disabled={disabled}
        style={{
          justifyContent: `${alignCenter ? 'center' : 'space-between'}`,
        }}
      >
        {value || children}
      </button>
    </StyledButton>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.string,
  category: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'link',
    'outline',
  ]),
  title: PropTypes.string,
  disabled: PropTypes.bool,
  alignCenter: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'button']),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'button',
  category: 'primary',
  value: '',
  title: '',
  children: null,
  disabled: false,
  alignCenter: false,
  classes: '',
};

const StyledButton = styled.span`
  width: 100%;
  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;

    font-family: inherit;
    padding: 0.85em 1.1em;
    font-weight: bolder;
    outline: none;
    border-radius: 5px;
    cursor: pointer;

    svg {
      font-size: 1.75em;
    }
  }

  button.primary {
    background: none;
    color: var(--black);
    border: 1px solid var(--themeAccentColor);
    background-color: var(--themeAccentColor);

    :hover {
      color: var(--trueBlack);
      background-color: var(--white);
      border: 1px solid var(--trueBlack);
    }
  }

  button.secondary {
    font-weight: normal;
    color: var(--themeSecondaryTextColor);
    background-color: var(--themeSecondaryTextColor);
    border: none;

    :hover {
      filter: brightness(120%);
    }
  }

  button.outline {
    background: none;
    color: var(--white);
    border: 1px solid var(--white);

    :hover {
      background-color: var(--black);
      color: var(--themeAccentColor);
      border: 1px solid var(--themeAccentColor);
    }
  }

  button.danger {
    color: var(--red);
    background-color: none;
    border: var(--red);

    :hover {
      background-color: var(--red);
      color: var(--white);
    }
  }

  button.link {
    padding: 0;
    background: none;
    color: var(--themeTextColor);
    border: none;
    text-decoration: underline;

    :hover {
      color: var(--themeAccentColor);
      font-weight: bold;
    }
  }

  button.disabled {
    cursor: not-allowed;
    color: var(--black);
    background-color: var(--grey);
    :hover {
      color: var(--grey);
      background-color: var(--grey);
    }
  }
`;
