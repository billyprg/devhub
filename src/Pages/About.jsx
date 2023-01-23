import React from 'react'
import Card from 'react-bootstrap/Card';
import { Typography } from '@mui/material';
import {Container , Grid} from '@mui/material';


export const About = () => {
  return (
    <>

    <br/>
    <br/>

  <Container maxWidth='lg'>

  <Card>
    <Card.Img variant="top" src="images/logo192.png" />
    <Card.Body>
      <Card.Title> <Typography  sx={{ letterSpacing: 10, fontFamily:'Monospace' }}  variant='h2' fontWeight={'bold'}> DevHub </Typography> </Card.Title>
      <Card.Text>
       <Typography variant='h5'>Devhub is a community for the software developers. Here you will find all sorts of articles on software related topics
      , what's hot in the market, future of AI, roadmaps for pursuing software careers, opinions on software topics like ChatGPT, Midjourney etc. It is basically a hub
      where you will find every kind of software topics like  AI, blockchain etc. It is a community of software developers getting together to help one another out. The software industry relies on collaboration and networked learning.
      We provide a place for that to happen.
      <br></br>
      <br></br>


      <p>We believe in transparency and adding value to the ecosystem. We hope you enjoy poking around and participating!</p> 
      </Typography> 
      </Card.Text>
    </Card.Body>
  </Card>
  
  </Container>
  <br/>
  <br/>
  </>
  )
}
