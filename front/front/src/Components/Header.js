import './comps.css'
function Header(){
    return(
        <div className='navbar'>
                <a className='navitem' id='logo' href='#mekk'>MeKK</a>
                <a className='navitem' href='#home'>Home</a>
                <a className='navitem' href='#about'>About</a>
                <a className='navitem' href='#skills'>SKills</a>
                <a className='navitem' href='#education'>Education</a>
                <a className='navitem' href='#contact'>Contact Me</a>
        </div>
    )
}

export default Header;