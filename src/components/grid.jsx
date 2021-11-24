import styled from 'styled-components'
import generateGrid from './generators/grid'
import generateCharacters from './generators/characters'
import generateLabels from './generators/gridLabels'

const GridOutline = styled.div`
    border: 4px solid red;
    position: relative;
`

export const Grid = (props) => {


    const {game, updateKey} = props

    const {x, y} = game.getGridDimensions()

    return (
        <GridOutline key={updateKey} style={{width: x * 80, height: y * 80}}>
            {generateGrid(game, updateKey)}
            {generateCharacters(game, updateKey)}
            {generateLabels(game, updateKey)}
        </GridOutline>
    )
}