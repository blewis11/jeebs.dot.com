import React from 'react'
import { withState, withHandlers, compose} from 'recompose'

import { AboutMe } from '../AboutMe/AboutMe'

import './App.css'

const pdf = require('../../assets/Resume.pdf')

const enhance = compose(
  withState('aboutMe', 'setAboutMe', false)
)

const MainContents = (props:any) => {
  const {
    setAboutMe,
    aboutMe
  } = props

  const tree = String.raw`├──── 🙋🏾about me/
  │   │      
  │   └── 
  │   
  ├── 🎓professional experience/
  │   │
  │   ├──
  │   │
  │   ├── 
  │   │
  │   └── 
  │
  └── ✨fun/
      │
      └── 🎵boogie tunes/
          │
          ├──
          │
          └──`

  const hello = String.raw`
  __/\\\________/\\\_________________/\\\\\\_____/\\\\\\__________________        
   _\/\\\_______\/\\\________________\////\\\____\////\\\__________________       
    _\/\\\_______\/\\\___________________\/\\\_______\/\\\__________________      
     _\/\\\\\\\\\\\\\\\_____/\\\\\\\\_____\/\\\_______\/\\\________/\\\\\____     
      _\/\\\/////////\\\___/\\\/////\\\____\/\\\_______\/\\\______/\\\///\\\__    
       _\/\\\_______\/\\\__/\\\\\\\\\\\_____\/\\\_______\/\\\_____/\\\__\//\\\_   
        _\/\\\_______\/\\\_\//\\///////______\/\\\_______\/\\\____\//\\\__/\\\__  
         _\/\\\_______\/\\\__\//\\\\\\\\\\__/\\\\\\\\\__/\\\\\\\\\__\///\\\\\/___ 
          _\///________\///____\//////////__\/////////__\/////////_____\/////_____
` 

  return (
    <div className="mainContents">
        <div className="ascii">
          <pre>
          {hello}
          </pre>
        </div>
        <div className="tree">
          <pre>
            {tree}
          </pre>
          <div className="treeOverlay">
            <div className="treeFirstLevel">
              <div className="whoami">
                <pre>
                  <a><div onClick={() => setAboutMe(!aboutMe)}>whoami.txt</div></a>
                </pre>
              </div>
              <div className="linkedin">
                <pre><a target="_blank" href='https://www.linkedin.com/in/bejal-lewis'>linkedin.pdf</a></pre>
              </div>
              <div className="cv">
                <pre><a href={pdf} target="_blank">cv.pdf</a></pre>
              </div>
              <div className="github">
                <pre><a target="_blank" href='https://github.com/blewis11'>github.ppt</a></pre>
              </div>
            </div>
            <div className="treeSecondLevel">
              <div className="soundcloud">
                <pre><a href="https://soundcloud.com/bejal" target="_blank">soundcloud.mp3</a></pre>
              </div>
              <div className="spotify">
                <pre><a target="_blank" href="https://open.spotify.com/user/bejallewis?si=UdJpJ_aeTJqpd6YsArcUbQ">spotify.mp3</a></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

const App = (props: any) => {
  const {
    aboutMe,
  } = props
 
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {
         aboutMe 
         ? <AboutMe {...props}/>
         : <MainContents {...props}/>
      }
    </div>
  )
}

export default enhance(App)
