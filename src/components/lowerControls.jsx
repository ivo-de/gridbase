import styled from 'styled-components'
import { generateCharacters } from '../scripts/character'

const LowerControlsWrapper = styled.div`
    border: 1px solid black;
    margin-top: 20px;
`

let generatedCharacters = false

export const LowerControls = (props) => {
    const {game} = props
    const clickGenChars = () => {
        if (generatedCharacters) return
        const chars = generateCharacters()
        for( const char of chars ) {
            game.addCharacter(char)
        }
        generatedCharacters = true
    }
    return (
        <LowerControlsWrapper>
            <button onClick={clickGenChars}>Add characters</button>
        </LowerControlsWrapper>
    )
}