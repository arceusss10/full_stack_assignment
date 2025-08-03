import { useNavigate } from 'react-router-dom';
import './home.css';
import viteLogo from '/fetch.png';
import updateIcon from '../assets/update.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome</h1>
      <div className="card-grid">
        <div className="card" onClick={() => navigate('/fetch')}>
          <img src={viteLogo} alt="Fetch" className="card-icon" />
          <h2>Fetch Config</h2>
        </div>
        <div className="card" onClick={() => navigate('/update')}>
          <img src={updateIcon} alt="Update" className="card-icon" />
          <h2>Update Remark</h2>
        </div>
      </div>
    </div>
  );
}
