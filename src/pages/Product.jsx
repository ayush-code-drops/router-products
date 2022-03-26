import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Modal from '../components/BasicModal';
export default function Product() {
    const { id } = useParams()
     console.log(id)
    const [product, setProduct] = useState({})
    const [err,setErr]=useState(false)
    useEffect(() => {
        axios.get(`https://json-server-deploy-mock.herokuapp.com/products/${id}`).then((res) => {
            console.log(res)
          setProduct(res.data)
        }).catch(() => {
          setErr(true)
      })
    }, [])
    
    if (err) {
        return (
            <Modal/>
        )
    }
  return (
    <Card sx={{ maxWidth: 345, margin:'auto',marginTop:'70px' }}>
      <CardMedia
        component="img"
            height='200px'
        image={product.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {product.description}
              </Typography>
              <Typography variant='h6'>
                  Price : {product.price}
              </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
