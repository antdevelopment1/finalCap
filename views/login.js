function loginPage() {
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
    <div class="landing-page">
            <nav class="nav-container">
                    <div class="nav">
                            <li><a href="/">HOME</a></li>
                        
                    </div>
                </nav>
            <header>
                    <h1 class="registerh1">Pseudo Secure Login In Form</h1> 
                    <h2>Please fill in the information below to login to your account.</h2>
                 </header>
                 <form action="#" class="register-product-form">  
                  <div class="register-form-child">
                    <label for="username" class="label">Username:</label>
                    <div class="field">
                      <input name="username" id="username"  type="text"  value="" placeholder="Username" class="register-input" required>
                    </div>
                  </div>
                   <div class="register-form-child">
                       <label for="password" class="label">Password:</label>
                       <div class="field">
                           <input name="password" id="password"  type="text"  value="" placeholder="Password" class="register-input" required>
                       </div>
                   </div>
                  <div class="register-form-child register-submit">
                    <div class="register-submit-btn-container">
                      <input id="reg-submit" name="saveForm" type="submit" value="Login" class="register-submit-btn">
                    </div>
                  </div>
                </form>
    <script src="scripts/index.js"></script>
</body>
</html>
    `;
}

module.exports = loginPage;