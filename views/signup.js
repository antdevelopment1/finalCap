function signUpPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="styles/styles.css">
        <title>Affordable Security Alert</title>
    </head>
    <body>
        <div class="signup-page">
                <nav class="nav-container">
                        <div class="nav">
                                <li><a href="/">HOME</a></li>
                        </div>
                    </nav>
              <div class="signup-form-title">
                  <h1 class="signup-title">Pseudo Secure Sign Up Form</h1> 
                  <h2>Please fill in the information below to join the PS Initiative.</h2>
               </div>
                     <form action="/signup"  method="post" class="signup-form">  
                      <div class="signup-form-child">
                        <label for="firstname" class="label ">First Name:</label>
                        <div class="field">
                          <input name="firstname" id="firstname"  type="text"  value="" placeholder="First Name" class="signup-input" required>
                        </div>
                      </div>
                       <div class="signup-form-child">
                           <label for="lastname" class="label">Last Name:</label>
                           <div class="field">
                               <input name="lastname" id="lastname"  type="text"  value="" placeholder="Last Name" class="signup-input" required>
                           </div>
                       </div>
                       <div class="signup-form-child">
                        <label for="email" class="label">Email:</label>
                        <div class="field">
                            <input name="email" id="email"  type="email"  value="" placeholder="Email" class="signup-input" required>
                        </div>
                      </div>
                      <div class="signup-form-child">
                        <label for="username" class="label">Username:</label>
                        <div class="field">
                            <input name="username" id="username"  type="text"  value="" placeholder="Username" class="signup-input" required>
                        </div>
                    </div>
                  <div class="signup-form-child">
                    <label for="password" class="label">Password:</label>
                    <div class="field">
                        <input name="password" id="password"  type="text"  value="" placeholder="Password" class="signup-input" required>
                    </div>
                  </div>
                      <div class="signup-form-child signup-submit">
                        <div class="signup-submit-btn-container">
                          <input id="signup-submit" name="saveForm" type="submit" value="Sign Up" class="signup-submit-btn">
                        </div>
                      </div>
                    </form>
        <script src="scripts/index.js"></script>
    </body>
    </html>`;
}

module.exports = signUpPage;