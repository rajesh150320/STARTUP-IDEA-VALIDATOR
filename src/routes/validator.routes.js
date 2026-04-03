import { Router } from 'express';

import { analyzeStartupIdea, getAnalysisHistory } from '../controllers/validator.controller.js';
import { optionalAuth, requireAuth } from '../middlewares/auth.middleware.js';
import { validateRequest } from '../middlewares/validateRequest.middleware.js';
import { analyzeIdeaSchema } from '../schemas/validator.schema.js';

const router = Router();

router.route('/analyze').post(optionalAuth, validateRequest(analyzeIdeaSchema), analyzeStartupIdea);
router.route('/history').get(requireAuth, getAnalysisHistory);

export default router;
