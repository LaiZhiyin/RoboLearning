import { useCallback, useEffect, useState } from 'react';
import { ARTICLES } from '../data/articles.mjs';

const STORAGE_KEY = 'xiaobu-learning-v1';
const emptyRecords = () => ({ saved: [], visited: [] });
const knownSlugs = new Set(ARTICLES.map(article => article.slug));

function validRecords(value) {
  if (!value || typeof value !== 'object') return emptyRecords();
  const clean = items => Array.isArray(items)
    ? [...new Set(items.filter(item => typeof item === 'string' && knownSlugs.has(item)))]
    : [];
  return { saved: clean(value.saved), visited: clean(value.visited) };
}

export default function useLearning() {
  const [records, setRecords] = useState(emptyRecords);
  const [ready, setReady] = useState(false);
  const [storageError, setStorageError] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setRecords(validRecords(JSON.parse(raw)));
    } catch {
      setStorageError(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    } catch {
      setStorageError(true);
    }
  }, [records, ready]);

  const toggleSaved = useCallback(slug => {
    if (!knownSlugs.has(slug)) return;
    setRecords(current => ({
      ...current,
      saved: current.saved.includes(slug)
        ? current.saved.filter(item => item !== slug)
        : [...current.saved, slug],
    }));
  }, []);

  const recordVisit = useCallback(slug => {
    if (!knownSlugs.has(slug)) return;
    setRecords(current => current.visited[0] === slug ? current : {
      ...current,
      visited: [slug, ...current.visited.filter(item => item !== slug)],
    });
  }, []);

  return { ...records, ready, storageError, toggleSaved, recordVisit };
}
