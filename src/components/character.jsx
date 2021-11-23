import { GridEntity } from './common/gridEntity'
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'react-feather'
import styled from 'styled-components'

const DirectionContainer = styled.div`
    display: flex;
    border-radius: 50%;
    background-color: black;
    width: 50%;
    height: 50%;
    margin-left: auto;
    margin-right: auto;
`

const getDirectionalArrow = (direction) => {
    const props = {color: 'white', size: 24, style: {display: 'block', margin: 'auto'}}
    if (direction === 'up') return <ArrowUp {...props} />
    if (direction === 'left') return <ArrowLeft {...props} />
    if (direction === 'right') return <ArrowRight {...props} />
    return <ArrowDown {...props} />
}

export const Character = (props) => {
    const {char} = props

    return (
        <GridEntity 
            posX={char.x} 
            posY={char.y}
            color={char.selected ? 'purple' : char.color}
            style={{zIndex: 1, color: char.selected ? 'white': 'black'}} 
            onClick={props.onClick} 
        >
            {char.name}
            <DirectionContainer>
                {getDirectionalArrow(char.direction)}
            </DirectionContainer>

        </GridEntity>
    )
}