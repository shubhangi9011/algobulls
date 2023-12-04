// src/components/MyBookmarks/BookmarkedPostList.tsx
import React from 'react';
import { Card } from 'antd';

const BookmarkedPostList: React.FC = ({ bookmarkedPosts }: { bookmarkedPosts: any[] }) => {
  return (
    <div>
      {bookmarkedPosts.map(post => (
        <Card key={post.id}>
          {/* Bookmarked post details */}
        </Card>
      ))}
    </div>
  );
};

export default BookmarkedPostList;
