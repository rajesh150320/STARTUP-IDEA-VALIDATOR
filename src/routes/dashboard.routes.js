import { Router } from 'express';

import { getDashboardData } from '../controllers/dashboard.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/').get(requireAuth, getDashboardData);

export default router;
