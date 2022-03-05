import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    res.send('Signout route working as expected!')
});

export { router as signoutRouter };