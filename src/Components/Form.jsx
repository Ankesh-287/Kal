import { Grid, Typography, Button, Box, TextField } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import React, { useState } from 'react';

function Form() {
    // const theme = useTheme();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const theme = useTheme();

    const handleData = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Box
            sx={{
                width: { xs: '90%', sm: '95%', md: '95%', lg: "80%" },
                m: 'auto',
                display: 'flex',
                flexWrap: { xs: 'wrap', sm: 'nowrap', md: 'wrap', lg: 'wrap' },
                flexDirection: { xs: 'column-reverse', sm: 'row' },
                justifyContent: 'center',
                position:'relative',
                paddingY: 3
            }}>
                <Box
                    sx={{
                        position: "absolute",
                        bottom: { xs: 0, sm: '-15px' },
                        left: {sm:0, lg: '-80px'},
                        width: '60%',
                        height: '105%',
                        backgroundColor: "#faedeb",
                        zIndex: -10,
                    }}
                />

            {/* Contact Info Section */}
            <Box sx={{
                width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                pr: { sm: '0px', md: '20px', lg: '100px' },
            }}>
                <Box sx={{
                    height: '60%',
                    width: { sm: '100%', md: '100%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    pt: { xs: '50px', sm: 0 },
                    mb: { xs: 4, md: 0 },
                    pl: { sm: 4 },
                    pr: { sm: 2 },
                    textAlign: { xs: 'center', sm:'left' }
                }}>

                    <Typography variant="h3" sx={{ fontSize: '38px', fontWeight: 'bold', color:'#000000',  }}> Get in touch </Typography>
                    <Typography variant='body1' sx={{ marginY: 2, color:'#000000', }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body1" sx={{ fontSize: '15px', mb: 3, color:'#000000', }}>
                            <u>123 Fifth Avenue, New York, NY 10160</u>
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '15px', mb: 3, color:'#000000', }}>
                            <u>contact@info.com</u>
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '15px', color:'#000000', }}>
                            9-334-7565-9787
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                backgroundColor: 'white',
                width: { xs: '100%', sm: '85%', md: '50%' },
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
                p: { xs: 5, sm: 5 },
                boxShadow: '0px 20px 40px 0px rgba(123, 45.99999999999999, 45.99999999999999, 0.05)',
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            fullWidth
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleData}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} >
                        <TextField
                            fullWidth
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleData}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="email"
                            borderRadius='7px'
                            placeholder="Your email address..."
                            value={formData.email}
                            onChange={handleData}
                            
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="message"
                            placeholder="Message..."
                            multiline
                            rows={5}
                            value={formData.message}
                            onChange={handleData}
                        />
                    </Grid>
                </Grid>

                <Button
                    sx={{
                        mt: 3,
                        width: "100px",
                        textTransform: 'capitalize',
                        backgroundColor: 'black',
                        color: 'white',
                    }}>
                    Send
                </Button>
            </Box>
        </Box>
    );
}

export default Form;
