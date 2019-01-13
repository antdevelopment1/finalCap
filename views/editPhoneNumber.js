function editPhoneNumberPage() {
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
    <div class="edit-phone-number-page">
            <nav class="nav-container">
                    <div class="nav">
                            <li><a href="/">HOME</a></li>
                            <li><a href="/editProfile">DASHBOARD</a></li>
                    </div>
                </nav>
                <div class="edit-phone-number-form-title">
                    <h1 class="edit-phone-number-title">Update Phone Number</h1> 
                    <h2>Please fill in the information below to edit your phone number.</h2>
                </div>
                 <form action="/login" method="POST" class="edit-phone-number-form">  
                  <div class="edit-phone-number-form-child">
                    <label for="phone-number" class="label">Current phone number:</label>
                    <div class="field">
                      <input name="phone-number" id="phone-number"  type="text"  value="" placeholder="Current phone number" class="edit-phone-number-input" required>
                    </div>
                  </div>
                   <div class="edit-phone-number-form-child">
                       <label for="phone-number" class="label">New phone number:</label>
                       <div class="field">
                           <input name="phone-number" id="phone-number"  type="text"  value="" placeholder="New phone number" class="edit-phone-number-input" required>
                       </div>
                   </div>
                   <div class="edit-phone-number-form-child login-submit">
                    <div class="phone-number-submit-btn-container">
                      <input id="phone-number-submit" name="saveForm" type="submit" value="SAVE" class="phone-number-submit-btn">
                    </div>
                  </div>
                </form>
    <script src="scripts/index.js"></script>
</body>
</html>
`;
}

module.exports = editPhoneNumberPage;