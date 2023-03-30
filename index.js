const { useEffect, useCallback } = require('react');

function useMemoryLeakPrevention(cleanupFn, deps = []) {
  useEffect(() => {
    return cleanupFn;
  }, [...deps, cleanupFn]);

  const memoizedCleanupFn = useCallback(cleanupFn, deps);

  useEffect(() => {
    return () => memoizedCleanupFn();
  }, [...deps, memoizedCleanupFn]);
}

module.exports = useMemoryLeakPrevention