import styled from 'styled-components'
import { convertX, convertY } from '../scripts/utils'

const CharacterPanelWrapper = styled.div`
    border: 1px solid black;
    margin: 20px;
    padding-left: 20px;
`

const Coordinates = styled.span`
    font-family: consolas;
`

export const CharacterPanel = (props) => {
    const {game, updateKey} = props
    const curChar = game.characters[game.selectedChar] 
    if (curChar) {
        return (
            <CharacterPanelWrapper key={updateKey}>
                <p>Currently selected character: {curChar.name}</p>
                <p>Character location: <Coordinates>{convertX(curChar.x)}{convertY(curChar.y)}</Coordinates></p>
            </CharacterPanelWrapper>
        )
    }
    return (
        <CharacterPanelWrapper key={updateKey}>
            <p>No currently selected character</p>
        </CharacterPanelWrapper>
    )
}