import React , {useEffect , useState} from 'react'
import Card from 'react-bootstrap/Card';
import '../css/styles.css'
import axios from 'axios';
import { TextField, Paper , Container, Typography } from '@mui/material';
import { useParams , Link } from 'react-router-dom';

function ArticleCategory() {


    const [data , setData] = useState([]);

    const [searchData , setSearchData] = useState("");

    let {category} = useParams();

    console.log("category",category);


    useEffect(() => {

      const getData = async() => {
        await axios.get(`http://localhost:4000/api/${category}`).then((res)=>{
          console.log("data",res.data);
          setData(res.data);
      })
      }

      getData();

     

    }, [])

    



  return (

    <>
     
  
 <Container maxWidth='md'  style={{marginTop:"5rem" , marginBottom:"5rem"}}>
 

        <TextField
        type='search'
        label='Search Articles'
        name='search'
        fullWidth
        style={{marginBottom:"50px"}}
        onChange={(event)=> {setSearchData(event.target.value)}}
        />
       

    {data.filter((item)=>{
      if(searchData === ''){
        return item
      }
      else if(item.article_title.toLowerCase().includes(searchData.toLowerCase())){
        return item
      }
    }).map(( curElem , index)=>{

        return(
            <>
            <Paper elevation={12}>
            <Card border='dark' className='bg-color'  key={curElem._id} >
            <Card.Header  className='quote' >Quote</Card.Header>
            <Card.Body className='cardbody'>
              <blockquote className="blockquote mb-0">
                <Link to={'/articles/' + curElem.article_category + '/'+ curElem._id}>
                <p className='content'>
                 {curElem.article_title}
                </p>
                </Link> 
              </blockquote>
            </Card.Body>
          </Card>
          </Paper>
          <br/>
          </>
        )
    })}
</Container>
  </>
  )
}

export default ArticleCategory