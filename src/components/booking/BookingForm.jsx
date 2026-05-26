import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Row,
  Col,
  Card,
  Typography,
  message,
} from "antd";
import dayjs from "dayjs";
import BookingSummaryCard from "./BookingSummaryCard";

const { Title } = Typography;

function BookingForm({ hotel }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: null,
    checkOut: null,
    guests: 1,
    rooms: 1,
  });
  const [totalNights, setTotalNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total nights and price whenever dates or rooms change
  useEffect(() => {
    if (formData.checkIn && formData.checkOut) {
      const nights = formData.checkOut.diff(formData.checkIn, "days");
      setTotalNights(nights > 0 ? nights : 0);

      const price = nights > 0
        ? nights * hotel.pricePerNight * (formData.rooms || 1)
        : 0;
      setTotalPrice(price);
    } else {
      setTotalNights(0);
      setTotalPrice(0);
    }
  }, [formData.checkIn, formData.checkOut, formData.rooms, hotel.pricePerNight]);

  const handleValuesChange = (changedValues, allValues) => {
    setFormData({
      ...formData,
      ...allValues,
    });
  };

  const handleSubmit = (values) => {
    if (totalNights <= 0) {
      message.error("Please select valid check-in and check-out dates");
      return;
    }

    const bookingData = {
      ...values,
      checkIn: values.checkIn.format("YYYY-MM-DD"),
      checkOut: values.checkOut.format("YYYY-MM-DD"),
      hotel: hotel,
      totalNights,
      totalPrice,
    };

    navigate("/booking-summary", {
      state: bookingData,
    });
  };

  const disabledDate = (current) => {
    // Disable dates before today
    return current && current < dayjs().startOf("day");
  };

  const disabledCheckOutDate = (current) => {
    // Disable dates before check-in date
    if (!formData.checkIn) {
      return current && current < dayjs().startOf("day");
    }
    return current && current <= formData.checkIn;
  };

  return (
    <Row gutter={[32, 32]}>
      <Col xs={24} lg={14}>
        <Card
          style={{
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <Title level={3} style={{ marginBottom: "24px" }}>
            Booking Information
          </Title>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            onValuesChange={handleValuesChange}
            initialValues={{
              guests: 1,
              rooms: 1,
            }}
          >
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Full Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your full name",
                    },
                    {
                      min: 2,
                      message: "Name must be at least 2 characters",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your full name"
                    size="large"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email",
                    },
                    {
                      type: "email",
                      message: "Please enter a valid email",
                    },
                  ]}
                >
                  <Input
                    placeholder="your.email@example.com"
                    size="large"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number",
                },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              ]}
            >
              <Input
                placeholder="10-digit phone number"
                size="large"
                maxLength={10}
              />
            </Form.Item>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Check-in Date"
                  name="checkIn"
                  rules={[
                    {
                      required: true,
                      message: "Please select check-in date",
                    },
                  ]}
                >
                  <DatePicker
                    style={{ width: "100%" }}
                    size="large"
                    format="YYYY-MM-DD"
                    disabledDate={disabledDate}
                    placeholder="Select check-in date"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Check-out Date"
                  name="checkOut"
                  rules={[
                    {
                      required: true,
                      message: "Please select check-out date",
                    },
                  ]}
                >
                  <DatePicker
                    style={{ width: "100%" }}
                    size="large"
                    format="YYYY-MM-DD"
                    disabledDate={disabledCheckOutDate}
                    placeholder="Select check-out date"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Number of Guests"
                  name="guests"
                  rules={[
                    {
                      required: true,
                      message: "Please select number of guests",
                    },
                  ]}
                >
                  <Select size="large" placeholder="Select guests">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <Select.Option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Number of Rooms"
                  name="rooms"
                  rules={[
                    {
                      required: true,
                      message: "Please select number of rooms",
                    },
                  ]}
                >
                  <Select size="large" placeholder="Select rooms">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <Select.Option key={num} value={num}>
                        {num} {num === 1 ? "Room" : "Rooms"}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item style={{ marginTop: "24px" }}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                style={{
                  height: "50px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Confirm Booking
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>

      <Col xs={24} lg={10}>
        <BookingSummaryCard
          hotel={hotel}
          formData={{
            checkIn: formData.checkIn ? formData.checkIn.format("YYYY-MM-DD") : null,
            checkOut: formData.checkOut ? formData.checkOut.format("YYYY-MM-DD") : null,
            guests: formData.guests,
            rooms: formData.rooms,
          }}
          totalNights={totalNights}
          totalPrice={totalPrice}
        />
      </Col>
    </Row>
  );
}

export default BookingForm;
