import LogoDC from '../assets/img/dc-logo.png'
import Nav from './NavHeader'
export default function Header() {


    return (
        <header className='container'>

            <img src={LogoDC} alt="Logo DC Comics" className='logo-dc' />


            <Nav />


        </header>
    )
}