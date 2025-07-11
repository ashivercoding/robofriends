import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

function App() {
	
	const dispatch = useDispatch();

	const searchField = useSelector(state => state.searchRobots.searchField);
	const robots = useSelector(state => state.requestRobots.robots);
	const isPending = useSelector(state => state.requestRobots.isPending);

	const onSearchChange = (event) => {
		dispatch(setSearchField(event.target.value))
	}

	useEffect(() => {
		dispatch(requestRobots());
	}, [dispatch]);

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})
	return isPending ?
		<h1>Loading</h1> :
		(
			<div className="tc">
				<h1 className="f2">RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>	
		);	
	};

export default App;