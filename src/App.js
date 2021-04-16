import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home/Home';
import People from './components/People/People';
import Planets from './components/Planets/Planets';
import Species from './components/Species/Species';
import Starships from './components/Starships/Starships';
import Vehicles from './components/Vehicles/Vehicles';

function App() {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [species, setSpecies] = useState([]);
	const [starships, setStarships] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		//Correct but only one page
		// async function fetchPeople() {
		// 	let res = await fetch("https://swapi.dev/api/people/");
		// 	let data = await res.json();
		// 	setPeople(data.results);
		// 	setLoading(false);
		// }

		//All pages
		async function fetchPeople(url = "https://swapi.dev/api/people/", allPeople =[]) {
			let res = await fetch(url);
			let data = await res.json();
			allPeople = allPeople.concat(data.results);
			if (data.next) {
				fetchPeople(data.next, allPeople);
			}
			else {
				setPeople(allPeople);
				setLoading(false);
			}
		}

		//Correct but only one page
		// async function fetchPlanets() {
		// 	let res = await fetch("https://swapi.dev/api/planets/");
		// 	let data = await res.json();
		// 	setPlanets(data.results);
		// 	setLoading(false);
		// }

		async function fetchPlanets(url = "https://swapi.dev/api/planets/", allPlanets =[]) {
			let res = await fetch(url);
			let data = await res.json();
			allPlanets = allPlanets.concat(data.results);
			if (data.next) {
				fetchPlanets(data.next, allPlanets);
			}
			else {
				setPlanets(allPlanets);
				setLoading(false);
			}
		}

		async function fetchSpecies(url = "https://swapi.dev/api/species/", allSpecies =[]) {
			let res = await fetch(url);
			let data = await res.json();
			allSpecies = allSpecies.concat(data.results);
			if (data.next) {
				fetchSpecies(data.next, allSpecies);
			}
			else {
				setSpecies(allSpecies);
				setLoading(false);
			}
		}

		async function fetchStarships(url = "https://swapi.dev/api/starships/", allStarships =[]) {
			let res = await fetch(url);
			let data = await res.json();
			allStarships = allStarships.concat(data.results);
			if (data.next) {
				fetchStarships(data.next, allStarships);
			}
			else {
				setStarships(allStarships);
				setLoading(false);
			}
		}

		async function fetchVehicles(url = "https://swapi.dev/api/vehicles/", allVehicles =[]) {
			let res = await fetch(url);
			let data = await res.json();
			allVehicles = allVehicles.concat(data.results);
			if (data.next) {
				fetchVehicles(data.next, allVehicles);
			}
			else {
				setVehicles(allVehicles);
				setLoading(false);
			}
		}

		fetchPeople();
		fetchPlanets();
		fetchSpecies();
		fetchStarships();
		fetchVehicles();

	}, [])

	return (
		<>
			<Router>
				<Navbar />
				<Container>
					{loading ? (
						<Dimmer active inverted>
							<Loader inverted>Loading...</Loader>
						</Dimmer>
					) : (
						<Switch>
							<Route exact path='/'>
								<Home />
							</Route>
							<Route exact path='/people'>
								<People people={people} planets={planets} />
							</Route>
							<Route exact path='/planets'>
								<Planets planets={planets} />
							</Route>
							<Route exact path='/species'>
								<Species species={species} planets={planets} />
							</Route>
							<Route exact path='/starships'>
								<Starships starships={starships} />
							</Route>
							<Route exact path='/vehicles'>
								<Vehicles vehicles={vehicles} />
							</Route>
						</Switch>
					)}
				</Container>
			</Router>
		</>
	);
}

export default App;
