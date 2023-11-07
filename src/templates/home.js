import './home.css'

function Home() {
  return (
    <div>
      <div className="home">

        {/* Trending */}
        <div className='playlist-title'>
          {/* Playlist Name */}
          <h1 className='playlist-name'>trending</h1>
          <div className='playlist'>
            {/* playlist container */}
            <div className='playlist-container'>
              <img src='https://i.ytimg.com/vi/8VEqzGViPrc/maxresdefault.jpg' alt='leo' />
              <div className='img-content-bg'>
              </div>
              <div className='img-content'>
                <span className='song-name'>Badass Ma</span>
                <span className='artist-name'>Anirudh</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;