const auth = require('./authentication');
const client = require('twilio')(auth.SID, auth.AUTH_TOKEN);

client.messages
  .create({
     body: 'Intruder detected. Please check your personal belongings.',
     from: '+15709191853',
     to: '+18622791359'
   })
  .then(message => console.log(message.sid))
  .done();