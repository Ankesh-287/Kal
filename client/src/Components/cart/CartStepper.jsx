import React, { useState } from 'react'
import { Box, Stepper, Step, StepLabel, Typography, Button } from '@mui/material';

const steps = ['Shopping Cart', 'Checkout Details', 'Order Complete'];
function CartStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => setActiveStep((prev) => prev + 1);
    // const handleBack = () => setActiveStep((prev) => prev - 1);
    const handleReset = () => setActiveStep(0)


    return (
        <>
            <Box sx={{
                m: 4,
                display: 'flex',
                widt: '100%',
                maxWidth: 800,
                mx: 'auto',
            }}>
                <Stepper

                    activeStep={activeStep} >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>
                                <Typography sx={{ fontWeight: '400' }}> {label.toUpperCase()} </Typography>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? (
                    <>
                        <Typography variant='h6' gutterBottom>
                            🎉Thank You for Shopping from us
                        </Typography>
                        <Button variant='contained' onClick={handleReset}>Reset</Button>
                    </>
                ) : (
                    <>
                        {/* <Typography sx={{ mb: 2 }}> Step : {activeStep + 1}: {steps[activeStep]}</Typography> */}
                        <Box>
                            {/* <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 2 }}
                            > Back </Button> */}
                            {/* <Button variant='contained' onClick={handleNext}>
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button> */}
                        </Box>
                    </>
                )}
            </Box>
        </>
    )
}

export default CartStepper
