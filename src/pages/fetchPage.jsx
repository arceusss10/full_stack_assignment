
import FetchConfig from '../components/fetchConfig';

export default function FetchPage() {
  return (
    <div style={{ 
      padding: '2rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2>Fetch Configuration</h2>
      <FetchConfig />
    </div>
  );
}
