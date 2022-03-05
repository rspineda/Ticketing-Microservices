import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
    res.send('Signup route working as expected!')
});

export { router as signupRouter };