import { useState } from 'react';
import axios from 'axios';

function FetchConfig() {
  const [configId, setConfigId] = useState('');
  const [matrix, setMatrix] = useState([]);

  const fetchMatrix = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/configurations/${configId}`);
      setMatrix(res.data);
    } catch (error) {
      alert('Error fetching configuration. Make sure the ID exists.');
      setMatrix([]);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      maxWidth: '600px',
      width: '100%'
    }}>
      <h2>Fetch Configuration Matrix</h2>
      <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <input
          type="text"
          placeholder="Enter Config ID"
          value={configId}
          onChange={(e) => setConfigId(e.target.value)}
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            minWidth: '200px'
          }}
        />
        <button 
          onClick={fetchMatrix}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Fetch
        </button>
      </div>

      {matrix.length > 0 && (
        <div style={{
          marginTop: '2rem',
          textAlign: 'center',
          width: '100%'
        }}>
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>Matrix:</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            alignItems: 'center'
          }}>
            {matrix.map((row, i) => (
              <p key={i} style={{
                margin: '0',
                padding: '0.75rem 1rem',
                backgroundColor: '#2a2a2a',
                color: 'white',
                borderRadius: '6px',
                minWidth: '250px',
                border: '1px solid #444',
                fontSize: '1rem',
                fontWeight: '500'
              }}>
                {row.join(' | ')}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchConfig;
