import React, { useContext, useEffect, useState } from "react";
import { CarContext } from "../contexts/CarContext";
import CarItem from "../components/CarItem";
import PagePagination from '../components/PagePagination'

export default function CarList() {
  const  {cars}  = useContext(CarContext);

  // pagination
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9)

  // временный массив, ограничивающий количество постов
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    setTemp(cars);
    console.log(temp);
  },[])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = temp.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container container-wide">
      <div className="row mtn-30 d-flex justify-content-center">
        {currentPosts.map((item) => (
          <CarItem key={item.vin} car={cars} />
        ))}
      </div>
      <PagePagination/>
    </div>
  );
}
