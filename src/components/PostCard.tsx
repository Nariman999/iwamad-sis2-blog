import { useState } from 'react';
import { Link } from 'react-router';

interface Post {
  id: number;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
}

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', marginBottom: '16px', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <h3 style={{ marginTop: 0 }}>
        <Link to={`/posts/${post.id}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
          {post.title}
        </Link>
      </h3>
      <p style={{ color: '#475569' }}>{post.summary}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
        <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>By {post.author} on {post.date}</span>
        <button 
          aria-label={`like-button-${post.id}`}
          onClick={() => setLikes(prev => prev + 1)} 
          style={{ padding: '6px 12px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          ❤️ Like {likes}
        </button>
      </div>
    </div>
  );
};