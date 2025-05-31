import { Box, Container, Typography, Grid, Divider, useTheme, useMediaQuery, } from '@mui/material';

const AboutPage = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ pt: 8, pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: 10 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About
        </Typography>
        <Divider sx={{ width: 60, mx: 'auto', mb: 3 }} />
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci.
          Suspendisse vulputate semper nunc eget rhoncus.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie
          dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget
          rhoncus. Ut sit amet porta sem, interdum tincidunt libero.
        </Typography>
      </Container>

      <Box
        sx={{
          width: '95%',
          minHeight: '93vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: `url("https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/bg-02.jpg")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: isLargeScreen ? 'fixed' : 'scroll',

          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }
        }}
      >
        <Grid container alignItems="center" sx={{
          p: { xs: 0, sm: 6 },
          width: '90%',
          color: 'white',
          alignItems: 'flex-start',
          zIndex: 2,
        }}>
          <Grid item xs={12} md={6} sx={{ pr: { xs: 2, sm: 16 }, }}>
            <Typography variant="overline" gutterBottom >
              The Mission
            </Typography>
            <Typography variant="h1" fontWeight="600" gutterBottom
              sx={{ fontSize: { xs: '1.6rem', sm: '2rem' }, mt: 2 }}>
              At the heart of everything, we set out to offer the best quality.
            </Typography>
            <Grid item xs={12} md={6} sx={{ py: 4 }}>
              <Box sx={{ bgcolor: 'white', height: '1px', width: '60px' }}></Box>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="700" gutterBottom sx={{ pb: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris
              molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate
              semper nunc eget rhoncus. Aenean placerat facilisis ex, eu laoreet lorem convallis.
            </Typography>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Fusce gravida justo a lectus tempus lacinia. Ut mollis scelerisque ultricies. Aenean
              facilisis efficitur magna, at feugiat massa bibendum at. Etiam ut venenatis urna.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          How it Started
        </Typography>
        <Divider sx={{ width: 60, mx: 'auto', mb: 3 }} />
        <Typography variant="body1" textAlign="center" color="text.secondary" mb={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
        <Grid container spacing={4} sx={{ boxSizing: 'border-box', alignItems: 'stretch' }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: '#fbeeee', p: { xs: 4, md: 10 }, height: '100%' }}>
              <Typography variant="h4" fontWeight="600" gutterBottom>
                Vel mauris molestie dignissim
              </Typography>
              <Typography variant="body1" fontWeight="500" gutterBottom>
                Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci.
                Suspendisse vulputate semper nunc eget rhoncus.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet faucibus.
                Maecenas et odio id turpis sollicitudin pulvinar sit amet vitae augue. Phasellus nec
                ultricies arcu. Quisque efficitur velit sit amet bibendum molestie.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'stretch' }}>
            <Box
              component="img"
              src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/about-01.jpg"
              alt="Story Image"
              sx={{
                width: '100%',
                maxHeight: { xs: 300, sm: 400, md: '100%' },
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Grid>

        </Grid>
      </Container>

    </Box>
  );
};

export default AboutPage;
