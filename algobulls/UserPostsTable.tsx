// src/components/MyPosts/UserPostsTable.tsx
import React from 'react';
import { Table, Button, Space } from 'antd';

const UserPostsTable: React.FC = ({ userPosts }: { userPosts: any[] }) => {
  const columns = [
    // Define your columns
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    // Add more columns as needed
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: any) => (
        <Space size="middle">
          {/* Action buttons for editing and deleting */}
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={userPosts} columns={columns} />;
};

export default UserPostsTable;
