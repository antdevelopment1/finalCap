function editEmailPage() {
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
        <div class="edit-email-page">
                <nav class="nav-container">
                        <div class="nav">
                                <li><a href="/">HOME</a></li>
                                <li><a href="/editProfile">PROFILE</a></li>
                        </div>
                    </nav>
                    <div class="edit-email-form-title">
                        <h1 class="edit-email-title">Update Email</h1> 
                        <h2>Please fill in the information below to edit your email.</h2>
                    </div>
                     <form action="/editEmail" method="POST" class="edit-email-form">  
                      <div class="edit-email-form-child">
                        <label for="email" class="label">Current email:</label>
                        <div class="field">
                          <input name="email" id="email"  type="text"  value="" placeholder="Current email" class="edit-email-input" required>
                        </div>
                      </div>
                       <div class="edit-email-form-child">
                           <label for="newEmail" class="label">New email:</label>
                           <div class="field">
                               <input name="newEmail" id="newEmail"  type="text"  value="" placeholder="New email" class="edit-email-input" required>
                           </div>
                       </div>
                       <div class="edit-email-form-child email-submit">
                        <div class="email-submit-btn-container">
                          <input id="email-submit" name="saveForm" type="submit" value="SAVE" class="email-submit-btn">
                        </div>
                      </div>
                    </form>
        <script src="scripts/index.js"></script>
    </body>
    </html>
    `;
}

module.exports = editEmailPage;