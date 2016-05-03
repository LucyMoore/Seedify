import React from 'react'

function  change(){
	console.log('hello')
}

class App extends React.Component {
	
	render(){
		return <div>
			<select name="cars" onChange={change}>
			  <option value="volvo">Volvo</option>
			  <option value="saab">Saab</option>
			  <option value="fiat">Fiat</option>
			  <option value="audi">Audi</option>
			</select>
		</div>
	}
}

export default App