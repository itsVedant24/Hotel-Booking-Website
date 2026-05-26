import React, { useState } from "react";
import {
  Card,
  Avatar,
  Button,
  Form,
  Input,
  Row,
  Col,
  List,
  Tag,
  Divider,
  message,
} from "antd";
import { UserOutlined, EditOutlined, LogoutOutlined } from "@ant-design/icons";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Vedant",
    email: "vedant@gmail.com",
    phone: "9876543210",
  });

  const bookings = [
    {
      id: 1,
      hotel: "Taj Palace",
      location: "Mumbai",
      date: "12 Jan 2026",
      status: "Confirmed",
    },
    {
      id: 2,
      hotel: "The Leela",
      location: "Delhi",
      date: "20 Feb 2026",
      status: "Completed",
    },
  ];

  const handleSave = (values) => {
    setUser(values);
    setIsEditing(false);
    message.success("Profile updated successfully");
  };

  return (
    <Row gutter={24} style={{ padding: "24px" }}>
      {/* LEFT PROFILE CARD */}
      <Col xs={24} md={8}>
        <Card style={{ textAlign: "center" }}>
          <Avatar
            size={100}
            icon={<UserOutlined />}
            style={{ marginBottom: 16 }}
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>

          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => setIsEditing(!isEditing)}
            style={{ marginBottom: 10 }}
          >
            Edit Profile
          </Button>

          <br />

          <Button danger icon={<LogoutOutlined />}>
            Logout
          </Button>
        </Card>
      </Col>

      {/* RIGHT CONTENT */}
      <Col xs={24} md={16}>
        {/* PROFILE DETAILS */}
        <Card title="Profile Details">
          {isEditing ? (
            <Form
              layout="vertical"
              initialValues={user}
              onFinish={handleSave}
            >
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, type: "email" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
            </Form>
          ) : (
            <>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
            </>
          )}
        </Card>

        <Divider />

        {/* BOOKING HISTORY */}
        <Card title="My Bookings">
          <List
            dataSource={bookings}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`${item.hotel}, ${item.location}`}
                  description={`Date: ${item.date}`}
                />
                <Tag color={item.status === "Confirmed" ? "green" : "blue"}>
                  {item.status}
                </Tag>
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default ProfilePage;