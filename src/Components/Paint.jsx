import { Box, Container } from '@mui/material';
import fullImg from '../img/full.svg'
import page from '../img/page.svg'
import cover from '../img/cover.svg'
import close from '../img/close.svg'
import open from '../img/open.svg'

const images = {
    fullImg,
    page,
    cover,
    close,
    open
}

export default function Paint({ isBlur, hoveredElement, dimensions }) {
    return (
        <Container
            sx={{
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    width: '840px',
                    height: '300px',
                    backgroundImage: `url('${images.fullImg}')`,
                    opacity: isBlur ? '30%' : '100%',
                    position: 'absolute'
                }}

            >
            </Box>
            <Box
                sx={{
                    position: 'absolute'
                }}
            >{dimensions.width}</Box>
            <Box
                sx={{
                    position: 'absolute'
                }}
            >{dimensions.hight}</Box>
            <Box
                component='img'
                src={images[hoveredElement]}
                sx={{
                    width: '840px',
                    height: '300px',
                    opacity: '100%',
                    position: 'absolute'
                }}

            />
        </Container>
    )
}