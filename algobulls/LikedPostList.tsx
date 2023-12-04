// src/components/MyLikes/LikedPostList.tsx
import React from 'react';
import { Card } from 'antd';

const LikedPostList: React.FC = ({ likedPosts }: { likedPosts: any[] }) => {
  return (
    <div>
      {likedPosts.map(post => (
        <Card key={post.id}>
          {/* Liked post details */}
        </Card>
      ))}
    </div>
  );
};

export default LikedPostList;
