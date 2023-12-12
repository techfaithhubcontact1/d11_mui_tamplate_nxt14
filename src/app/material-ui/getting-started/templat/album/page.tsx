'use client'
import { PhotoCameraOutlined } from '@mui/icons-material';
import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Stack, Toolbar, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'
//1. import area
import React from 'react'

//2. defination area
const themeObj = createTheme();

const gridboxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Page() {
  return (
    <ThemeProvider theme={themeObj}>
        <CssBaseline />
              
              {/*Header start*/}
            <AppBar position="relative">
              <Toolbar sx={{ bgcolor:"#0E85FF" }}>
                  <PhotoCameraOutlined />
                  <Typography variant="h5" color="#fff" sx={{ ml:3, fontWidth:"bold" }}>Album Layout</Typography>
              </Toolbar>
            </AppBar>
            {/*Header end*/}
            
            {/*Hero section start*/}
        <Container component="main" maxWidth="md">
          <Box sx={{ mt:10, mb:10 }}>
            <Typography component="h1" variant="h2" align="center">Album layout</Typography>

            <Typography sx={{ color:"#666666", fontSize:25, textAlign:"center", m:4 }}>
              It seems like your message got cut off. If you have any specific questions or if there's something specific you'd like assistance with regarding Material-UI (MUI), please provide more details, and I'll do my best to help! Whether it's related to MUI components, styling, theming, or any other aspect of using Material-UI, feel free to let me know how I can assist you.
            </Typography>

            <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt:5 }}>
              <Button variant="contained">Main Call Action</Button>
              <Button variant="outlined">Secondary Action</Button>
            </Stack>
          </Box>
          {/*Hero section end*/}
          
          {/*Media section start*/}
          <Box sx={{ mt:8 }}>
            <Grid container spacing={6}>
              {gridboxes.map( (gridbox) => (

                <Grid item key={gridbox} xs={12} sm={6} md={4} >
                  <Card sx={{ height:"100%", display: "flex", flexDirection: "column" }}>
                    <CardMedia
                     image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/356104296.jpg?k=0d02139f21267f29c008c3d4e03cb799661c2eb8767c3234a5a290a8b4937f32&o=&hp=1" component="div" sx={{ pt:"50.50%" }}>
                    </CardMedia>

                    <CardContent>
                      <Typography component="h2" variant="h5" align="center">
                        About Image
                      </Typography>
                      <Typography align="center" sx={{ mt:1 }}>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                    </CardContent>
                    
                    <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                      <Button size="small">Delete</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          {/*Media section end*/}
        </Container>

         {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1"
            align="center" color="text.secondary">
            Something here to give the footer a purpose! <br/>
            {'Copyright © Your Website 2023.'}
          </Typography>
        </Box>
        {/* End footer */}
    </ThemeProvider>
  )
}

//3. export area
