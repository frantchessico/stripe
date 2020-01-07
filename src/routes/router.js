const { Router } = require('express');

const router = Router();
router.get('/', (req,res) => {
    res.send('Hello man')
});

module.exports = router;