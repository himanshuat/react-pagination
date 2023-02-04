import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { nanoid } from "nanoid";
import User from './components/User';
import './App.css';

function App() {
	const [usersData, setUsersData] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);

	const usersPerPage = 10;
	const pagesVisited = pageNumber * usersPerPage;

	const pageCount = Math.ceil(usersData.length / usersPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	useEffect(() => {
		async function fetchUsers() {
			const res = await fetch('https://randomuser.me/api/?results=150');
			const resData = await res.json();
			setUsersData(resData.results);
			console.log(usersData);
		};
		fetchUsers();
	}, []);

	console.log(usersData);

	const users = usersData
		.slice(pagesVisited, pagesVisited + usersPerPage)
		.map(item => (
			<User key={nanoid()} {...item} />
		)
	)

	return (
		<main>
			<section>
				{users}
			</section>
			<ReactPaginate
				previousLabel={"< Previous"}
				nextLabel={"Next >"}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={"paginationBttns"}
				previousLinkClassName={"previousBttn"}
				nextLinkClassName={"nextBttn"}
				disabledClassName={"paginationDisabled"}
				activeClassName={"paginationActive"}
			/>
		</main>
	);
}

export default App;
