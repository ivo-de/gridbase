export class Character {
    constructor(name, x, y, color = 'red') {
        this.name = name
        this.x = x
        this.y = y
        this.color = color
        this.selected = false
        this.direction = 'down'
        this.stats = {
            vitality: 1,
            movement: 1,
            strength: 1,
        }
        this.currentStats = {
            vitality: 1,
            movement: 1,
            strength: 1,
        }
    }

    move(cardinal, game) {
        switch(cardinal) {
            case 'NW':
                game.moveCharacter(this.name, this.x - 1, this.y - 1)
            break
            case 'N':
                game.moveCharacter(this.name, this.x, this.y - 1)
            break
            case 'NE':
                game.moveCharacter(this.name, this.x + 1, this.y - 1)
            break
            case 'E': 
                game.moveCharacter(this.name, this.x + 1, this.y)
            break
            case 'W': 
                game.moveCharacter(this.name, this.x - 1, this.y)
            break
            case 'SW':
                game.moveCharacter(this.name, this.x - 1, this.y + 1)
            break
            case 'S':
                game.moveCharacter(this.name, this.x, this.y + 1)
            break
            case 'SE':
                game.moveCharacter(this.name, this.x + 1, this.y + 1)
            break
            default:
            break
        }
    }
}

export const generateCharacters = () => {
    const John = new Character('John', 3, 1, 'cyan')
    const Kevin = new Character('Kevin', 4, 1, 'cornflowerblue')
    const Marcus = new Character('Marcus', 4, 8, 'red')
    const Nick = new Character('Nick', 3, 8, 'maroon')
    Nick.direction = 'up'
    Marcus.direction = 'up'
    return [John, Kevin, Marcus, Nick]
}