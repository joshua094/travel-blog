import icon from './images/worldicon.svg'

export default function Header () {
    return (
        <header className="header">
            <img src={icon} alt="world icon" className="header-image" />
            <p>my travel journal.</p> 
        </header>
    )
}