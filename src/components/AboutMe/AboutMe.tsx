import React from 'react'

import './AboutMe.css'

const AboutMe = (props:any) => {
  const {
    setAboutMe
  } = props

  return (
    <div>
      <pre className="wrap">
        <div className="mainText">
          I'm glad you asked! I'm Bejal, a software developer based in Berlin. After having worked in numerous teams
          in different areas of programming, my main drive is to continue working with and learning from amazing people
          from different backgrounds. From designing and developing complex microservices to reverse engineering obfuscated code - i've worked in amazing teams
          to solve innovative challenges for the past few years.
          <br/><br/>
          I'm here to make connections and meet likeminded people. Wanna chat about tech? Collab on a rad project? I'm game.
          hit me up at <a href = "mailto: bejallewis@hotmail.com">bejallewis@hotmail.com</a> 📧
          <div className="backButton" onClick={() => setAboutMe(false)}>
            <a>{`<-`} back</a>
          </div>
        </div>
      </pre>
    </div>
  )
}

export {
  AboutMe
}
