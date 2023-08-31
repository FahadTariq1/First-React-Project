import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","sucess");
    }
    const handleLoclick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower Case","sucess");
    }
    const handleEmailCheck=()=>{
      let allEmailsText="";
      const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
      const emails = text.match(emailPattern);
      if(emails==null)
      {
        setText('Emails not found');
      }
      else{

      for(let i=0;i<emails.length;i++)
      {
        let newText=emails[i];
        console.log(newText);
        allEmailsText += newText + "\n";
      }
      setText(allEmailsText)
      props.showAlert("Emails are shown in the text","sucess");
    }
     
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const[text,setText]=useState("");
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1 className='my-2'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value= {text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color:props.mode === 'dark'?'white':'#042743'}}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button disabled={text.length===0} className='btn-btn-primary mx-1 my-1' onClick={handleUpclick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn-btn-primary mx-1 my-1' onClick={handleLoclick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn-btn-primary mx-1 my-1' onClick={handleEmailCheck}>Check emails</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text}</p>
      <h2>Emails</h2>
    </div>
    </>
  );
}
