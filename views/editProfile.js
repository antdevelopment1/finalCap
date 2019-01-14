function editProfilePage() {
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
    <div class="edit-profile-page">
        <nav class="nav-container">
            <div class="nav">
                    <li><a href="/dashboard">DASHBOARD</a></li>
                    <form action="/logout" method="POST">
                        <button>LOGOUT</button>
                    </form>
            </div>
        </nav>
        <div class="edit-title-container">
            <h1 class="edit-title">Edit Profile</h1>
        </div>
            <div class="edit-button-container-top">
                <a href="/editUsername" class="edit-btn">UPDATE USERNAME</a>
                <a href="/editPassword" class="edit-btn">UPDATE PASSWORD</a>
            </div>
            <div class="edit-button-container-bottom">
                <a href="/editEmail" class="edit-btn">UPDATE EMAIL</a>
                <a href="/editPhonenumber" class="edit-btn">UPDATE PHONE NUMBER</a>
            </div>
    </div>
    <script src="scripts/index.js"></script>
</body>
</html>
    `;
}

module.exports = editProfilePage;