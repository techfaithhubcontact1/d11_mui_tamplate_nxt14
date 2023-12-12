"use client"
import { ThemeProvider, createTheme } from '@mui/material/styles';
//1. import area
import React from 'react'

//2. definations area
const themeObj = createTheme();

export default function ThemeProvider1() {
  return (
    <ThemeProvider theme={themeObj}>
       
    </ThemeProvider>
  )
}

//3. export area