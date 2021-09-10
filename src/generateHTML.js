// create bootstrap cards for each class: manager, engineer, intern

const managerCard = (manager) => {
    return `<div class="card" style="width: 18rem;" id="manager-card">
    <div class="card-header">Name: ${manager.getName()}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Role: ${manager.getRole()}</li>
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: ${manager.getEmail()}</li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
</div>`;
}

const engineerCard = (engineer) => {
    return `<div class="card" style="width: 18rem;" id="engineer-card">
    <div class="card-header">Name: ${engineer.getName()}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Role: ${engineer.getRole()}</li>
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: ${engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
    </ul>
</div>`;
}

const internCard = (intern) => {
    return `<div class="card" style="width: 18rem;" id="intern-card">
    <div class="card-header">Name: ${intern.getName()}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Role: ${intern.getRole()}</li>
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: ${intern.getEmail()}</li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>`;
}

// for loop over data from inquirer prompt that returns cards to the generateHTML function
function generateCards(createHTML) {
    for (let i = 0; i < createHTML.length; i++) {
        const employeeInfo = createHTML[i];
        const role = employeeInfo.getRole();

        if (role === "Manager") {
            const managerInfo = managerCard(employeeInfo);
        } else {
            if (role === "Engineer") {
                const engineerInfo = engineerCard(employeeInfo);
            } else {
                if (role === "Intern") {
                    const internInfo = internCard(employeeInfo);
                }
            }
        }
    }
};
  
    function generateHTML(dataFromInquirer) {
        return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    
        <!-- application css -->
        <link rel="stylesheet" href="../dist/style.css" />
        <title>Team Profile Generator</title>
    </head>
    
    <header>My Team</header>
    <body>

    ${generateCards(dataFromInquirer)}

    <!-- Added link to the jQuery library -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

    <!-- application js -->
    <script src="../index.js"></script>

    <!-- bootstrap script -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    </body>
    </html>
    `
    }

    module.exports = generateHTML;