import express from 'express';
import { getCoursesPage, getDataSciencePage, getPythonPage, getAIPage, getWebDevPage, getJavaPage, getStockMarketPage, getFinancePage, getHumanResourcesPage } from '../controllers/coursesController.js';

const router = express.Router();

router.get('/courses', getCoursesPage);
router.get('/courses/tech-courses/data-science-using-python',getDataSciencePage);
router.get('/courses/tech-courses/python-programming', getPythonPage);
router.get('/courses/tech-courses/artificial-intelligence', getAIPage);
router.get('/courses/tech-courses/web-development', getWebDevPage);
router.get('/courses/tech-courses/java-programming', getJavaPage);
router.get('/courses/management-courses/stock-market', getStockMarketPage);
router.get('/courses/management-courses/finance', getFinancePage);
router.get('/courses/management-courses/human-resources', getHumanResourcesPage);

export default router;