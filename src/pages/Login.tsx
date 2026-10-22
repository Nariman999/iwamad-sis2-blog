import { useNavigate } from 'react-router';

interface LoginProps {
  onLogin: () => void;
}

export const Login = ({ onLogin }: LoginProps) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    onLogin();
    navigate('/dashboard');
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>Sign In Required</h1>
      <p>Please sign in to access the protected dashboard route.</p>
      <button 
        onClick={handleSignIn} 
        style={{ padding: '10px 20px', fontSize: '1rem', background: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
      >
        Sign In
      </button>
    </div>
  );
};