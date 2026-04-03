const cacheStore = new Map();

const DEFAULT_TTL_MS = 1000 * 60 * 15;

const stableSerialize = (value) => {
  if (Array.isArray(value)) {
    return `[${value.map((item) => stableSerialize(item)).join(',')}]`;
  }

  if (value && typeof value === 'object') {
    return `{${Object.keys(value)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableSerialize(value[key])}`)
      .join(',')}}`;
  }

  return JSON.stringify(value);
};

const cloneValue = (value) => JSON.parse(JSON.stringify(value));

const buildCacheKey = (namespace, payload) => `${namespace}:${stableSerialize(payload)}`;

const clearExpiredEntries = () => {
  const now = Date.now();

  for (const [key, entry] of cacheStore.entries()) {
    if (entry.expiresAt <= now) {
      cacheStore.delete(key);
    }
  }
};

const getCachedValue = (key) => {
  const entry = cacheStore.get(key);

  if (!entry) {
    return null;
  }

  if (entry.expiresAt <= Date.now()) {
    cacheStore.delete(key);
    return null;
  }

  return cloneValue(entry.value);
};

const setCachedValue = (key, value, ttlMs = DEFAULT_TTL_MS) => {
  cacheStore.set(key, {
    value: cloneValue(value),
    expiresAt: Date.now() + ttlMs,
  });

  return cloneValue(value);
};

const getOrSetCachedValue = async (key, producer, ttlMs = DEFAULT_TTL_MS) => {
  clearExpiredEntries();

  const cached = getCachedValue(key);
  if (cached !== null) {
    return cached;
  }

  const freshValue = await producer();
  return setCachedValue(key, freshValue, ttlMs);
};

export { buildCacheKey, getCachedValue, getOrSetCachedValue, setCachedValue };
