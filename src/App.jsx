import React from 'react'
import Card from './components/Card';
import emojis from './data/emojis.json';
function App() {
  const { gitmojis } = emojis;
  return (
    <section className="section">
      <div className="command">
        {`> git commit -m "message 🚀"`}
      </div>
      <div className="list">
        {gitmojis.map(emoji => (
          <Card {...emoji} key={emoji.description} />
        ))}
      </div>
    </section>
  )
}

export default App
