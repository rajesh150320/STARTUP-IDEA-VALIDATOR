const STORAGE_KEY = 'startup-validator-saved-analyses-v1';

function normalizeIdea(value = '') {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function hydrateVersions(items) {
  const versionCounts = new Map();

  return items.map((item) => {
    const lineageKey = item.lineageKey || normalizeIdea(item.idea || item.input?.idea || 'untitled idea');
    const nextVersion = item.version || (versionCounts.get(lineageKey) || 0) + 1;
    versionCounts.set(lineageKey, nextVersion);

    return {
      ...item,
      lineageKey,
      version: nextVersion,
    };
  });
}

export function loadSavedAnalyses() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? hydrateVersions(parsed) : [];
  } catch (_error) {
    return [];
  }
}

export function saveSavedAnalyses(items) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
