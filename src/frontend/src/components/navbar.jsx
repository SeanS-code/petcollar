import { Container, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <Container maxW={"1200px"} px={4} paddingTop={3}>
        <Flex
            h={16}
            gap={10}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={{
                base: "column",
                sm: "row"
            }}
        >
            <Link to={"/"}>
                <Text
                    fontSize={{base: "20px", sm: "28"}}
                    fontWeight={"500"}
                    _hover={{ 
                        textDecoration: "underline",
                    }}
                >Home</Text>
            </Link>
            <Text
                fontSize={{base: "32px", sm: "28"}}
                fontWeight={"bold"}
                textAlign={"center"}
            >Smart Pet Collar</Text>
            <Link to={"/login"}>
                <Text
                    fontSize={{base: "20px", sm: "28"}}
                    fontWeight={"500"}
                    _hover={{ 
                        textDecoration: "underline",
                    }}
                >Login</Text>
            </Link>
        </Flex>
    </Container>
}

export default Navbar