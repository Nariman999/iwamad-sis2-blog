import { useParams, Link } from 'react-router';
import { posts } from '../data/posts';

export const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const postId = id ? parseInt(id, 10) : NaN;
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Post Not Found</h2>
        <p>The post with ID "{id}" does not exist.</p>
        <Link to="/posts" style={{ color: '#2563eb' }}>&larr; Back to Posts</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/posts" style={{ color: '#2563eb', textDecoration: 'none' }}>&larr; Back to Posts</Link>
      <h1 style={{ marginTop: '20px' }}>{post.title}</h1>
      <p style={{ color: '#64748b' }}>By {post.author} • {post.date}</p>
      <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>{post.content}</p>
    </div>
  );
};