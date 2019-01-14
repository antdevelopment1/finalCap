function dashboardPage(content) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/styles.css">
    <title>Affordable Security Alert</title>
</head>
<body>
    <div class="dashboard-page">
        <nav class="nav-container">
            <div class="nav">
                    <li><a href="/">HOME</a></li>
                    <li>
                    <form action="/logout" method="POST">
                        <button>LOGOUT</button>
                    </form>
                    
                    </li>
            </div>
        </nav>
        <div class="title-container">
            ${content}
            <h1 class="dashboard-title">Pseudo Secure Dashboard</h1>
        </div>
        <div class="dashboard-btns">
            <a href='/registerProduct' class="btn-1 regbtn">REGISTER PRODUCT</a>
            <a href="/editProfile" class="btn-2 editbtn">VIEW ACCOUNT</a>

        </div>
    </div>
</body>
</html>
    `;
}

module.exports = dashboardPage;