import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const navigation = [
  { title: 'High Court Services', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Calcutta_highcourt.jpg/330px-Calcutta_highcourt.jpg', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
  { title: 'High Court Of India', image: 'https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-107731924/107731924.jpg', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
  { title: 'District Court Service', image: 'https://legodesk.com/wp-content/uploads/2017/05/maxresdefault-1-1024x576.jpg', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
  { title: 'Online Petition filing', image: 'https://lawtrend.in/wp-content/uploads/2022/09/rti-portal-sc.jpeg', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
  { title: 'Automatic Judge Assignment', image: 'https://crushbarexam.com/wp-content/uploads/2023/09/pexels-ekaterina-bolovtsova-6077447-scaled.jpg', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
  
  { title: 'Fear Judgement', image: 'https://media.istockphoto.com/id/1136594579/photo/justice-system-in-india.jpg?s=612x612&w=0&k=20&c=2a-b37ne5WASbYjsRnw04KoRgzvdPZ5zbKpZyPW4SrI=', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
  

]


export default function ImgCard() {
  return (
    <div className='mt-20 grid grid-cols-3 justify-items-center gap-y-10 px-5'>
      {
        navigation.map((item) => (
          // <CardFeature iconName={item.iconName} title={item.title} bgcolor={item.bgcolor}></CardFeature>
          <Card sx={{ maxWidth: 345 }} className='shadow-lg'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={item.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))
      }
    </div>



  );
}