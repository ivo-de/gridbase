export const numToAlpha = (num) => {
    let letters = ''
    while (num >= 0) {
        letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26] + letters
        num = Math.floor(num / 26) - 1
    }
    return letters
}

export const convertX = (num) => num + 1

export const convertY = numToAlpha

export const isEmptyTile = (tile) => tile === null

export const isCharacter = (tile) => ( tile && tile !== -1 && tile.name )