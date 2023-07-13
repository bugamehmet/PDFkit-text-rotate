doc
  .save() // Save the current state of the document
  .translate(startX + 10, startY + 145) // Set the starting point
  .rotate(-90, { origin: [0, 0] }) // Rotate the text at a specific angle
  .font('Roboto-Bold.ttf')
  .fontSize('12')
  .text('DEDUCTIONS AND PENALTIES', 0, 0)
  .restore(); // Restore the document to its previous state
