const url = 'researchpaper/research-paper.pdf'; // Path to your PDF

let pdfDoc = null;
const scale = 1.5;  // Adjust the scale to change size of the rendered PDF
const pdfViewer = document.getElementById('pdf-viewer');

// Render each page
const renderPage = num => {
  pdfDoc.getPage(num).then(page => {
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    pdfViewer.appendChild(canvas);

    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext).promise.then(() => {
      if (num < pdfDoc.numPages) {
        renderPage(num + 1);  // Recursively render the next page
      }
    });
  });
};

// Load the PDF document
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
  pdfDoc = pdfDoc_;
  renderPage(1);  // Start rendering from page 1
});
