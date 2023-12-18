import React, { useState, useEffect } from "react";
import "./ListBook.css";
import "./ListBookCard.css";

export default function Dashboard() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/listBooks")
            .then((response) => response.json())
            .then((data) => {
                setBooks(data);
            })
            .catch((error) => console.error("Error fetching books:", error));
    }, []);

    return (
        <div id="large-th">
            <div className="dashboard-container">
                <h1> Book Details</h1>
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
                {/* <div className="choose">
          <a href="#list-th">
            <i className="fa fa-th-list" aria-hidden="true" />
          </a>
          <a href="#large-th">
            <i className="fa fa-th-large" aria-hidden="true" />
          </a>
        </div> */}
                <div id="list-th-book-detail">
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
                                <div className="cards" key={book.isbn}>
                                    <article className="information [ card ]">
                                        {/* <span className="tag">Feature</span> */}
                                        {/* <span className="tag">{book.isbn}</span> */}
                                        <span className="tag">{book.title}</span>
                                        <h2 className="title">Never miss Readng Books</h2>
                                        {/* <p className="info-para" style={{ fontSize: '0.9rem' }}>Elemenatary tracks all the events for the day as you scheduled.</p> */}
                                        <p className="info-para" style={{ fontSize: '0.9rem' }}>By {book.authors}</p>
                                        <p className="info" style={{ fontSize: '0.9rem' }}>Publisher {book.publisher}</p>
                                        <dl className="details">
                                            <div>
                                                <dt>Reader Rating</dt>
                                                <dd>4.5</dd>
                                            </div>
                                        </dl>
                                        <button className="button">
                                            <span>Learn more</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="none">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" fill="currentColor" />
                                            </svg>
                                        </button>
                                    </article>
                                </div>


                            ))
                    ) : (
                        <p>No books available</p>
                    )}
                </div>
            </div>
        </div>
    );
}
