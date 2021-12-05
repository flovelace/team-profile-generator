const renderPage = genTeam => {

  const manager = genTeam.manager.map(function (team) {
    // use let so variable can be updated
    let managerCard = `
    <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title"><b>Name:</b> ${team.name}</h4>
        <h5 class="card-text"><b>Title:</b> ${team.getRole()}</h5>
        <i class="fas fa-smile-beam"></i>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>ID:</b> ${team.id}</li>
        <li class="list-group-item"><b>Email:</b> ${team.email}</li>
        <li class="list-group-item"><b>Office Number:</b> ${team.office}</li>
      </ul>
    </div>
  </div>
    `
    return managerCard
  });

  const developer = genTeam.developer.map(function (team) {
    let developerCard = `
    <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title"><b>Name:</b> ${team.name}</h4>
        <h5 class="card-text"><b>Title:</b> ${team.getRole()}</h5>
        <i class="far fa-grin"></i>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>ID:</b> ${team.id}</li>
        <li class="list-group-item"><b>Email:</b> ${team.email}</li>
        <li class="list-group-item"><b>GitHub:</b> ${team.github}<a href="" target="_blank" class="card-link"></a></li>
      </ul>
    </div>
  </div>
    `
    return developerCard
  });

  const intern = genTeam.intern.map(function (team) {
    let internCard = `
    <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title"><b>Name:</b> ${team.name}</h4>
        <h5 class="card-text"><b>Title:</b> ${team.getRole()}</h5>
        <i class="far fa-smile"></i>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>ID:</b> ${team.id}</li>
        <li class="list-group-item"><b>Email:</b> ${team.email}</li>
        <li class="list-group-item"><b>University/College:</b> ${team.collegeUniversity}</li>
      </ul>
    </div>
  </div>
    `
    return internCard
  });

  return [manager.join(''), developer.join(''), intern.join('')]

}

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
      ${renderPage(data).join('')}
     </body>
     </html>
     `
}

