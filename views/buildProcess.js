function buildProcessPage() {
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
        <div class="building-title-container">
            <h1 class="building-title">Building Process</h1>
        </div>
        <div class="main-img-container">
            <div class="image-container">
                <div class="image">
                    <img src="../tempImg.jpg" alt="" class="img">
                    <figcaption>SOME CAPTION HERE</figcaption>
                </div>
                <div class="image">
                    <img src="../tempImg.jpg" alt="" class="img">
                    <figcaption>SOME CAPTION HERE</figcaption>
                </div>
                <div class="image">
                    <img src="../tempImg.jpg" alt="" class="img">
                    <figcaption>SOME CAPTION HERE</figcaption>
                </div>
            </div>
            <div class="image-container">
                <div class="image">
                    <img src="../tempImg.jpg" alt="" class="img">
                    <figcaption>SOME CAPTION HERE</figcaption>
                </div>
                <div class="image">
                    <img src="../tempImg.jpg" alt="" class="img">
                    <figcaption>SOME CAPTION HERE</figcaption>
                </div>
                <div class="image">
                    <img src="../tempImg.jpg" alt="" class="img">
                    <figcaption>SOME CAPTION HERE</figcaption>
                </div>
            </div>
            <div class="image-container">
                <div class="image">
                    <img src="../tempImg.jpg" alt="" class="img">
                    <figcaption>SOME CAPTION HERE</figcaption>
                </div>
                <div class="image">
                    <img src="../tempImg.jpg" alt="" class="img">
                    <figcaption>SOME CAPTION HERE</figcaption>
                </div>
                <div class="image">
                    <img src="../tempImg.jpg" alt="" class="img">
                    <figcaption>SOME CAPTION HERE</figcaption>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`;
}


module.exports = buildProcessPage;