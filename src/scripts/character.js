export class Character {
    constructor(name, x, y, color = 'red') {
        this.name = name
        this.x = x
        this.y = y
        this.color = color
        this.selected = false
        this.direction = 'down'
    }
}