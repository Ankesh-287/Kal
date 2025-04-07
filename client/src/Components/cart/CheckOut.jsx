import React from 'react';
import { Container, Grid, Typography, TextField, Box, Card, CardContent, Button } from '@mui/material';

const Checkout = ({ handleNext }) => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                Checkout Details
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Customer Information</Typography>
                    <TextField fullWidth label="Username or Email Address" required sx={{ mb: 2 }} />

                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, mb: 2 }}>Billing Details</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="First Name" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Last Name" required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Company Name" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="House Number and Street Name" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Apartment, suite, unit (optional)" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Country / Region" required defaultValue="United States (US)" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth label="Town / City" required />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth label="State" required defaultValue="California" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth label="ZIP Code" required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Phone" required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth multiline rows={3} label="Additional Information (Notes about your order)" />
                        </Grid>
                    </Grid>
                </Grid>

                {/* Order Summary */}
                <Grid item xs={12} md={5}>
                    <Card sx={{ p: 2 }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Your Order</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography>Product</Typography>
                                <Typography>Subtotal</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography>T-Shirt Name 8 - White × 1</Typography>
                                <Typography>$21.00</Typography>
                            </Box>
                            <hr />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                <Typography sx={{ fontWeight: 'bold' }}>Total</Typography>
                                <Typography sx={{ fontWeight: 'bold' }}>$21.00</Typography>
                            </Box>
                            <Button variant="contained" fullWidth sx={{ mt: 3 }}
                                onClick={handleNext}
                            >Place Order</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Checkout;
