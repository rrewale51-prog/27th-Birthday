import Gallery from './Gallery'
import Countdown from './Countdown'
import MusicPlayer from './MusicPlayer'

export default function CelebrationPage(){
return(
<div className="page">
<h1>Happy Birthday 🎉</h1>
<Countdown/>
<Gallery/>
<MusicPlayer/>
</div>
)
}
