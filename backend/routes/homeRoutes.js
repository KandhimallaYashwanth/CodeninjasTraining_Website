import express from 'express';
import { getHomePage, getAboutPage , getContactPage } from '../controllers/homeController.js';

const router = express.Router();

console.log('Setting up routes...');
router.get('/', getHomePage);
router.get('/about', getAboutPage);
console.log('Routes configured');
router.get('/contact', getContactPage);

export default router;