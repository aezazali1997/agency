import React, { useState, useEffect } from "react";
import { Title } from "../../shared/title/title";
import imgDot from "../../../images/dots-arrow-left-side.png";
import axios from "axios";
import { styles } from "./Categories.style";
import { Pagination } from "../../shared/Pagination/Pagination";
import { IPost } from "../../../Interfaces/post.interface";
import { Observable } from "rxjs";

export const Categories = () => {
  const CLIENT_ID = `BuForLzp5QHV2dsM7l8gStJzGUinOMABLmXL_3SQmzA`;
  const API = `https://api.unsplash.com/photos/?client_id=${CLIENT_ID}`;

  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);
  const [offset, setOffset] = useState(0);

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
    setIsLoading(false);
  }, [API]);
  const paginate = (Num: number) => {
    setcurrentPage(Num);
  };

  const pageCount = Math.ceil(posts.length / postPerPage);
  const classes = styles();

  return (
    <div className={classes.Container}>
      <Title color="grey" size={24} data="Categories" capitalize={true} />
      <img src={imgDot} className={classes.img} alt="" />
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
          isLoading={isLoading}
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
