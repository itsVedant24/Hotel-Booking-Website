function BookingSummary() {
  const booking = {
    bookingId: "RS-204589",
    hotelName: "RoyalStay Palace",
    location: "Mumbai, India",
    checkIn: "12 Feb 2026",
    checkOut: "15 Feb 2026",
    guests: 2,
    rooms: 1,
    totalAmount: "₹12,499",
    paymentMode: "UPI",
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Success Header */}
        <div style={styles.success}>
          <span style={styles.check}>✔</span>
          <h1>Booking Confirmed</h1>
          <p>Your stay is successfully booked 🎉</p>
        </div>

        {/* Booking Info */}
        <div style={styles.section}>
          <h3>Booking Details</h3>

          <div style={styles.row}>
            <span>Booking ID</span>
            <strong>{booking.bookingId}</strong>
          </div>

          <div style={styles.row}>
            <span>Hotel</span>
            <strong>{booking.hotelName}</strong>
          </div>

          <div style={styles.row}>
            <span>Location</span>
            <strong>{booking.location}</strong>
          </div>

          <div style={styles.row}>
            <span>Check-in</span>
            <strong>{booking.checkIn}</strong>
          </div>

          <div style={styles.row}>
            <span>Check-out</span>
            <strong>{booking.checkOut}</strong>
          </div>

          <div style={styles.row}>
            <span>Guests / Rooms</span>
            <strong>
              {booking.guests} Guests · {booking.rooms} Room
            </strong>
          </div>
        </div>

        {/* Payment */}
        <div style={styles.section}>
          <h3>Payment Summary</h3>

          <div style={styles.row}>
            <span>Total Paid</span>
            <strong style={styles.price}>{booking.totalAmount}</strong>
          </div>

          <div style={styles.row}>
            <span>Payment Mode</span>
            <strong>{booking.paymentMode}</strong>
          </div>
        </div>

        {/* Actions */}
        <div style={styles.actions}>
          <button style={styles.primary}>View My Bookings</button>
          <button style={styles.secondary}>Go to Home</button>
        </div>
      </div>
    </div>
  );
}
const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f6f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    background: "#fff",
    maxWidth: "500px",
    width: "100%",
    borderRadius: "10px",
    padding: "25px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  },
  success: {
    textAlign: "center",
    marginBottom: "25px",
  },
  check: {
    fontSize: "40px",
    color: "green",
  },
  section: {
    marginBottom: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 0",
    fontSize: "14px",
  },
  price: {
    color: "#0a8a0a",
    fontSize: "16px",
  },
  actions: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
  primary: {
    flex: 1,
    padding: "10px",
    background: "#e11d48",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  secondary: {
    flex: 1,
    padding: "10px",
    background: "#f1f1f1",
    border: "1px solid #ddd",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default BookingSummary;