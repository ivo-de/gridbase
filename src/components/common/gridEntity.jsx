import { Entity } from './entity'

export const GridEntity = (props) => {
    let importedStyle = props.style || {}
    const style = {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        ...importedStyle
    }
    return (
        <Entity {...props} style={style} />
    )
}