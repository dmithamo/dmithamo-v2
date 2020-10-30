import { css } from '@emotion/core';
import { Document, Page, pdfjs } from 'react-pdf';
import DefaultLayout from '../components/layouts/DefaultLayout';
import constants from '../utils/config/constants';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function Resume() {
  function onSuccess() {}

  return (
    <DefaultLayout pageTitle="Resume`">
      <span
        css={css`
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .resume-pdf {
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: auto;
            @media (max-width: ${constants.smallLaptopBreakPoint}) {
              width: 110%;
              zoom: 0.65;
            }
          }
        `}
      >
        <Document
          className="resume-pdf"
          file="/resume.pdf"
          onLoadError={() => {}}
          onLoadSuccess={onSuccess}
        >
          <Page pageNumber={1} />
        </Document>
      </span>
    </DefaultLayout>
  );
}
