import { Link } from 'react-router';

export const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1 style={{ fontSize: '3rem', color: '#ef4444' }}>404 - Page Not Found</h1>
    <p>Oops! The page you are looking for does not exist.</p>
    <Link to="/" style={{ color: '#2563eb', fontWeight: 'bold' }}>Go to Home Page</Link>
  </div>
);