import { useState } from 'react';
import axios from 'axios';

function UpdateRemark() {
  const [configId, setConfigId] = useState('');
  const [remark, setRemark] = useState('');
  const [message, setMessage] = useState('');

  const updateRemark = async () => {
    try {
      const res = await axios.put(`http://localhost:8080/api/configurations/${configId}`, {
        remark,
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage('Error updating remark. Check the config ID.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
      maxWidth: '500px',
      width: '100%'
    }}>
      <h2>Update Remark</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
        alignItems: 'center'
      }}>
        <input
          type="text"
          placeholder="Enter Config ID"
          value={configId}
          onChange={(e) => setConfigId(e.target.value)}
          style={{
            padding: '0.75rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '6px',
            width: '100%',
            maxWidth: '300px',
            backgroundColor: 'white',
            color: '#333'
          }}
        />
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter remark"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          style={{
            padding: '0.75rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '6px',
            width: '100%',
            maxWidth: '300px',
            resize: 'vertical',
            backgroundColor: 'white',
            color: '#333',
            fontFamily: 'inherit'
          }}
        />
        <button 
          onClick={updateRemark}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'background-color 0.2s ease'
          }}
        >
          Submit
        </button>
      </div>
      {message && (
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem 1rem',
          borderRadius: '6px',
          backgroundColor: message.includes('Error') ? '#f8d7da' : '#d4edda',
          color: message.includes('Error') ? '#721c24' : '#155724',
          border: `1px solid ${message.includes('Error') ? '#f5c6cb' : '#c3e6cb'}`,
          textAlign: 'center',
          maxWidth: '300px',
          width: '100%'
        }}>
          {message}
        </div>
      )}
    </div>
  );
}

export default UpdateRemark;
