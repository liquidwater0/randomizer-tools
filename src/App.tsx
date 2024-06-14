import "./scss/main.scss";
import { useState } from 'react';
import Logo from './components/Logo';
import OptionButton from "./components/OptionButton";
import { DateGenerator, NumberGenerator } from "./components/Generators";

const GENERATORS = [
	{ 
		name: "Date",
		component: <DateGenerator />
	}, { 
		name: "Number",
		component: <NumberGenerator />
	}
];

function App() {
	const [selectedGenerator, setSelectedGenerator] = useState<typeof GENERATORS[0]>(GENERATORS[0]);

	return (
		<>
			<header className='header'>
				<Logo />

				<div className="generator-options">
					{GENERATORS.map(generator => (
						<OptionButton 
							key={generator.name}
							selected={selectedGenerator.name === generator.name}
							onClick={() => setSelectedGenerator(generator)}
						>
							{ generator.name }
						</OptionButton>
					))}
				</div>
			</header>

			<main className="main">
				{ selectedGenerator.component }
			</main>
		</>
	);
}

export default App;