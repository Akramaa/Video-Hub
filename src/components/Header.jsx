import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}

        colorScheme={'purple'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
        zIndex={1}
      >
        <BiMenuAltLeft size={'25'} />
      </Button>
      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight={'bold'}>VIDEO HUB </DrawerHeader>
          <DrawerBody>
          <VStack alignItems={'flex-start'} mx={'5'}>
            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
              <Link to={'/'}>Home</Link>
            </Button>
            <Button onClick={onClose}  variant={'ghost'} colorScheme={'purple'}>
              <Link to={'/videos'}>Videos</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
              <Link to={'/videos?category=free'}>free Videos</Link>
            </Button>
            <Button onClick={onClose}  variant={'ghost'} colorScheme={'purple'}>
              <Link to={'/upload'}>Upload Videos</Link>
            </Button>
          </VStack>
          <HStack
            pos={'absolute'}
            left={'0'}
            bottom={'10'}
            w={'full'}
            justifyContent={'space-evenly'}
          >
            <Button onClick={onClose} colorScheme="purple">
              <Link to={'/login'}>Sign In</Link>
            </Button>
            <Button onClick={onClose} variant={'outline'} colorScheme="purple">
              <Link to={'/SignUp'}>Sign Up</Link>
            </Button>
          </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
