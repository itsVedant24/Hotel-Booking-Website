import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Slider, Select, Rate, Card, Empty } from "antd";

import HotelCard from "../components/hotel/HotelCard";
import "../styles/hotels.css";

import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.webp";
import hotel3 from "../assets/images/hotel3.jpg";
import hotel4 from "../assets/images/hotel4.avif";
import hotel5 from "../assets/images/hotel5.jpg";
import hotel6 from "../assets/images/hotel6.webp";
import hotel7 from "../assets/images/hotel7.jpg";
import hotel8 from "../assets/images/hotel8.jpg";
import hotel9 from "../assets/images/hotel9.jpg";
import hotel10 from "../assets/images/hotel10.jpg";

const { Option } = Select;

function Hotels() {
  const [maxPrice, setMaxPrice] = useState(20000);
  const [minRating, setMinRating] = useState(0);
  const [city, setCity] = useState("");

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const hotels = [
    { hotel_id: 1, name: "Rosewood Hong Kong", location: "Hong Kong, China", rating: 4.9, price: 18000, image: hotel1 },
    { hotel_id: 2, name: "Atlantis The Royal", location: "Dubai, UAE", rating: 4.8, price: 16000, image: hotel2 },
    { hotel_id: 3, name: "Passalacqua", location: "Lake Como, Italy", rating: 5.0, price: 20000, image: hotel3 },
    { hotel_id: 4, name: "The Taj Mahal Palace", location: "Mumbai, India", rating: 4.7, price: 12000, image: hotel4 },
    { hotel_id: 5, name: "Soneva Fushi", location: "Maldives", rating: 4.9, price: 19000, image: hotel5 },
    { hotel_id: 6, name: "Claridge's", location: "London, UK", rating: 4.8, price: 15000, image: hotel6 },
    { hotel_id: 7, name: "Desa Potato Head", location: "Bali, Indonesia", rating: 4.6, price: 11000, image: hotel7 },
    { hotel_id: 8, name: "Hotel Bel-Air", location: "Los Angeles, USA", rating: 4.7, price: 17000, image: hotel8 },
    { hotel_id: 9, name: "Aman Tokyo", location: "Tokyo, Japan", rating: 4.9, price: 18500, image: hotel9 },
    { hotel_id: 10, name: "Singita Kruger", location: "South Africa", rating: 5.0, price: 20000, image: hotel10 },
  ];

  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearch =
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCity =
      !city || hotel.location.toLowerCase().includes(city.toLowerCase());

    return (
      matchesSearch &&
      matchesCity &&
      hotel.price <= maxPrice &&
      hotel.rating >= minRating
    );
  });

  return (
    <div className="hotels-page">
      {/* FILTER SIDEBAR */}
      <aside className="filters-sidebar">
        <Card title="Filter Hotels" bordered={false}>
          <div className="filter-group">
            <label>City</label>
            <Select
              placeholder="Select city"
              allowClear
              onChange={(value) => setCity(value || "")}
            >
              <Option value="India">India</Option>
              <Option value="Dubai">Dubai</Option>
              <Option value="Japan">Japan</Option>
              <Option value="Italy">Italy</Option>
              <Option value="Maldives">Maldives</Option>
            </Select>
          </div>

          <div className="filter-group">
            <label>Max Price (₹)</label>
            <Slider
              min={5000}
              max={20000}
              step={500}
              value={maxPrice}
              onChange={setMaxPrice}
            />
            <strong>₹{maxPrice}</strong>
          </div>

          <div className="filter-group">
            <label>Minimum Rating</label>
            <Rate
              allowClear
              value={minRating}
              onChange={setMinRating}
            />
          </div>
        </Card>
      </aside>

      {/* RESULTS */}
      <section className="hotels-results">
        {filteredHotels.length === 0 ? (
          <Empty description="No hotels match your filters" />
        ) : (
          filteredHotels.map((hotel) => (
            <HotelCard key={hotel.hotel_id} hotel={hotel} />
          ))
        )}
      </section>
    </div>
  );
}

export default Hotels;