import { NavLink } from 'react-router';

interface NavbarProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

export const Navbar = ({ isAuthenticated, onLogout }: NavbarProps) => {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px 30px', background: '#1e293b', color: '#fff', alignItems: 'center' }}>
      <h2 style={{ margin: 0, marginRight: 'auto', color: '#61dafbaa' }}>DevBlog</h2>
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#61dafb' : '#fff', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>Home</NavLink>
      <NavLink to="/posts" style={({ isActive }) => ({ color: isActive ? '#61dafb' : '#fff', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>Posts</NavLink>
      <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? '#61dafb' : '#fff', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>Contact</NavLink>
      <NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive ? '#61dafb' : '#fff', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>Dashboard</NavLink>
      {isAuthenticated ? (
        <button onClick={onLogout} style={{ padding: '6px 12px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Sign Out</button>
      ) : (
        <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? '#61dafb' : '#fff', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>Sign In</NavLink>
      )}
    </nav>
  );
};