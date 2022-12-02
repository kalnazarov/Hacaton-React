import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                pt:'100px',
                
                width: {
                    xs: '45%',
                    sm: '45%',
                    md: '31%',
                    lg: '31%',
                    xl: '15%',
                },
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${item.picture})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundSize: 'cover',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'end',
                }}
            >
                <Button
                    sx={{
                        backgroundColor: '#3399ff',
                        width: '30%',
                        color: 'white',
                        marginTop: '130%',
                        marginBottom: '5%',
                        fontWeight: '800',
                        fontSize: {
                            xs: '10px',
                            sm: '12px',
                            md: '14px',
                            lg: '16px',
                            xl: '10px',
                        },
                    }}
                    // onClick={() => navigate(`/products/${item.id}`)}
                >
                    Buy
                </Button>
            </Box>
            <Typography
                sx={{
                    // fontWeight: '600',
                    marginTop: '13px',
                    width: '100%',
                    textAlign: 'left',
                    color:'white',
                    fontSize: {
                        xs: '10px',
                        sm: '12px',
                        md: '14px',
                        lg: '16px',
                        xl: '16px',
                    },
                }}
            >
                {item.name}
            </Typography>
            <Typography
                sx={{
                    fontWeight: '500',
                    marginBottom: '10%',
                    color:'gray',
                    fontSize: {
                        xs: '10px',
                        sm: '12px',
                        md: '14px',
                        lg: '16px',
                        xl: '19px',
                    },
                }}
            >
                ${item.price}
            </Typography>
        </Box>
    );
};

export default ProductCard;
