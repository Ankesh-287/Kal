import { Grid, Typography, Button, Box, CardMedia } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import React from 'react';

function Frame() {
    const theme = useTheme();

    return (
        <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{
                width: { xs: '90%', sm: '100%', md: '95%', lg: "80%" },
                m: 'auto',
                minHeight: '33rem',
                display: 'flex',
                flexDirection: { xs: 'column-reverse', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                py: 6,
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: { xs: '10%', sm: '0', lg: '-80px' },
                    width: { xs: '80%', sm: '60%' },
                    height: '85%',
                    backgroundColor: "#faedeb",
                    zIndex: -1,
                }}
            />

            <Grid item xs={12} sm={6} md={6} lg={5} sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <CardMedia component="img" image="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-03.jpg"
                    alt="Spring Summer Collection"
                    sx={{
                        width: '90%',
                        maxWidth: '400px',
                    }}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={7} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    textAlign: { xs: 'center', sm: 'left' },
                    px: { xs: 2, sm: 4 },
                    py: { xs: 2, sm: 0 }
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '14px',
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: theme.palette.text.secondary
                    }}
                >
                    Women
                </Typography>

                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: '1.8rem', sm: '2.2rem' },
                        mt: 1,
                        fontWeight: 'bold',
                        color: theme.palette.text.primary
                    }}
                >
                    Spring Summer Collection
                </Typography>

                <Typography
                    variant='body1'
                    sx={{
                        mt: 2,
                        mb: 3,
                        fontSize: '15px',
                        color: theme.palette.text.secondary,
                        maxWidth: '500px',
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci. Aliquam venenatis dui lectus, eu convallis turpis convallis et.
                </Typography>

                <Button sx={{ border: 'none', borderRadius: 0, width: "200px", textTransform: 'capitalize', backgroundColor: theme.palette.background.button, color: theme.palette.background.buttonColor, }} > See Whole Collection </Button>

            </Grid>
        </Grid>
    );
}

export default Frame;
