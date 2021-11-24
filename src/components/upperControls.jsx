import styled from 'styled-components'

const ControlGrid = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px 100px 100px;
    grid-gap: 10px;
    color: #444;
`

const ControlCell = styled.div`
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
`
const EmptyCell = styled.div`
    padding: 20px;

`




export const UpperControls = (props) => {
    const {game} = props
    const {selectedChar} = game

    const move = (cardinal) => () => game.characters[selectedChar].move(cardinal, game)

    return (
        <ControlGrid>

            <EmptyCell />
            <ControlCell>
                <button onClick={move('NW')}>NW</button>
            </ControlCell>
            <ControlCell>
                <button onClick={move('N')}>N</button>
            </ControlCell>
            <ControlCell>
                <button onClick={move('NE')}>NE</button>
            </ControlCell>
            <EmptyCell />

            <ControlCell>
                <button>&lt;turn</button>
            </ControlCell>
            <ControlCell>
                <button onClick={move('W')}>W</button>
            </ControlCell>
            <EmptyCell />
            <ControlCell>
                <button onClick={move('E')}>E</button>
            </ControlCell>
            <ControlCell>
                <button>turn&gt;</button>
            </ControlCell>

            <EmptyCell />
            <ControlCell>
                <button onClick={move('SW')}>SW</button>
            </ControlCell>
            <ControlCell>
                <button onClick={move('S')}>S</button>
            </ControlCell>
            <ControlCell>
                <button onClick={move('SE')}>SE</button>
            </ControlCell>
            <EmptyCell />
        </ControlGrid>
    )
}