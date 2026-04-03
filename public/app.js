const interviewForm = document.getElementById('interview-form');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button');
const answerInput = document.getElementById('answer-input');
const answerTextarea = document.getElementById('answer-textarea');
const answerSelect = document.getElementById('answer-select');
const questionTag = document.getElementById('question-tag');
const questionTitle = document.getElementById('question-title');
const questionHelper = document.getElementById('question-helper');
const quickReplies = document.getElementById('quick-replies');
const interviewThread = document.getElementById('interview-thread');
const inputPanel = document.getElementById('input-panel');
const progressTitle = document.getElementById('progress-title');
const progressSubtitle = document.getElementById('progress-subtitle');
const progressFill = document.getElementById('progress-fill');
const locationSuggestions = document.getElementById('location-suggestions');
const interviewModePanel = document.getElementById('interview-mode-panel');
const compareForm = document.getElementById('compare-form');
const compareSubmitButton = document.getElementById('compare-submit-button');
const cancelCompareButton = document.getElementById('cancel-compare-button');
const ideaSummaryPanel = document.getElementById('idea-summary-panel');
const ideaSummaryTitle = document.getElementById('idea-summary-title');
const ideaSummaryCopy = document.getElementById('idea-summary-copy');
const ideaSummaryLocation = document.getElementById('idea-summary-location');
const ideaSummaryAudience = document.getElementById('idea-summary-audience');
const ideaSummaryBudget = document.getElementById('idea-summary-budget');
const ideaSummaryTimeline = document.getElementById('idea-summary-timeline');
const historyTrendCopy = document.getElementById('history-trend-copy');
const historyTotal = document.getElementById('history-total');
const historyChange = document.getElementById('history-change');
const evolutionPanel = document.getElementById('evolution-panel');
const evolutionTitle = document.getElementById('evolution-title');
const evolutionCopy = document.getElementById('evolution-copy');
const evolutionFrom = document.getElementById('evolution-from');
const evolutionTo = document.getElementById('evolution-to');
const historyList = document.getElementById('history-list');
const editIdeaButton = document.getElementById('edit-idea-button');
const summaryCompareButton = document.getElementById('summary-compare-button');
const hiddenForm = document.getElementById('validator-form');
const emptyState = document.getElementById('empty-state');
const resultPanel = document.getElementById('result-panel');
const comparisonPanel = document.getElementById('comparison-panel');
const statusMessage = document.getElementById('status-message');
const historyModal = document.getElementById('history-modal');
const historyBackdrop = historyModal?.querySelector('.history-backdrop');
const historyCloseButton = document.getElementById('history-close-button');
const dashboardModal = document.getElementById('dashboard-modal');
const dashboardBackdrop = dashboardModal?.querySelector('.history-backdrop');
const dashboardCloseButton = document.getElementById('dashboard-close-button');
const dashboardCopy = document.getElementById('dashboard-copy');
const dashboardLoading = document.getElementById('dashboard-loading');
const dashboardEmpty = document.getElementById('dashboard-empty');
const dashboardContent = document.getElementById('dashboard-content');
const dashboardTotalIdeas = document.getElementById('dashboard-total-ideas');
const dashboardBestScore = document.getElementById('dashboard-best-score');
const dashboardAverageScore = document.getElementById('dashboard-average-score');
const dashboardLast5List = document.getElementById('dashboard-last5-list');
const dashboardScoreChartWrap = document.getElementById('dashboard-score-chart-wrap');
const dashboardScoreChartCanvas = document.getElementById('scoreChart');
const dashboardScoreChartEmpty = document.getElementById('dashboard-score-chart-empty');
const dashboardMetricsChartWrap = document.getElementById('dashboard-metrics-chart-wrap');
const dashboardMetricsChartCanvas = document.getElementById('metricsChart');
const dashboardMetricsChartEmpty = document.getElementById('dashboard-metrics-chart-empty');
const dashboardMarketTrendCard = document.getElementById('dashboard-market-trend-card');
const dashboardMarketTrendChartWrap = document.getElementById('dashboard-market-trend-chart-wrap');
const dashboardMarketTrendChartCanvas = document.getElementById('dashboard-market-trend-chart');
const dashboardMarketTrendEmpty = document.getElementById('dashboard-market-trend-empty');
const authOpenButton = document.getElementById('auth-open-button');
const userChip = document.getElementById('user-chip');
const accountMenuWrap = document.getElementById('account-menu-wrap');
const accountMenuButton = document.getElementById('account-menu-button');
const accountMenu = document.getElementById('account-menu');
const menuDashboardButton = document.getElementById('menu-dashboard-button');
const menuHistoryButton = document.getElementById('menu-history-button');
const menuLogoutButton = document.getElementById('menu-logout-button');
const authModal = document.getElementById('auth-modal');
const authBackdrop = document.getElementById('auth-backdrop');
const authCloseButton = document.getElementById('auth-close-button');
const authPanel = document.getElementById('auth-panel');
const authTitle = document.getElementById('auth-title');
const authCopy = document.getElementById('auth-copy');
const loginModeButton = document.getElementById('login-mode-button');
const registerModeButton = document.getElementById('register-mode-button');
const contactEmailButton = document.getElementById('contact-email-button');
const contactPhoneButton = document.getElementById('contact-phone-button');
const authForm = document.getElementById('auth-form');
const authFirstNameField = document.getElementById('auth-first-name-field');
const authLastNameField = document.getElementById('auth-last-name-field');
const authEmailField = document.getElementById('auth-email-field');
const authPhoneField = document.getElementById('auth-phone-field');
const authConfirmPasswordField = document.getElementById('auth-confirm-password-field');
const authFirstName = document.getElementById('auth-first-name');
const authLastName = document.getElementById('auth-last-name');
const authEmail = document.getElementById('auth-email');
const authPhone = document.getElementById('auth-phone');
const authPasswordLabel = document.getElementById('auth-password-label');
const authPassword = document.getElementById('auth-password');
const authConfirmPassword = document.getElementById('auth-confirm-password');
const authHelperNote = document.getElementById('auth-helper-note');
const authInlineStatus = document.getElementById('auth-inline-status');
const authSubmitButton = document.getElementById('auth-submit-button');
const guestModeButton = document.getElementById('guest-mode-button');
const otpPanel = document.getElementById('otp-panel');
const otpTitle = document.getElementById('otp-title');
const otpCopy = document.getElementById('otp-copy');
const otpInput = document.getElementById('otp-input');
const otpHelperNote = document.getElementById('otp-helper-note');
const otpBackButton = document.getElementById('otp-back-button');
const otpSubmitButton = document.getElementById('otp-submit-button');
const copyJsonButton = document.getElementById('copy-json-button');
const sharePanel = document.getElementById('share-panel');
const shareCopySummaryButton = document.getElementById('share-copy-summary');
const shareCopyJsonButton = document.getElementById('share-copy-json');
const shareWhatsappButton = document.getElementById('share-whatsapp');
const shareXButton = document.getElementById('share-x');
const shareLinkedInButton = document.getElementById('share-linkedin');
const shareInstagramButton = document.getElementById('share-instagram');
const shareNativeButton = document.getElementById('share-native');
const analysisSource = document.getElementById('analysis-source');
const outputTitle = document.getElementById('output-title');
const scoreBlock = document.querySelector('.score-block');
const scoreGauge = document.getElementById('score-gauge');
const score = document.getElementById('score');
const scoreVerdict = document.getElementById('score-verdict');
const analysisScoreChartWrap = document.getElementById('analysis-score-chart-wrap');
const analysisScoreChartCanvas = document.getElementById('analysisScoreChart');
const analysisScoreChartEmpty = document.getElementById('analysis-score-chart-empty');
const analysisMetricsChartWrap = document.getElementById('analysis-metrics-chart-wrap');
const analysisMetricsChartCanvas = document.getElementById('analysisMetricsChart');
const analysisMetricsChartEmpty = document.getElementById('analysis-metrics-chart-empty');
const marketDemand = document.getElementById('marketDemand');
const marketSignalsSummary = document.getElementById('marketSignalsSummary');
const marketSignalsMeta = document.getElementById('marketSignalsMeta');
const competition = document.getElementById('competition');
const competitorSaturation = document.getElementById('competitorSaturation');
const competitorList = document.getElementById('competitorList');
const competitorGap = document.getElementById('competitorGap');
const feasibility = document.getElementById('feasibility');
const suggestions = document.getElementById('suggestions');
const mvpSuggestions = document.getElementById('mvpSuggestions');
const roast = document.getElementById('roast');
const marketDemandScore = document.getElementById('marketDemandScore');
const competitionScore = document.getElementById('competitionScore');
const feasibilityScore = document.getElementById('feasibilityScore');
const marketDemandBar = document.getElementById('marketDemandBar');
const competitionBar = document.getElementById('competitionBar');
const feasibilityBar = document.getElementById('feasibilityBar');
const marketDemandWhy = document.getElementById('marketDemandWhy');
const competitionWhy = document.getElementById('competitionWhy');
const feasibilityWhy = document.getElementById('feasibilityWhy');
const comparisonWinnerBadge = document.getElementById('comparison-winner-badge');
const comparisonHeadline = document.getElementById('comparison-headline');
const comparisonSummary = document.getElementById('comparison-summary');
const compareIdeaAName = document.getElementById('compare-idea-a-name');
const compareIdeaBName = document.getElementById('compare-idea-b-name');
const compareScoreA = document.getElementById('compare-score-a');
const compareScoreB = document.getElementById('compare-score-b');
const compareDemandA = document.getElementById('compare-demand-a');
const compareDemandB = document.getElementById('compare-demand-b');
const compareCompetitionA = document.getElementById('compare-competition-a');
const compareCompetitionB = document.getElementById('compare-competition-b');
const compareFeasibilityA = document.getElementById('compare-feasibility-a');
const compareFeasibilityB = document.getElementById('compare-feasibility-b');
const compareNoteA = document.getElementById('compare-note-a');
const compareNoteB = document.getElementById('compare-note-b');
const compareSpeed = document.getElementById('compare-speed');
const compareDemand = document.getElementById('compare-demand');
const compareOverall = document.getElementById('compare-overall');
const compareRecommendations = document.getElementById('compare-recommendations');

const locationOptions = [
  'Bengaluru, Karnataka',
  'Mumbai, Maharashtra',
  'Delhi, NCR',
  'Hyderabad, Telangana',
  'Chennai, Tamil Nadu',
  'Pune, Maharashtra',
  'Kolkata, West Bengal',
  'Ahmedabad, Gujarat',
  'Jaipur, Rajasthan',
  'Surat, Gujarat',
  'Lucknow, Uttar Pradesh',
  'Indore, Madhya Pradesh',
  'Chandigarh',
  'Kochi, Kerala',
  'Coimbatore, Tamil Nadu',
  'Noida, Uttar Pradesh',
  'Gurugram, Haryana',
  'Visakhapatnam, Andhra Pradesh',
  'Bhubaneswar, Odisha',
  'Nagpur, Maharashtra',
  'Patna, Bihar',
  'Vadodara, Gujarat',
  'Mysuru, Karnataka',
  'Thiruvananthapuram, Kerala',
  'Goa',
  'Remote / Pan-India',
  'Global',
];

const baseSteps = [
  {
    id: 'idea',
    tag: 'Core concept',
    title: 'What is your startup idea?',
    helper: 'Describe it in one crisp sentence.',
    type: 'text',
    placeholder: 'An AI assistant for local service booking',
  },
  {
    id: 'targetAudience',
    tag: 'Customer',
    title: 'Who is this product really for?',
    helper: 'Name the primary users you want to serve first.',
    type: 'text',
    placeholder: 'Freelancers in Tier 1 Indian cities',
  },
  {
    id: 'problem',
    tag: 'Pain point',
    title: 'What painful problem are they facing today?',
    helper: 'Talk about a real frustration, delay, or cost.',
    type: 'textarea',
    placeholder: 'They waste hours finding trustworthy providers and comparing options.',
  },
  {
    id: 'location',
    tag: 'Launch market',
    title: 'Where will you launch first?',
    helper: 'Choose the first city or market where you want to test demand.',
    type: 'location',
    placeholder: 'Bengaluru, Karnataka',
  },
  {
    id: 'platform',
    tag: 'Product',
    title: 'What platform will your MVP use?',
    helper: 'Keep it focused on the first version you can actually ship.',
    type: 'text',
    placeholder: 'Web app',
    quickReplies: ['Web app', 'Mobile app', 'Web + Mobile', 'WhatsApp + Dashboard'],
  },
  {
    id: 'budgetCategory',
    tag: 'Budget',
    title: 'How would you describe your budget?',
    helper: 'Pick the level that best matches your current resources.',
    type: 'select',
    options: ['Low', 'Medium', 'High'],
  },
  {
    id: 'min',
    tag: 'Budget range',
    title: 'What is your minimum budget in rupees?',
    helper: 'Use a realistic starting number for the first build.',
    type: 'number',
    placeholder: '50000',
  },
  {
    id: 'max',
    tag: 'Budget range',
    title: 'What is your maximum budget in rupees?',
    helper: 'This helps estimate feasibility and scope.',
    type: 'number',
    placeholder: '200000',
  },
  {
    id: 'timeline',
    tag: 'Timeline',
    title: 'How quickly do you want to launch the MVP?',
    helper: 'Keep it honest. Strong answers usually focus on a small first release.',
    type: 'text',
    placeholder: '3 months',
    quickReplies: ['4 weeks', '6 weeks', '3 months', '6 months'],
  },
];

const followUpLibrary = {
  idea: {
    id: 'idea_followup',
    condition: (value) => value.trim().split(/\s+/).length < 8,
    tag: 'Clarity',
    title: 'What exactly makes this idea different from existing options?',
    helper: 'Mention the unique angle, wedge, or unfair advantage.',
    type: 'textarea',
    placeholder: 'We focus on verified providers and instant pricing for one niche category.',
  },
  targetAudience: {
    id: 'audience_followup',
    condition: (value) => /everyone|all|businesses|students|professionals/i.test(value),
    tag: 'Niche focus',
    title: 'Can you narrow that audience down to a sharper first niche?',
    helper: 'Smaller, clearer segments make early validation much easier.',
    type: 'text',
    placeholder: 'Independent graphic designers in Bengaluru',
  },
  problem: {
    id: 'problem_followup',
    condition: (value) => value.trim().length < 90,
    tag: 'Urgency',
    title: 'Why is this problem urgent enough that users would switch or pay?',
    helper: 'Talk about time lost, money lost, missed opportunities, or stress.',
    type: 'textarea',
    placeholder: 'They lose revenue because they cannot respond to clients fast enough.',
  },
  location: {
    id: 'location_followup',
    condition: (value) => /global|remote|pan-india/i.test(value),
    tag: 'Beachhead',
    title: 'If you had to pick one beachhead market first, which one would it be?',
    helper: 'Even global products usually start with one early cluster of users.',
    type: 'location',
    placeholder: 'Bengaluru, Karnataka',
  },
  platform: {
    id: 'platform_followup',
    condition: (value) => /web|mobile/i.test(value),
    tag: 'MVP focus',
    title: 'What is the one must-have workflow your MVP should solve on that platform?',
    helper: 'Think of the single action that proves the product is valuable.',
    type: 'textarea',
    placeholder: 'Users can book a verified provider in under 2 minutes.',
  },
  timeline: {
    id: 'timeline_followup',
    condition: () => true,
    tag: 'Execution',
    title: 'What is the most important milestone you want to hit in that timeline?',
    helper: 'For example: 50 users, first revenue, beta launch, or repeat usage.',
    type: 'text',
    placeholder: 'Launch beta and onboard 25 active users',
  },
};

const followUpBaseMap = {
  idea_followup: 'idea',
  audience_followup: 'targetAudience',
  problem_followup: 'problem',
  location_followup: 'location',
  platform_followup: 'platform',
  timeline_followup: 'timeline',
};

let latestAnalysis = null;
let latestComparison = null;
let latestHistory = null;
let latestDashboard = null;
const dashboardCharts = {
  score: null,
  metrics: null,
  marketTrend: null,
};
const analysisCharts = {
  score: null,
  metrics: null,
};
let activeLocationSuggestions = [];
let interviewSteps = [];
let currentStepIndex = 0;
let interviewComplete = false;
const answers = {};
const followUpInserted = new Set();
const STORAGE_KEY_PREFIX = 'startup_validator_interview_state_v2';
const AUTH_TOKEN_KEY = 'startup_validator_auth_token';
const AUTH_USER_KEY = 'startup_validator_auth_user';
const GUEST_HISTORY_KEY = 'startup_validator_guest_history_v1';
const GUEST_MODE_KEY = 'startup_validator_guest_mode_v1';
const activeStatAnimations = new WeakMap();
let authMode = 'login';
let pendingOtpSession = null;
let authContactMethod = 'email';

const setStatus = (message, type = '') => {
  statusMessage.textContent = message;
  statusMessage.className = `status-message ${type}`.trim();
};

const toggleHistoryModal = (show) => {
  if (!historyModal) return;

  historyModal.classList.toggle('hidden', !show);
  document.body.classList.toggle('modal-open', show);
};

const toggleDashboardModal = (show) => {
  if (!dashboardModal) return;

  dashboardModal.classList.toggle('hidden', !show);
  document.body.classList.toggle('modal-open', show);
};

const syncOutputPanelState = () => {
  const showingResult = !resultPanel.classList.contains('hidden');
  const showingComparison = !comparisonPanel.classList.contains('hidden');
  const shouldShowEmptyState = !showingResult && !showingComparison;

  emptyState.classList.toggle('hidden', !shouldShowEmptyState);

  if (!shouldShowEmptyState) return;

  const emptyCopy = emptyState.querySelector('p');
  if (!emptyCopy) return;

  emptyCopy.textContent = ideaSummaryPanel.classList.contains('hidden')
    ? 'Your analysis will appear here once you submit the form.'
    : 'Your current idea summary is ready on the left. Edit answers, compare with another idea, or run a fresh analysis to see details here.';
};

const setAuthInlineStatus = (message = '', type = '') => {
  authInlineStatus.textContent = message;
  authInlineStatus.className = `auth-inline-status ${type}`.trim();
};

const getAuthToken = () => window.localStorage.getItem(AUTH_TOKEN_KEY) || '';

const getStoredUser = () => {
  try {
    const raw = window.localStorage.getItem(AUTH_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (_error) {
    window.localStorage.removeItem(AUTH_USER_KEY);
    return null;
  }
};

const storeAuthSession = ({ token, user }) => {
  setGuestMode(false);

  if (token) {
    window.localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  if (user) {
    window.localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  }
};

const clearAuthSession = () => {
  window.localStorage.removeItem(AUTH_TOKEN_KEY);
  window.localStorage.removeItem(AUTH_USER_KEY);
};

const isGuestMode = () => window.sessionStorage.getItem(GUEST_MODE_KEY) === 'true';

const setGuestMode = (enabled) => {
  if (enabled) {
    window.sessionStorage.setItem(GUEST_MODE_KEY, 'true');
  } else {
    window.sessionStorage.removeItem(GUEST_MODE_KEY);
  }
};

const getGuestHistoryEntries = () => {
  try {
    const raw = window.sessionStorage.getItem(GUEST_HISTORY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    window.sessionStorage.removeItem(GUEST_HISTORY_KEY);
    return [];
  }
};

const setGuestHistoryEntries = (entries) => {
  window.sessionStorage.setItem(GUEST_HISTORY_KEY, JSON.stringify(entries));
};

const getStateStorageScope = () => {
  const user = getStoredUser();
  const token = getAuthToken();

  if (user?._id && token) {
    return {
      key: `${STORAGE_KEY_PREFIX}_user_${user._id}`,
      storage: window.localStorage,
    };
  }

  return {
    key: `${STORAGE_KEY_PREFIX}_guest`,
    storage: window.sessionStorage,
  };
};

const buildGuestHistoryPayload = (
  message = 'Guest mode is active. Your recent analyses are saved temporarily for this browser session.'
) => {
  const history = getGuestHistoryEntries();
  const latest = history[0] || null;
  const previous = history[1] || null;
  const scoreChange = latest && previous
    ? Math.round(((Number(latest.score || 0) - Number(previous.score || 0)) * 10)) / 10
    : 0;

  return {
    history,
    summary: {
      totalAnalyses: history.length,
      scoreChange,
      trendLabel: history.length
        ? `${message} Login anytime to move future analyses into permanent account history.`
        : `${message} Run an analysis to start building temporary history.`,
    },
  };
};

const saveGuestAnalysis = (payload, data) => {
  const nextEntry = {
    idea: payload.idea || 'Untitled idea',
    location: payload.location || 'Unknown location',
    score: Number(data.score || 0),
    createdAt: new Date().toISOString(),
  };

  const nextHistory = [nextEntry, ...getGuestHistoryEntries()].slice(0, 20);
  setGuestHistoryEntries(nextHistory);
  latestHistory = buildGuestHistoryPayload();
};

const buildAuthHeaders = (includeJson = false) => {
  const headers = {};
  const token = getAuthToken();

  if (includeJson) {
    headers['Content-Type'] = 'application/json';
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

const setAuthContactMethod = (method) => {
  authContactMethod = 'email';

  contactEmailButton?.classList.add('auth-mode-button-active');
  contactPhoneButton?.classList.remove('auth-mode-button-active');
  contactPhoneButton?.classList.add('hidden');
  authEmailField.classList.remove('hidden');
  authPhoneField.classList.add('hidden');
  authEmail.required = true;
  authPhone.required = false;
};

const setAuthFormMode = (mode) => {
  authMode = mode;
  const isLogin = mode === 'login';

  loginModeButton.classList.toggle('auth-mode-button-active', isLogin);
  registerModeButton.classList.toggle('auth-mode-button-active', !isLogin);
  authTitle.textContent = isLogin ? 'Sign in to save your analysis history' : 'Create your account';
  authCopy.textContent = isLogin
    ? 'Login to keep idea history private to your profile and unlock protected history.'
    : 'Register once, then every signed-in analysis will be saved under your account.';
  authFirstNameField.classList.toggle('hidden', isLogin);
  authLastNameField.classList.toggle('hidden', isLogin);
  authPhoneField.classList.add('hidden');
  authConfirmPasswordField.classList.toggle('hidden', isLogin);
  authPasswordLabel.textContent = isLogin ? 'Password' : 'Create Password';
  authHelperNote.textContent = isLogin
    ? 'Use your registered email and password to load your private analysis history, or continue in guest mode for temporary session history.'
    : 'Provide your email. We will verify it with OTP before creating your account.';
  authSubmitButton.textContent = isLogin ? 'Login' : 'Send OTP';
  authFirstName.required = !isLogin;
  authLastName.required = !isLogin;
  authConfirmPassword.required = !isLogin;
  setAuthContactMethod('email');
  pendingOtpSession = null;
  otpInput.value = '';
  setAuthInlineStatus('');
  showAuthStep('form');
};

const activateGuestMode = async (message = 'Guest mode is active. Your analyses will be saved temporarily in this browser session.') => {
  clearAuthSession();
  setGuestMode(true);
  pendingOtpSession = null;
  authForm.reset();
  otpInput.value = '';
  showAuthStep('form');
  toggleAuthPanel(false);
  toggleAccountMenu(false);
  toggleHistoryModal(false);
  updateAuthUI();
  await restoreScopedInterviewState();
  renderGuestHistory(message);
  setAuthInlineStatus('');
  setStatus(message, 'success');
};

const toggleAuthPanel = (show) => {
  authModal?.classList.toggle('hidden', !show);
  authPanel.classList.toggle('hidden', !show);
  document.body.classList.toggle('modal-open', show);
};

const toggleAccountMenu = (show) => {
  accountMenu.classList.toggle('hidden', !show);
};

const showAuthStep = (step) => {
  authForm.classList.toggle('hidden', step !== 'form');
  otpPanel.classList.toggle('hidden', step !== 'otp');
};

const updateAuthUI = () => {
  const user = getStoredUser();
  const token = getAuthToken();
  const isAuthenticated = Boolean(user && token);
  const guestMode = !isAuthenticated && isGuestMode();

  authOpenButton.classList.toggle('hidden', isAuthenticated || guestMode);
  userChip.classList.toggle('hidden', !isAuthenticated && !guestMode);
  accountMenuWrap.classList.toggle('hidden', !isAuthenticated && !guestMode);
  menuDashboardButton.classList.toggle('hidden', !isAuthenticated);

  if (isAuthenticated) {
    userChip.textContent = user.firstName ? `${user.firstName}${user.lastName ? ` ${user.lastName}` : ''}` : user.email;
    menuLogoutButton.textContent = 'Logout';
    toggleAuthPanel(false);
  } else if (guestMode) {
    userChip.textContent = 'Guest Mode';
    menuLogoutButton.textContent = 'Exit Guest Mode';
    toggleAuthPanel(false);
  } else {
    userChip.textContent = '';
    menuLogoutButton.textContent = 'Logout';
    toggleAccountMenu(false);
  }
};

const parseAnimatedValue = (element) => {
  const raw = Number.parseFloat(element?.dataset?.value ?? element?.textContent ?? '0');
  return Number.isFinite(raw) ? raw : 0;
};

const animateStatValue = (element, nextValue, formatter, duration = 650) => {
  if (!element) return;

  const targetValue = Number(nextValue) || 0;
  const currentAnimation = activeStatAnimations.get(element);
  if (currentAnimation) {
    window.cancelAnimationFrame(currentAnimation);
  }

  const startValue = parseAnimatedValue(element);
  const startTime = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = startValue + (targetValue - startValue) * eased;

    element.dataset.value = String(value);
    element.textContent = formatter(value, progress < 1);

    if (progress < 1) {
      const frameId = window.requestAnimationFrame(tick);
      activeStatAnimations.set(element, frameId);
      return;
    }

    element.dataset.value = String(targetValue);
    element.textContent = formatter(targetValue, false);
    activeStatAnimations.delete(element);
  };

  const frameId = window.requestAnimationFrame(tick);
  activeStatAnimations.set(element, frameId);
};

const normalizeIdeaKey = (value = '') =>
  value
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();

const formatIdeaHeadline = (value = '') => {
  const cleaned = value.trim();
  if (!cleaned) return 'Your startup idea';
  return cleaned.length > 48 ? `${cleaned.slice(0, 45)}...` : cleaned;
};

const renderIdeaEvolution = () => {
  const currentIdea = normalizeIdeaKey(buildPayload().idea || latestAnalysis?.input?.idea || '');
  if (!currentIdea || !latestHistory?.history?.length) {
    evolutionPanel.classList.add('hidden');
    return;
  }

  const matches = [...latestHistory.history]
    .filter((item) => normalizeIdeaKey(item.idea) === currentIdea)
    .reverse();

  if (!matches.length) {
    evolutionPanel.classList.add('hidden');
    return;
  }

  const latestVersion = matches[matches.length - 1];
  const previousVersion = matches.length > 1 ? matches[matches.length - 2] : null;
  const ideaHeadline = formatIdeaHeadline(latestVersion.idea || buildPayload().idea || 'Your startup idea');

  evolutionTitle.textContent =
    matches.length > 1
      ? `${ideaHeadline} is evolving`
      : `${ideaHeadline} is now tracked`;

  if (!previousVersion) {
    evolutionCopy.textContent =
      'This is the first saved analysis for this startup idea. Re-analyze it after improving the inputs to track how the score changes.';
    evolutionFrom.textContent = Number(latestVersion.score || 0).toFixed(1);
    evolutionTo.textContent = Number(latestVersion.score || 0).toFixed(1);
    evolutionPanel.classList.remove('hidden');
    return;
  }

  const delta = Math.round(((Number(latestVersion.score || 0) - Number(previousVersion.score || 0)) * 10)) / 10;
  evolutionCopy.textContent =
    delta > 0
      ? `${ideaHeadline} is improving. Score moved from ${Number(previousVersion.score || 0).toFixed(1)} to ${Number(latestVersion.score || 0).toFixed(1)} after your latest refinements.`
      : delta < 0
        ? `${ideaHeadline} changed, but the score moved from ${Number(previousVersion.score || 0).toFixed(1)} to ${Number(latestVersion.score || 0).toFixed(1)}. The latest scope may need tightening.`
        : `${ideaHeadline} is holding steady at ${Number(latestVersion.score || 0).toFixed(1)} across the latest two analyses.`;

  evolutionFrom.textContent = Number(previousVersion.score || 0).toFixed(1);
  evolutionTo.textContent = Number(latestVersion.score || 0).toFixed(1);
  evolutionPanel.classList.remove('hidden');
};

const renderGuestHistory = (
  message = 'Guest mode is active. Your startup analyses are saved temporarily in this browser session.'
) => {
  latestHistory = buildGuestHistoryPayload(message);

  animateStatValue(historyTotal, latestHistory.summary.totalAnalyses || 0, (value, isAnimating) =>
    isAnimating ? Math.round(value).toString() : String(Math.round(value))
  );
  animateStatValue(historyChange, Number(latestHistory.summary.scoreChange || 0), (value) =>
    `${value > 0 ? '+' : ''}${value.toFixed(1)}`
  );
  historyTrendCopy.textContent = latestHistory.summary.trendLabel;
  renderIdeaEvolution();

  historyList.innerHTML = '';
  if (!latestHistory.history.length) {
    historyList.innerHTML =
      '<p class="history-empty">Run analyses in guest mode to keep temporary session history here, or sign in to save them permanently.</p>';
    return;
  }

  latestHistory.history.forEach((item) => {
    const row = document.createElement('article');
    row.className = 'history-item';
    row.innerHTML = `
      <div class="history-item-head">
        <strong>${escapeHtml(item.idea || 'Untitled idea')}</strong>
        <span>${Number(item.score || 0).toFixed(1)}/10</span>
      </div>
      <p>${escapeHtml(item.location || 'Unknown location')} | ${escapeHtml(formatDateTime(item.createdAt))}</p>
    `;
    historyList.appendChild(row);
  });

  if (latestAnalysis) {
    renderAnalysisCharts();
  }
};

const saveState = () => {
  const { key, storage } = getStateStorageScope();
  const payload = {
    answers,
    followUpInserted: [...followUpInserted],
    currentStepIndex,
    latestAnalysis,
    latestComparison,
    latestHistory: getAuthToken() ? latestHistory : null,
    interviewComplete,
  };

  storage.setItem(key, JSON.stringify(payload));
};

const toggleSharePanel = (show) => {
  sharePanel.classList.toggle('hidden', !show);
};

const resetAnalysisView = ({ preserveStatus = false } = {}) => {
  latestAnalysis = null;
  latestComparison = null;
  toggleSharePanel(false);
  inputPanel.classList.remove('input-panel-post-analysis');
  resultPanel.classList.add('hidden');
  comparisonPanel.classList.add('hidden');
  emptyState.classList.remove('hidden');
  compareForm.classList.add('hidden');
  interviewModePanel.classList.remove('hidden');
  ideaSummaryPanel.classList.add('hidden');
  syncOutputPanelState();

  if (!preserveStatus) {
    setStatus('Update the interview answers and generate a fresh analysis when ready.');
  }
};

const renderIdeaSummary = () => {
  inputPanel.classList.add('input-panel-post-analysis');
  const payload = buildPayload();
  ideaSummaryTitle.textContent = payload.idea || 'Startup idea snapshot';
  ideaSummaryCopy.textContent =
    'You can review the analysis on the right, edit the interview, or compare this idea with another one.';
  ideaSummaryLocation.textContent = payload.location || '-';
  ideaSummaryAudience.textContent = payload.targetAudience || '-';
  ideaSummaryBudget.textContent =
    payload.budgetCategory && payload.min && payload.max
      ? `${payload.budgetCategory} (INR ${payload.min} - ${payload.max})`
      : '-';
  ideaSummaryTimeline.textContent = payload.timeline || '-';
  ideaSummaryPanel.classList.remove('hidden');
  renderIdeaEvolution();
};

const formatDateTime = (value) => {
  if (!value) return '';
  return new Date(value).toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
  });
};

const renderHistory = (payload) => {
  latestHistory = payload;
  animateStatValue(historyTotal, payload?.summary?.totalAnalyses || 0, (value, isAnimating) =>
    isAnimating ? Math.round(value).toString() : String(Math.round(value))
  );
  const scoreChange = Number(payload?.summary?.scoreChange || 0);
  animateStatValue(historyChange, scoreChange, (value) => `${value > 0 ? '+' : ''}${value.toFixed(1)}`);
  historyTrendCopy.textContent =
    payload?.summary?.trendLabel || 'Recent analysis trend will appear here.';
  renderIdeaEvolution();

  historyList.innerHTML = '';
  if (!payload?.history?.length) {
    historyList.innerHTML = '<p class="history-empty">Run a few analyses to build your dashboard history.</p>';
    return;
  }

  payload.history.forEach((item) => {
    const row = document.createElement('article');
    row.className = 'history-item';
    row.innerHTML = `
      <div class="history-item-head">
        <strong>${escapeHtml(item.idea || 'Untitled idea')}</strong>
        <span>${Number(item.score || 0).toFixed(1)}/10</span>
      </div>
      <p>${escapeHtml(item.location || 'Unknown location')} | ${escapeHtml(formatDateTime(item.createdAt))}</p>
    `;
    historyList.appendChild(row);
  });

  if (latestAnalysis) {
    renderAnalysisCharts();
  }
};

const loadHistory = async () => {
  if (!getAuthToken()) {
    renderGuestHistory();
    saveState();
    return;
  }

  try {
    const response = await fetch('/api/v1/validator/history', {
      headers: buildAuthHeaders(),
    });
    const result = await response.json();
    if (!response.ok) {
      if (response.status === 401) {
        clearAuthSession();
        updateAuthUI();
        renderGuestHistory('Your session expired. Login again to access personal history.');
      }
      return;
    }
    renderHistory(result.data);
    saveState();
  } catch (_error) {
    renderGuestHistory('History could not be loaded right now.');
  }
};

const formatDashboardDate = (value) => {
  if (!value) return '';

  return new Date(value).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
  });
};

const setDashboardState = (state) => {
  dashboardLoading.classList.toggle('hidden', state !== 'loading');
  dashboardEmpty.classList.toggle('hidden', state !== 'empty');
  dashboardContent.classList.toggle('hidden', state !== 'content');
};

const destroyDashboardChart = (name) => {
  if (!dashboardCharts[name]) return;
  dashboardCharts[name].destroy();
  dashboardCharts[name] = null;
};

const destroyAnalysisChart = (name) => {
  if (!analysisCharts[name]) return;
  analysisCharts[name].destroy();
  analysisCharts[name] = null;
};

const toggleChartState = (wrapElement, emptyElement, hasData) => {
  wrapElement.classList.toggle('hidden', !hasData);
  emptyElement.classList.toggle('hidden', hasData);
};

const getScorePresentation = (value) => {
  const numeric = Number(value) || 0;

  if (numeric > 7) {
    return { verdict: 'Strong Idea', className: 'score-strong' };
  }

  if (numeric >= 5) {
    return { verdict: 'Moderate', className: 'score-moderate' };
  }

  return { verdict: 'Needs Improvement', className: 'score-risk' };
};

const getAnalysisTrendTimeline = () => {
  const history = latestHistory?.history?.length ? latestHistory.history : getGuestHistoryEntries();

  if (!history.length) {
    return latestAnalysis
      ? [
          {
            score: Number(latestAnalysis.score || 0),
            createdAt: new Date().toISOString(),
          },
        ]
      : [];
  }

  return history
    .map((item) => ({
      score: Number(item.score || 0),
      createdAt: item.createdAt || new Date().toISOString(),
    }))
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    .slice(-12);
};

const createAnalysisScoreChart = (timeline = []) => {
  destroyAnalysisChart('score');
  const hasData = timeline.length > 0;
  toggleChartState(analysisScoreChartWrap, analysisScoreChartEmpty, hasData);
  if (!hasData || typeof Chart === 'undefined') return;

  analysisCharts.score = new Chart(analysisScoreChartCanvas, {
    type: 'line',
    data: {
      labels: timeline.map((item) => formatDashboardDate(item.createdAt)),
      datasets: [
        {
          label: 'Score Over Time',
          data: timeline.map((item) => Number(item.score || 0)),
          borderColor: '#2c8fd6',
          backgroundColor: 'rgba(44, 143, 214, 0.12)',
          fill: true,
          tension: 0.38,
          borderWidth: 3,
          pointRadius: 4,
          pointHoverRadius: 5,
          pointBackgroundColor: '#2c8fd6',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#5f7b92',
          },
          grid: {
            display: false,
          },
        },
        y: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            color: '#5f7b92',
          },
          grid: {
            color: 'rgba(95, 123, 146, 0.12)',
          },
        },
      },
    },
  });
};

const createAnalysisMetricsChart = (metrics = {}) => {
  destroyAnalysisChart('metrics');
  const values = [
    Number(metrics.marketDemand || 0),
    Number(metrics.competition || 0),
    Number(metrics.feasibility || 0),
  ];
  const hasData = values.some((value) => value > 0);
  toggleChartState(analysisMetricsChartWrap, analysisMetricsChartEmpty, hasData);
  if (!hasData || typeof Chart === 'undefined') return;

  analysisCharts.metrics = new Chart(analysisMetricsChartCanvas, {
    type: 'bar',
    data: {
      labels: ['Market Demand', 'Competition', 'Feasibility'],
      datasets: [
        {
          label: 'Idea Metrics',
          data: values,
          backgroundColor: ['#4aa2e3', '#7b9fe0', '#3fba9f'],
          borderRadius: 12,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#5f7b92',
          },
          grid: {
            display: false,
          },
        },
        y: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            color: '#5f7b92',
          },
          grid: {
            color: 'rgba(95, 123, 146, 0.12)',
          },
        },
      },
    },
  });
};

const renderAnalysisCharts = () => {
  createAnalysisScoreChart(getAnalysisTrendTimeline());
  createAnalysisMetricsChart(latestAnalysis?.metrics || {});
};

const createScoreChart = (timeline = []) => {
  destroyDashboardChart('score');
  const hasData = timeline.length > 0;
  toggleChartState(dashboardScoreChartWrap, dashboardScoreChartEmpty, hasData);
  if (!hasData || typeof Chart === 'undefined') return;

  dashboardCharts.score = new Chart(dashboardScoreChartCanvas, {
    type: 'line',
    data: {
      labels: timeline.map((item) => formatDashboardDate(item.date || item.createdAt)),
      datasets: [
        {
          label: 'Score Over Time',
          data: timeline.map((item) => Number(item.score || 0)),
          borderColor: '#2c8fd6',
          backgroundColor: 'rgba(44, 143, 214, 0.14)',
          fill: true,
          tension: 0.35,
          borderWidth: 3,
          pointRadius: 4,
          pointHoverRadius: 5,
          pointBackgroundColor: '#2c8fd6',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 700,
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#5f7b92',
          },
          grid: {
            display: false,
          },
        },
        y: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            color: '#5f7b92',
          },
          grid: {
            color: 'rgba(95, 123, 146, 0.12)',
          },
        },
      },
    },
  });
};

const createMetricsChart = (metricsSummary = {}) => {
  destroyDashboardChart('metrics');
  const values = [
    Number(metricsSummary.marketDemand || 0),
    Number(metricsSummary.competition || 0),
    Number(metricsSummary.feasibility || 0),
  ];
  const hasData = values.some((value) => value > 0);
  toggleChartState(dashboardMetricsChartWrap, dashboardMetricsChartEmpty, hasData);
  if (!hasData || typeof Chart === 'undefined') return;

  dashboardCharts.metrics = new Chart(dashboardMetricsChartCanvas, {
    type: 'bar',
    data: {
      labels: ['Market Demand', 'Competition', 'Feasibility'],
      datasets: [
        {
          label: 'Idea Metrics',
          data: values,
          backgroundColor: ['#4aa2e3', '#7b9fe0', '#3fba9f'],
          borderRadius: 12,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 700,
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#5f7b92',
          },
          grid: {
            display: false,
          },
        },
        y: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            color: '#5f7b92',
          },
          grid: {
            color: 'rgba(95, 123, 146, 0.12)',
          },
        },
      },
    },
  });
};

const createMarketTrendChart = (timeline = []) => {
  destroyDashboardChart('marketTrend');
  const hasData = timeline.length > 0;
  dashboardMarketTrendCard.classList.toggle('hidden', !hasData);
  if (!hasData) {
    toggleChartState(dashboardMarketTrendChartWrap, dashboardMarketTrendEmpty, false);
    return;
  }
  if (typeof Chart === 'undefined') return;

  toggleChartState(dashboardMarketTrendChartWrap, dashboardMarketTrendEmpty, true);

  dashboardCharts.marketTrend = new Chart(dashboardMarketTrendChartCanvas, {
    type: 'line',
    data: {
      labels: timeline.map((item) => item.label || ''),
      datasets: [
        {
          label: 'Interest',
          data: timeline.map((item) => Number(item.interest || 0)),
          borderColor: '#1f7ea8',
          backgroundColor: 'rgba(31, 126, 168, 0.12)',
          fill: true,
          tension: 0.35,
          borderWidth: 2.5,
          pointRadius: 3,
          pointHoverRadius: 4,
          pointBackgroundColor: '#1f7ea8',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 700,
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#5f7b92',
            maxRotation: 0,
            autoSkip: true,
          },
          grid: {
            display: false,
          },
        },
        y: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            color: '#5f7b92',
          },
          grid: {
            color: 'rgba(95, 123, 146, 0.12)',
          },
        },
      },
    },
  });
};

const renderDashboard = (payload) => {
  latestDashboard = payload;
  setDashboardState(payload.totalIdeas ? 'content' : 'empty');

  if (!payload.totalIdeas) {
    dashboardCopy.textContent = 'You have not saved any startup analyses yet. Run your first signed-in analysis to populate the dashboard.';
    dashboardLast5List.innerHTML = '';
    createScoreChart([]);
    createMetricsChart({});
    createMarketTrendChart([]);
    return;
  }

  dashboardCopy.textContent = 'Track your best ideas, recent analyses, and score improvement over time.';
  dashboardTotalIdeas.textContent = String(payload.totalIdeas || 0);
  dashboardBestScore.textContent = Number(payload.bestScore || 0).toFixed(1);
  dashboardAverageScore.textContent = Number(payload.averageScore || 0).toFixed(1);

  dashboardLast5List.innerHTML = '';
  (payload.last5Ideas || []).forEach((item) => {
    const row = document.createElement('article');
    row.className = 'dashboard-list-item';
    row.innerHTML = `
      <div class="dashboard-list-head">
        <strong>${escapeHtml(item.idea || 'Untitled idea')}</strong>
        <span>${Number(item.score || 0).toFixed(1)}/10</span>
      </div>
      <p>${escapeHtml(formatDateTime(item.createdAt))}</p>
    `;
    dashboardLast5List.appendChild(row);
  });

  createScoreChart(payload.scoreTimeline || []);
  createMetricsChart(payload.metricsSummary || {});
  createMarketTrendChart(payload.marketTrendTimeline || []);
};

const loadDashboard = async ({ open = false } = {}) => {
  if (!getAuthToken()) {
    setDashboardState('empty');
    dashboardCopy.textContent = 'Login to unlock your permanent startup dashboard.';
    if (open) toggleDashboardModal(true);
    return false;
  }

  setDashboardState('loading');
  if (open) {
    toggleHistoryModal(false);
    toggleDashboardModal(true);
  }

  try {
    const response = await fetch('/api/v1/dashboard', {
      headers: buildAuthHeaders(),
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Dashboard could not be loaded right now.');
    }

    renderDashboard(result.data);
    return true;
  } catch (error) {
    setDashboardState('empty');
    dashboardCopy.textContent = error.message || 'Dashboard could not be loaded right now.';
    return false;
  }
};

const renderCompletionState = () => {
  questionTag.textContent = 'Complete';
  questionTitle.textContent = 'Your startup analysis is ready.';
  questionHelper.textContent =
    'Review the score, metrics, and suggestions on the right. You can export or share the result from the output panel.';
  progressTitle.textContent = 'Interview complete';
  progressSubtitle.textContent = `${interviewSteps.length} of ${interviewSteps.length} answered`;
  progressFill.style.width = '100%';
  quickReplies.innerHTML = '';
  answerInput.classList.add('hidden');
  answerTextarea.classList.add('hidden');
  answerSelect.classList.add('hidden');
  hideLocationSuggestions();
  answerInput.value = '';
  answerTextarea.value = '';
  answerSelect.innerHTML = '';
  nextButton.textContent = 'Analysis Ready';
  nextButton.classList.add('submit-button-complete');
  nextButton.disabled = true;
  backButton.disabled = false;
  renderThread();
};

const loadState = () => {
  const { key, storage } = getStateStorageScope();
  const raw = storage.getItem(key);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch (_error) {
    storage.removeItem(key);
    return null;
  }
};

const setMetric = (valueElement, barElement, value) => {
  const safeValue = Math.max(1, Math.min(10, Number(value) || 0));
  valueElement.textContent = safeValue.toFixed(1);
  barElement.style.width = `${safeValue * 10}%`;
};

const buildShareSummary = () => {
  if (!latestAnalysis) return '';

  const payload = buildPayload();
  const metricSummary = latestAnalysis.metrics
    ? `Market Demand ${Number(latestAnalysis.metrics.marketDemand || 0).toFixed(1)}/10, Competition ${Number(
        latestAnalysis.metrics.competition || 0
      ).toFixed(1)}/10, Feasibility ${Number(latestAnalysis.metrics.feasibility || 0).toFixed(1)}/10`
    : '';

  return [
    `Startup Idea: ${payload.idea || 'Untitled idea'}`,
    `Launch Market: ${payload.location || 'Not specified'}`,
    `Audience: ${payload.targetAudience || 'Not specified'}`,
    `Overall Score: ${latestAnalysis.score}/10`,
    metricSummary,
    `Market Demand: ${latestAnalysis.marketDemand}`,
    `Competition: ${latestAnalysis.competition}`,
    `Feasibility: ${latestAnalysis.feasibility}`,
    latestAnalysis.suggestions?.length ? `Top Suggestions: ${latestAnalysis.suggestions.slice(0, 3).join(' | ')}` : '',
  ]
    .filter(Boolean)
    .join('\n');
};

const buildComparePayload = (suffix) => {
  const formData = new FormData(compareForm);
  return {
    idea: String(formData.get(`idea${suffix}`) || '').trim(),
    location: String(formData.get(`location${suffix}`) || '').trim(),
    targetAudience: String(formData.get(`targetAudience${suffix}`) || '').trim(),
    budgetCategory: String(formData.get(`budgetCategory${suffix}`) || '').trim(),
    min: String(formData.get(`min${suffix}`) || '').trim(),
    max: String(formData.get(`max${suffix}`) || '').trim(),
    timeline: String(formData.get(`timeline${suffix}`) || '').trim(),
    platform: String(formData.get(`platform${suffix}`) || '').trim(),
    problem: String(formData.get(`problem${suffix}`) || '').trim(),
  };
};

const copyText = async (text) => {
  await navigator.clipboard.writeText(text);
};

const openShareUrl = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const hideLocationSuggestions = () => {
  locationSuggestions.classList.add('hidden');
  locationSuggestions.innerHTML = '';
  activeLocationSuggestions = [];
};

const currentStep = () => interviewSteps[currentStepIndex];

const getInputValue = () => {
  const step = currentStep();
  if (step.type === 'textarea') return answerTextarea.value.trim();
  if (step.type === 'select') return answerSelect.value.trim();
  return answerInput.value.trim();
};

const setInputValue = (value = '') => {
  const step = currentStep();
  answerInput.value = '';
  answerTextarea.value = '';
  answerSelect.value = '';

  if (step.type === 'textarea') answerTextarea.value = value;
  else if (step.type === 'select') answerSelect.value = value;
  else answerInput.value = value;
};

const toggleInputs = () => {
  const step = currentStep();
  answerInput.classList.add('hidden');
  answerTextarea.classList.add('hidden');
  answerSelect.classList.add('hidden');
  hideLocationSuggestions();

  if (step.type === 'textarea') {
    answerTextarea.classList.remove('hidden');
    return;
  }

  if (step.type === 'select') {
    answerSelect.classList.remove('hidden');
    return;
  }

  answerInput.classList.remove('hidden');
};

const renderQuickReplies = () => {
  const step = currentStep();
  quickReplies.innerHTML = '';

  if (!step.quickReplies?.length) return;

  step.quickReplies.forEach((reply) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quick-reply';
    button.textContent = reply;
    button.addEventListener('click', () => {
      setInputValue(reply);
      if (step.type !== 'select') {
        const activeField = step.type === 'textarea' ? answerTextarea : answerInput;
        activeField.focus();
      }
    });
    quickReplies.appendChild(button);
  });
};

const renderThread = () => {
  interviewThread.innerHTML = '';

  interviewSteps.forEach((step, index) => {
    if (index > currentStepIndex) return;

    const prompt = document.createElement('article');
    prompt.className = 'thread-bubble thread-bubble-bot';
    prompt.innerHTML = `
      <span class="thread-label">${escapeHtml(step.tag)}</span>
      <p>${escapeHtml(step.title)}</p>
    `;
    interviewThread.appendChild(prompt);

    if (step.id in answers) {
      const reply = document.createElement('article');
      reply.className = 'thread-bubble thread-bubble-user';
      reply.innerHTML = `<p>${escapeHtml(String(answers[step.id]))}</p>`;
      interviewThread.appendChild(reply);
    }
  });

  interviewThread.scrollTop = interviewThread.scrollHeight;
};

const renderQuestion = () => {
  if (interviewComplete) {
    renderCompletionState();
    return;
  }

  const step = currentStep();
  if (!step) return;

  questionTag.textContent = step.tag;
  questionTitle.textContent = step.title;
  questionHelper.textContent = step.helper;
  progressTitle.textContent = `Question ${currentStepIndex + 1}`;
  progressSubtitle.textContent = `${Math.min(currentStepIndex + 1, interviewSteps.length)} of ${interviewSteps.length} in the interview`;
  progressFill.style.width = `${((currentStepIndex + 1) / interviewSteps.length) * 100}%`;
  nextButton.textContent = currentStepIndex === interviewSteps.length - 1 ? 'Generate analysis' : 'Next question';
  backButton.disabled = currentStepIndex === 0;
  nextButton.disabled = false;
  nextButton.classList.remove('submit-button-complete');

  toggleInputs();

  if (step.type === 'select') {
    answerSelect.innerHTML = '<option value="">Select an option</option>';
    step.options.forEach((option) => {
      const el = document.createElement('option');
      el.value = option;
      el.textContent = option;
      answerSelect.appendChild(el);
    });
  }

  renderQuickReplies();
  setInputValue(answers[step.id] || '');
  renderThread();

  const activeField =
    step.type === 'textarea' ? answerTextarea : step.type === 'select' ? answerSelect : answerInput;

  activeField.placeholder = step.placeholder || 'Type your answer here';
  activeField.focus();
};

const maybeInsertFollowUp = (step, answer) => {
  const followUp = followUpLibrary[step.id];
  if (!followUp || followUpInserted.has(followUp.id)) return;
  if (!followUp.condition(answer, answers)) return;

  interviewSteps.splice(currentStepIndex + 1, 0, followUp);
  followUpInserted.add(followUp.id);
  saveState();
};

const rebuildInterviewSteps = () => {
  interviewSteps = [];
  followUpInserted.clear();

  baseSteps.forEach((step) => {
    interviewSteps.push(step);

    const followUp = followUpLibrary[step.id];
    if (!followUp) return;

    const baseAnswer = answers[step.id];
    const followUpAnswer = answers[followUp.id];
    const shouldInclude = (baseAnswer && followUp.condition(baseAnswer, answers)) || Boolean(followUpAnswer);

    if (shouldInclude) {
      interviewSteps.push(followUp);
      followUpInserted.add(followUp.id);
    }
  });
};

const clearAnswersAfterStep = (stepIndex) => {
  const stepsToClear = interviewSteps.slice(stepIndex + 1);
  stepsToClear.forEach((step) => {
    delete answers[step.id];
  });

  rebuildInterviewSteps();
  currentStepIndex = Math.min(stepIndex, interviewSteps.length - 1);
};

const buildPayload = () => {
  const firstLocation = answers.location_followup || answers.location || '';
  const targetAudience = [answers.targetAudience, answers.audience_followup]
    .filter(Boolean)
    .join(' | niche: ');
  const problemParts = [answers.problem, answers.problem_followup, answers.platform_followup, answers.idea_followup]
    .filter(Boolean)
    .join(' ');

  return {
    idea: answers.idea || '',
    location: firstLocation,
    targetAudience,
    budgetCategory: answers.budgetCategory || '',
    min: answers.min || '',
    max: answers.max || '',
    timeline: answers.timeline || '',
    platform: answers.platform || '',
    problem: problemParts,
  };
};

const analyzeIdeaRequest = async (payload) => {
  const response = await fetch('/api/v1/validator/analyze', {
    method: 'POST',
    headers: buildAuthHeaders(true),
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Failed to analyze the idea');
  }

  return result.data;
};

const syncCurrentUser = async () => {
  if (!getAuthToken()) {
    clearAuthSession();
    updateAuthUI();
    latestHistory = buildGuestHistoryPayload();
    return;
  }

  try {
    const response = await fetch('/api/v1/auth/me', {
      headers: buildAuthHeaders(),
    });

    if (!response.ok) {
      clearAuthSession();
      setGuestMode(true);
      updateAuthUI();
      latestHistory = buildGuestHistoryPayload('Your session expired. Guest mode is active again for this browser session.');
      return;
    }

    const result = await response.json();
    storeAuthSession({ token: getAuthToken(), user: result.data.user });
    updateAuthUI();
  } catch (_error) {
    clearAuthSession();
    setGuestMode(true);
    updateAuthUI();
    latestHistory = buildGuestHistoryPayload('Could not verify your session. Guest mode is active again for this browser session.');
  }
};

const renderResults = (data) => {
  latestAnalysis = data;
  latestComparison = null;
  if (!getAuthToken()) {
    saveGuestAnalysis(buildPayload(), data);
  }
  outputTitle.textContent = 'Idea analysis';
  compareForm.classList.add('hidden');
  interviewModePanel.classList.add('hidden');
  renderIdeaSummary();
  analysisSource.textContent = data.analysisSource || 'Local analysis engine';
  score.textContent = data.score;
  scoreGauge.style.setProperty('--score-angle', `${(Number(data.score) || 0) * 36}deg`);
  const scorePresentation = getScorePresentation(data.score);
  scoreVerdict.textContent = scorePresentation.verdict;
  scoreBlock.classList.remove('score-strong', 'score-moderate', 'score-risk');
  scoreBlock.classList.add(scorePresentation.className);
  marketDemand.textContent = data.marketDemand;
  marketSignalsSummary.textContent = data.marketSignals?.trendSummary || 'No live market data available.';
  marketSignalsMeta.textContent = data.marketSignals?.keywords?.length
    ? `Keywords: ${data.marketSignals.keywords.join(', ')}${
        data.marketSignals.topRegions?.length
          ? ` | Top regions: ${data.marketSignals.topRegions.map((item) => item.name).join(', ')}`
          : ''
      }`
    : '';
  competition.textContent = data.competition;
  competitorSaturation.textContent = data.competitorInsights?.saturation || 'Moderate';
  competitorSaturation.classList.remove('saturation-low', 'saturation-moderate', 'saturation-high');
  if ((data.competitorInsights?.saturation || '').toLowerCase() === 'low') {
    competitorSaturation.classList.add('saturation-low');
  } else if ((data.competitorInsights?.saturation || '').toLowerCase() === 'high') {
    competitorSaturation.classList.add('saturation-high');
  } else {
    competitorSaturation.classList.add('saturation-moderate');
  }
  competitorList.innerHTML = '';
  (data.competitorInsights?.competitors || []).forEach((item) => {
    const row = document.createElement('article');
    row.className = 'competitor-item';
    row.innerHTML = `
      <div class="competitor-item-head">
        <strong>${escapeHtml(item.name || 'Unnamed competitor')}</strong>
        <span class="competitor-region">${escapeHtml(item.region || 'Global')}</span>
      </div>
      <p>${escapeHtml(item.description || 'Similar product in this category.')}</p>
    `;
    competitorList.appendChild(row);
  });
  if (!competitorList.children.length) {
    competitorList.innerHTML = '<p class="dashboard-empty-note">Competitor data will appear here after analysis.</p>';
  }
  competitorGap.textContent = data.competitorInsights?.gap || 'No clear market gap insight is available yet.';
  feasibility.textContent = data.feasibility;
  setMetric(marketDemandScore, marketDemandBar, data.metrics?.marketDemand);
  setMetric(competitionScore, competitionBar, data.metrics?.competition);
  setMetric(feasibilityScore, feasibilityBar, data.metrics?.feasibility);
  marketDemandWhy.textContent =
    data.metricExplanations?.marketDemand || 'This score reflects demand signals from the startup profile.';
  competitionWhy.textContent =
    data.metricExplanations?.competition || 'This score reflects likely competitive pressure in the market.';
  feasibilityWhy.textContent =
    data.metricExplanations?.feasibility || 'This score reflects how realistic the MVP looks to execute.';

  suggestions.innerHTML = '';
  data.suggestions.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    suggestions.appendChild(li);
  });

  mvpSuggestions.innerHTML = '';
  (data.mvpSuggestions || []).forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    mvpSuggestions.appendChild(li);
  });

  roast.textContent =
    data.roast ||
    'The current idea still needs a sharper wedge, a tighter audience, and clearer proof that users will care enough to switch.';

  renderAnalysisCharts();

  resultPanel.classList.remove('hidden');
  comparisonPanel.classList.add('hidden');
  syncOutputPanelState();
  toggleSharePanel(false);
  loadHistory();
  if (getAuthToken() && dashboardModal && !dashboardModal.classList.contains('hidden')) {
    loadDashboard();
  }
  saveState();
  setStatus(
    data.analysisMode === 'ai'
      ? 'Interview complete. Enhanced AI analysis is ready.'
      : 'Interview complete. Local analysis is ready and AI will enhance it automatically when available.',
    'success'
  );
  interviewComplete = true;
  saveState();
  renderCompletionState();
};

const renderComparison = ({ payloadA, payloadB, analysisA, analysisB }) => {
  latestAnalysis = null;
  latestComparison = { payloadA, payloadB, analysisA, analysisB };
  outputTitle.textContent = 'Idea comparison';
  compareForm.classList.add('hidden');
  interviewModePanel.classList.add('hidden');
  ideaSummaryTitle.textContent = payloadA.idea || 'First idea';
  ideaSummaryCopy.textContent =
    'This is the original idea you analyzed first. The comparison result on the right shows which option looks stronger.';
  ideaSummaryLocation.textContent = payloadA.location || '-';
  ideaSummaryAudience.textContent = payloadA.targetAudience || '-';
  ideaSummaryBudget.textContent =
    payloadA.budgetCategory && payloadA.min && payloadA.max
      ? `${payloadA.budgetCategory} (INR ${payloadA.min} - ${payloadA.max})`
      : '-';
  ideaSummaryTimeline.textContent = payloadA.timeline || '-';
  ideaSummaryPanel.classList.remove('hidden');

  const overallWinner =
    analysisA.score === analysisB.score ? null : analysisA.score > analysisB.score ? 'A' : 'B';
  const speedWinner =
    analysisA.metrics.feasibility === analysisB.metrics.feasibility
      ? null
      : analysisA.metrics.feasibility > analysisB.metrics.feasibility
        ? 'A'
        : 'B';
  const demandWinner =
    analysisA.metrics.marketDemand === analysisB.metrics.marketDemand
      ? null
      : analysisA.metrics.marketDemand > analysisB.metrics.marketDemand
        ? 'A'
        : 'B';

  comparisonWinnerBadge.textContent = overallWinner
    ? `Idea ${overallWinner} leads overall`
    : 'Both ideas are closely matched';
  comparisonHeadline.textContent = overallWinner
    ? `${overallWinner === 'A' ? payloadA.idea : payloadB.idea} has the stronger current score`
    : 'Both ideas have similar overall scores';
  comparisonSummary.textContent = overallWinner
    ? `Idea ${overallWinner} currently looks stronger on the weighted analysis, while the other idea may still win on niche fit or execution style.`
    : 'The two ideas are close enough that execution quality and founder conviction may decide the better bet.';

  compareIdeaAName.textContent = payloadA.idea || 'Idea A';
  compareIdeaBName.textContent = payloadB.idea || 'Idea B';
  compareScoreA.textContent = Number(analysisA.score || 0).toFixed(1);
  compareScoreB.textContent = Number(analysisB.score || 0).toFixed(1);
  compareDemandA.textContent = Number(analysisA.metrics?.marketDemand || 0).toFixed(1);
  compareDemandB.textContent = Number(analysisB.metrics?.marketDemand || 0).toFixed(1);
  compareCompetitionA.textContent = Number(analysisA.metrics?.competition || 0).toFixed(1);
  compareCompetitionB.textContent = Number(analysisB.metrics?.competition || 0).toFixed(1);
  compareFeasibilityA.textContent = Number(analysisA.metrics?.feasibility || 0).toFixed(1);
  compareFeasibilityB.textContent = Number(analysisB.metrics?.feasibility || 0).toFixed(1);
  compareNoteA.textContent = analysisA.marketDemand;
  compareNoteB.textContent = analysisB.marketDemand;

  compareSpeed.textContent = speedWinner
    ? `Idea ${speedWinner} looks easier to launch first because its feasibility score is stronger.`
    : 'Both ideas look equally feasible to launch based on the current inputs.';
  compareDemand.textContent = demandWinner
    ? `Idea ${demandWinner} shows stronger market pull right now based on demand scoring and market signals.`
    : 'Both ideas currently show similar market-demand strength.';
  compareOverall.textContent = overallWinner
    ? `Pick Idea ${overallWinner} if you want the better immediate score. Pick the other only if you have a stronger unfair advantage there.`
    : 'Treat this as a tie and break it with user interviews, founder insight, or a narrower MVP scope.';

  compareRecommendations.innerHTML = '';
  const recommendations = [
    `Validate ${overallWinner === 'B' ? 'Idea A' : 'Idea B'} with 5 to 10 user calls before dropping it, because the score gap may still be reversible.`,
    `Build the first MVP around the idea with higher feasibility if you want faster launch momentum.`,
    `Compare actual willingness-to-pay for both ideas before making the final product bet.`,
  ];

  recommendations.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    compareRecommendations.appendChild(li);
  });

  resultPanel.classList.add('hidden');
  comparisonPanel.classList.remove('hidden');
  syncOutputPanelState();
  toggleSharePanel(false);
  loadHistory();
  saveState();
  setStatus('Comparison ready. Both startup ideas have been analyzed side by side.', 'success');
};

const renderLocationSuggestions = (matches) => {
  activeLocationSuggestions = matches;

  if (!matches.length) {
    locationSuggestions.innerHTML = '<div class="location-empty">No matching locations found.</div>';
    locationSuggestions.classList.remove('hidden');
    return;
  }

  locationSuggestions.innerHTML = '';
  matches.forEach((locationName) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'location-suggestion';
    button.textContent = locationName;
    button.addEventListener('mousedown', (event) => {
      event.preventDefault();
      answerInput.value = locationName;
      hideLocationSuggestions();
    });
    locationSuggestions.appendChild(button);
  });

  locationSuggestions.classList.remove('hidden');
};

const updateLocationSuggestions = () => {
  const step = currentStep();
  if (!step || step.type !== 'location') {
    hideLocationSuggestions();
    return;
  }

  const query = answerInput.value.trim().toLowerCase();
  const matches = locationOptions
    .filter((locationName) => locationName.toLowerCase().includes(query))
    .slice(0, 6);

  renderLocationSuggestions(matches);
};

const submitInterview = async () => {
  const payload = buildPayload();
  const min = Number(payload.min);
  const max = Number(payload.max);

  if (Number.isNaN(min) || Number.isNaN(max) || min < 0 || max < 0 || min > max) {
    setStatus('Please enter a valid budget range where minimum is not greater than maximum.', 'error');
    return;
  }

  nextButton.disabled = true;
  nextButton.textContent = 'Generating...';
  setStatus('Generating final startup analysis...', 'success');

  try {
    const analysis = await analyzeIdeaRequest(payload);
    hiddenForm?.reset();
    renderResults(analysis);
  } catch (error) {
    setStatus(error.message || 'Something went wrong while analyzing the idea.', 'error');
  } finally {
    nextButton.disabled = false;
    nextButton.textContent = 'Generate analysis';
  }
};

const restoreScopedInterviewState = async () => {
  interviewSteps = [...baseSteps];
  const saved = loadState();

  Object.keys(answers).forEach((key) => delete answers[key]);
  followUpInserted.clear();
  latestAnalysis = null;
  latestComparison = null;
  latestHistory = null;
  interviewComplete = false;

  if (saved) {
    Object.assign(answers, saved.answers || {});
    rebuildInterviewSteps();

    currentStepIndex = Math.max(
      0,
      Math.min(Number(saved.currentStepIndex) || 0, interviewSteps.length - 1)
    );
    latestAnalysis = saved.latestAnalysis || null;
    latestComparison = saved.latestComparison || null;
    latestHistory = saved.latestHistory || null;
    interviewComplete = Boolean(saved.interviewComplete) || Boolean(saved.latestAnalysis);
  } else {
    currentStepIndex = 0;
  }

  setAuthFormMode('login');
  updateAuthUI();
  await syncCurrentUser();
  renderQuestion();

  if (latestComparison) {
    renderComparison(latestComparison);
  } else if (latestAnalysis) {
    renderResults(latestAnalysis);
  } else {
    syncOutputPanelState();
  }

  if (!getAuthToken()) {
    latestHistory = buildGuestHistoryPayload();
    renderGuestHistory();
  } else if (latestHistory) {
    renderHistory(latestHistory);
  } else {
    await loadHistory();
  }
};

const initializeInterview = async () => {
  setAuthFormMode('login');
  updateAuthUI();
  await syncCurrentUser();
  await restoreScopedInterviewState();
};

copyJsonButton.addEventListener('click', () => {
  if (!latestAnalysis) {
    setStatus('Run an analysis first, then you can export or share it.', 'error');
    return;
  }
  const isOpen = !sharePanel.classList.contains('hidden');
  toggleSharePanel(!isOpen);
});

shareCopySummaryButton.addEventListener('click', async () => {
  if (!latestAnalysis) return;

  try {
    await copyText(buildShareSummary());
    toggleSharePanel(false);
    setStatus('Analysis summary copied to clipboard.', 'success');
  } catch (_error) {
    setStatus('Could not copy the summary automatically. Please try again.', 'error');
  }
});

shareCopyJsonButton.addEventListener('click', async () => {
  if (!latestAnalysis) return;

  try {
    await copyText(JSON.stringify(latestAnalysis, null, 2));
    toggleSharePanel(false);
    setStatus('Analysis data copied to clipboard.', 'success');
  } catch (_error) {
    setStatus('Could not copy JSON automatically. Please try again.', 'error');
  }
});

shareWhatsappButton.addEventListener('click', () => {
  if (!latestAnalysis) return;
  const text = encodeURIComponent(buildShareSummary());
  openShareUrl(`https://wa.me/?text=${text}`);
  toggleSharePanel(false);
  setStatus('Opening WhatsApp share.', 'success');
});

shareXButton.addEventListener('click', () => {
  if (!latestAnalysis) return;
  const text = encodeURIComponent(buildShareSummary());
  openShareUrl(`https://twitter.com/intent/tweet?text=${text}`);
  toggleSharePanel(false);
  setStatus('Opening X share.', 'success');
});

shareLinkedInButton.addEventListener('click', () => {
  if (!latestAnalysis) return;
  const text = encodeURIComponent(buildShareSummary());
  openShareUrl(`https://www.linkedin.com/feed/?shareActive=true&text=${text}`);
  toggleSharePanel(false);
  setStatus('Opening LinkedIn share.', 'success');
});

shareInstagramButton.addEventListener('click', async () => {
  if (!latestAnalysis) return;

  try {
    await copyText(buildShareSummary());
    toggleSharePanel(false);
    setStatus('Instagram does not support direct web text sharing, so the summary was copied for manual posting.', 'success');
  } catch (_error) {
    setStatus('Instagram direct share is not available here, and copying the summary failed.', 'error');
  }
});

shareNativeButton.addEventListener('click', async () => {
  if (!latestAnalysis) return;

  const shareData = {
    title: 'Startup Idea Analysis',
    text: buildShareSummary(),
  };

  if (!navigator.share) {
    setStatus('More Options is not supported in this browser. Use WhatsApp, LinkedIn, or copy actions instead.', 'error');
    return;
  }

  try {
    await navigator.share(shareData);
    toggleSharePanel(false);
    setStatus('Share options opened.', 'success');
  } catch (_error) {
    setStatus('Share action was cancelled or could not be completed.', 'error');
  }
});

answerInput.addEventListener('input', updateLocationSuggestions);
answerInput.addEventListener('focus', updateLocationSuggestions);
answerInput.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') hideLocationSuggestions();
});

answerInput.addEventListener('blur', () => {
  window.setTimeout(() => hideLocationSuggestions(), 120);
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.location-input-wrap')) hideLocationSuggestions();
  if (!event.target.closest('.share-wrap')) toggleSharePanel(false);
  if (!event.target.closest('.account-menu-wrap')) toggleAccountMenu(false);
});

historyCloseButton?.addEventListener('click', () => {
  toggleHistoryModal(false);
});

historyBackdrop?.addEventListener('click', () => {
  toggleHistoryModal(false);
});

dashboardCloseButton?.addEventListener('click', () => {
  toggleDashboardModal(false);
});

dashboardBackdrop?.addEventListener('click', () => {
  toggleDashboardModal(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && authModal && !authModal.classList.contains('hidden')) {
    toggleAuthPanel(false);
  }
  if (event.key === 'Escape' && historyModal && !historyModal.classList.contains('hidden')) {
    toggleHistoryModal(false);
  }
  if (event.key === 'Escape' && dashboardModal && !dashboardModal.classList.contains('hidden')) {
    toggleDashboardModal(false);
  }
});

authOpenButton.addEventListener('click', () => {
  const isOpen = authModal ? !authModal.classList.contains('hidden') : !authPanel.classList.contains('hidden');
  toggleAuthPanel(!isOpen);
  toggleAccountMenu(false);
  if (!isOpen) {
    setAuthFormMode('login');
    authEmail?.focus();
  }
});

authCloseButton?.addEventListener('click', () => {
  toggleAuthPanel(false);
});

authBackdrop?.addEventListener('click', () => {
  toggleAuthPanel(false);
});

loginModeButton.addEventListener('click', () => {
  setAuthFormMode('login');
});

registerModeButton.addEventListener('click', () => {
  setAuthFormMode('register');
});

contactEmailButton.addEventListener('click', () => {
  setAuthContactMethod('email');
});

contactPhoneButton?.addEventListener('click', () => {
  setAuthContactMethod('email');
});

accountMenuButton.addEventListener('click', () => {
  const isOpen = !accountMenu.classList.contains('hidden');
  toggleAccountMenu(!isOpen);
});

menuHistoryButton.addEventListener('click', async () => {
  toggleAccountMenu(false);
  await loadHistory();
  toggleDashboardModal(false);
  toggleHistoryModal(true);
  setStatus('Personal history loaded for your account.', 'success');
});

menuDashboardButton.addEventListener('click', async () => {
  toggleAccountMenu(false);
  const loaded = await loadDashboard({ open: true });
  setStatus(
    loaded ? 'Startup dashboard loaded successfully.' : 'Dashboard could not be loaded right now.',
    loaded ? 'success' : 'error'
  );
});

menuLogoutButton.addEventListener('click', async () => {
  if (!getAuthToken() && isGuestMode()) {
    setGuestMode(false);
    clearAuthSession();
    updateAuthUI();
    toggleAccountMenu(false);
    toggleHistoryModal(false);
    toggleDashboardModal(false);
    toggleAuthPanel(false);
    await restoreScopedInterviewState();
    setStatus('Guest mode closed. You can log in or register anytime.', 'success');
    return;
  }

  try {
    if (getAuthToken()) {
      await fetch('/api/v1/auth/logout', {
        method: 'POST',
        headers: buildAuthHeaders(),
      });
    }
  } catch (_error) {
    // Ignore logout request failures and still clear client session.
  }

  clearAuthSession();
  updateAuthUI();
  toggleAccountMenu(false);
  toggleHistoryModal(false);
  toggleDashboardModal(false);
  await restoreScopedInterviewState();
  renderGuestHistory('You are now in guest mode. New analyses will be kept temporarily in this browser session.');
  setStatus('Logged out successfully. Guest mode is active.', 'success');
});

guestModeButton.addEventListener('click', async () => {
  await activateGuestMode('Guest mode is active. You can use the app now and keep temporary history for this browser session.');
});

const handleAuthSubmit = async () => {
  const firstName = authFirstName.value.trim();
  const lastName = authLastName.value.trim();
  const email = authEmail.value.trim();
  const password = authPassword.value;
  const confirmPassword = authConfirmPassword.value;
  const selectedIdentifier = email;

  if (authMode === 'register' && (!firstName || !lastName)) {
    setStatus('Please enter both first name and last name.', 'error');
    setAuthInlineStatus('Please enter both first name and last name.', 'error');
    return;
  }

  if (!selectedIdentifier) {
    const message = 'Please enter your email address.';
    setStatus(message, 'error');
    setAuthInlineStatus(message, 'error');
    return;
  }

  if (!password) {
    setStatus('Please enter your password.', 'error');
    setAuthInlineStatus('Please enter your password.', 'error');
    return;
  }

  if (authMode === 'register' && password !== confirmPassword) {
    setStatus('Password and confirm password must match.', 'error');
    setAuthInlineStatus('Password and confirm password must match.', 'error');
    return;
  }

  if (password.length < 6) {
    setStatus('Password must be at least 6 characters long.', 'error');
    setAuthInlineStatus('Password must be at least 6 characters long.', 'error');
    return;
  }

  authSubmitButton.disabled = true;
  authSubmitButton.textContent = authMode === 'login' ? 'Signing in...' : 'Sending OTP...';
  setStatus(authMode === 'login' ? 'Signing you in...' : 'Sending OTP...', 'success');
  setAuthInlineStatus(authMode === 'login' ? 'Signing you in...' : 'Sending OTP...', 'success');
  authPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });

  try {
    const response = await fetch(authMode === 'login' ? '/api/v1/auth/login' : '/api/v1/auth/register/request-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        authMode === 'login'
          ? {
              email: selectedIdentifier,
              password,
            }
          : {
              firstName,
              lastName,
              email: selectedIdentifier,
              password,
              confirmPassword,
            }
      ),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Authentication failed');
    }

    if (authMode === 'register') {
      pendingOtpSession = {
        verificationToken: result.data.verificationToken,
        identifier: result.data.identifier,
        email: result.data.email,
        channel: result.data.channel,
      };
      otpTitle.textContent = 'Verify email OTP';
      otpCopy.textContent = `Enter the OTP sent to ${result.data.identifier} to finish creating your account.`;
      otpHelperNote.textContent = 'Check your inbox for the 6-digit OTP.';
      showAuthStep('otp');
      otpInput.focus();
      authPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setAuthInlineStatus('');
      setStatus('OTP sent successfully. Enter it to complete account creation.', 'success');
      return;
    }

    storeAuthSession({
      token: result.data.token,
      user: result.data.user,
    });
    authForm.reset();
    updateAuthUI();
    toggleAuthPanel(false);
    await restoreScopedInterviewState();
    await loadHistory();
    await loadDashboard({ open: true });
    setAuthInlineStatus('');
    setStatus(
      authMode === 'login' ? 'Logged in successfully. Your future analyses will save to your account.' : 'Account created successfully. You are now signed in.',
      'success'
    );
  } catch (error) {
    setStatus(error.message || 'Authentication failed.', 'error');
    setAuthInlineStatus(error.message || 'Authentication failed.', 'error');
  } finally {
    authSubmitButton.disabled = false;
    authSubmitButton.textContent = authMode === 'login' ? 'Login' : 'Send OTP';
  }
};

authForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  await handleAuthSubmit();
});

otpBackButton.addEventListener('click', () => {
  pendingOtpSession = null;
  otpInput.value = '';
  showAuthStep('form');
  setAuthInlineStatus('You can edit your signup details and request a new OTP.', 'success');
  setStatus('You can edit your signup details and request a new OTP.', 'success');
});

otpSubmitButton.addEventListener('click', async () => {
  if (!pendingOtpSession?.verificationToken || !pendingOtpSession?.identifier) {
    setStatus('OTP session expired. Please request a new OTP.', 'error');
    setAuthInlineStatus('OTP session expired. Please request a new OTP.', 'error');
    showAuthStep('form');
    return;
  }

  const otp = otpInput.value.trim();
  if (otp.length !== 6) {
    setStatus('Please enter the 6-digit OTP.', 'error');
    setAuthInlineStatus('Please enter the 6-digit OTP.', 'error');
    return;
  }

  otpSubmitButton.disabled = true;
  otpSubmitButton.textContent = 'Verifying...';

  try {
    const response = await fetch('/api/v1/auth/register/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: pendingOtpSession.identifier,
        verificationToken: pendingOtpSession.verificationToken,
        otp,
      }),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'OTP verification failed');
    }

    storeAuthSession({
      token: result.data.token,
      user: result.data.user,
    });
    pendingOtpSession = null;
    authForm.reset();
    otpInput.value = '';
    updateAuthUI();
    toggleAuthPanel(false);
    await restoreScopedInterviewState();
    await loadHistory();
    await loadDashboard({ open: true });
    setAuthInlineStatus('');
    setStatus('Account created and verified successfully. You are now signed in.', 'success');
  } catch (error) {
    setStatus(error.message || 'OTP verification failed.', 'error');
    setAuthInlineStatus(error.message || 'OTP verification failed.', 'error');
  } finally {
    otpSubmitButton.disabled = false;
    otpSubmitButton.textContent = 'Verify OTP';
  }
});

const openCompareFlow = () => {
  if (!latestAnalysis) {
    setStatus('Generate the first idea analysis before starting comparison.', 'error');
    return;
  }

  compareForm.reset();
  compareForm.classList.remove('hidden');
  interviewModePanel.classList.add('hidden');
  ideaSummaryPanel.classList.remove('hidden');
  comparisonPanel.classList.add('hidden');
  setStatus('Add the second idea now. We will compare it against the current result.', 'success');
  compareForm.querySelector('input[name="ideaB"]')?.focus();
};

cancelCompareButton.addEventListener('click', () => {
  compareForm.classList.add('hidden');
  ideaSummaryPanel.classList.remove('hidden');
  inputPanel.classList.add('input-panel-post-analysis');
  if (latestComparison) {
    comparisonPanel.classList.remove('hidden');
    resultPanel.classList.add('hidden');
    outputTitle.textContent = 'Idea comparison';
  } else if (latestAnalysis) {
    resultPanel.classList.remove('hidden');
    outputTitle.textContent = 'Idea analysis';
  } else {
    emptyState.classList.remove('hidden');
  }
  setStatus('Comparison cancelled. Your current analysis is still available.', 'success');
});

editIdeaButton.addEventListener('click', () => {
  inputPanel.classList.remove('input-panel-post-analysis');
  ideaSummaryPanel.classList.add('hidden');
  compareForm.classList.add('hidden');
  comparisonPanel.classList.add('hidden');
  interviewModePanel.classList.remove('hidden');
  if (latestAnalysis) {
    resultPanel.classList.add('hidden');
    emptyState.classList.remove('hidden');
  }
  interviewComplete = false;
  currentStepIndex = Math.max(interviewSteps.length - 1, 0);
  saveState();
  renderQuestion();
  setStatus('Interview reopened. Update any answer and generate a fresh analysis.', 'success');
});

summaryCompareButton.addEventListener('click', () => {
  openCompareFlow();
});

backButton.addEventListener('click', () => {
  if (interviewComplete) {
    interviewComplete = false;
    resetAnalysisView({ preserveStatus: true });
    currentStepIndex = interviewSteps.length - 1;
    saveState();
    renderQuestion();
    return;
  }

  if (currentStepIndex === 0) return;

  const step = currentStep();
  const currentValue = getInputValue();
  if (step && currentValue) {
    answers[step.id] = currentValue;
    rebuildInterviewSteps();
  }

  currentStepIndex -= 1;
  saveState();
  renderQuestion();
});

interviewForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const step = currentStep();
  const value = getInputValue();
  const previousValue = answers[step.id] || '';

  if (!value) {
    setStatus('Please answer the current question before moving ahead.', 'error');
    return;
  }

  if (latestAnalysis && value !== previousValue) {
    resetAnalysisView({ preserveStatus: true });
    clearAnswersAfterStep(currentStepIndex);
  }
  answers[step.id] = value;
  rebuildInterviewSteps();
  saveState();
  renderThread();

  if (currentStepIndex === interviewSteps.length - 1) {
    await submitInterview();
    return;
  }

  currentStepIndex += 1;
  saveState();
  setStatus('Answer captured. Moving to the next question.', 'success');
  renderQuestion();
});

compareForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const payloadA = buildPayload();
  const payloadB = buildComparePayload('B');
  const minB = Number(payloadB.min);
  const maxB = Number(payloadB.max);

  if ([minB, maxB].some((value) => Number.isNaN(value) || value < 0)) {
    setStatus('Please enter a valid numeric budget range for the second idea.', 'error');
    return;
  }

  if (minB > maxB) {
    setStatus('Minimum budget cannot be greater than maximum budget for the second idea.', 'error');
    return;
  }

  compareSubmitButton.disabled = true;
  compareSubmitButton.textContent = 'Comparing...';
  setStatus('Running side-by-side startup comparison...', 'success');

  try {
    const [analysisA, analysisB] = await Promise.all([
      latestAnalysis ? Promise.resolve(latestAnalysis) : analyzeIdeaRequest(payloadA),
      analyzeIdeaRequest(payloadB),
    ]);

    renderComparison({ payloadA, payloadB, analysisA, analysisB });
  } catch (error) {
    setStatus(error.message || 'Could not compare the two ideas.', 'error');
  } finally {
    compareSubmitButton.disabled = false;
    compareSubmitButton.textContent = 'Compare Both Ideas';
  }
});

initializeInterview();
