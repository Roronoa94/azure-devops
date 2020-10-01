import express from 'express';
import container from '../configureContainer';

const router = express.Router();

router.get('/azure/git', container.getContainer().resolve('controller').getRepositoryInfo);

module.exports = router;
