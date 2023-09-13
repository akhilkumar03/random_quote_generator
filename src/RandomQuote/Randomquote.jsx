import React, { useState } from "react";
import { IoReloadCircle } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import "./Randomquote.css";

const Randomquote = () => {
  let quotes = [];

  const [quote, setquote] = useState({
    text: "Difficulties increases the nearer we get to the goal",
    author: "Johnn Wolfgang von  Goethe",
  });

  const data = async () => {
    const res = await fetch("https://type.fit/api/quotes");
    quotes = await res.json();
    // console.log(quotes);
  };

  // console.log(data)

  const randomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length + 1)];
    setquote(random);
    // console.log(random)
  };

  const tweet = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${randomQuote} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  data();

  // console.log(Randomquote)

  return (
    <div>
      <div className="container">
        {quote && (
          <>
            <div className="quote">{quote.text}</div>
            <div>
              <div className="line"></div>
              <div className="bottom">
                <div className="author"> - {quote.author.split(",")[0]}</div>
                <div className="icons">
                  {
                    <IoReloadCircle
                      onClick={() => randomQuote()}
                      style={{ fontSize: "40px" }}
                    />
                  }
                  {<FaXTwitter onClick={tweet} style={{ fontSize: "40px" }} />}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Randomquote;
