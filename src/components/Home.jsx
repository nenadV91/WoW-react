import React from 'react';
import {WOW} from 'wowjs';

import SectionOne from './home/SectionOne';
import SectionTwo from './home/SectionTwo';
import SectionThree from './home/SectionThree';
import SectionFour from './home/SectionFour';


class Home extends React.Component {
	componentDidMount() {
		const wow = new WOW({
		  offset: 100,
		  mobile: false, 
		  live: true 
		})

		wow.init();
	}

	render() {
		return (
			<div className="home">
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
			</div>
		)
	}
}

export default Home;