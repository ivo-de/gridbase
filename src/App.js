import { Grid } from './components/grid'
import { Game } from './scripts/game'
import { Character } from './scripts/character'

const game = new Game()
game.setGrid(10, 10)

window.game = game
window.Character = Character

const App = () => {

  return (
    <Grid game={game} />
  );
}

export default App;
