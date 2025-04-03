import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Box, Button, Typography } from '@mui/material';

const steps = ['Cart Review', 'Shipping Details', 'Payment', 'Order Confirmation'];

function CartStepper({ activeStep, handleNext, handleBack }) {
    return (
        <Box sx={{ width: '100%', my: 3 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button disabled={activeStep === 0} onClick={handleBack} variant="contained">
                    Back
                </Button>
                <Button onClick={handleNext} variant="contained">
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Box>
        </Box>
    );
}

export default CartStepper;
