import './App.css';
import DiscordLogo from './assets/images/DiscordLogo.png';
import MenuIcon from './assets/images/MenuIcon.png';
import DiscordBackground from './assets/images/DiscordBackground.png';

function App() {
    return (
        <div>
            <div className='top-icons'>
                <img src={DiscordLogo} alt='Discord Logo' />
                <img src={MenuIcon} alt='Menu icon' />
            </div>
            <div className='title-content'>
                <h1 className='text-title'>imagine a place...</h1>
                <p className='text-content'>
                    ...where you can belong to a school club, a gaming group, or
                    a worldwid art community. Where just you and a handful of
                    friends can spend time together. A place that makes it easy
                    to talk every day and hang out more often.{' '}
                </p>
            </div>
            <div className='buttons'>
                <div className='Download-for-mac-button'>
                    <button>Download for Mac</button>
                </div>
                <div className='Open-discord-button'>
                    <button>Open Discord in your browser</button>
                </div>
            </div>
            <div className='Discord-background-image'>
                <img src={DiscordBackground} alt='Discord background image' />
            </div>
        </div>
    );
}

export default App;
