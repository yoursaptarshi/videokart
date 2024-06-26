import React from 'react'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack,Image } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../../../assets/images/logo.png'
const LinkButton = ({ url = '/', title = 'Home', onClose }) => {
   return(
    <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
    
</Link>
   )
}
const Header = ({ isAuthenticated = false, user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const dispatch = useDispatch();
    //remove all comments after putting redux

    const logoutHandler = () => {
        onClose();
        //dispatch(logout());
    }
    return (
        <>
            <ColorModeSwitcher />
            <Button
                onClick={onOpen}
                colorScheme={'yellow'}
                width="12"
                height={'12'}
                rounded="full"
                zIndex={'overlay'}
                position={'fixed'}
                top="6"
                left="6"
            >
                <RiMenu5Fill />
            </Button>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottom={'1px'}>
                        <HStack >
                       <h1>VIDEOKART</h1>   
                        <Image src={logo} height='5vh'/> 
                        </HStack>
                    </DrawerHeader>
                    <DrawerBody>
                    <p>By Saptarshi Samanta</p>
                        <VStack spacing={'4'} alignItems="flex-start">
                            <LinkButton onClose={onClose} url='/' title="Home" />
                            <LinkButton onClose={onClose} url='/videos' title="Browse Videos" />
                            <LinkButton onClose={onClose} url='/request' title="Request a Video" />
                            <LinkButton onClose={onClose} url='/contact' title="Contact Us" />
                            <LinkButton onClose={onClose} url='/about' title="About" />
                            <HStack
                                justifyContent={'space-evenly'}
                                position="absolute"
                                bottom={'2rem'}
                                width="80%"
                            >
                                {isAuthenticated ? (
                                    <>
                                        <VStack>
                                            <HStack>
                                                <Link onClick={onClose} to='/profile'>
                                                    <Button variant={'ghost'} colorScheme={'yellow'}>
                                                        Profile
                                                    </Button>
                                                </Link>
                                                <Button variant={'ghost'} onClick={logoutHandler}>
                                                    <RiLogoutBoxLine />
                                                    Logout
                                                </Button>
                                            </HStack>
                                            {user && user.role === 'admin' && (
                                                <Link onClick={onClose} to="/admin/dashboard">
                                                    <Button colorScheme={'purple'} variant="ghost">
                                                        <RiDashboardFill style={{ margin: '4px' }} />
                                                        Dashboard
                                                    </Button>
                                                </Link>
                                            )}
                                        </VStack>
                                    </>
                                ) : (
                                    <>
                                        <Link onClick={onClose} to="/login">
                                            <Button colorScheme={'yellow'}>Login</Button>
                                        </Link>

                                        <p>OR</p>

                                        <Link onClick={onClose} to="/register">
                                            <Button colorScheme={'yellow'}>Sign Up</Button>
                                        </Link>
                                    </>

                                )}
                            </HStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header