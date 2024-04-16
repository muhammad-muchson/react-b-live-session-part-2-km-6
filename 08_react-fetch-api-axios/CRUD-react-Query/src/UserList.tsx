import React from 'react';
import { useQuery } from 'react-query';

const fetchUsers = async () => {
	const response = await fetch('https://631d6133789612cd07a9ce1d.mockapi.io/users');
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};

const UserList = () => {
	const { data, status } = useQuery('users', fetchUsers);

	if (status === 'loading') return <div>Loading...</div>;
	if (status === 'error') return <div>Error fetching data</div>;

	return (
		<div>
			<h1>Users</h1>
			<ul>
				{data.map((user) => (
					<li key={user.id}>
						<strong>{user.name}</strong> - {user.email}
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
