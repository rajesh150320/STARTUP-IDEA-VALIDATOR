import { z } from '../middlewares/validateRequest.middleware.js';

const requiredString = (label) =>
  z.string().trim().min(1, `${label} is required`);

const flexibleNumberInput = z.union([z.number(), z.string(), z.null(), z.undefined()]);

const analyzeIdeaSchema = z.object({
  body: z.object({
    idea: requiredString('Idea'),
    location: requiredString('Location'),
    targetAudience: requiredString('Target audience'),
    budgetCategory: requiredString('Budget category'),
    min: flexibleNumberInput.optional(),
    max: flexibleNumberInput.optional(),
    timeline: requiredString('Timeline'),
    platform: requiredString('Platform'),
    problem: requiredString('Problem'),
  }),
  params: z.object({}).default({}),
  query: z.object({}).default({}),
});

export { analyzeIdeaSchema };
