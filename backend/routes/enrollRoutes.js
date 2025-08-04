import express from 'express';
import { getEnrollmentPage } from '../controllers/enrollController.js';

const router = express.Router();

router.get('/courses/:category/enroll/:course', getEnrollmentPage);

export default router;
