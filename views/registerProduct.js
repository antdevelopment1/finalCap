function registerPage() {
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
    <div class="register-page">
            <nav class="nav-container">
                    <div class="nav">
                            <li><a href="/">HOME</a></li>
                    </div>
                </nav>
            <div class="register-form-title">
                    <h1 class="register-title">Pseudo Secure Register Product Form</h1> 
                    <h2>Please fill in the information below to register your product.</h2>
            </div>
                 <form action="#" class="register-product-form">  
                   <div class="register-form-child">
                     <label for="text1" class="label ">Serial Number:</label>
                     <div class="field">
                       <input name="text1" id="text1"  type="text"  value="" placeholder="Serial Number" class="register-input" required>
                     </div>
                   </div>
                    <div class="register-form-child">
                        <label for="text1" class="label">Phone Number:</label>
                        <div class="field">
                            <input name="text1" id="text1"  type="text"  value="" placeholder="Phone Number" class="register-input" required>
                        </div>
                    </div>
                   <div class="register-form-child register-submit">
                     <div class="register-submit-btn-container">
                       <input id="saveForm" name="saveForm" type="submit" value="Register Product" class="register-submit-btn">
                     </div>
                   </div>
                 </form>
    <script src="scripts/index.js"></script>
</body>
</html>
    `;
}

module.exports = registerPage;