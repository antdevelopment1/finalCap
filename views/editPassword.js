function editPasswordPage() {
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
    <div class="edit-password-page">
            <nav class="nav-container">
                    <div class="nav">
                            <li><a href="/">HOME</a></li>
                            <li><a href="/editProfile">DASHBOARD</a></li>
                    </div>
                </nav>
                <div class="edit-password-form-title">
                    <h1 class="edit-password-title">Update Password</h1> 
                    <h2>Please fill in the information below to edit your password.</h2>
                </div>
                 <form action="/editPassword" method="POST" class="edit-password-form">  
                  <div class="edit-password-form-child">
                    <label for="password" class="label">Current Password:</label>
                    <div class="field">
                      <input name="password" id="password"  type="text"  value="" placeholder="Current Password" class="edit-password-input" required>
                    </div>
                  </div>
                   <div class="edit-password-form-child">
                       <label for="newPassword" class="label">New Password:</label>
                       <div class="field">
                           <input name="newPassword" id="newPassword"  type="text"  value="" placeholder="New Password" class="edit-password-input" required>
                       </div>
                   </div>
                   <div class="edit-password-form-child login-submit">
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

module.exports = editPasswordPage;