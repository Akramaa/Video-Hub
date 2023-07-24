import {
  Box,
  Button,
  HStack,
  Stack,
  VStack,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} color={'white'} p={'16'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            VIDEO HUB
          </Heading>
          <Text> All rights received</Text>
        </VStack>
        <VStack w={'full'} borderRight={['none', '1px solid white']}>
          <Heading size={'md'} textTransform={'uppercase'}>
            {' '}
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="white">
            <a href="#">Youtube</a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="#">Instagram</a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="#">GitHub</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
