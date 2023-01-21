// function to generate html for pages
function generateHTML(data) {
  let header = "Employee Information";
  let tags = ["template literals", "javascript", "es6"];

  let html = 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.memberName}</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <h2>${header}</h2>
      <h3>Team Manager's Name: ${data.teammanagerName}</h3>
      <h3>Employee ID: ${data.employeeId}</h3>
      <h3>Employee Email: 
        <a href="mailto:${data.employeeEmail}">${data.employeeEmail}</a>
      </h3>
      <h3>Office Number: ${data.officeNumber}</h3>  
    </body>
    </html> 
    `;
  return html
}

module.exports = generateHTML;