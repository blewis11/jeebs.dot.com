import React from 'react';
import './App.css';

const App: React.FC = () => {

  var hello = String.raw`
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
    <div className="App">
      <header className="App-header">

      </header>

      <div className="ascii">
        <pre>
         {hello}
        </pre>
      </div>
      <div className="welcomeText">
        I'm Bejal, nice to meet you :)
      </div>
      <div className="mainContents">
        <div className="tree">
          <pre>
            {`├── css/
  │   ├── bootstrap.css
  │   ├── bootstrap.min.css
  │   ├── bootstrap-theme.css
  │   └── bootstrap-theme.min.css
  ├── js/
  │   ├── bootstrap.js
  │   └── bootstrap.min.js
  └── fonts/
      ├── glyphicons-halflings-regular.eot
      ├── glyphicons-halflings-regular.svg
      ├── glyphicons-halflings-regular.ttf
      └── glyphicons-halflings-regular.woff`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
