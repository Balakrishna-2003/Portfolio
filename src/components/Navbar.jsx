import react  from 'react';

function Navbar() {
    function showSideBar(){
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('show');
    }
    return (
        <>
            <nav>
                <ul className='sidebar'>
                    <li onClick={showSideBar}><a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                    <li onClick={showSideBar}><a href='#Home'>Home</a></li>
                    <li onClick={showSideBar}><a href='#Skills'>Skills</a></li>
                    <li onClick={showSideBar}><a href='#Projects'>Projects</a></li>
                    <li onClick={showSideBar}><a href="#Contact">Contact</a></li>
                </ul>
                <ul className='mainnav'>
                    <li className='hideOnMobile'><a href='#Home'>Home</a></li>
                    <li className='hideOnMobile'><a href='#Skills'>Skills</a></li>
                    <li className='hideOnMobile'><a href='#Projects'>Projects</a></li>
                    <li className='hideOnMobile'><a href="#Contact">Contact</a></li>
                    <li className='menu-btn' onClick={showSideBar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;