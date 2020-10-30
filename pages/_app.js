import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faGooglePlus,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faAddressCard,
  faBars,
  faCodeBranch,
  faCogs,
  faFilePdf,
  faHome,
  faInbox,
  faInfoCircle,
  faLaptopCode,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import '../styles/darkTheme.css';
import '../styles/globals.css';

// Awesome icons
(() => {
  library.add(
    fab,
    faBars,
    faTimesCircle,
    faHome,
    faCodeBranch,
    faAddressCard,
    faInfoCircle,
    faFilePdf,
    faLinkedin,
    faGooglePlus,
    faMapMarkerAlt,
    faLaptopCode,
    faInbox,
    faCogs,
  );
})();
// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('../pace');
  });
  return <Component {...pageProps} />;
}

export default MyApp;
