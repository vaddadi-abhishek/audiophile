import './musicplayer.css';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { BiShuffle,BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { MdTune } from 'react-icons/md';
function MusicPlayer() {
    return (
        <div>
            <div className="music-player-bg">
            </div>
            <div className='current-music'>
                {/* image of current playing music */}
                <div className='current-music-img'>
                    <img src='https://i.scdn.co/image/ab67616d0000b27335927e8c4a4dfb13b844f7f6' />
                </div>
                {/* details of current playing music */}
                <div className='current-music-info'>
                    <span className='song-name'> I'm Scared </span>
                    <span className='artist-name'> Anirudh </span>
                </div>
                {/* music control buttons */}
                <div className='control-btns-wrapper'>
                    <ul className='control-btns-btns'>
                        <li> <a href='#'> <BiShuffle/> </a> </li>
                        <li> <a href='#'> <BiSkipPrevious/> </a> </li>
                        <li> <a href='#'> <BsFillPlayCircleFill/> </a> </li>
                        <li> <a href='#'> <BiSkipNext/> </a> </li>
                        <li> <a href='#'> <MdTune/> </a> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer;