
"use client"
import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import styles from './page.module.css';


const powrbot = () => {



    const genAI = new GoogleGenerativeAI("AIzaSyBb_somKHbyqidO-dROQTyoZfkdLS0MBtY");
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const [lang, setLang] = useState('English');
    const [textCase, setTextCase] = useState(['', '']);

    const handleChangeLanguage = (e) => {
        setLang(e.target.value);
    };

    const generateCase = async () => {
        try {
            setTextCase(['thinking...', '']);
            const prompt = document.getElementsByName('promptcase')[0].value;
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            setTextCase([text, '']);
        } catch (error) {
            console.error('Error generating case:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        generateCase();
    };

    return (
        <div className={styles.chatbox}>
            <div className={styles.langBox}>
                <div>
                    <label htmlFor="cars">Language:</label>

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
                <div className={`${styles['btn-container']}`}>
                    <label
                        className={`${styles.switch} ${styles['btn-color-mode-switch']}`}
                    >
                        <input
                            value="1"
                            id="color_mode"
                            name="color_mode"
                            type="checkbox"
                        ></input>
                        <label
                            className={styles['btn-color-mode-switch-inner']}
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
                    ></textarea>
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
                <label className={styles.texta}>
                    <p>Answers will appear up here</p>
                </label>

                <div className={styles.ansBox}>
                    <p>
                        {textCase[0] === 'thinking...' ? (
                            <div className={styles.fullPage}>
                                <div className={styles.ldsripple}>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        ) : (
                            textCase[0]
                        )}
                    </p>
                    <br></br>
                    <p>{textCase[1]}</p>
                </div>

                <div
                    className={styles.recom}
                    style={{
                        display:
                            textCase[0] !== '' && textCase[0] !== 'thinking...'
                                ? 'flex'
                                : 'none',
                    }}
                >
                    <div style={{ width: '100%', marginTop: '30px' }}>
                        <div className={styles.os}>Our Suggestion</div>
                    </div>
                    <div className={styles.lawTemp}>
                        <img src="/lawyer1.jpeg" alt="lawyer"></img>
                        <div className={styles.textBox}>
                            <div style={{ fontSize: '22px', fontWeight: '600' }}>
                                Sr. Advocate Ramesh
                            </div>
                            <div style={{ display: 'flex', marginTop: '7px', gap: '2px' }}>
                                <img style={{ height: '25px' }} src="/star.png" alt="star"></img>
                                <img style={{ height: '25px' }} src="/star.png" alt="star"></img>
                                <img style={{ height: '25px' }} src="/star.png" alt="star"></img>
                                <img style={{ height: '25px' }} src="/star.png" alt="star"></img>
                                <img
                                    style={{ height: '25px' }}
                                    src="/halfstar.png"
                                    alt="halfstar"
                                ></img>
                            </div>
                            <div style={{ display: 'flex', marginTop: '10px' }}>
                                <img
                                    style={{ height: '20px', marginLeft: '5px' }}
                                    src="/pin.png"
                                    alt="pin"
                                ></img>
                                <p>Kashmere Gate, Delhi</p>
                            </div>
                            <div
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    marginTop: '15px',
                                }}
                                onClick={() => {
                                    alert('This feature is under development stage');
                                }}
                            >
                                <img
                                    style={{
                                        height: '26px',
                                        marginLeft: '5px',
                                        marginRight: '5px',
                                    }}
                                    src="/chat.png"
                                    alt="chat"
                                ></img>
                                <p style={{ fontWeight: '600' }}>Chat with Lawyer</p>
                            </div>
                            <div
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    marginTop: '15px',
                                }}
                                onClick={() => {
                                    alert('This feature is under development stage');
                                }}
                            >
                                <img
                                    style={{
                                        height: '26px',
                                        marginLeft: '5px',
                                        marginRight: '5px',
                                    }}
                                    src="/telephone.png"
                                    alt="telephone"
                                ></img>
                                <p style={{ fontWeight: '600' }}>Contact Lawyer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default powrbot