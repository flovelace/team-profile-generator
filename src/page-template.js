const pageGen = teamInfo => {

    
      `
      <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">NAME</h4>
          <h5 class="card-text">Title: </h5>
          <i class="fas fa-smile-beam"></i>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: </li>
          <li class="list-group-item">Email: <a href="" class="card-link"></a></li>
          <li class="list-group-item">Office Number: </li>
        </ul>
      </div>
    </div>
      `
      return 
  
    
       `
      <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">NAME</h4>
          <h5 class="card-text">Title: </h5>
          <i class="far fa-grin"></i>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: </li>
          <li class="list-group-item">Email: <a href="" class="card-link"></a></li>
          <li class="list-group-item">GitHub: <a href="" target="_blank" class="card-link"></a></li>
        </ul>
      </div>
    </div>
      `
      return 

  
    `
      <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title"></h4>
          <h5 class="card-text">Title: </h5>
          <i class="far fa-smile"></i>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: </li>
          <li class="list-group-item">Email: <a href="" class="card-link"></a></li>
          <li class="list-group-item">School: </li>
        </ul>
      </div>
    </div>
      `
      return 
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
      ${pageGen(data).join('')}
    </body>
    </html>
    `
  }