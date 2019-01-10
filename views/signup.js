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
        <div class="landing-page">
                <nav class="nav-container">
                        <div class="nav">
                                <li><a href="/">HOME</a></li>
                        </div>
                    </nav>
                <header>
                        <h1>Pseudo Secure Sign Up Form</h1> 
                        <h2>Please fill in the information below to join the PS Initiative.</h2>
                     </header>
                     <form action="#">  
                       <div class="form-children">
                         <label for="text1" class="label">First Name:</label>
                         <div class="field">
                           <input name="text1" id="text1"  type="text"  value="" placeholder="First Name" required>
                         </div>
                       </div>
                        <div class="form-children">
                            <label for="text1" class="label">Last Name:</label>
                            <div class="field">
                                <input name="text1" id="text1"  type="text"  value="" placeholder="Last Name" required>
                            </div>
                        </div>
                       <div class="form-children">
                         <label for="email1" class="label">Email:</label>
                         <div class="field">
                           <input name="email1" id="email1" type="email" spellcheck="false"  value="" placeholder="Email field" required> 
                         </div>
                       </div>
                       <div class="form-children">
                            <label for="text1" class="label">Username:</label>
                            <div class="field">
                                <input name="text1" id="text1"  type="text"  value="" placeholder=Username required>
                            </div>
                        </div>
                        <div class="form-children">
                            <label for="text1" class="label">Password:</label>
                            <div class="field">
                              <input name="text1" id="text1"  type="text"  value="" placeholder=Password required>
                            </div>
                        </div>
                       <div class="form-children">
                         <label for="tel1" class="label">Phone Number:</label>         
                         <div class="field">
                           <input name="tel1" id="tel1" type="tel" value="" placeholder="Phone Number" required>
                         </div>
                       </div>
                       <div class="form-children">
                         <div class="field">
                           <input id="saveForm" name="saveForm" type="submit" value="Sign Up">
                         </div>
                       </div>
                     </form>
        <script src="scripts/index.js"></script>
    </body>
    </html>`;
}

module.exports = signUpPage;