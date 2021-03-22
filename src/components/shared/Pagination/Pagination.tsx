import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { styles } from "./Pagination.style";
import "./pagination.css";
import { post } from "../../../Interfaces/post.interface";

/* global variable */
/*  */
type Props = {
	posts: post;
	isLoading: boolean;
	count: number;
	postPerPage: number;
	currentPage: number;
	offset: number;
	setOffset: (val: number) => void;
};

type event = {
	selected: number;
};

/* import styles */
/* import styles */

export const Pagination = ({
	posts,
	isLoading,
	count,
	postPerPage,
	currentPage,
	setOffset,
	offset,
}: Props) => {
	const classes = styles();
	let data;
	const loadData = () => {
		data = posts;
	};

	useEffect(() => {
		loadData();
	}, [data]);

	const handlePageClick = (e: event): void => {
		const selectedPage = e.selected;
		const offset = selectedPage * postPerPage;
		currentPage = selectedPage;
		setOffset(offset);
	};

	if (!isLoading) {
		return <h1>Loading</h1>;
	}
	return (
		<div className={classes.imageContainer}>
			<ReactPaginate
				previousLabel={"prev"}
				nextLabel={"next"}
				breakLabel={"..."}
				breakClassName={"break-me"}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={handlePageClick}
				pageCount={count}
				containerClassName={"pagination"}
				activeClassName={"active"}
			/>
		</div>
	);
};
