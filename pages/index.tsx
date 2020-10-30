import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import DefaultLayout from '../components/layouts/DefaultLayout';
import constants from '../utils/config/constants';

export default function Homepage() {
  const router = useRouter();
  return (
    <DefaultLayout pageTitle="Home">
      <div
        className="root-container"
        css={css`
          margin: auto;
          width: 90%;

          @media (max-width: ${constants.smallLaptopBreakPoint}) {
          }
        `}
      >
        <div
          className="container"
          css={css`
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 90vh;
            margin: auto;
            font-size: 1.2em;

            @media (max-width: ${constants.smallLaptopBreakPoint}) {
              flex-direction: column;

              div.img {
                width: 250px;
                border-radius: 20% 20% 0 20%;
                img {
                  border-radius: 20% 20% 0 20%;
                }
              }

              div.details {
                width: 100%;
                align-items: center;
                justify-content: center;
                padding: 0.5em;

                h2.name {
                  font-size: 2em;
                }

                h2.subtitle {
                  font-size: 1.6em;
                }
              }

              div.actions {
              }
            }
          `}
        >
          <div
            className="img animate-transition-1"
            css={css`
              background-color: var(--trueBlack);
              width: 400px;
              border-radius: 20% 0 20% 20%;
              transform: rotate(45deg);
              :hover {
                transform: rotate(0);

                img {
                  transform: translateX(0) translateY(0);
                }
              }
            `}
          >
            <Image
              src="/myPic.jpg"
              alt="Dennis Mithamo"
              width={400}
              height="auto"
              css={css`
                transform: translate(20px, 20px);
                border-radius: 20% 0 20% 20%;
              `}
            />
          </div>
          <div
            className="details"
            css={css`
              padding: 2em;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: space-evenly;
              color: var(--offWhite) !important;
            `}
          >
            <div className="name-plus">
              <p
                className="salutation"
                css={css`
                  color: var(--themeAccentColor);
                `}
              >
                Hi, my name is
              </p>
              <h2
                className="name"
                css={css`
                  font-weight: bold;
                  font-family: var(--primaryFontBold);
                  font-size: 4em;
                  margin: 0;
                  color: var(--white);
                `}
              >
                Dennis Mithamo
              </h2>
              <h2
                className="subtitle"
                css={css`
                  font-size: 2em;
                  margin-bottom: 1.5em;
                  font-family: var(--primaryFontMedium);
                  opacity: 0.8;
                `}
              >
                Software Engineer
              </h2>
              <p
                className="description"
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                `}
              >
                <span>
                  I build cool stuff with code for a living and for fun.
                </span>
                <span>I have been at it for just about two years now.</span>
              </p>

              <p
                className="links-social"
                css={css`
                  border-radius: 20px;
                  cursor: pointer;
                  width: 100%;
                  margin: 3em 0;
                  padding: 1em;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  opacity: 1;
                  svg {
                    font-size: 2.2em;
                  }

                  a.github {
                    color: var(--white);
                  }

                  a.linkedin {
                    color: var(--linkedInBlue);
                  }

                  a.email {
                    color: var(--gmailRed);
                  }

                  a.home {
                    color: var(--locationYellow);
                  }

                  a.social-link {
                    :hover {
                      color: var(--themeAccentColor);
                    }
                  }
                `}
              >
                <a
                  href="https://github.com/dmithamo"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="GitHub: @dmithamo"
                  className="social-link github"
                >
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
                <a
                  href="https://linkedin.com/in/dennis-mithamo"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="LinkedIn: Dennis Mithamo"
                  className="social-link linkedin"
                >
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
                <a
                  href="mailto:dennisbmithamo@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Email: dennisbmithamo@gmail.com"
                  className="social-link email"
                >
                  <FontAwesomeIcon icon="inbox" />
                </a>
                <a
                  href="https://goo.gl/maps/7YXgDewY5JKTZJiS8"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Based in: Nairobi, Kenya"
                  className="social-link home"
                >
                  <FontAwesomeIcon icon="map-marker-alt" />
                </a>
              </p>

              <div
                className="actions"
                css={css`
                  width: 100%;
                  margin-top: 2em;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;

                  span.button {
                    width: 47%;
                  }
                `}
              >
                <Button
                  onClick={() => {
                    router.push('/experience');
                  }}
                  alignCenter
                  category="outline"
                >
                  Experience
                </Button>
                <Button
                  onClick={() => {
                    router.push('/projects');
                  }}
                  classes="isCTA"
                  alignCenter
                  category="primary"
                >
                  Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
