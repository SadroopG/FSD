const router = require('express').Router();
let Contact = require('../models/contact.model');

router.route('/').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  console.log('Received data:', { name, email, message }); // Add this line to log the received data

  const newContact = new Contact({
    name,
    email,
    message,
  });

  newContact.save()
    .then(() => res.json('Contact message sent!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
