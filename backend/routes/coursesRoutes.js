import express from 'express';
import { getCoursesPage,getDataSciencePage } from '../controllers/coursesController.js';

const router = express.Router();
router.get('/courses', getCoursesPage);
router.get('/courses/tech-courses/data-science-using-python',getDataSciencePage);
export default router;