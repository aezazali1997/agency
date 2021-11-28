import React, { FC, } from "react";
import ReactPaginate from "react-paginate";
import { styles } from "./Pagination.style";
import "./pagination.css";
import { IPost } from "../../../Interfaces/post.interface";
import { event } from "../../../types/selectEvent.type";
type Props = {
  posts: IPost[];
  isLoading: boolean;
  count: number;
  postPerPage: number;
  currentPage: number;
  offset: number;
  setOffset: (val: number) => void;
};

export const Pagination: FC<Props> = ({
  count,
  currentPage,
  isLoading,
  offset,
  postPerPage,
  posts,
  setOffset,
  children,
}) => {
  const classes = styles();

  const handlePageClick = (e: event): void => {
    const selectedPage = e.selected;
    const offset = selectedPage * postPerPage;
    currentPage = selectedPage;
    setOffset(offset);
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className={classes.imageContainer}>
        {posts.map((post: IPost,index:number) => {
          return <img className={classes.imager} key={index} src={post.urls.full} alt={post.alt_description} />})}
        <ReactPaginate
          previousLabel="prev"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          pageCount={count}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    );
  }
};
