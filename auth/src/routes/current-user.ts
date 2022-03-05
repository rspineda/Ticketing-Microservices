import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
    res.send('Current user route working as expected!')
});

export { router as currentUserRouter };