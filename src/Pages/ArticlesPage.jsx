import React from 'react'
import { Container } from '@mui/material';

import ArticleCard from '../components/Articles';

export const ArticlesPage = () => {
  return (
    <React.Fragment>
      <Container maxWidth='md'  style={{marginTop:"5rem" , marginBottom:"5rem"}}>
      <ArticleCard/>
    </Container>
    </React.Fragment>
  )
}
