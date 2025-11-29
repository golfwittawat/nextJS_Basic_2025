export default function ServerComponent() {
    const items = ['1', '2', '3', '4', '5']
    return (
        <ul>
            {items.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}