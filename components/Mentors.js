import { Grid, GridItem } from "@chakra-ui/react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Mentors() {
  const mentors = [
    {
      name: "Parth A.",
      image: "/parthA.jpeg",
      linkedIn: "https://www.linkedin.com/in/htrap94/",
      designation: "AI @ Cactus Labs",
      company: "",
    },
    {
      name: "Dvijesh Bhatt",
      image: "/dwijesh_bhatt.jpeg",
      linkedIn: "https://www.linkedin.com/in/dvijesh-bhatt-76283920/",
      designation: "Senior Data Scientist",
      company: "Fractal Analytics",
    },   
    
    {
      name: "Praxal Patel",
      image: "/praxal_patel.jpeg",
      linkedIn: "https://www.linkedin.com/in/praxal/",
      designation: "Data Scientist",
      company: "Revelio Labs",
    },
    {
      name: "Meenaxi Tank",
      image: "/meenaxi_tank.jpeg",
      linkedIn: "https://www.linkedin.com/in/meenaxi-tank-6803a6a0/",
      designation: "AI/ML Engineer",
      company: "Intech",
    },
    {
      name: "Manil Shah",
      image: "/manil.jpeg",
      linkedIn: "https://www.linkedin.com/in/manilshah913/",
      designation:
        "Student of CSE at Institute of Technology, Nirma University",
      company: "",
    },
    {
      name: "Hardik Maisuria",
      image: "/hardik.jpeg",
      linkedIn: "https://www.linkedin.com/in/hardik-maisuria-675370208/",
      designation:
        "Student of CSE at Institute of Technology, Nirma University",
      company: "",
    },
    {
      name: "Kalp Mepani",
      image: "/kalp.jpeg",
      linkedIn: "https://www.linkedin.com/in/kalp-mepani-5350671a2/",
      designation:
        "Student of CSE at Institute of Technology, Nirma University",
      company: "",
    },
  ];
  return (
    <Box marginBlock={16} id="mentors">
      <Heading color={"#4299E1"} marginBlock={"8"}> Mentors</Heading>
      <Grid
        alignItems="center"
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={4}
        marginBottom={8}
        
      >
        {mentors.map((dev) => (
          <GridItem key={dev.name}
          _hover={{
            border: "1px solid transparent", // Set initial border to transparent
            boxShadow: "0 0 6px 1.5px white, 0 0 20px 6px white, 0 0 15px 6px white", // Glowing effect
            transition: "box-shadow 0.5s ease-in-out",
            borderRadius:"30px",
            // bgColor: "white",
            color:"white",
          }}
          >
            <MentorCard
              url={dev.image}
              name={dev.name}
              link={dev.linkedIn}
              designation={dev.designation}
              company={dev.company}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

function MentorCard(props) {
  return (
    <Center>
      <Box boxShadow="md" rounded="lg" p={6} textAlign={"center"} minW="xs"  
      border="2px solid transparent" // Set an initial border
      _hover={{
        border: "white.400", // Change the border on hover
      }}
      >
        <Avatar size={"2xl"} src={props.url} alt={props.name} mb={4} />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {props.name}
        </Heading>
        <Text textAlign={"center"} px={3} mt={4}>
          {props.designation}
        </Text>

        <Text textAlign={"center"}>{props.company}</Text>

        <Stack mt={8} direction={"row"} spacing={4} justifyContent={"center"}>
          <Button
            fontSize={"md"}
            paddingInline={8}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
            as={"a"}
            href={props.link}
            leftIcon={<FaLinkedinIn />}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Connect
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
