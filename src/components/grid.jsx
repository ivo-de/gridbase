import styled from 'styled-components'
import { useState } from 'react'
import generateGrid from './generators/grid'
import generateCharacters from './generators/characters'
import generateLabels from './generators/gridLabels'

const GridOutline = styled.div`
    border: 4px solid red;
    margin: 120px;
    position: relative;
`

export const Grid = (props) => {

    const [updateKey, setUpdateKey] = useState(1)

    const {game} = props

    game.setRefresh(() => {
        setUpdateKey(Math.random())
    })

    const {x, y} = game.getGridDimensions()

    return (
        <GridOutline key={updateKey} style={{width: x * 80, height: y * 80}}>
            {generateGrid(game, updateKey)}
            {generateCharacters(game, updateKey)}
            {generateLabels(game, updateKey)}
        </GridOutline>
    )
}