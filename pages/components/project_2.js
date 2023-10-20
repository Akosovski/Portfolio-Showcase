/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";

// Material UIs
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

// SVG FILES
import connected from "../assets/connected.svg";
import disconnected from "../assets/disconnected.svg";
import image1 from '../assets/MyXP-1.svg';
import image2 from '../assets/MyXP-2.svg';
import image3 from '../assets/MyXP-3.svg';
import image4 from '../assets/MyXP-4.svg';

function Item(props)
{
    return (
        <Paper>
            <Image 
                src={props.item.imageSource} 
                alt={props.item.name}
                width={1600}
                height={800}
            />
        </Paper>
    )
}

export default function Project2() {

    /* Project Card 2 - MyXP */
    const [open, setOpen] = React.useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modal_style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 350,
        boxShadow: 24,
        p: 4,
    };
    
    const items = [
      {
          imageSource: image1,
          name: 'MyXP-1'
      },
      {
          imageSource: image2,
          name: 'MyXP-2'
      },
      {
          imageSource: image3,
          name: 'MyXP-3'
      },
      {
          imageSource: image4,
          name: 'MyXP-4'
      }
    ]

    useEffect(() => {
      const handleResize = () => {
          setCarouselIndex((prevIndex) => (prevIndex + 1) % items.length);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
    }, [items]);

    return (
        <div className="basis-1/3 flex-1">
              <Card className="rounded-lg dark:bg-black drop-shadow-xl bg-gray-100
              transition ease-in-out delay-50 duration-200 min-h-full">
                <Carousel
                  index={carouselIndex} 
                  autoPlay={false}
                  animation="slide"
                  indicators={false}
              >
                  {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                  }
                </Carousel>
                <CardContent>
                  <Typography component="div" className="font-abel text-blue-600 dark:text-gray-200 grid grid-cols-2 justify-end mt-1"
                  style={{ fontWeight: 'bold', fontSize: 'x-large'}}>
                    MyXP
                    <div className="flex justify-end">

                      <Image src={disconnected} alt="disconnected-icon" width={35} height={35}/>
                      <span className="text-red-500 m-2 mt-1 text-xl deployment">Offline</span>

                    </div>
                  </Typography>
                  <Typography className="dark:text-gray-200 font-abel card-desc"
                  style={{ marginTop: '12px', fontWeight: 'normal', fontSize: 'large'}}>
                    Activity logging app with progress bar style leveling. 
                  </Typography>
                </CardContent>
                <CardActions className="learn-more-container">
                  <div>
                      <Button href="https://github.com/Akosovski/MyXP" className="learn-more-button transition ease-in-out delay-50 duration-200 dark:text-gray-200 font-abel"
                      target="_blank" style={{ fontWeight: 'bold', fontSize: 'medium'}}>View Code</Button>
                  </div>
                </CardActions>
              </Card>
            </div>
    )
}