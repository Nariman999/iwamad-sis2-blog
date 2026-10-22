import { posts } from '../data/posts';
import { PostCard } from '../components/PostCard';

export const Posts = () => (
  <div>
    <h1>Blog Posts</h1>
    {posts.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);