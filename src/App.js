import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Layout, Typography, Space } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Exchanges from "./components/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
            </Routes>
            <Routes>
              <Route path="/exchanges" element={<Exchanges />}></Route>
            </Routes>
            <Routes>
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
            </Routes>
            <Routes>
              <Route path="/crypto/:coinId" element={<CryptoDetails />}></Route>
            </Routes>
            <Routes>
              <Route path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoVerse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
