"use client"
import React, { useState } from "react";
import styles from "./page.module.css";
import { useChat, Message } from "ai/react";

const buttonStyles = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

const Chat = () => {
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat();
  const API_URL = "https://exchange.gemini.com/auth";  // Update the Gemini API URL
  const API_KEY = "AIzaSyBb_somKHbyqidO-dROQTyoZfkdLS0MBtY";  // Replace with your Gemini API key
  const [textcase, setTextcase] = useState(["", ""]);
  const [lang, setLang] = useState("English");

  const generateCase = async () => {
    // Alert the user if no prompt value
    if (!input) {
      alert("Please enter a prompt.");
      return;
    }

    // Disable the generate button and enable the stop button
    setTextcase(["thinking...", ""]);

    try {
      // Fetch the response from the Gemini API
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: input,
            },
          ],
          max_tokens: 1000,
        }),
      });

      const data = await response.json();
      var resultText = data.choices[0].message.content;

      // Extract relevant information from the resultText as needed
      // ...

      setTextcase([resultText]);
    } catch (error) {
      // Handle fetch request errors
      console.error("Error:", error);
      setTextcase(["Error occurred while generating."]);
    }
  };

  const handleChangeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    setLang(selectedLanguage);
  };

  return (
    <div className={styles.chatbox}>
      {/* ... (Existing code) */}
 <div className={styles.langBox}>
        <div>
          <label for="cars">Language:</label>

          <select
            id="cars"
            className={styles.langselect}
            onChange={(e) => handleChangeLanguage(e)}
            value={lang}
          >
            <option value="English" className={styles.opp}>
              English
            </option>
            <option value="Hindi" className={styles.opp}>
              Hindi
            </option>
          </select>
        </div>
      </div>
      <div className={styles.togglebar}>
        <div className={`${styles["btn-container"]}`}>
          <label
            className={`${styles.switch} ${styles["btn-color-mode-switch"]}`}
          >
            <input
              value="1"
              id="color_mode"
              name="color_mode"
              type="checkbox"
            ></input>
            <label
              className={styles["btn-color-mode-switch-inner"]}
              data-off="Cases"
              data-on="Rights"
              htmlFor="color_mode"
            ></label>
          </label>
        </div>
      </div>
      <div className={styles.container}>
        <label className={styles.text}>
          <p>
            An AI-powered legal assistant <br></br>enhancing case preparation
            and strategy
          </p>
        </label>

      <form action="" className={styles.inputboxneo} onSubmit={handleSubmit}>
        <textarea
          className={styles.input}
          type="text"
          placeholder="Describe Your Case"
          name="promptcase"
          value={input}
          onChange={handleInputChange}
        ></textarea>
        {/* ... (Existing code) */}
        <div className={styles.poww}>
          <div>
            <button
              className={styles.btn}
              onClick={() => {
                generateCase();
              }}
            >
              Submit
            </button>
          </div>
        
            <img src="/microphone.png" alt="mic" height={40} width={40} />
         
        </div>
      </form>
      {/* ... (Existing code) */}
        <label className={styles.texta}>
          <p>Answers will appear up here</p>
        </label>

        <div className={styles.ansBox}>
          <p>
            {textcase[0] == "thinking..." ? (
              <div className={styles.fullPage}>
                <div className={styles.ldsripple}>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : (
              textcase[0]
            )}
          </p>
          <br></br>
          <p>{textcase[1]}</p>
        </div>

        <div
          className={styles.recom}
          style={{
            display:
              textcase[0] != "" && textcase[0] != "thinking..."
                ? "flex"
                : "none",
          }}
        >
          <div style={{ width: "100%", marginTop: "30px" }}>
            <div className={styles.os}>Our Suggestion</div>
          </div>
          <div className={styles.lawTemp}>
            <img src="/lawyer1.jpeg"></img>
            <div className={styles.textBox}>
              <div style={{ fontSize: "22px", fontWeight: "600" }}>
                Sr. Advocate Ramesh
              </div>
              <div style={{ display: "flex", marginTop: "7px", gap: "2px" }}>
                <img style={{ height: "25px" }} src="/star.png"></img>
                <img style={{ height: "25px" }} src="/star.png"></img>
                <img style={{ height: "25px" }} src="/star.png"></img>
                <img style={{ height: "25px" }} src="/star.png"></img>
                <img style={{ height: "25px" }} src="/halfstar.png"></img>
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <img
                  style={{ height: "20px", marginLeft: "5px" }}
                  src="/pin.png"
                ></img>
                <p>Kashmere Gate, Delhi</p>
              </div>
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  marginTop: "15px",
                }}
                onClick={() => {
                  alert("This feature is under development stage");
                }}
              >
                <img
                  style={{
                    height: "26px",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                  src="/chat.png"
                ></img>
                <p style={{ fontWeight: "600" }}>Chat with Lawyer</p>
              </div>
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  marginTop: "15px",
                }}
                onClick={() => {
                  alert("This feature is under development stage");
                }}
              >
                <img
                  style={{
                    height: "26px",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                  src="/telephone.png"
                ></img>
                <p style={{ fontWeight: "600" }}>Contact Lawyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
