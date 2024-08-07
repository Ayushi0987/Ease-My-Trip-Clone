// components/HomePage.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Box,
} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import axios from "axios";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage-container">
      <div className="search-container">
        <div className="inner-container">
          <div className="search-lowest-price">Search Lowest Price</div>
          <div className="search-panel">
            <Box
              sx={{
                maxWidth: "100%",
              }}
            >
              <Button className="search-btn">
                <TextField
                  id="outlined-basic"
                  label="Search"
                  variant="outlined"
                />
              </Button>
            </Box>
          </div>
        </div>
      </div>
      <div className="offers-container">
        <section className="offers-section">
        <div className="exclusive-offers">
        <Typography variant="h5" gutterBottom>Exclusive Offers</Typography>
        <Button className="offers-btn">Best offers</Button>
        <Button className="offers-btn">Flight</Button>
        <Button className="offers-btn">Hotel</Button>
        <Button className="offers-btn">Bus</Button>
        <Button className="offers-btn">Train</Button>
        </div>
        </section>
      </div>
    </div>
  );
}
