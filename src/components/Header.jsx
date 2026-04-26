import LogoDC from '../assets/img/dc-logo-bg.png'

export default function Header() {


    return (
        <header>

            <img src={LogoDC} alt="Logo DC Comics" className='logo-dc' />


            <nav>
                <a href="">CHARACTERS</a>
                <a href="">COMICS</a>
                <a href="">MOVIES</a>
                <a href="">TV</a>
                <a href="">GAMES</a>
                <a href="">COLLECTIBLES</a>
                <a href="">VIDEOS</a>
                <a href="">FANS</a>
                <a href="">NEWS</a>
                <a href="">SHOP</a>
            </nav>

        </header>
    )
}