import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import page1 from "./images/img1.png";
import page2 from "./images/img2.png";
import page3 from "./images/img3.png";
import page4 from "./images/img4.png";
import page5 from "./images/img5.png";

const MyBook = () => {
  const bookRef = useRef(null);

  const nextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  return (
    <div className="book-container">
      <HTMLFlipBook
        className="book"
        ref={bookRef}
        width={window.innerWidth * 0.5}
        height={window.innerHeight * 1}
      >
        <div className="page">
          <div className="images">
          <img src={page1} alt="Page 1" />
          <img src={page2} alt="Page 2" />
          </div>
        </div>
        <div className="page">
          <div className="images">
          <img src={page3} alt="Page 3" />
          <img src={page4} alt="Page 4" />
          </div>
        </div>
        <div className="page">
          <div className="images">
          <img src={page5} alt="Page 5" />
          <img src={page1} alt="Page 6" />
          </div>
        </div>
        <div className="page">
          <div className="images">
          <img src={page2} alt="Page 7" />
          <img src={page3} alt="Page 8" />
          </div>
        </div>
        <div className="page">
          <div className="images">
          <img src={page4} alt="Page 9" />
          <img src={page5} alt="Page 10" />
          </div>
        </div>
        <div className="page">
          <div className="images">
          <img src={page1} alt="Page 11" />
          <img src={page2} alt="Page 12" />
          </div>
        </div>
      </HTMLFlipBook>

      <div className="nxt-prv-btns">
        <button className="prev-button" onClick={prevPage}>
          Prev
        </button>
        <button className="next-button" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MyBook;
