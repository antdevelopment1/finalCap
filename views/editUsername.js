function editUsernamePage() {
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
    <div class="edit-username-page">
            <nav class="nav-container">
                    <div class="nav">
                            <li><a href="/">HOME</a></li>
                            <li><a href="/editProfile">DASHBOARD</a></li>
                    </div>
                </nav>
                <div class="edit-username-form-title">
                    <h1 class="edit-username-title">Update Username</h1> 
                    <h2>Please fill in the information below to edit your username.</h2>
                </div>
                 <form action="/login" method="POST" class="edit-username-form">  
                  <div class="edit-username-form-child">
                    <label for="username" class="label">Current Username:</label>
                    <div class="field">
                      <input name="username" id="username"  type="text"  value="" placeholder="Current Username" class="edit-username-input" required>
                    </div>
                  </div>
                   <div class="edit-username-form-child">
                       <label for="password" class="label">New Username:</label>
                       <div class="field">
                           <input name="password" id="password"  type="text"  value="" placeholder="New Username" class="edit-username-input" required>
                       </div>
                   </div>
                   <div class="edit-username-form-child login-submit">
                    <div class="login-submit-btn-container">
                      <input id="login-submit" name="saveForm" type="submit" value="SAVE" class="login-submit-btn">
                    </div>
                  </div>
                </form>
    <script src="scripts/index.js"></script>
</body>
</html>
    `;
}

module.exports = editUsernamePage;