import { 
    Box,
    Card,
    CardHeader,
    Heading,
    CardBody,
    CardFooter,
    Button,
    Flex,
    Text,
    Input
} from '@chakra-ui/react'
import React, { useState } from 'react'

const words = [
    "Strawberry",
    "Avocado",
    "Banana",
    "Orange",
    "Apple",
    "Mango",
]

function WordScramble() {
    const [inputValue, setInputValue] = useState('')
    const [isPlayOn, setIsPlayOn] = useState(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
        setInputValue(event.target.value)
    }

    const handleButtonClick = () => {
        console.log("clicked")
    }

  return (
    <Box maxW='full' >
        <Box bg='blue.800' border={6} m={6} p={4} gap={4} >
            <Card bg='blue.50' >
                <CardHeader m='0 auto'>
                    <Heading >Word Scramble</Heading>
                </CardHeader>

                <CardBody m='0 auto'>
                    <Box>
                        <Box display='flex'>
                            <Text w='40px' h='40px' bg='gray.200'></Text>
                        </Box>
                        <Text className='scramble_word'></Text>
                    </Box>
                    
                </CardBody>
                
                {isPlayOn ?(
                   <CardFooter m='0 auto' gap={6}>
                        <Input
                        w='sm'
                        placeholder="Your Answer"
                        onChange={handleInputChange}
                        value={inputValue}

                        />
                        <Button   
                        bg="teal.300"
                        onClick={handleButtonClick}
                        >
                            Submit
                        </Button>
                        
                    </CardFooter> 
                ) : (
                    <Box  display='flex' justifyContent='center' p={6} border={6}>
                        <Button m='auto' bg='green.400' color='white'>Start Game</Button>
                    </Box>
                )}
                
                
            </Card>
            
            
        </Box>
    </Box>
  )
}

export default WordScramble