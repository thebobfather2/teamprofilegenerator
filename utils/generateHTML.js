// Create team generating function
const generateTeam = team => {

  // Generate Manager card
  const generateManager = manager => {
      return `
      <div class="card employee-card mr-4">
      <div class="card-header">
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-title"><i class=""></i>${manager.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
          </ul>
      </div>
  </div>
      `;
  };

   // Generate Engineer card
   const generateEngineer = engineer => {
    return `
    <div class="card employee-card mr-4">
<div class="card-header">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title"><i class=""></i>${engineer.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" >${engineer.getGithub()}</a></li>
    </ul>
</div>
</div>
    `;
};

// create the html for interns
const generateIntern = intern => {
    return `
    <div class="card employee-card mr-4">
<div class="card-header">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title"><i class=""></i>${intern.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>
</div>
    `;
};

const html = [];

html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
);
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
);
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
);

return html.join("");

}

// export function to generate entire page
module.exports = team => {

return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<title>My Team</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron mb-3">
            <h1 class="text-center">Our Team</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="team-area bg-light col-12 d-flex justify-content-center">
            ${generateTeam(team)}
        </div>
    </div>
</div>
</body>
</html>
`;
};


// // function to generate html for pages
// function generateHTML(data) {
//   let header = "Employee Information";
//   let tags = ["template literals", "javascript", "es6"];

//   let html = 
//     `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>${data.memberName}</title>
//         <link rel="stylesheet" href="./style.css">
//     </head>
//     <body>
//       <h2>${header}</h2>
//       <h3>Employee Name: ${data.teammanagerName}</h3>
//       <h3>Team Manager's Name: ${data.teammanagerName}</h3>
//       <h3>Employee ID: ${data.employeeId}</h3>
//       <h3>Employee Email: 
//         <a href="mailto:${data.employeeEmail}">${data.employeeEmail}</a>
//       </h3>
//       <h3>Office Number: ${data.officeNumber}</h3>  
//     </body>
//     </html> 
//     `;
//   return html
// }

// module.exports = generateHTML;