import React, {useState , useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MediaCard({chkValue}) {



const  [data, setData] = useState([]);

useEffect(() => {

  const loadData = async()=>{
    await axios.get("http://localhost:4000/api").then((res)=>{

    setData(res.data);
    console.log("showing data",res.data);
    
    })

  }

  loadData();
  chkValue();


},[])





  return (

      <>

      {data.slice(0,7).map((curElem , index)=> {
        return(
          <>
          <Grid item xs={10} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }} style={{marginTop:"5rem"}}>
            <CardMedia
              sx={{ height: 140 }}
              image={curElem.article_img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {curElem.article_title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {curElem.article_desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={'/articles/'+ curElem.article_category + '/' + curElem._id} >
              <Button size="small" >Read Full Article</Button>
              </Link>
            </CardActions>
          </Card>
          </Grid>

          </>
        )

      })}
        
   
    </>
  );
}