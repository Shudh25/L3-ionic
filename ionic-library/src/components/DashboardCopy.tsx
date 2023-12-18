import React, { useState, useEffect } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   fetch("http://10.0.50.119:8080/listBooks")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBooks(data);
  //     })
  //     .catch((error) => console.error("Error fetching books:", error));
  // }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div id="large-th">
      <div className="dashboard-container">
        <h1> Book Inventory</h1>
        <br />
        {/* SEARCH BAR */}
        <div style={{ marginBottom: 24 }}>
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            className="search-input"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              console.log(typeof e.target.value);
            }}
          />
        </div>
        <div className="choose">
          <a href="#list-th">
            <i className="fa fa-th-list" aria-hidden="true" />
          </a>
          <a href="#large-th">
            <i className="fa fa-th-large" aria-hidden="true" />
          </a>
        </div>
        <div id="list-th">
          {Array.isArray(books) ? (
            books
              .filter((book) => {
                if (searchTerm === "") {
                  return book;
                } else if (
                  book.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return book;
                } else if (book.isbn.toString().includes(searchTerm)) {
                  return book;
                }
              })
              .map((book) => (
                <div key={book.isbn} className="book read">
                  <div className="cover">
                    <img src={"../bookImg/" + book.isbn + ".jpg"} alt="Book"/>
                  </div>
                  <div className="description" style={{color: '#575757'}}>
                    <p className="title">Title: {book.title}</p>
                    <p className="author" style={{ marginTop: 0 }}>
                      ISBN: {book.isbn}
                    </p>
                  </div>
                </div>
              ))
          ) : (
            <p>No books available</p>
          )}
        </div>
      </div>
      {/* <h1>************************************</h1> */}
    </div>
  );
}
