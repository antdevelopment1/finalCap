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
                 <form action="#">  
                      
                   <div class="form-children register">
                     <label for="text1" class="label ">Username:</label>
                     <div class="field">
                       <input name="text1" id="text1"  type="text"  value="" placeholder="Username" required>
                     </div>
                   </div>
                    <div class="form-children">
                        <label for="text1" class="label">Password:</label>
                        <div class="field">
                            <input name="text1" id="text1"  type="text"  value="" placeholder="Password" required>
                        </div>
                    </div>
                
                   
                   <div class="form-children register1">
                     <div class="field">
                       <input id="saveForm" name="saveForm" type="submit" value="SIGN IN">
                     </div>
                   </div>
                
                 </form>
    <script src="scripts/index.js"></script>
</body>
</html>
    `;
}

module.exports = loginPage;