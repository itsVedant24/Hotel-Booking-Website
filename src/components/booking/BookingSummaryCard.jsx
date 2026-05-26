import { Card, Typography, Divider } from "antd";

const { Title, Text } = Typography;

function BookingSummaryCard({ hotel, formData, totalNights, totalPrice }) {
    return (
        <Card
            style={{
                position: "sticky",
                top: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                borderRadius: "12px",
            }}
        >
            <Title level={4}>Booking Summary</Title>

            {hotel && (
                <>
                    <img
                        src={hotel.image}
                        alt={hotel.name}
                        style={{
                            width: "100%",
                            height: "150px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            marginBottom: "12px",
                        }}
                    />
                    <Title level={5} style={{ marginBottom: "8px" }}>
                        {hotel.name}
                    </Title>
                    <Text type="secondary" style={{ display: "block", marginBottom: "4px" }}>
                        📍 {hotel.location}
                    </Text>
                    <Text type="secondary" style={{ display: "block", marginBottom: "16px" }}>
                        ⭐ {hotel.rating}
                    </Text>
                    <Divider />
                </>
            )}

            <div style={{ marginBottom: "12px" }}>
                <Text strong>Check-in:</Text>
                <br />
                <Text>{formData.checkIn || "Not selected"}</Text>
            </div>

            <div style={{ marginBottom: "12px" }}>
                <Text strong>Check-out:</Text>
                <br />
                <Text>{formData.checkOut || "Not selected"}</Text>
            </div>

            <div style={{ marginBottom: "12px" }}>
                <Text strong>Guests:</Text>
                <br />
                <Text>{formData.guests || "Not selected"}</Text>
            </div>

            <div style={{ marginBottom: "12px" }}>
                <Text strong>Rooms:</Text>
                <br />
                <Text>{formData.rooms || "Not selected"}</Text>
            </div>

            <Divider />

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                }}
            >
                <Text>Price per night:</Text>
                <Text>₹{hotel?.pricePerNight || 0}</Text>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                }}
            >
                <Text>Total nights:</Text>
                <Text>{totalNights || 0}</Text>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                }}
            >
                <Text>Number of rooms:</Text>
                <Text>{formData.rooms || 0}</Text>
            </div>

            <Divider />

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Title level={5} style={{ margin: 0 }}>
                    Total Price:
                </Title>
                <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
                    ₹{totalPrice?.toLocaleString("en-IN") || 0}
                </Title>
            </div>
        </Card>
    );
}

export default BookingSummaryCard;
