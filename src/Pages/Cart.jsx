import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';



export default function Cart(props) {
    const { id } = useParams();
    const [book, setBook] = useState([]);
    const [quantity, setQuantity] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const { bookName, authorName, price } = book;
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/signin')
        } else {
            loadSelectedBook();
        }
    }, []);

    const loadSelectedBook = async () => {
        await axios.get(`http://localhost:8080/Book/get/${localStorage.getItem('bookId')}`)
            .then((response) => {
                console.log(response.data.obj)
                setBook(response.data.obj)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
        if (quantity > 0) {
            console.log(quantity)
        } else {
            loadSelectedBook();
        }
    }

    const handleTotalClick = () => {
        if (quantity > 0) {
            const bookTotalPrice = quantity * price;
            setTotalPrice(bookTotalPrice);
        } else {
            setTotalPrice(0);
        }
    }


    const cart = { bookId: id, bookName: book.bookName, quantity, totalPrice };

    const handleCheckOut = async () => {
        {        console.log(cart)
        // await axios.post("http://localhost:8080/User/add", cart)
        //     .then((response) => {
        //         console.log(response)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        }
        const data = { bookInfo: book, quantity: quantity, totalPrice: totalPrice }
        //props.passingBookData(data.obj);
        navigate('/Order')

    }

    const handleGoBack = () => {
        navigate('/BookList')

    }

    return (
        <div>
            <section className='main-cart'>
                <h1>
                    Book Cart
                </h1>
                <div>

                    <Card style={{
                        backgroundColor: 'lightgreen', margin: '5% 35%',
                        width: '31%', height: '347px'
                    }}>
                        <div className='cart-content'>
                            <div className='item-info'>
                                <div>
                                    <lable style={{ marginLeft: '-100px'}}> Book Name : </lable>
                                    <h2 style={{ fontSize: '20px', marginTop: '-25px', marginLeft: '200px' }}>
                                        {bookName}</h2>
                                    <lable style={{ marginLeft: '-133px' }}>Author : </lable>
                                    <p style={{ marginTop: '-20px', marginLeft: '80px' }}>{authorName}</p>
                                    <lable style={{ marginLeft: '-147px' }}>Price : </lable>
                                    <p style={{ marginTop: '-20px', marginLeft: '35px' }}>{price} </p><br />
                                </div>
                                <div>
                                    <RemoveIcon style={{ marginTop: '-20px', marginLeft: '-105px' }}></RemoveIcon>
                                    <div style={{ marginTop: '-29px', marginLeft: '5px' }}>
                                        <input type={Number} placeholder="Quantity"
                                            style={{ width: '49px', textAlign: 'center' }}
                                            onChange={(e) => { handleQuantityChange(e) }} value={quantity}>
                                        </input>
                                    </div>
                                    <div style={{ marginTop: '-23px', marginLeft: '101px' }}>
                                        <AddIcon />
                                    </div>
                                </div>
                                <div style={{ marginTop: '10px', marginLeft: '8px' }}>
                                    <button onClick={handleTotalClick}>Total</button>
                                </div>
                                <div style={{ marginLeft: '10px' }}>
                                    <h3>Total Price : {totalPrice}</h3>
                                </div>
                                <Button variant="contained" onClick={handleCheckOut}
                                    style={{ backgroundColor: 'darkgreen', marginLeft: '-5px' }}>
                                    Check Out
                                </Button>
                                <Button variant="contained" onClick={() => { handleGoBack() }}
                                    style={{ marginTop: '2px', marginLeft: '100px', backgroundColor: 'darkgreen' }}>
                                    Go Back
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
            <div>
            </div>
        </div>
    )
}