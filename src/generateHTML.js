// create bootstrap cards for each class
const managerCard = (employee) => {
    return `<div class="card" style="width: 18rem;" id="manager-card">
    <div class="card-header">Featured</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${employee.getName()}</li>
        <li class="list-group-item">${employee.getId()}</li>
        <li class="list-group-item">A third item</li>
    </ul>
</div>`
}

// for loop over data from inquirer prompt that returns cards to the generateHTML function
// generateCards(whateveryouwantotcallit){
//    for(let i=0; i < whateveryouwanttocallit.length; i++){
//      if(whateverryouwanttocallit[i] === "Manager"){ managercard stuff }
//      }
//      
// }

function generateHTML(dataFromInquirer){
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
    
    <body>
    <header>My Team</header>
    function to generate all the cards
       ${generateCards(dataFromInquirer)}
    </body>
    `
}

module.exports = generateHTML;