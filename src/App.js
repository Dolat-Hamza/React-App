import logo from './logo.svg';
import './App.css';
import './index.css';
function App({ name, age }) {
	return (
		<div>
			<p className = "p">
				Hello World From <strong> {name}</strong>
			</p>
			<h1 className = "heading"> This is me practicing on the panacloud training</h1>
			<ol className = "order">
				<li className="list" >Hello World</li>
				<li className="list">Hello World</li>
        <li className="list">Hello World</li>
        <li className="list">Hello World</li>
        <li className="list">Hello World</li>
        <li className="list">Hello World</li>
        <li className="list">Hello World</li>
        </ol>
        <h1 className = "heading"> My Age is {age} </h1>
        <h2 className = "heading"> The sum of 20+2.5 is {20+2.5}</h2>
		
		</div>
	);
}

export default App;
