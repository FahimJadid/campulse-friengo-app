// Importing color constants from a utility file
import { COLORS } from "@/utils/colors";

// Importing various UI components from the Mantine library
import { Button, Card, Center, Container, Input, Stack, Title, createStyles } from "@mantine/core";

// Importing a component from Next.js to manage the document's head
import Head from "next/head";

// Creating styles for the components using Mantine's createStyles function
const useStyles = createStyles((theme) => {
    return {
        containerBackgroundColor: {
            // Setting the background color of a container using a color constant
            backgroundColor: COLORS.BG
        }
    };
});

// Defining the main function component for the SignupPage
export default function SignupPage() {
    // Getting the styles using the useStyles function
    const { classes } = useStyles();

    // Returning JSX to create the UI of the SignupPage
    return (
        <Stack h={"100vh"} align="center" justify="center" className={classes.containerBackgroundColor}>
            {/* Setting up the document's head */}
            <Head>
                <title>Sign Up</title>
            </Head>

            {/* Creating a Card component to hold the signup form */}
            <Card shadow="sm" p="lg" w={800} radius="md" withBorder>
                {/* Displaying a title for the signup form */}
                <Title align="center">Register an account</Title>

                {/* Creating a Container to hold the form elements */}
                <Container mt={20}>
                    {/* Creating a form */}
                    <form>
                        {/* Input fields for email and password */}
                        <Input placeholder="Email Address" />
                        <Input my={10} placeholder="Password" />

                        {/* Centering the button */}
                        <Center>
                            {/* Creating a button for signing up */}
                            <Button w={"100%"}>
                                Sign Up
                            </Button>
                        </Center>
                    </form>
                </Container>
            </Card>
        </Stack>
    );
}
