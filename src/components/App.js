import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }

				{
					(displayMassage === false)?(null):(<p id="para">Helllo, I've learnt to use the full-stack evalution tool.This makes me so happy</p>)
				}
				<button id="click" onClick={()=>setDisplayMassage(true)}>Click Me</button>
    		</div>
    	);
    }
}


export default App;

