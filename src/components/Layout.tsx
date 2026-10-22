import { Outlet } from 'react-router';
import { Navbar } from './Navbar';

interface LayoutProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

export const Layout = ({ isAuthenticated, onLogout }: LayoutProps) => {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar isAuthenticated={isAuthenticated} onLogout={onLogout} />
      <main style={{ flex: 1, padding: '20px 30px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Outlet />
      </main>
      <footer style={{ padding: '15px 30px', textAlign: 'center', background: '#f1f5f9', marginTop: 'auto' }}>
        <p>&copy; 2026 DevBlog SIS2 Assignment. All rights reserved.</p>
      </footer>
    </div>
  );
};