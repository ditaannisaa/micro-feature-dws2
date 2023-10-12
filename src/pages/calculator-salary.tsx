import React, {useState} from 'react'
import {
    Text, 
    Box, 
    Container, 
    NumberInput, 
    NumberInputField, 
    NumberInputStepper, 
    NumberDecrementStepper, 
    NumberIncrementStepper,
    Heading,
    CardHeader,
    CardBody,
    Card,
    Button,
    CardFooter,
    Grid
} from '@chakra-ui/react'

function CalculatorSalary() {
    const [salary, setSalary] = useState(0);
    const [allowance, setAllowance] = useState(0);
    const [expenditure, setExpenditure] = useState(0);
    const [grossSalary, setGrossSalary] = useState(0);
    const [netSalary, setNetSalary] = useState(0);

    const calculateSalary = () => {
        // Calculate the gross salary (Salary + Allowance)
        const gross = salary + allowance;

        // Calculate the net salary (Gross Salary - Expenditure)
        const net = gross - expenditure;

        setGrossSalary(gross);
        setNetSalary(net);
    };

  return (
    <Box maxW='full' >
        <Box bg='blue.800' border={6} m={6} p={4} gap={4}>
            <Card bg='blue.50'>
                <CardHeader>
                    <Heading >Calculator Salary</Heading>
                </CardHeader>

                <CardBody>
                    <Grid templateColumns='1fr 1fr'>
                        <Box>
                            <Text>Salary</Text>
                            <NumberInput
                            w='sm'
                            onChange={(valueString) => setSalary(parseFloat(valueString))}
                            >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                            </NumberInput>

                            <Text>Allowance</Text>
                            <NumberInput
                            w='sm'
                            onChange={(valueString) => setAllowance(parseFloat(valueString))}
                            >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                            </NumberInput>

                            <Text>Expenditure</Text>
                            <NumberInput
                            w='sm'
                            onChange={(valueString) => setExpenditure(parseFloat(valueString))}
                            >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                            </NumberInput>
                        </Box>

                        <Box>
                            <Heading fontSize={20}>Hasil</Heading>
                            <Text>Gross Salary: {grossSalary}</Text>
                            <Text>Salary: {salary}</Text>
                            <Text>Net Salary: {netSalary}</Text>
                        </Box>
                    </Grid>
                    

                    
                    
                </CardBody>

                <CardFooter>
                    <Button onClick={calculateSalary}  bg="teal.300">
                        Submit
                    </Button>
                </CardFooter>
            </Card>
            
            
        </Box>
    </Box>
  )
}

export default CalculatorSalary