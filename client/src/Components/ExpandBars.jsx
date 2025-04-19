import React, { useState } from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails, Typography, Divider, List, ListItem, ListItemText,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Grid, TextField,
  Button, Checkbox, FormControlLabel, Rating
} from '@mui/material';
import { Remove } from '@mui/icons-material';
import { useTheme } from "@mui/material/styles";

// Data for accordion
const accordionData = [
  {
    title: "Product Details",
    content: (
      <>
        <Typography variant="body1" sx={{ color: 'grey.900' }}>Premium Cotton</Typography>
        <Typography variant="body2" sx={{ color: 'grey', mt: 1 }}>
          High-quality 260gsm cotton with breathable texture.
        </Typography>
        <ul style={{ color: 'grey', fontSize: '14px' }}>
          <li>100% Cotton</li>
          <li>260gsm</li>
          <li>Breathable Fabric</li>
        </ul>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" sx={{ color: 'grey.900' }}>Size & Fit</Typography>
        <Typography variant="body2" sx={{ color: 'grey', mt: 1 }}>
          Standard fit for a relaxed, easy feel.
        </Typography>
        <ul style={{ color: 'grey', fontSize: '14px' }}>
          <li>Model is wearing size M and is 6'1"</li>
          <li>Relaxed Fit</li>
          <li>Durable Stitching</li>
        </ul>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" sx={{ color: 'grey.900' }}>Free Delivery & Returns</Typography>
        <Typography variant="body2" sx={{ color: 'grey', mt: 1 }}>
          Free standard delivery on orders over $60.
        </Typography>
        <List sx={{ color: 'grey', fontSize: '14px' }}>
          <ListItem disablePadding>
            <ListItemText primary="Return within 30 days, free of charge." primaryTypographyProps={{ fontSize: '14px' }} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Free return label included in the box." primaryTypographyProps={{ fontSize: '14px' }} />
          </ListItem>
        </List>
      </>
    )
  },
  {
    title: "Additional Information",
    content: (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: '1px solid grey' }}>Color</TableCell>
              <TableCell sx={{ border: '1px solid grey' }}>Black, Orange, White</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ border: '1px solid grey' }}>Size</TableCell>
              <TableCell sx={{ border: '1px solid grey' }}>XS, S, M, L, XL</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
];

const ReviewForm = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [formData, setFormData] = useState({
    lastName: '',
    email: '',
    message: ''
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ fontSize: '18px' }}>
            Be the first to review “T-Shirt Name 4”
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            Your email address will not be published. Required fields are marked *
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <Typography>Your rating *</Typography>
            <Rating
              name="rating"
              value={value}
              onChange={(e, newValue) => setValue(newValue)}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <label>Your Review *</label>
          <TextField
            name="message"
            fullWidth
            multiline
            rows={5}
            value={formData.message}
            onChange={handleData}
          />
        </Grid>

        <Grid item xs={12}>
          <label>Name *</label>
          <TextField
            name="lastName"
            fullWidth
            value={formData.lastName}
            onChange={handleData}
          />
        </Grid>

        <Grid item xs={12}>
          <label>Email *</label>
          <TextField
            name="email"
            fullWidth
            value={formData.email}
            onChange={handleData}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox />}
            label="Save my details for next time"
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
  );
};

const ExpandBars = () => {
  return (
    <>
      {accordionData.map((section, index) => (
        <Accordion key={index} defaultExpanded={index === 0} sx={{ bgcolor: 'transparent' }}>
          <AccordionSummary expandIcon={<Remove />}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
              {section.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{section.content}</AccordionDetails>
        </Accordion>
      ))}

      <Accordion>
        <AccordionSummary expandIcon={<Remove />}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
            Reviews (0)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReviewForm />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ExpandBars;
