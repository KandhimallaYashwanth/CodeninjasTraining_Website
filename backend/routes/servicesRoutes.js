import express from 'express';
import { 
    getServicePage,
    getCustomSoftwarePage,
    getWebAndAppPage,
    getSupportPage,
    getConsultingPage,
    getMonitoringPage,
    getModernizationPage,
    getApiDevelopmentPage,
    getDataMigrationPage
} from '../controllers/servicesController.js';

const router=express.Router()

router.get('/services', getServicePage);
router.get('/services/custom-software-development', getCustomSoftwarePage);
router.get('/services/web-and-app-development', getWebAndAppPage);
router.get('/services/software-support-and-maintenance', getSupportPage);
router.get('/services/it-consulting-and-system-integration', getConsultingPage);
router.get('/services/application-monitoring-and-optimization', getMonitoringPage);
router.get('/services/legacy-software-modernization', getModernizationPage);
router.get('/services/api-development-and-integration', getApiDevelopmentPage);
router.get('/services/data-migration-and-backup-services', getDataMigrationPage);

export default router