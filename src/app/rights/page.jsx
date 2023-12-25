"use client"

import React,{useState} from 'react';
import styles from './page.module.css';
import { useChat, Message } from 'ai/react';

const buttonStyles = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const Chat = () => {
  const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const API_KEY = "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";
  const [textcase,setTextcase] = useState(["",""]);
  const [lang,setLang] = useState("English")


  const generateCase = async () => {
    // Alert the user if no prompt value
    if (!promptCase) {
      alert("Please enter a prompt.");
      return;
    }
  
    // Disable the generate button and enable the stop button
   
    setTextcase(["thinking...",""])
  
    // Create a new AbortController instance
    var controller = new AbortController();
    const signal = controller.signal;
  
    try {
      // Fetch the response from the OpenAI API with the signal from AbortController
      const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: "you are a guide to the common man for the knowlege related to laws u will tell him what are his her right are in simple language according to indian government in with in 5 point max points should be in a format like [point1,point2,point3,point4...] in short basically you are a know your rights bot so the quesion is"+promptCase}],
          max_tokens: 1000,
        }),
        signal, // Pass the signal to the fetch request
      });
  
      const data = await response.json();
       var resultText = data.choices[0].message.content;
      console.log(resultText)
      // const anslist = resultText.split(' ')
      // const secList = []
      // for(let i=0;i<anslist.length;i++){
      //   if(anslist[i]=='Section'){
      //    secList.push(anslist[i]+' '+anslist[i+1]+' ')

      //   }
        
      // }
      var promptResultpt1 = ''
      var promptResultpt2 = ''
      var promptResultpt3 = ''
      var promptResultpt4 = ''
           for(let i=0;i<resultText.length;i++){
            if(resultText.charAt(i)=='1'&& resultText.charAt(i+1)=='.'){
             for(let j=i;j<5000;j++){
              if(resultText.charAt(j)=='2'&&resultText.charAt(j+1)=='.'){
                  break
             }
             else{
              promptResultpt1= promptResultpt1+resultText.charAt(j)
             }
            }
    
            }
            
            
          }
    
           for(let i=0;i<resultText.length;i++){
            if(resultText.charAt(i)=='2'&& resultText.charAt(i+1)=='.'){
             for(let j=i;j<5000;j++){
              if(resultText.charAt(j)=='3'&&resultText.charAt(j+1)=='.'){
                  break
             }
             else{
              promptResultpt2= promptResultpt2+resultText.charAt(j)
             }
            }
    
            }
            
            
    
          }

      setTextcase([promptResultpt1,promptResultpt2])
    } catch (error) {
      // Handle fetch request errors
      if (signal.aborted) {
        resultText = "Request aborted.";
      } else {
        console.error("Error:", error);
        resultText= "Error occurred while generating.";
      }
    } finally {
      // Enable the generate button and disable the stop button
      
      controller = null; // Reset the AbortController instance
    }
  };  
  const [data,setData] = useState({
    promptcase:''
  
   })

   const handleChange = (e) =>{

    const {name,value} = e.target;

    setData((prev)=>{
      return{...prev,[name]:value}
    })
    console.log(data)
  }
  const handleChangeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    setLang(selectedLanguage);
  
  };
  console.log(lang)

  const promptCase = data.promptcase;
  
  return (
    <div className={styles.chatbox}>
      <div className={styles.langBox}>
        <div>
      <label for="cars">Language:</label>

<select id="cars" className={styles.langselect} onChange={(e) => handleChangeLanguage(e)}
  value={lang}>
  <option value="English" className={styles.opp}>English</option>
  <option value="Hindi" className={styles.opp}>Hindi</option>

  
  
</select>
</div>
      </div>
      <div className={styles.togglebar}>
        <div className={`${styles['btn-container']}`}>
          <label className={`${styles.switch} ${styles['btn-color-mode-switch']}`}>
            <input value="0" id="color_mode" name="color_mode" type="checkbox"></input>
          <label className={styles['btn-color-mode-switch-inner']} data-off="Rights" data-on="Cases" htmlFor="color_mode"></label>
          </label>
        </div>
      </div>
      <div className={styles.container}>
        
        <label className={styles.text}><p>An AI-powered legal assistant <br></br>awaring you about your rights</p></label>
        <form action="" className={styles.inputboxneo} onSubmit={handleSubmit}>
          <textarea
        
            className={styles.input}
           
            type="text"
            

            placeholder='Describe Your Issue' name='promptcase' onChange={handleChange}

          ></textarea>
          <div><button className={styles.btn} onClick={()=>{generateCase()}}>Know Your Rights</button></div>
        </form>
        <label className={styles.texta}><p>Answers will appear up here</p></label>

        <div className={styles.ansBox}>
          <p>{(textcase[0]=='thinking...')?<div className={styles.fullPage}><div className={styles.ldsripple}><div></div><div></div></div></div>:textcase[0]}</p>
          <br></br>
          <p>{textcase[1]}</p>
        </div>

        
      </div>
    </div>
  );
}

export default Chat;


//"you are a guide to the common man for the knowlege related to laws u will tell him what are his her right are in simple language according to indian government in with in 5 point max points should be in a format like [point1,point2,point3,point4...] in short basically you are a know your rights bot so the quesion is"+promptCase}
//`I need to classify a law case. It involves`+promptCase+`Can you suggest the relevant IPC sections that may be imposed for this offense? please answer in 3 points and in very short and simple ${lang} language`