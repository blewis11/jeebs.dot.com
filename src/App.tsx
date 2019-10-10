import React from 'react';
import './App.css';

const App: React.FC = () => {

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

  const tree = String.raw`├── about me/
  │   │      
  │   └── 
  │   
  ├── professional experience/
  │   │
  │   ├── 
  │   │
  │   └── 
  │
  └── etc/
      │
      └── my music/
          │
          ├──
          │
          └──`


  return (
    <div className="App">
      <header className="App-header">

      </header>

      <div className="ascii">
        <pre>
         {hello}
        </pre>
      </div>
      <div className="welcomeText">
        I'm Bejal, nice to meet you  
      </div>
      <div className="mainContents">
        <div className="tree">
          <pre>
            {tree}
          </pre>
          <div className="treeOverlay">
            <div className="treeFirstLevel">
              <div className="whoami">
                <pre>who am i?</pre>
              </div>
              <div className="linkedin">
                <pre>linkedin</pre>
              </div>
              <div className="cv">
                <pre>cv</pre>
              </div>
            </div>
            <div className="treeSecondLevel">
              <div className="soundcloud">
                <pre>soundcloud</pre>
              </div>
              <div className="spotify">
                <pre>spotify</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
