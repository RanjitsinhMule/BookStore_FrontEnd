import React, { useEffect, useState } from 'react';
// import Footer from '../Component/Footer/Footer'
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Order(props) {
  const [buyer, setBuyer] = useState([]);
  const [bookDetails,setBookDetails] = useState();
 
  const navigate = useNavigate();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginpage')
    } else {
      loadSingleBuyerDetails();
      
    }
  }, []);

  const { firstName, lastName, email,  address } = buyer;

  const loadSingleBuyerDetails = async () => {
    await axios.get('http://localhost:8080/User/getuserbytoken', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
      .then((response) => {
        console.log(response.data.obj)
        setBuyer(response.data.obj)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const GetBookDetails = async () => {
    await axios.get(`http://localhost:8080/Book/get/${localStorage.getItem('bookId')}` 
    )
      .then((response) => {
        console.log(response.data.obj)
        setBookDetails(response.data.obj)
      })
      .catch((error) => {
        console.log(error)
      })
    }


  return (
    <div>
      <Card>
        <h2>Order Details</h2>
        <p>{bookDetails}</p>        
      </Card>
      <h2>Customer Details</h2>
      <Card style={{ backgroundColor: 'lavender', width: '40%', margin: '5% 30%', padding: '15px' }}>
        <Grid container spacing={2}>
          <Grid item xs={4} >
            <Item>First Name</Item>
          </Grid>
          <Grid item xs={8} >
            <Item style={{ backgroundColor: 'pink' }}>{firstName}</Item>
          </Grid>
          <Grid item xs={4} >
            <Item>Last Name</Item>
          </Grid>
          <Grid item xs={8} >
            <Item style={{ backgroundColor: 'pink' }}>{lastName}</Item>
          </Grid>
          <Grid item xs={4} >
            <Item>Email</Item>
          </Grid>
          <Grid item xs={8} >
            <Item style={{ backgroundColor: 'pink' }}>{email}</Item>
          </Grid>
          <Grid item xs={4} >
            <Item>Address</Item>
          </Grid>
          <Grid item xs={8} >
            <Item style={{ backgroundColor: 'pink' }}>{address}</Item>
          </Grid>

        </Grid>

      </Card>

      {/* <Footer /> */}
    </div>
  )
}