import { Grid, Typography, Button } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import React from 'react'

function Frame() {
    const theme = useTheme()
    return (
        <>
            <Grid container spacing={3} justifyContent="center"
                sx={{
                    width: { xs: '100%', md: '100%', lg: "95%" },
                    m: 'auto',
                    display: 'flex',
                    height: '690px',
                    justifyContent: 'space-around',
                }}>
                <Grid item xs={12} sm={6} md={6} lg={6.5} sx={{ backgroundColor: '#f3f6f3', position: 'relative' }} >
                    <Grid>
                        <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-03.jpg" alt=""
                            style={{ width: '65%', position: 'absolute', bottom: '50px', left: '100px' }} />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={5} sx={{ height: '100%', display: 'flex', alignItems:'center'}} >
                    <Grid sx={{
                        width: "100%",
                        right:'-20%', 
                        position:'absolute', 
                        p: 3,
                        left: '340px',
                        display: 'flex',
                        justifyContent: "space-around",
                        alignItems: 'left',
                        flexDirection: 'column',
                        mb:'90px'
                    }} >
                        <Typography variant="h3" sx={{ fontSize: '12px' }}>Women</Typography>
                        <Typography variant="h3" sx={{ fontSize: '2rem', mt: '20px', fontWeight: 'bold', }} > Spring Summer Collection</Typography>
                        <Typography variant='body1' sx={{ marginY: '20px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci. Aliquam venenatis dui lectus, eu convallis turpis convallis et. Pellentesque.
                        </Typography>
                        <Button sx={{ border: 'none', borderRadius: 0, width: "200px", textTransform: 'capitalize', backgroundColor: theme.palette.background.button, color: theme.palette.background.buttonColor, }} > See Whole Collection </Button>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default Frame
