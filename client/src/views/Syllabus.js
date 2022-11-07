import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import syllabus from "../utils/syllabus.pdf";

class Syllabus extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    return (
      <div className="container" style={{ alignContent: "center" }}>
        <nav>
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.goToPrevPage}
          >
            Prev
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.goToNextPage}
          >
            Next
          </button>
          <a href="https://nuvc-public.s3.ap-south-1.amazonaws.com/Detailed+Advertisement+and+syllabus%5B1%5D.pdf">
            <button type="button" class="btn btn-success">
              View PDF
            </button>
          </a>
        </nav>

        <div style={{ width: 600 }}>
          <Document file={syllabus} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={1000} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
        <nav>
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.goToPrevPage}
          >
            Prev
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.goToNextPage}
          >
            Next
          </button>
          <a href="https://nuvc-public.s3.ap-south-1.amazonaws.com/Detailed+Advertisement+and+syllabus%5B1%5D.pdf">
            <button type="button" class="btn btn-success">
              View PDF
            </button>
          </a>
        </nav>
      </div>
    );
  }
}

export default Syllabus;
