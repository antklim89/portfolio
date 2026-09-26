import { useEffect, useState } from 'react';

export function useObservableLinks(links: string[]) {
  const [observedLinks, setObservedLinks] = useState(new Set<string>());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setObservedLinks((prev) => {
            const newSet = new Set(prev);
            newSet.add(entry.target.id);
            return newSet;
          });
        } else {
          setObservedLinks((prev) => {
            const newSet = new Set(prev);
            newSet.delete(entry.target.id);
            return newSet;
          });
        }
      }
    });

    for (const link of links) {
      const el = document.getElementById(link);
      if (!el) return console.error(`Element with id "${link}" wasn't fount`);
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, [links]);

  return { observedLinks };
}
