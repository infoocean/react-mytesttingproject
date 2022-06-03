import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const landingpagecontent = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

function Landingpage() {
  return (
    <>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${landingpagecontent.image})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: 'none' }}
            src={landingpagecontent.image}
            alt={landingpagecontent.imageText}
          />
        }
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h2"
                variant="h4"
                color="inherit"
                gutterBottom
              >
                {landingpagecontent.title}
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                {landingpagecontent.description}
              </Typography>
              <a variant="subtitle1" href="#">
                {landingpagecontent.linkText}
              </a>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
export default Landingpage;
