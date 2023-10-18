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

function Item(props) {
  return (
      <Paper>
          <img src={props.item.imageURL} alt={props.item.name}/>
      </Paper>
  )
}

export default function Project1() {
  const [open, setOpen] = useState(false);
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
            imageURL: "https://media.discordapp.net/attachments/995173807750926346/1164205475382960289/UMKMBookeeping_1.png?ex=65425dd7&is=652fe8d7&hm=964eca0bb85c316b6f0b1158297cb18cea8ad03f2de5cb1614dd4613c026847e&=&width=1342&height=671"
        },
        {
            imageURL: "https://media.discordapp.net/attachments/995173807750926346/1164205476918071317/UMKMBookeeping_5.png?ex=65425dd7&is=652fe8d7&hm=037a97756fd2688361d80f919b49eac4db33f41c04066efff14796b2f4f41e4f&=&width=1342&height=671"
        },
        {
            imageURL: "https://media.discordapp.net/attachments/995173807750926346/1164205476473491497/UMKMBookeeping_4.png?ex=65425dd7&is=652fe8d7&hm=8ef380cd2e7ae753e4c5fdf8f25fb9421d9e637f7ddfa1275eaa0fe13e6fc296&=&width=1342&height=671"
        },
        {
            imageURL: "https://media.discordapp.net/attachments/995173807750926346/1164205476045656104/UMKMBookeeping_3.png?ex=65425dd7&is=652fe8d7&hm=9d63f0ae3604cb1d5df1dc933f445502b127a3c026c86b6d3f74cfbd64375352&=&width=1342&height=671"
        },
        {
            imageURL: "https://media.discordapp.net/attachments/995173807750926346/1164205475714322574/UMKMBookeeping_2.png?ex=65425dd7&is=652fe8d7&hm=e645f57d45ac483141e5535ee266d535a3f60b1d7cec27eebf6e7c56586d4730&=&width=1342&height=671"
        },
        {
            imageURL: "https://media.discordapp.net/attachments/995173807750926346/1164205477262008320/UMKMBookeeping_6.png?ex=65425dd7&is=652fe8d7&hm=8f9da8d2be0c9bb44da70137e7f8bd8028c466a9a60d332ef5a9730f70f2fca8&=&width=1342&height=671"
        }
  ];

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
                  {items.map((item, i) => (
                      <Item key={i} item={item} />
                  ))}
              </Carousel>
              <CardContent>
                  <Typography component="div" className="font-abel text-blue-600 dark:text-gray-200 grid grid-cols-2 justify-end mt-1"
                      style={{ fontWeight: 'bold', fontSize: 'x-large' }}>
                      UMKM Bookeeping
                      <div className="flex justify-end">
                          <Image src={disconnected} alt="disconnected-icon" width={35} height={35} />
                          <span className="text-red-500 m-2 mt-1 text-xl deployment">Offline</span>
                      </div>
                  </Typography>
                  <Typography className="dark:text-gray-200 font-abel card-desc"
                      style={{ marginTop: '12px', fontWeight: 'normal', fontSize: 'large' }}>
                      Financial bookkeeping and product management web app for MSMEs.
                  </Typography>
              </CardContent>
              <CardActions className="learn-more-container">
                  <div>
                        <Button href="https://github.com/Akosovski/UMKMBookeeping" className="learn-more-button transition ease-in-out delay-50 duration-200 dark:text-gray-200 font-abel"
                        target="_blank" rel="noreferrer" style={{ fontWeight: 'bold', fontSize: 'medium'}}>View Code</Button>
                  </div>
              </CardActions>
          </Card>
      </div>
  )
}