const router = require('express').Router();

// Initialize Shop Child Routes

// Configure Shop Child Routes
router.get('/', (req, res) => {
  res.render('dashboard/home', {
    layout: 'dashboard',
    currentRoute: req.baseUrl,
  });
});

module.exports = router;
