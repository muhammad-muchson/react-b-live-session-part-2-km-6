import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css'
import axios from 'axios';

function App() {
	const [ data, setData ] = useState([]);

	const fetchData = async () => {
		//logic dari fetchin data, pilih salah satu antara get, post, delete
		const response = await axios.get('https://660faaa8356b87a55c51fa80.mockapi.io/users');
		setData(response.data);
		console.log('function di response', data);
	};

	useEffect(() => {
		//logic pemanggilan API digunakan
		// console.log('use Effect pertama');
		fetchData();
	}, []); // [] supaya hanya bekerja saat halaman pertama kali di reload
	console.log(data);
	return (
		<div>
			<h1 className="text-3xl">Fetch Data with Axios</h1>
			{data.map((user) => {
				return (
					<div>
						<p>{user.name}</p>
						<p>{user.age}</p>
						<img src={user.image} className="mb-5" />
					</div>
				);
			})}
		</div>
	);
}

export default App;
