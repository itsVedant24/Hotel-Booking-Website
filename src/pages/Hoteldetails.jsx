import { useParams, useNavigate } from "react-router-dom";


function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = {
    id,
    name: "Royal Palace",
    location: "Mumbai",
    price: 4500,
    description:
      "A luxury hotel with premium rooms, free WiFi, swimming pool and breakfast included.",
    image: "https://source.unsplash.com/800x400/?luxury-hotel",
  };

  return (
    <div style={styles.container}>
      <img src={hotel.image} alt={hotel.name} style={styles.image} />

      <h1>{hotel.name}</h1>
      <p>{hotel.location}</p>
      <p>{hotel.description}</p>

      <h2>₹{hotel.price} / night</h2>

      <button
        style={styles.button}
        onClick={() => navigate(`/booking/${hotel.id}`)}
      >
        Book Now
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  image: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  button: {
    marginTop: "20px",
    padding: "12px",
    background: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default HotelDetails;
