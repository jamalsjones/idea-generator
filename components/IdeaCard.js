import React from 'react';

export default function IdeaCard({ title, sections = {} }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      {Object.entries(sections).map(([sectionTitle, items]) => (
        <div key={sectionTitle} style={styles.section}>
          <h4>{sectionTitle}</h4>
          <ul>
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: 12,
    padding: 20,
    margin: '20px 0',
    backgroundColor: '#f9f9f9',
    maxWidth: 700,
  },
  title: {
    margin: '0 0 10px 0',
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 15,
  },
};