import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Title } from "../../shared/title/title";
/* import styles */
import { styles } from "./Categories.style";
import image from "../../../images/AI1.jpg";
import { Pagination } from "../../shared/Pagination/Pagination";
import axios from "axios";
import { Observable } from "rxjs";

/* import styles */
export const Categories = () => {
	/* Client ID AND END POINTS */
	const CLIENT_ID = `BuForLzp5QHV2dsM7l8gStJzGUinOMABLmXL_3SQmzA`;
	const API = `https://api.unsplash.com/photos/?client_id=${CLIENT_ID}`;
	/* ###Client ID AND END POINTS ### */

	/* useState Hooks */
	const [posts, setPosts] = useState([]);
	const [isloading, setIsLoading] = useState(false);
	const [currentPage, setcurrentPage] = useState(1);
	const [postPerPage] = useState(9);
	const [offset, setOffset] = useState(0);
	/*### useState Hooks ###*/
	const pageCount = Math.ceil(posts.length / postPerPage);
	/* useEffect hook */
	useEffect(() => {
		const fetchPost = () => {
			setIsLoading(true);
			const observable$ = new Observable((observer: any) => {
				axios
					.get(API)
					.then((response) => {
						observer.next(response.data);
					})
					.catch((error) => {
						observer.error(error);
					});
			});
			observable$.subscribe({
				next: (data: any) => {
					setPosts(data);
				},
			});
		};
		fetchPost();
		console.log(posts);
		setIsLoading(false);
	}, []);
	/* useEffect hook end*/

	const classes = styles();

	return (
		<div className={classes.Container}>
			<Title color="grey" size={24} data="Categories" capitalize={true} />
			<ul className={classes.list}>
				<li>
					<span>all</span>
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
			<div className={classes.grid}>
				{posts.map((post, index) => {
					<div key={index} className={classes.box}>
						<Link to="" className={classes.imgLink}>
							<img src={image} className={classes.image} alt="" />
						</Link>
						<div className={classes.txtWrapper}>
							<p className={classes.date}>JUL 21, 2020</p>
							<Link to="" className={classes.link}>
								Designing Localized Experiences in Higher Education
							</Link>
						</div>
					</div>;
				})}
			</div>
			<div className={classes.pages}>
				<Pagination
					posts={posts}
					isLoading={isloading}
					count={pageCount}
					postPerPage={postPerPage}
					setOffset={setOffset}
					currentPage={currentPage}
					offset={offset}
				/>
			</div>
		</div>
	);
};
