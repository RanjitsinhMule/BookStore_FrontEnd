import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { grey } from '@mui/material/colors';
import { spacing } from '@mui/system';
import Stack from '@mui/material/Stack';

export default function MyCart() {

    return (
        <div style={{ padding: "0px 150px 0px 150px" }}>

            <Card sx={{ minWidth: 275 }} style={{ backgroundColor: grey }}>
                <div style={{ display: 'grid', justifyContent: "left" }}>
                    <h2>My Cart</h2>
                </div>
                <CardContent >
                    <div style={{ display: 'flex', justifyContent: "", }}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVB3P9dg9IkLkwT3iEOTmZPoOnA-jNw6_vvxMDd9B&s' />


                        <div>
                            <h4>Book Name</h4>
                            <h4>Author Name</h4>
                            <h4>Price -</h4>
                            <button>-</button>
                            <input />
                            <button>+</button> remove
                        </div>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <br />
            <br />

            <Card sx={{ minWidth: 275 }} style={{ backgroundColor: grey }}>
                <CardContent>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h4>Customer Details</h4>
                        <h4>Edit</h4>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div>
                        <Stack spacing={7} direction="row" >
                            <TextField id="outlined-basic" label="Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                        </Stack>

                            <br />
                            <Stack spacing={7} direction="row" >
                            <TextField id="outlined-basic" label="PinCode" variant="outlined" />
                            <TextField id="outlined-basic" label="Locality" variant="outlined" />
                        </Stack>
                        </div>
                    </div><br />

                    <div style={{ display: "flex" }}>
                        <TextField id="outlined-basic" label="Address" variant="outlined" style={{ width: "600px", }} />
                    </div><br />
                    <div style={{ display: "flex" }}>
                    <Stack spacing={7} direction="row" >
                        <TextField id="outlined-basic" label="City/Town" variant="outlined" />
                        <TextField id="outlined-basic" label="LandMark" variant="outlined" />
                        </Stack>
                    </div>
                    <div style={{ display: 'grid', justifyContent: "left" }}>
                        <h4>Type</h4>
                    </div>
                    <div style={{ display: "flex" }}>
                    <Stack spacing={7} direction="row" >
                        <input type='radio' /> Home
                        <input type='radio' /> Work
                        <input type='radio' /> Other
                        </Stack>

                    </div>
                </CardContent>

                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <br />
            <br />

            <Card sx={{ minWidth: 275 }} style={{ backgroundColor: grey }}>
                <div style={{ display: 'grid', justifyContent: "left" }}>
                    <h2>My Cart</h2>
                </div>
                <CardContent >
                    <div style={{ display: 'flex', justifyContent: "", }}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVB3P9dg9IkLkwT3iEOTmZPoOnA-jNw6_vvxMDd9B&s' />


                        <div>
                            <h4>Book Name</h4>
                            <h4>Author Name</h4>
                            <h4>Price -</h4>

                        </div>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>


        </div>
    )

}