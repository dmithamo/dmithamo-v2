import { Document, Page, pdfjs } from 'react-pdf';
import DefaultLayout from '../components/layouts/DefaultLayout';
import PerfectCenter from '../components/PerfectCenter';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function Resume() {
  function onSuccess() {}

  return (
    <DefaultLayout pageTitle="Resume`">
      <PerfectCenter>
        <Document
          className="resume-pdf"
          file="/resume.pdf"
          onLoadError={() => {}}
          onLoadSuccess={onSuccess}
        >
          <Page pageNumber={1} />
        </Document>
      </PerfectCenter>
    </DefaultLayout>
  );
}
