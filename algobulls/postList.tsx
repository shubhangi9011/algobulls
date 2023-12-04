// src/components/Home/PostList.tsx
import React from 'react';
import { Card, Button } from 'antd';

const PostList: React.FC = ({ posts }: { posts: any[] }) => {
  return (
    <div>
      {posts.map(post => (
        <Card key={post.id}>
          {/* Post details, buttons, etc. */}
        </Card>
      ))}
    </div>
  );
};

export default PostList;
