// let cardArray = [];

// This function only creates a MANAGER CARD
const managerGen = teamInfo => {

  /*   let managerArr1 = [];
     teamInfo.forEach(function(employee) {
       console.log(employee);
         if(employee.getRole() == "Manager") {
           managerArr1.push(employee)
         }
     })
 */

// let developers = team.filter(member => member.position == "developer")
 let managerData = teamInfo.filter(employee => employee.getRole() == "Manager");
   // Testing condition (IF TRUE add to array, IF FALSE do not add to array)

        

 
 console.log(`Manager Array:`); 
 console.log(managerData);
 
 for (let i = 0; i < managerData.length; i++) {
           // return what is below?
         return (
           `
           <div class="col">
           <div class="card h-100">
             <div class="card-body">
               <h4 class="card-title">NAME: ${managerData[i].name}</h4>
               <h5 class="card-text">Title: ${managerData[i].getRole()}</h5>
               <i class="fas fa-smile-beam"></i>
             </div>
             <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${managerData[i].id} </li>
               <li class="list-group-item">Email: ${managerData[i].email} <a href="" class="card-link"></a></li>
               <li class="list-group-item">Office Number: ${managerData[i].office} </li>
             </ul>
           </div>
         </div>
           `
         )
     } // end of for loop
 }
 
 const devGen = teamInfo => {
   let devData = teamInfo.filter(employee => employee.getRole() == "Developer");
/*   let devData = teamInfo.map(function(employee) {
     if (employee.getRole() == "Developer") {
       return employee;
     }
   });
   */
   console.log(`Developer Array:`);
   console.log(devData);
 
   for (let i = 0; i <= devData.length; i++) {
     return (
       `
       <div class="col">
       <div class="card h-100">
         <div class="card-body">
           <h4 class="card-title">NAME: ${devData[i].name}</h4>
           <h5 class="card-text">Title: ${devData[i].getRole()}</h5>
           <i class="far fa-grin"></i>
         </div>
         <ul class="list-group list-group-flush">
           <li class="list-group-item">ID: ${devData[i].id}</li>
           <li class="list-group-item">Email: ${devData[i].email} <a href="" class="card-link"></a></li>
           <li class="list-group-item">GitHub: ${devData[i].github}<a href="" target="_blank" class="card-link"></a></li>
         </ul>
       </div>
     </div>
       `
     )
   }
 }
 
 const internGen = teamInfo => {
   let internData = teamInfo.filter(employee => employee.getRole() == "Intern");

   console.log(internData);
 
   for (let i = 0; i < internData; i++) {

     return (
       `
       <div class="col">
       <div class="card h-100">
         <div class="card-body">
           <h4 class="card-title">NAME: ${internData[i].name}</h4>
           <h5 class="card-text">Title: ${internData[i].getRole()}</h5>
           <i class="far fa-smile"></i>
         </div>
         <ul class="list-group list-group-flush">
           <li class="list-group-item">ID: ${internData[i].id}</li>
           <li class="list-group-item">Email: ${internData[i].email}<a href="" class="card-link"></a></li>
           <li class="list-group-item">School: ${internData[i].collegeUniversity}</li>
         </ul>
       </div>
     </div>
       `
     )
   }
 }  
     
 
       //return 
   
 
      // return 
     //return [manager.join(''), developer.join(''), intern.join('')]
   //}
 
   // We need a function to see what TYPE of opbest we have in the ARRAY 
   // We loop through the TEAM ARRAY and TEST (evaluate) 
   // if(is an Manager OBJECT ) {
     // generateManager(OBJECT)
   //} else if (is an Developer OBJECT) {
     // run generate Developer OBJECT
   //}
   module.exports = data => {
     return `
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
           integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
           <link href="https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap" rel="stylesheet">
           <link href="../dist/style.css" rel="stylesheet" />
         <title>Developer Pod</title>
       </head>
       <body>
         <header>
           <h1 class="head">MY AWESOME TEAM</h1>
         </header>
         <div class="row row-cols-auto row-cols-md-3 g-4">
       ${managerGen(data)}
       ${devGen(data)}
       ${internGen(data)}
     </body>
     </html>
     `
   }

