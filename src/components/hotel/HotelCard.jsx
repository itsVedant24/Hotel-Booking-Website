import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "../../styles/hotels.css";

function HotelCard({ hotel }) {
  const navigate = useNavigate();

  const pricePerNight = Math.floor(hotel.rating * 2000);

  const handleBookNow = () => {
    navigate(`/booking/${hotel.hotel_id}`, {
      state: {
        hotel: {
          ...hotel,
          pricePerNight,
        },
      },
    });
  };

  return (
    <div className="hotel-card">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="hotel-image"
      />

      <div className="hotel-info">
        <h3>{hotel.name}</h3>
        <p>{hotel.location}</p>
        <p>⭐ {hotel.rating}</p>
        <p className="price">
          From ₹{pricePerNight} / night
        </p>

        <Button
          type="primary"
          size="large"
          block
          onClick={handleBookNow}
          style={{ marginTop: '10px' }}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    width: "280px",
    margin: "15px",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  info: {
    padding: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "8px",
    width: "100%",
    background: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default HotelCard;
