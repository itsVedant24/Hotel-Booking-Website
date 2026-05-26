import { useParams, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Card, Row, Col, Typography } from "antd";
import BookingForm from "../components/booking/BookingForm";

const { Title, Text } = Typography;

function Booking() {
  const { id } = useParams();
  const { state } = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!state || !state.hotel) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <Title level={3}>Hotel not found</Title>
        <Text>Please select a hotel from the hotels page.</Text>
      </div>
    );
  }

  const { hotel } = state;

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1400px", margin: "0 auto" }}>
      {/* Hotel Details Card */}
      <Card
        style={{
          marginBottom: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={8}>
            <img
              src={hotel.image}
              alt={hotel.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Col>
          <Col xs={24} md={16}>
            <Title level={2} style={{ marginBottom: "8px" }}>
              {hotel.name}
            </Title>
            <Text
              type="secondary"
              style={{ display: "block", fontSize: "16px", marginBottom: "8px" }}
            >
              📍 {hotel.location}
            </Text>
            <Text
              style={{ display: "block", fontSize: "16px", marginBottom: "8px" }}
            >
              ⭐ {hotel.rating} Rating
            </Text>
            <Title level={3} style={{ color: "#1890ff", marginTop: "12px" }}>
              ₹{hotel.pricePerNight.toLocaleString("en-IN")} / night
            </Title>
            {hotel.description && (
              <Text type="secondary" style={{ display: "block", marginTop: "12px" }}>
                {hotel.description}
              </Text>
            )}
          </Col>
        </Row>
      </Card>

      {/* Booking Form */}
      <BookingForm hotel={hotel} />
    </div>
  );
}

export default Booking;
