function dashboardPage() {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./../styles/styles.css">
    <title>Affordable Security Alert</title>
</head>
<body>
    <div class="landing-page">
        <nav class="nav-container">
            <div class="nav">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">LOGOUT</a></li>
            </div>
        </nav>
        <div class="title-container">
            <h1 class="title">The Dashboard</h1>
        </div>
        <div class="dashboad-btns">
            <a href="./betaProto.html" class="btn-1 regbtn">REGISTER PRODUCT</a>
            <a href="./registerProduct.html" class="btn-2 editbtn">EDIT PROFILE</a>
        </div>
    </div>
</body>
</html>
    `;
}

module.exports = dashboardPage;