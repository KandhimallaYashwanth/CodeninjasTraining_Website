import express from 'express';
import { getCoursesPage } from '../controllers/coursesController.js';

const router = express.Router();
router.get('/courses', getCoursesPage);

export default router;