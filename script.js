// Handle Loan Application Submission
document.getElementById('loan-form')?.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from refreshing page

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const duration = parseInt(document.getElementById('duration').value);
  const income = parseFloat(document.getElementById('income').value);

  if (amount > 10 * income) {
    alert('Loan application denied: Requested amount exceeds 10x your monthly income.');
  } else {
    alert(`Thank you, ${name}! Your loan application has been submitted. We will contact you at ${email}.`);
  }
});
// Select the canvas element
const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');

// Set background color for the logo
ctx.fillStyle = '#007BFF'; // Blue color
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw a circle (symbolizing trust and unity)
ctx.beginPath();
ctx.arc(50, 50, 40, 0, 2 * Math.PI); // x, y, radius
ctx.fillStyle = '#FFFFFF'; // White color
ctx.fill();

// Add a smaller circle inside
ctx.beginPath();
ctx.arc(50, 50, 25, 0, 2 * Math.PI);
ctx.fillStyle = '#00C8C8'; // Cyan color
ctx.fill();

// Write the company name
ctx.fillStyle = '#FFFFFF'; // White text
ctx.font = 'bold 20px Arial'; // Font size and style
ctx.textAlign = 'center';
ctx.fillText('QuickLoans', 140, 60); // x, y (adjust for placement)