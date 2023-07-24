import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
};

function Home() {
  return (
    <Box>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box h={'100vh'} w={'full'}>
          <Image src={img1} w={'100%'} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Watch The Future
          </Heading>
        </Box>
        <Box h={'100vh'} w={'full'}>
          <Image src={img2} w={'100%'} />
          <Heading
            bgColor={'whiteAlpha.500'}
            color={'black'}
            {...headingOptions}
          >
            Future is Gaming
          </Heading>
        </Box>
        <Box h={'100vh'} w={'full'}>
          <Image src={img3} w={'100%'} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Gaming on Console
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img4} w={'100%'} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Night life Cool{' '}
          </Heading>
        </Box>
      </Carousel>
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            textAlign={'center'}
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, quae
            modi. Alias sit vero ullam harum fugit, asperiores atque non
            suscipit quo quaerat iste, hic cumque nam explicabo laborum quae
            error veritatis blanditiis deleniti eligendi dignissimos eum sint
            expedita? Enim recusandae error aspernatur beatae. Accusantium amet
            quae architecto molestiae voluptas? que nam explicabo laborum quae
            error veritatis blanditiis deleniti eligendi dignissimos eum sint
            expedita? Enim recusandae error aspernatur beatae. Accusantium amet
            quae architecto molestiae voluptas
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
