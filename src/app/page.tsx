"use client"
//1. import area

import { Container, Link, ThemeProvider, createTheme, Box, TextField, Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined"


//2. defination area
var tm = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={tm}>
      <Container maxWidth="sm" sx={{ p:10, display:"flex", flexDirection:"column", alignItems:"center", bgcolor:"#ea80fc", borderRadius:5 }}>

        <Avatar sx={{ bgcolor: 'secondary.main', m: 2 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">Login</Typography>

        <Box component="form" sx={{ mb:"8", display:"flex", flexDirection:"column", alignItems:"center" }} >
          <TextField 
              fullWidth label="Email"
              name="email"
              id="email"
              margin="normal"
              required autoComplete="ename"
              autoFocus
          />
          <TextField 
              fullWidth label="Password" 
              type="password"
              name="password"  
              id="password" 
              margin="normal"  
              required 
              autoComplete="password" sx={{ mb:8 }}
              
          />
          <Link href="/material-ui/getting-started/templat/album" sx={{ bgcolor:"blue", color:"#fff", p:2, borderRadius:4 }}>
            Let Go To Album Page
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

//3. export area