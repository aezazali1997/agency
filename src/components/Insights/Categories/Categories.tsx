import React, { useEffect, useState } from "react";
import { Title } from "../../shared/title/title";
import axios from "axios";
/* import styles */
import { styles } from "./Categories.style";
import { Pagination } from "../../shared/Pagination/Pagination";

/* import styles */
export const Categories = () => {
	const [posts, setPosts] = useState([]);
	const [isloading, setIsLoading] = useState(false);
	const [currentPage, setcurrentPage] = useState(1);
	const [postPerPage] = useState(9);
	const [offset, setOffset] = useState(0);
	const CLIENT_ID = `BuForLzp5QHV2dsM7l8gStJzGUinOMABLmXL_3SQmzA`;
	const API = `https://api.unsplash.com/photos/?client_id=${CLIENT_ID}`;
	useEffect(() => {
		const fetchPost = async () => {
			setIsLoading(true);
			const res = await axios.get(API);
			setPosts(res.data);
		};
		setIsLoading(false);
		fetchPost();
	}, []);
	const paginate = (Num: number) => {
		setcurrentPage(Num);
	};
	const pageCount = Math.ceil(posts.length / postPerPage);
	const classes = styles();
	/* const [selected,setSelected] */

	return (
		<div className={classes.Container}>
			<Title color="grey" size={24} data="Categories" capitalize={true} />
			<ul className={classes.list}>
				<li>
					<span
						onClick={() => {
							alert();
						}}
					>
						all
					</span>
				</li>
				<li>
					<span>digital trends</span>
				</li>
				<li>
					<span>emerging technology</span>
				</li>
				<li>
					<span>consumer trends</span>
				</li>
				<li>
					<span>user experience</span>
				</li>
				<li>
					<span>digital platforms</span>
				</li>
				<li>
					<span>audience engagement</span>
				</li>
				<li className={classes.inputWraper}>
					<input
						type="text"
						className={classes.input}
						placeholder="Enter keywords"
					/>
					<input type="button" value=">" className={classes.arrowbtn} />
				</li>
			</ul>
			{/* <Pagination
			
				isLoading={isloading}
				count={pageCount}
				postPerPage={postPerPage}
				setOffset={setOffset}
				currentPage={currentPage}
				offset={offset}
			/> */}
		</div>
	);
};
