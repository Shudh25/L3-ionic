import React, { useState} from "react";
import "./RequestBook.css"

export default function ApproveRequest() {
  const [positionUpDown, setPositionUpDown] = useState({
    one: true,
  });

  const handleNameUpDown = (event, num, value) => {
    // console.log(event);
    // console.log(event.target.name);
    if (event.target.value) {
      setPositionUpDown((prevState) => ({
        ...prevState,
        [num]: false,
      }));
    } else {
      setPositionUpDown((prevState) => ({
        ...prevState,
        [num]: value,
      }));
    }
  };

  //   Form manipulation
  const [isbn, setIsbn] = useState("");
  const [msgResult, setMsgResult] = useState("");

  //handling change
  function handleChange(event) {
    const { value } = event.target;
    // console.log(value);
    setIsbn(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const requestBody = {
      readerId: "reader@xs.com",
      bookId: parseInt(isbn),
    };

    // console.log("formdata = " + requestBody.isbn);

    try {
      const response = await fetch(
        "http://localhost:8080/raiseRequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        setMsgResult("Request created successfully!");
        setIsbn("")
      } 
    } catch (error) {
      setMsgResult("An error occurred while processing your request.");
    }
  }

  return (
    <div className="input-form-container">
      <div className="wrap">
        <h1 className="request-title">Request Book</h1>
        <div
          onFocus={(e) => handleNameUpDown(e, "one", !positionUpDown.one)}
          onBlur={(e) => handleNameUpDown(e, "one", !positionUpDown.one)}
        >
          <label
            htmlFor="isbn"
            className={positionUpDown.one ? "form-label" : "form-label active"}
          >
            ISBN
          </label>
          <input
            id="isbn"
            type="text"
            className="cool input-field"
            name="isbn"
            value={isbn}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button
            className="submit-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div>
            {msgResult && <h2 style={{ color: "black", display: "Block" }}>{msgResult}</h2>}
        
        </div>
      </div>
    </div>
  );
}

