import { Entity } from '../common/entity'
import styled from 'styled-components'

const LetterContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    margin-top: 39%;
`

const numToAlpha = (num) => {
    let letters = ''
    while (num >= 0) {
        letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26] + letters
        num = Math.floor(num / 26) - 1
    }
    return letters
}

export default (g, upKey) => {
    const labels = []
    const {x, y} = g.getGridDimensions()
    for ( let cellX = 0; cellX < x; cellX++) {
        labels.push(
            <Entity 
                key={`label-${cellX}-n-${upKey}`} 
                posX={cellX} 
                posY={-1}
            >
                <LetterContainer>{cellX}</LetterContainer>
            </Entity>
        )
    }
    for (let cellY = 0; cellY < y; cellY++){
        labels.push(
            <Entity 
                key={`label-n-${cellY}-${upKey}`} 
                posX={-1} 
                posY={cellY}
            >
                <LetterContainer>{numToAlpha(cellY)}</LetterContainer>
            </Entity>
        )
    }
    return labels
}