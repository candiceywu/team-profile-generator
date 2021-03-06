// create bootstrap cards for each class: manager, engineer, intern

const managerCard = (manager) => {
    return `<div class="card" style="width: 18rem;" id="manager-card">
    <div class="card-header name">Name: ${manager.getName()}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item role">Role: ${manager.getRole()}</li>
        <li class="list-group-item id">ID: ${manager.getId()}</li>
        <li class="list-group-item email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item office-number">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
</div>`;
}

const engineerCard = (engineer) => {
    return `<div class="card" style="width: 18rem;" id="engineer-card">
    <div class="card-header name">Name: ${engineer.getName()}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item role">Role: ${engineer.getRole()}</li>
        <li class="list-group-item id">ID: ${engineer.getId()}</li>
        <li class="list-group-item email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item github">GitHub: <a href="https://github.com/${engineer.getGithub()}"target="_blank">${engineer.getGithub()}</li>
    </ul>
</div>`;
}

const internCard = (intern) => {
    return `<div class="card" style="width: 18rem;" id="intern-card">
    <div class="card-header name">Name: ${intern.getName()}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item role">Role: ${intern.getRole()}</li>
        <li class="list-group-item id">ID: ${intern.getId()}</li>
        <li class="list-group-item email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item school">School: ${intern.getSchool()}</li>
    </ul>
</div>`;
}



// for loop over data from inquirer prompt that returns cards to the generateHTML function
function generateCards(teamMember) {

    //card array to loop through each item
    const cardArray = [];

    for (let i = 0; i < teamMember.length; i++) {
        const employeeInfo = teamMember[i];
        const role = employeeInfo.getRole();

        //calls manager card function
        if (role === "Manager") {
            const managerInfo = managerCard(employeeInfo);

            cardArray.push(managerInfo);

            //calls engineer card function
        } else {
            if (role === "Engineer") {
                const engineerInfo = engineerCard(employeeInfo);

                cardArray.push(engineerInfo);

                //calls intern card function
            } else {
                if (role === "Intern") {
                    const internInfo = internCard(employeeInfo);

                    cardArray.push(internInfo);
                }
            }
        }
    }

    //need to join strings 
    const teamCards = cardArray.join('');

    //need to return info to generated page
    return teamCards;
};



function generateHTML(teamCards) {
    console.log(teamCards);
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

    <div class="container">
    ${generateCards(teamCards)}
    </div>

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

//module exports to index.js
module.exports = generateHTML;