import React from 'react';
import TopBarContainer from './components/topBar/TopBarContainer';
import Projects from './components/projects/Projects';
import data from './data.js';

// import Cards from './components/cards/Cards';
import './cssReset.css'
import './styles.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentDidMount = () => {
		this.setState({
			data: data,
		});
	};

	handlePreview = (e, url) => {
		e.preventDefault();
		console.log(url)
		window.open(`${url}`)
	}

	render(props) {
		console.log(this.state.data);
		return (
			<React.Fragment>
				<div className="container">
					<TopBarContainer />
					<div className="bodyWrap">
						<Projects handlePreview={this.handlePreview} data={this.state.data} />
					</div>
					<footer>
						<nav>
							<a href="cranders.com">Home</a>
							<a href="cranders.com">Contact</a>
						</nav>
					</footer>
				</div>
			</React.Fragment>
		);
	}
}

export default App;