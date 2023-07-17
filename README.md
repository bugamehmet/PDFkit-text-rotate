# PDFkit-text-rotate
Sure! Here's an example README section for the code you provided:

### `doc.save()`, `doc.translate()`, `doc.rotate()`, `doc.font()`, `doc.fontSize()`, `doc.text()`, `doc.restore()`

These methods are part of the PDFKit library and are used to manipulate the document's content, such as adding rotated text.

#### Usage

```javascript
doc
  .save() // Save the current state of the document
  .translate(x, y) // Set the starting point (x, y)
  .rotate(-90, { origin: [0, 0] }) // Rotate the text at a specific angle
  .font('Roboto-Bold.ttf') // Set the font style
  .fontSize('12') // Set the font size
  .text('DEDUCTIONS AND PENALTIES', 0, 0) // Add the text to the document
  .restore(); // Restore the document to its previous state
```

This code snippet demonstrates how to save the current state of the document, translate to a specific starting point, rotate the text by -90 degrees, set the font style and size, add the text "DEDUCTIONS AND PENALTIES" to the document, and then restore the document to its previous state.

Make sure to provide the correct font file path and adjust the `x` and `y` values according to your desired positioning.

You can refer to the [PDFKit documentation](https://pdfkit.org/docs/getting_started.html) for more information on these methods and other functionalities provided by the library.

---

Feel free to adjust and enhance the provided information according to your specific project needs.
