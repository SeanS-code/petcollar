import { Container, Flex, Text, Box, Textarea, Checkbox, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Login = () => {
    return <Container maxW={"100%"} px={4} paddingTop={3}>
            <Link to={"/"}>
                <Text
                    ml={2}
                    fontSize={"32px"}
                    fontWeight={"bolder"}
                >SPC</Text>
            </Link>

            <Flex
                mt={"5%"}
                justifyContent={"center"}
            >
                <Box
                    h={"500px"}
                    w={"60%"}
                    bg={"#b6c4a2"}
                    rounded={"md"}
                >
                    <Flex
                    
                    >
                        <Text>Username:</Text>
                        <Textarea resize={"none"}></Textarea>
                        <Text>Password:</Text>
                        <Textarea resize={"none"}></Textarea>

                        <Checkbox.Root>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control>
                                <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Label>Administrator</Checkbox.Label>
                        </Checkbox.Root>
                        <Link to={"/signup"}>
                            <Text textDecoration={"underline"}>Sign up?</Text>
                        </Link>

                        <Button>Login</Button>
                    </Flex>
                </Box>
            </Flex>
    </Container>
}

export default Login