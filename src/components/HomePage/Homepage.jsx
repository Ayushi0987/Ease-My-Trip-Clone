// components/HomePage.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Card, CardContent, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import axios from 'axios';

export default function Homepage() {
  const [offers, setOffers] = useState([]);
  const [selectedType, setSelectedType] = useState('FLIGHTS');

  // useEffect(() => {
  //   const fetchOffers = async () => {
  //     try {
  //       const response = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"${selectedType}"}`, {
  //         headers: { projectID: 'f104bi07c490' }
  //       });
  //       setOffers(response.data);
  //     } catch (error) {
  //       console.error('Error fetching offers:', error);
  //     }
  //   };

  //   fetchOffers();
  // }, [selectedType]);

  // const handleSearch = () => {
  //   // Implement search functionality here
  // };

  // return (
  //   <div>
  //     <div>
  //       <TextField label="From" variant="outlined" fullWidth />
  //       <TextField label="To" variant="outlined" fullWidth />
  //       <TextField label="Departure Date" type="date" variant="outlined" InputLabelProps={{ shrink: true }} fullWidth />
  //       <TextField label="Number of Travelers" variant="outlined" fullWidth />
  //       <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
  //     </div>
  //     <div>
  //       <Typography variant="h6">Exclusive Offers</Typography>
  //       <div>
  //         <Button onClick={() => setSelectedType('FLIGHTS')}>Flights</Button>
  //         <Button onClick={() => setSelectedType('HOTELS')}>Hotels</Button>
  //         <Button onClick={() => setSelectedType('RAILS')}>Trains</Button>
  //         <Button onClick={() => setSelectedType('BUSES')}>Bus</Button>
  //       </div>
  //       <div style={{ display: 'flex', alignItems: 'center' }}>
  //         <IconButton>
  //           <ArrowBackIosIcon />
  //         </IconButton>
  //         <div style={{ display: 'flex', overflowX: 'scroll' }}>
  //           {offers.map((offer) => (
  //             <Card key={offer.id} style={{ margin: '0 10px' }}>
  //               <CardContent>
  //                 <Typography variant="h6">{offer.title}</Typography>
  //                 <Typography>{offer.description}</Typography>
  //               </CardContent>
  //             </Card>
  //           ))}
  //         </div>
  //         <IconButton>
  //           <ArrowForwardIosIcon />
  //         </IconButton>
  //       </div>
  //     </div>
  //   </div>
  // );
};


