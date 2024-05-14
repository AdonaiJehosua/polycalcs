import { Box, Input, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import { useState } from 'react';

const initialState = {
    pageWidth: 97,
    pageHight: 59,
    coverWidth: 95,
    coverHight: 65,
    closeWidth: 100,
    closeHight: 65,
    openWidth: 200,
    openHight: 65
}

const parameters = {
    kant: 3,
    space: 10,
}



export default function Card() {
    const [pageWidth, setPageWidth] = useState(initialState.pageWidth);
    const [pageHight, setPageHight] = useState(initialState.pageHight);
    const [coverWidth, setCoverWidth] = useState(initialState.coverWidth);
    const [coverHight, setCoverHight] = useState(initialState.coverHight);
    const [closeWidth, setCloseWidth] = useState(initialState.closeWidth);
    const [closeHight, setCloseHight] = useState(initialState.closeHight);
    const [openWidth, setOpenWidth] = useState(initialState.openWidth);
    const [openHight, setOpenHight] = useState(initialState.openHight);

    function changePageWidth(value) {
        setPageWidth(value)
        const newCoverWidth = Number(value) + Number(parameters.kant) - Number(parameters.space / 2)
        const newCloseWidth = Number(value) + Number(parameters.kant)
        const newOpenWidth = (Number(value) + Number(parameters.kant)) * 2
        setCoverWidth(newCoverWidth)
        setCloseWidth(newCloseWidth)
        setOpenWidth(newOpenWidth)
    }
    function changePageHight(value) {
        setPageHight(value)
        const newCoverHight = Number(value) + Number(parameters.kant) * 2
        const newCloseHight = Number(value) + Number(parameters.kant) * 2
        const newOpenHight = Number(value) + Number(parameters.kant) * 2
        setCoverHight(newCoverHight)
        setCloseHight(newCloseHight)
        setOpenHight(newOpenHight)
    }
    function changeCoverWidth(value) {
        setCoverWidth(value)
        const newPageWidth = Number(value) - Number(parameters.kant) + Number(parameters.space / 2)
        const newCloseWidth = Number(value) + Number(parameters.space / 2)
        const newOpenWidth = (Number(value) + Number(parameters.space / 2)) * 2
        setPageWidth(newPageWidth)
        setCloseWidth(newCloseWidth)
        setOpenWidth(newOpenWidth)
    }
    function changeCoverHight(value) {
        setCoverHight(value)
        const newPageHight = Number(value) - Number(parameters.kant) * 2
        const newCloseHight = value
        const newOpenHight = value
        setPageHight(newPageHight)
        setCloseHight(newCloseHight)
        setOpenHight(newOpenHight)
    }
    function changeCloseWidth(value) {
        setCloseWidth(value)
        const newPageWidth = Number(value) - Number(parameters.kant)
        const newCoverWidth = Number(value) - Number(parameters.space / 2)
        const newOpenWidth = Number(value) * 2
        setPageWidth(newPageWidth)
        setCoverWidth(newCoverWidth)
        setOpenWidth(newOpenWidth)
    }
    function changeCloseHight(value) {
        setCloseHight(value)
        const newPageHight = Number(value) - Number(parameters.kant * 2)
        const newCoverHight = value
        const newOpenHight = value
        setPageHight(newPageHight)
        setCoverHight(newCoverHight)
        setOpenHight(newOpenHight)
    }
    function changeOpenWidth(value) {
        setOpenWidth(value)
        const newPageWidth = Number(value) / 2 - Number(parameters.kant)
        const newCoverWidth = Number(value) / 2 - Number(parameters.space / 2)
        const newCloseWidth = Number(value) /2
        setPageWidth(newPageWidth)
        setCoverWidth(newCoverWidth)
        setCloseWidth(newCloseWidth)
    }
    function changeOpenHight(value) {
        setOpenHight(value)
        const newPageHight = Number(value) - Number(parameters.kant * 2)
        const newCoverHight = value
        const newCloseHight = value
        setPageHight(newPageHight)
        setCoverHight(newCoverHight)
        setCloseHight(newCloseHight)
    }


    return (
        <Container>
            <Box sx={{
                    marginBottom: 10
                }}>Удостоверение</Box>
            <TextField
                label='Ширина страницы'
                name='pageWidth'
                type='number'
                value={pageWidth}
                onChange={(evt) => changePageWidth(evt.target.value)}
            />
            <TextField
                label='Высота страницы'
                name='pageHight'
                type='number'
                value={pageHight}
                onChange={(evt) => changePageHight(evt.target.value)}
            />
            <TextField
                label='Ширина сторонки'
                name='coverWidth'
                type='number'
                value={coverWidth}
                onChange={(evt) => changeCoverWidth(evt.target.value)}
            />
            <TextField
                label='Высота сторонки'
                name='coverHight'
                type='number'
                value={coverHight}
                onChange={(evt) => changeCoverHight(evt.target.value)}
            />
            <TextField
                label='Ширина закрытого'
                name='closeWidth'
                type='number'
                value={closeWidth}
                onChange={(evt) => changeCloseWidth(evt.target.value)}
            />
            <TextField
                label='Высота закрытого'
                name='closeHight'
                type='number'
                value={closeHight}
                onChange={(evt) => changeCloseHight(evt.target.value)}
            />
            <TextField
                label='Ширина открытого'
                name='openWidth'
                type='number'
                value={openWidth}
                onChange={(evt) => changeOpenWidth(evt.target.value)}
            />
            <TextField
                label='Высота открытого'
                name='openHight'
                type='number'
                value={openHight}
                onChange={(evt) => changeOpenHight(evt.target.value)}
            />
        </Container>
    )
};
