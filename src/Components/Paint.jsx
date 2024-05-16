import { Box, Container } from '@mui/material';

export default function Paint() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'red',
                    width: '800px',
                    height: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'gray',
                        width: '780px',
                        height: '230px'
                    }}>

                </Box>
            </Box>
        </Container>
    )
}