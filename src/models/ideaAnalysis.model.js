import mongoose, { Schema } from 'mongoose';

const ideaAnalysisSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    input: {
      idea: { type: String, required: true },
      location: { type: String, required: true },
      targetAudience: { type: String, required: true },
      budgetCategory: { type: String, required: true },
      min: { type: Number, required: true },
      max: { type: Number, required: true },
      timeline: { type: String, required: true },
      platform: { type: String, required: true },
      problem: { type: String, required: true },
    },
    result: {
      marketDemand: { type: String, required: true },
      competition: { type: String, required: true },
      feasibility: { type: String, required: true },
      suggestions: [{ type: String }],
      mvpSuggestions: [{ type: String }],
      score: { type: Number, required: true },
      roast: { type: String, default: '' },
      metrics: {
        marketDemand: { type: Number, required: true },
        competition: { type: Number, required: true },
        feasibility: { type: Number, required: true },
      },
      metricExplanations: {
        marketDemand: { type: String, default: '' },
        competition: { type: String, default: '' },
        feasibility: { type: String, default: '' },
      },
      marketSignals: {
        keywords: [{ type: String }],
        source: { type: String, default: 'fallback' },
        averageInterest: { type: Number, default: null },
        trendSummary: { type: String, default: '' },
        trendTimeline: [
          {
            label: { type: String },
            interest: { type: Number },
          },
        ],
        topRegions: [
          {
            name: { type: String },
            interest: { type: Number },
          },
        ],
      },
      competitorInsights: {
        competitors: [
          {
            name: { type: String, default: '' },
            description: { type: String, default: '' },
            region: { type: String, default: '' },
          },
        ],
        saturation: { type: String, default: 'Moderate' },
        gap: { type: String, default: '' },
      },
      analysisMode: { type: String, required: true },
      analysisSource: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

export const IdeaAnalysis = mongoose.model('IdeaAnalysis', ideaAnalysisSchema);
