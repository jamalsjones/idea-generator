import React, { useState } from 'react';
import IdeaCard from '../components/IdeaCard';

export default function Home() {
  const [ideaInput, setIdeaInput] = useState('');
  const [expansion, setExpansion] = useState(null);
  const [relatedIdeas, setRelatedIdeas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const parseSections = (text) => {
    const sections = {};
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);

    let current = '';
    for (let line of lines) {
      if (line.match(/^(Business Models|Technical Approaches|User Personas)/i)) {
        current = line;
        sections[current] = [];
      } else if (current && (line.startsWith('-') || line.match(/^\d\./))) {
        sections[current].push(line.replace(/^[-\d.]+\s*/, '').trim());
      }
    }
    return sections;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setExpansion(null);
    setRelatedIdeas(null);

    try {
      const expandRes = await fetch('/api/expand_idea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea: ideaInput })
      });

      const expandData = await expandRes.json();
      const sections = parseSections(expandData.expansion);

      const relatedRes = await fetch('/api/connect_ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea: ideaInput })
      });

      const relatedData = await relatedRes.json();

      setExpansion({ title: ideaInput, sections });
      setRelatedIdeas(relatedData.related_ideas);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: 'auto' }}>
      <h1>💡 Idea Builder</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Enter your idea..."
          value={ideaInput}
          onChange={(e) => setIdeaInput(e.target.value)}
          style={{ padding: '0.5rem', width: '70%' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}>
          Expand
        </button>
      </form>

      {loading && <p>⏳ Expanding your idea...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {expansion && (
        <>
          <h2>Expanded Idea</h2>
          <IdeaCard title={expansion.title} sections={expansion.sections} />
        </>
      )}

      {relatedIdeas && (
        <>
          <h2>Related Ideas</h2>
          <pre style={{
            background: '#f0f0f0',
            padding: '1rem',
            borderRadius: '8px'
          }}>
            {relatedIdeas}
          </pre>
        </>
      )}
    </main>
  );
}