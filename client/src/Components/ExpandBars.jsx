import React, { useState } from 'react'
import { useTheme } from "@mui/material/styles";
import { Button, Grid, TextField, Box, Accordion, AccordionSummary, AccordionDetails, Typography, Divider, TableContainer, Paper, Table, TableHead, TableRow, TableBody, TableCell, FormControlLabel, Checkbox, Rating, List, ListItemText, ListItemButton, ListItemIcon, ListItem } from '@mui/material'
import { Remove, Inbox, CheckCircleOutline } from '@mui/icons-material';

function ExpandBars({ expandTitle, subTitle, subDesc, subList }) {
    const [value, setValue] = React.useState(0);
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
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<Remove />}

                    aria-label="Expand"
                    aria-controls="-content"
                    id="-header"
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                        {expandTitle}
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>
                    <Typography variant="body1" sx={{ color: 'grey.900' }}>
                        {subTitle}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'grey', mt: 1 }}>
                        {subDesc}
                    </Typography>

                    <ul style={{ color: 'grey', fontSize: '14px' }}>
                        <li>{subList}</li>
                        <li>260gsm</li>
                        <li>Breathable Fabric</li>
                    </ul>

                    <Divider variant="fullWidth" orientation="horizontal" />

                    <Typography variant="body1" sx={{ color: 'grey.900' }}>
                        Size & Fit
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'grey', mt: 1 }}>
                        Our T-Shirts are made of 100% cotton, breathable fabric, and 260gsm material for a premium feel.
                    </Typography>

                    <ul style={{ color: 'grey', fontSize: '14px' }}>
                        <li>Model is wearing size M and is 6'1"</li>
                        <li>Standard fit for a relaxed, easy feel</li>
                        <li>Breathable Fabric</li>
                    </ul>

                    <Divider variant="fullWidth" orientation="horizontal" />

                    <Typography variant="body1" sx={{ color: 'grey.900' }}>
                        Free delivery & returns
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'grey', mt: 1 }}>
                        Free standard delivery on orders over $60.
                    </Typography>

                    <List sx={{ color: 'grey', fontSize: '14px' }}>
                        <ListItem disablePadding>
                            <ListItemIcon sx={{ minWidth: 30, color: 'grey' }}>
                            </ListItemIcon>
                            <ListItemText primary="You can return your order for any reason, free of charge, within 30 days"
                                primaryTypographyProps={{ fontSize: '14px' }} />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemIcon sx={{ minWidth: 30, color: 'grey' }}>
                            </ListItemIcon>
                            <ListItemText primary="We also offer a Free-of-Charge shipping label"
                                primaryTypographyProps={{ fontSize: '14px' }} />
                        </ListItem>
                    </List>


                </AccordionDetails>
            </Accordion >

            <Accordion>
                <AccordionSummary
                    expandIcon={<Remove />}
                    aria-label="Expand"
                    aria-controls="-content"
                    id="-header"
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                        Additional information
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Paper >
                        <Table aria-label="simple table" >
                            <TableHead >
                                <TableRow sx={{ border: '1px solid grey' }}>
                                    <TableCell sx={{ border: '1px solid grey' }} >Color</TableCell>
                                    <TableCell sx={{ border: '1px solid grey' }} align="left">Black, Orange, White</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid grey' }} component="th" scope="row">Size</TableCell>
                                    <TableCell sx={{ border: '1px solid grey' }} align="left">XS, S, M, L, XL</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<Remove />}
                    aria-label="Expand"
                    aria-controls="-content"
                    id="-header"
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                        Reviews (0)
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{
                        // width: { xs: '100%', sm: '85%', md: '50%' },
                        display: 'flex',
                        flexDirection: 'column',
                        boxSizing: 'border-box',
                    }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="body1" sx={{ fontSize: '18px' }}>
                                    Be the first to review “T-Shirt Name 4”
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: '12px' }}>
                                    Your email address will not be published. Required fields are marked *
                                </Typography>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Typography variant="body1" sx={{ fontSize: '16px' }}>
                                        Your rating *
                                    </Typography>

                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <label htmlFor="review" style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px', display: 'block' }}>
                                    Your Review *
                                </label>
                                <TextField
                                    fullWidth
                                    name="message"
                                    multiline
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleData}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: '0px',
                                        },
                                    }}
                                />

                            </Grid>
                            <Grid item xs={12} sm={12} >
                                <label htmlFor="name"> Name * </label>
                                <TextField
                                    fullWidth
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleData}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: '0px',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <label htmlFor="email"> Email * </label>
                                <TextField
                                    fullWidth
                                    name="email"
                                    color="string"
                                    value={formData.email}
                                    onChange={handleData}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: '0px',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    label="Save my name, email, and website in this browser for the next time I comment."
                                    control={
                                        <Checkbox
                                            value=""
                                            color="primary"
                                        />
                                    }
                                />
                            </Grid>
                        </Grid>

                        <Button
                            sx={{
                                mt: 3,
                                width: "100px",
                                textTransform: 'capitalize',
                                backgroundColor: theme.palette.background.button,
                                color: theme.palette.background.buttonColor,
                                "&:hover": { backgroundColor: theme.palette.background.button }
                            }}>
                            Send
                        </Button>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default ExpandBars
