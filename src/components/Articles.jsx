import React , {useEffect , useState} from 'react'
import Card from 'react-bootstrap/Card';
import '../css/styles.css'
import axios from 'axios';
import { TextField, Paper } from '@mui/material';
import { useParams , Link } from 'react-router-dom';

function ArticleCard() {


    const [data , setData] = useState([]);

    const [searchData , setSearchData] = useState("");



    useEffect(() => {

      const getData = async() => {
        await axios.get(`http://localhost:4000/api`).then((res)=>{
          console.log("data",res.data);
          setData(res.data);
      })
      }

      getData();

     

    }, [])





  return (
    <>

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
            <Card.Header  className='quote' > {curElem.user }</Card.Header>
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

  </>
  )
}

export default ArticleCard