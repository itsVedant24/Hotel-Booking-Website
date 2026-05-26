import { useLocation } from "react-router-dom";

function BookingSummary() {
  const { state } = useLocation();

  if (!state) return <h2>No booking found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Booking Confirmed 🎉</h1>

      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Hotel ID:</strong> {state.hotelId}</p>
      <p><strong>Check-in:</strong> {state.checkIn}</p>
      <p><strong>Check-out:</strong> {state.checkOut}</p>
    </div>
  );
}

export default BookingSummary;
