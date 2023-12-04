// src/components/Home/CreatePost.tsx
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const CreatePost: React.FC = ({ onCreatePost }: { onCreatePost: (content: string) => void }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values:', values);
    onCreatePost(values.postContent);
    form.resetFields();
  };

  return (
    <div>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="postContent" rules={[{ required: true, message: 'Please input your post content!' }]}>
          <Input.TextArea placeholder="What's on your mind?" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePost;
