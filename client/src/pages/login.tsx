import {COLORS} from '@/utils/colors';
import {Button, Card, Center, Container, Input, Stack, Title, createStyles} from '@mantine/core';
import Head from 'next/head';


const useStyles = createStyles((theme) => {
    return {
        containerBackgroundColor: {
            backgroundColor: COLORS.BG
        }
    }
});


export default function Login() {
    const { classes } = useStyles();
    return <Stack h={"100vh"} align="center" justify="center" className={classes.containerBackgroundColor}>
        <Head>
            <title>Login</title>
        </Head>
        <Card shadow="sm" p="lg" w={800} radius="md" withBorder>
            <Title align="center">Login to your account</Title>

            <Container mt={20}>
                <form>
                    <Input placeholder="Email Address" />
                    <Input my={10} placeholder="Password" />
                    <Center>
                        <Button w={"100%"}>
                            Login
                        </Button>
                    </Center>
                </form>

            </Container>
        </Card>
    </Stack>
}