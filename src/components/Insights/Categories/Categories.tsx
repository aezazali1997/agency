import React, { useEffect, useState } from "react";
import { Title } from "../../shared/title/title";
import axios from "axios";
/* import styles */
import { styles } from "./Categories.style";
import { Pagination } from "../../shared/Pagination/Pagination";
import { IPost } from "../../../Interfaces/post.interface";
import { Observable } from "rxjs";

/* import styles */
export const Categories = () => {
	/* useState hooks */
	const [posts, setPosts] = useState<IPost[]>([]);
	const [isloading, setIsLoading] = useState(false);
	const [currentPage, setcurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(9);
	const [offset, setOffset] = useState(0);
	/* useState hooks end */

	const CLIENT_ID = `BuForLzp5QHV2dsM7l8gStJzGUinOMABLmXL_3SQmzA`;
	const API = `https://api.unsplash.com/photos/?client_id=${CLIENT_ID}`;

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
	const paginate = (Num: number) => {
		setcurrentPage(Num);
	};

	const pageCount = Math.ceil(posts.length / postPerPage);
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
			{
				<Pagination
					posts={posts}
					isLoading={isloading}
					count={pageCount}
					postPerPage={postPerPage}
					setOffset={setOffset}
					currentPage={currentPage}
					offset={offset}
				/>
			}
		</div>
	);
};
