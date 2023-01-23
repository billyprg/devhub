import React from 'react'
import MainCarousel from '../components/Home/MainCarousel';
import MediaCard from '../components/Cards/Cards'
import { Container , Grid} from '@mui/material'



export const Home = () => {

  const chkValue = () => {
 
    console.log("hello from Home Component");

  }

  return (

    <>
    

    <MainCarousel/>
    {/* <Articles/> */}
    <Container maxWidth='xl'>
    <Grid container rowGap={5} columnGap={5} alignItems='center'  justifyContent='center' columns={{xs:'5' , sm:'10' , md:'15'}} sx={{flexDirection:{xs:'column' , md:'row'}}}>
    
    <MediaCard chkValue={chkValue}/>


                                  
    </Grid>

    <br/>
    <br/>
    </Container>
    </>
  )
}
