import express from 'express';
import { getHomePage, getAboutPage } from '../controllers/homeController.js';

const router = express.Router();

console.log('Setting up routes...');
router.get('/', getHomePage);
router.get('/about', getAboutPage);
console.log('Routes configured');

export default router;