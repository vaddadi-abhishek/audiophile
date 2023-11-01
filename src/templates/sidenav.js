import {TbRadar2, TbMusic} from 'react-icons/tb';
import './sidenav.css';

function Sidenav() {
    return(
        <div>
            <div className="sideNav-1">
                <ul className='nav-list'>
                    <li> <a href="#"><TbMusic /> SONGS </a> </li>
                    <li> <a href='#'><TbRadar2 /> PODCASTS </a> </li>
                </ul>
            </div>

            <div className="sideNav-2">
                <h2>Your Playlist</h2>
                <ul className='nav-list'>
                    <li> <a href="#"> Eng </a> </li>
                    <li> <a href='#'> Melodies </a> </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidenav;