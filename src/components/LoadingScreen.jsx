import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 600);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`loading-screen${fadeOut ? ' fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">KD.</div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
        <p className="loader-text">Loading amazing things...</p>
      </div>
    </div>
  );
}
