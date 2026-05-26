import React from "react";
import {
  Card,
  Row,
  Col,
  Input,
  Button,
  List,
  Tag,
} from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const upcomingBookings = [
    {
      id: 1,
      type: "Hotel",
      name: "Taj Palace",
      details: "Mumbai • 15 Feb 2026",
      status: "Confirmed",
    },
    {
      id: 2,
      type: "Flight",
      name: "IndiGo 6E-204",
      details: "Delhi → Mumbai • 28 Feb 2026",
      status: "Upcoming",
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      {/* SEARCH BAR */}
      <Card style={{ marginBottom: 24 }}>
        <Input
          size="large"
          placeholder="Search hotels, flights, destinations..."
          prefix={<SearchOutlined />}
        />
      </Card>

      {/* BOOKING OPTIONS */}
      <Row gutter={24} style={{ marginBottom: 24 }}>
        <Col xs={24} md={12}>
          <Card
            hoverable
            style={{ textAlign: "center" }}
            onClick={() => navigate("/hotels")}
          >
            <HomeOutlined style={{ fontSize: 40, color: "#1677ff" }} />
            <h2>Book a Hotel</h2>
            <p>Find best hotels at best prices</p>
            <Button type="primary">Search Hotels</Button>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card
            hoverable
            style={{ textAlign: "center" }}
            onClick={() => navigate("/flights")}
          >
            <SendOutlined style={{ fontSize: 40, color: "#52c41a" }} />
            <h2>Book a Flight</h2>
            <p>Domestic & international flights</p>
            <Button type="primary" ghost>
              Search Flights
            </Button>
          </Card>
        </Col>
      </Row>

      {/* UPCOMING BOOKINGS */}
      <Card title="Upcoming Bookings">
        <List
          dataSource={upcomingBookings}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.name}
                description={item.details}
              />
              <div>
                <Tag color={item.type === "Hotel" ? "blue" : "green"}>
                  {item.type}
                </Tag>
                <Tag color="gold">{item.status}</Tag>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default HomePage;