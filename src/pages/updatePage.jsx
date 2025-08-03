
import UpdateRemark from '../components/updateRemark';

export default function UpdatePage() {
  return (
    <div style={{ 
      padding: '2rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2>Update Remark</h2>
      <UpdateRemark />
    </div>
  );
}
