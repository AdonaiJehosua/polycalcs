import { Box, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import { useState } from 'react';
import Paint from './Paint';

const initialState = {
    pageWidth: 97,
    pageHeight: 59,
    coverWidth: 95,
    coverHeight: 65,
    closeWidth: 100,
    closeHeight: 65,
    openWidth: 200,
    openHeight: 65,
    hoveredElement: null
}

const parameters = {
    kant: 3,
    space: 10,
}



export default function Card() {
    const [pageWidth, setPageWidth] = useState(initialState.pageWidth);
    const [pageHeight, setPageHeight] = useState(initialState.pageHeight);
    const [coverWidth, setCoverWidth] = useState(initialState.coverWidth);
    const [coverHeight, setCoverHeight] = useState(initialState.coverHeight);
    const [closeWidth, setCloseWidth] = useState(initialState.closeWidth);
    const [closeHeight, setCloseHeight] = useState(initialState.closeHeight);
    const [openWidth, setOpenWidth] = useState(initialState.openWidth);
    const [openHeight, setOpenHeight] = useState(initialState.openHeight);

    const [dimensions, setDimensions] = useState(initialState)

    const [hoveredElement, setHoveredElement] = useState(initialState.hoveredElement)
    const [hoveredElemDimensions, setHoveredElemDimensions] = useState({width: coverWidth, height: coverHeight})

    function changePageWidth(value) {
        setDimensions({...dimensions, pageWidth: value})
        const newCoverWidth = Number(value) + Number(parameters.kant) - Number(parameters.space / 2)
        const newCloseWidth = Number(value) + Number(parameters.kant)
        const newOpenWidth = (Number(value) + Number(parameters.kant)) * 2
        setCoverWidth(newCoverWidth)
        setCloseWidth(newCloseWidth)
        setOpenWidth(newOpenWidth)
    }
    function changePageHeight(value) {
        setPageHeight(value)
        const newCoverHeight = Number(value) + Number(parameters.kant) * 2
        const newCloseHeight = Number(value) + Number(parameters.kant) * 2
        const newOpenHeight = Number(value) + Number(parameters.kant) * 2
        setCoverHeight(newCoverHeight)
        setCloseHeight(newCloseHeight)
        setOpenHeight(newOpenHeight)
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
    function changeCoverHeight(value) {
        setCoverHeight(value)
        const newPageHeight = Number(value) - Number(parameters.kant) * 2
        const newCloseHeight = value
        const newOpenHeight = value
        setPageHeight(newPageHeight)
        setCloseHeight(newCloseHeight)
        setOpenHeight(newOpenHeight)
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
    function changeCloseHeight(value) {
        setCloseHeight(value)
        const newPageHeight = Number(value) - Number(parameters.kant * 2)
        const newCoverHeight = value
        const newOpenHeight = value
        setPageHeight(newPageHeight)
        setCoverHeight(newCoverHeight)
        setOpenHeight(newOpenHeight)
    }
    function changeOpenWidth(value) {
        setOpenWidth(value)
        const newPageWidth = Number(value) / 2 - Number(parameters.kant)
        const newCoverWidth = Number(value) / 2 - Number(parameters.space / 2)
        const newCloseWidth = Number(value) / 2
        setPageWidth(newPageWidth)
        setCoverWidth(newCoverWidth)
        setCloseWidth(newCloseWidth)
    }
    function changeOpenHeight(value) {
        setOpenHeight(value)
        const newPageHeight = Number(value) - Number(parameters.kant * 2)
        const newCoverHeight = value
        const newCloseHeight = value
        setPageHeight(newPageHeight)
        setCoverHeight(newCoverHeight)
        setCloseHeight(newCloseHeight)
    }

    function hoverElem({elem}) {
        console.log(elem)
        setHoveredElement(elem)
        setHoveredElemDimensions({
            width: dimensions[elem + 'Width'],
            height: dimensions[elem + 'Height']
        })
    }


    return (
        <Container>
            <Box sx={{
                marginBottom: 10
            }}>Удостоверение</Box>
            <TextField
                label='Ширина страницы'
                name='pageWidth'
                inputProps={{
                    'data-dim': 'width',
                    'data-elem': 'page'
                }}
                
                type='number'
                value={dimensions.pageWidth}
                onChange={(evt) => changePageWidth(evt.target.value)}
                onMouseMove={(evt) => {hoverElem(evt.target.dataset)}}
            />
            <TextField
                label='Высота страницы'
                name='pageHeight'
                inputProps={{
                    'data-dim': 'height',
                    'data-elem': 'page'
                }}
                type='number'
                value={pageHeight}
                onChange={(evt) => changePageHeight(evt.target.value)}
                onMouseMove={(evt) => {hoverElem(evt.target.dataset)}}
            />
            <TextField
                label='Ширина сторонки'
                name='coverWidth'
                inputProps={{
                    'data-dim': 'width',
                    'data-elem': 'cover'
                }}
                type='number'
                value={coverWidth}
                onChange={(evt) => changeCoverWidth(evt.target.value)}
                onMouseMove={(evt) => {hoverElem(evt.target.dataset)}}
            />
            <TextField
                label='Высота сторонки'
                name='coverHeight'
                inputProps={{
                    'data-dim': 'height',
                    'data-elem': 'cover'
                }}
                type='number'
                value={coverHeight}
                onChange={(evt) => changeCoverHeight(evt.target.value)}
                onMouseMove={(evt) => {hoverElem(evt.target.dataset)}}
            />
            <TextField
                label='Ширина закрытого'
                name='closeWidth'
                type='number'
                value={closeWidth}
                onChange={(evt) => changeCloseWidth(evt.target.value)}
                onMouseMove={() => {setHoveredElement('close')}}
            />
            <TextField
                label='Высота закрытого'
                name='closeHeight'
                type='number'
                value={closeHeight}
                onChange={(evt) => changeCloseHeight(evt.target.value)}
                onMouseMove={() => {setHoveredElement('close')}}
            />
            <TextField
                label='Ширина открытого'
                name='openWidth'
                type='number'
                value={openWidth}
                onChange={(evt) => changeOpenWidth(evt.target.value)}
                onMouseMove={() => {setHoveredElement('open')}}
            />
            <TextField
                label='Высота открытого'
                name='openHeight'
                type='number'
                value={openHeight}
                onChange={(evt) => changeOpenHeight(evt.target.value)}
                onMouseMove={() => {setHoveredElement('open')}}
            />

            <Paint isBlur={true} hoveredElement={hoveredElement} dimensions={hoveredElemDimensions}/>
        </Container>
    )
};
