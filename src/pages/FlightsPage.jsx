import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Input,
  DatePicker,
  Select,
  Button,
  List,
  Tag,
} from "antd";
import { SwapOutlined, SendOutlined } from "@ant-design/icons";

const { Option } = Select;

const FlightsPage = () => {
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: null,
    passengers: 1,
  });

  const flights = [
    {
      id: 1,
      airline: "IndiGo",
      route: "Delhi → Mumbai",
      time: "10:30 AM - 12:40 PM",
      price: 4500,
    },
    {
      id: 2,
      airline: "Air India",
      route: "Delhi → Mumbai",
      time: "02:00 PM - 04:15 PM",
      price: 5200,
    },
    {
      id: 3,
      airline: "Vistara",
      route: "Delhi → Mumbai",
      time: "06:30 PM - 08:40 PM",
      price: 6100,
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      {/* SEARCH FLIGHTS */}
      <Card title="Search Flights" style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col xs={24} md={6}>
            <Input
              placeholder="From"
              onChange={(e) =>
                setSearchData({ ...searchData, from: e.target.value })
              }
            />
          </Col>

          <Col xs={24} md={6}>
            <Input
              placeholder="To"
              onChange={(e) =>
                setSearchData({ ...searchData, to: e.target.value })
              }
            />
          </Col>

          <Col xs={24} md={6}>
            <DatePicker style={{ width: "100%" }} />
          </Col>

          <Col xs={24} md={4}>
            <Select
              defaultValue={1}
              style={{ width: "100%" }}
              onChange={(value) =>
                setSearchData({ ...searchData, passengers: value })
              }
            >
              <Option value={1}>1 Passenger</Option>
              <Option value={2}>2 Passengers</Option>
              <Option value={3}>3 Passengers</Option>
              <Option value={4}>4 Passengers</Option>
            </Select>
          </Col>

          <Col xs={24} md={2}>
            <Button type="primary" icon={<SwapOutlined />} block>
              Search
            </Button>
          </Col>
        </Row>
      </Card>

      {/* FLIGHT RESULTS */}
      <Card title="Available Flights">
        <List
          itemLayout="horizontal"
          dataSource={flights}
          renderItem={(flight) => (
            <List.Item
              actions={[<Button type="primary">Book Now</Button>]}
            >
              <List.Item.Meta
                avatar={<SendOutlined style={{ fontSize: 24 }} />}
                title={`${flight.airline} • ${flight.route}`}
                description={flight.time}
              />
              <Tag color="blue">₹{flight.price}</Tag>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default FlightsPage;