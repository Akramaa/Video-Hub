import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import { React, useState } from 'react';

function Videos() {
  const VidArray = [
    'https://media.istockphoto.com/id/1029511688/video/world-war-one-relics-bunker-preserved-in-a-meadow.mp4?s=mp4-640x640-is&k=20&c=WsBz71EVaKEH-ifbBmfffmwBE5gfuq6Acsv9QJtHJwM=',
    'https://cdn.videvo.net/videvo_files/video/premium/video0214/large_watermarked/Girl%20painting%20wall%20to%20blue%20color_preview.mp4',
    'https://cdn.videvo.net/videvo_files/video/premium/video0216/large_watermarked/Portrait%20student%20girl%209s%20opening%20book%20and%20smiling%20at%20camera_preview.mp4',
    'https://cdn.videvo.net/videvo_files/video/premium/video0192/large_watermarked/Closeup%20portrait%20of%20a%20boy%20outdoors.%20Thumbs%20up.%20Ok._preview.mp4',
    'https://joy1.videvo.net/videvo_files/video/free/2015-08/large_watermarked/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_preview.mp4',
    'https://joy1.videvo.net/videvo_files/video/free/2017-11/large_watermarked/170509A_Vietnam_02_preview.mp4',
    'https://joy1.videvo.net/videvo_files/video/free/2017-01/large_watermarked/161212_069_Vietnam_1080p96fps_preview.mp4',
  ];
  const [VideoSrc, setVideoSrc] = useState(VidArray[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={VideoSrc}
          style={{ width: '100%' }}
        >
          {' '}
        </video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            {' '}
            This is a sample video for testing an d demo. This is called
            discription{' '}
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {VidArray.map((video, index) => (
          <Button
            key={index}
            colorScheme={'purple'}
            variant={'ghost'}
            onClick={() => setVideoSrc(video)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
}

export default Videos;
