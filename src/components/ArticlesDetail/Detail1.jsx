import React, {useState , useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import { TextField, Paper, Typography } from '@mui/material';
import {Container , Grid} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function Detail1() {

  let {category , id} = useParams();

  console.log("category",category);
  console.log("id",id);

  const [expanded, setExpanded] = React.useState(false);

  const [renderData , setRenderData] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  useEffect(() => {


    const loadData = async()=> {
      await axios.get(`http://localhost:4000/api/id/${id}`).then((res)=>{
        setRenderData(res.data);
        console.log("dataaaaaaaaa",res.data);
      })
    }
    loadData();

  }, [])
  

  return (
    <>

      <br/>
      <br/>

    <Container maxWidth='lg'>


    {renderData.map((item)=>{

      return (
        <Card key={item._id}>
        <Card.Img variant="top" src={item.article_img} />
        <Card.Body>
          <Card.Title> <Typography variant='h2' > {item.article_title}  </Typography> </Card.Title>
          <Card.Text>
           <Typography variant='h5'>{item.article_desc}</Typography> 
          </Card.Text>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
  
         <Typography variant='overline' align="justify" paragraph={true}>{item.article_detail}</Typography> 
        </Collapse>
        </Card.Body>
      </Card>
      )
    })}
   



    
    </Container>
    <br/>
    <br/>
    </>

  )
}

export default Detail1