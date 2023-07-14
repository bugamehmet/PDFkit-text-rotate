doc
  .save() // Save the current state of the document
  .translate( x, y ) // Set the starting point (x , y)
  .rotate(-90, { origin: [0, 0] }) // Rotate the text at a specific angle
  .font('Roboto-Bold.ttf')
  .fontSize('12')
  .text('DEDUCTIONS AND PENALTIES', 0, 0)
  .restore(); // Restore the document to its previous state
