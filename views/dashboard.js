function dashboardPage() {
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
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="index.html">LOGOUT</a></li>
            </div>
        </nav>
        <div class="title-container">
            <h1 class="dashboard-title">Pseudo Secure</h1>
        </div>
        <div class="dashboard-btn-container">
            <a href="/" class="btn-1">REGISTER PRODUCT</a>
            <a href="/" class="btn-2">VIEW ACCOUNT</a>

        </div>
    </div>
</body>
</html>
    `;
}

module.exports = dashboardPage;