import { Container, Flex, Text, Box, Textarea, Checkbox, Button, Group } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return <Container maxW={"100%"} px={4} paddingTop={3} color={"white"}>
            <Link to={"/"}>
                <Text
                    ml={2}
                    fontSize={"32px"}
                    fontWeight={"bolder"}
                    letterSpacing={"wide"}
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
                    shadow={"5px 5px 8px 1px rgba(0, 0, 0, 0.2)"}
                >
                    <Flex
                        justifyContent={"center"}
                        flexDir={"column"}
                    >
                        <Group
                            w={"65%"}
                            mt={"7%"}
                            ml={"15%"}
                        >
                            <Flex
                                flexDir={"column"}
                            >
                                <Text>Username:</Text>
                                <Textarea 
                                    w={"710px"}
                                    h={"30px"}
                                    resize={"none"} 
                                    bg={"white"} 
                                    border={"none"}
                                    color={"black"}
                                    rounded={"0"}
                                ></Textarea>
                            </Flex>
                        </Group>
                        <Group
                            w={"65%"}
                            mt={"5%"}
                            ml={"15%"}
                        >
                            <Flex
                                flexDir={"column"}
                            >
                                <Text>Password:</Text>
                                <Textarea 
                                    w={"710px"}
                                    h={"30px"}
                                    resize={"none"} 
                                    bg={"white"} 
                                    border={"none"}
                                    color={"black"}
                                    rounded={"0"}
                                ></Textarea>
                            </Flex>
                        </Group>
                        <Group
                            w={"65%"}
                            mt={"2%"}
                            ml={"15%"}
                        >
                            <Flex
                                flexDir={"column"}
                            >
                                <Text>Confirm Password:</Text>
                                <Textarea 
                                    w={"710px"}
                                    h={"30px"}
                                    resize={"none"} 
                                    bg={"white"} 
                                    border={"none"}
                                    color={"black"}
                                    rounded={"0"}
                                ></Textarea>
                            </Flex>
                        </Group>

                        <Container mt={"2"}>
                            <Flex
                                mt={"1%"}
                                ml={"12.8%"}
                                justifyContent={"left"}
                            >
                                <Checkbox.Root>
                                    <Checkbox.HiddenInput />
                                    <Checkbox.Control>
                                        <Checkbox.Indicator />
                                    </Checkbox.Control>
                                    <Checkbox.Label>Administrator</Checkbox.Label>
                                </Checkbox.Root>
                            </Flex>
                        </Container>

                        <Button
                            w={"10%"}
                            mt={"5%"}
                            ml={"44%"}
                        >Signup</Button>
                    </Flex>
                </Box>
            </Flex>
    </Container>
}

export default Signup