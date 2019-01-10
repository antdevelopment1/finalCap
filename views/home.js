function homePage() {
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
                    <li><a href="/signup">SIGN UP</a></li>
                    <li><a href="/login">LOGIN</a></li>
            </div>
        </nav>
        <div class="title-container">
            <h1 class="title">The Pseudo Secure Initiative</h1>

            <p class="title-p">No one should have to budget for peace of mind.</p>
        </div>
        <div class="button-container">
            <a href="./betaProto.html" class="btn-1">BUILD PROCESS</a>
            <a href="./registerProduct.html" class="btn-2">REGISTER</a>
        </div>
    </div>
    <script src="scripts/index.js"></script>
</body>
</html>
    `;
}

module.exports = homePage;