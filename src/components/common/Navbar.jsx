import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Dropdown, Avatar } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  BookOutlined,
} from "@ant-design/icons";
import "../../styles/navbar.css";

import bedIcon from "../../assets/icons/bed.jpg";
import flightIcon from "../../assets/icons/flightIcon.png";
import carIcon from "../../assets/icons/car.png";
import attractionIcon from "../../assets/icons/attraction.png";
import taxiIcon from "../../assets/icons/taxi.png";
import homeIcon from "../../assets/icons/home.jpg";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const profileMenuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "My Profile",
      onClick: () => navigate("/profile"),
    },
    {
      key: "bookings",
      icon: <BookOutlined />,
      label: "My Bookings",
      onClick: () => navigate("/booking-summary"),
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
      onClick: () => navigate("/settings"), // optional
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      danger: true,
      onClick: handleLogout,
    },
  ];

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <Link to="/" className="logo-btn">
          RoyalStay
        </Link>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        <Link to="/" className={`nav-btn ${isActive("/") ? "active" : ""}`}>
          <img src={homeIcon} alt="" />
          Home
        </Link>

        <Link to="/hotels" className={`nav-btn ${isActive("/hotels") ? "active" : ""}`}>
          <img src={bedIcon} alt="" />
          Hotels
        </Link>

        <Link to="/flights" className={`nav-btn ${isActive("/flights") ? "active" : ""}`}>
          <img src={flightIcon} alt="" />
          Flights
        </Link>

        <Link to="/cars" className="nav-btn">
          <img src={carIcon} alt="" />
          Car rentals
        </Link>

        <Link to="/attractions" className="nav-btn">
          <img src={attractionIcon} alt="" />
          Attractions
        </Link>

        <Link to="/taxis" className="nav-btn">
          <img src={taxiIcon} alt="" />
          Airport taxis
        </Link>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        {!user && (
          <>
            <Link to="/login" className="nav-btn outline">
              Login
            </Link>
            <Link to="/register" className="nav-btn primary">
              Register
            </Link>
          </>
        )}

        {user && (
          <Dropdown
            menu={{ items: profileMenuItems }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <div className="profile-dropdown">
              <Avatar
                size="large"
                icon={<UserOutlined />}
                style={{ backgroundColor: "#1677ff" }}
              />
              <span className="username">
                {user?.displayName || user?.email?.split("@")[0]}
              </span>
            </div>
          </Dropdown>
        )}
      </div>
    </nav>
  );
}

export default Navbar;