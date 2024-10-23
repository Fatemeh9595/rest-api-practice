import {useState} from "react";
import "./Home.css"
import Button from 'react-bootstrap/Button';



function Home() {

    const [data , setData] = useState()

    const buttonHandler = () => {
        var xhr = new XMLHttpRequest();
        var requestUrl = "https://api.restful-api.dev/objects";
        xhr.open("GET", requestUrl, true); 
        xhr.onload = function(){
            let x = xhr.responseText;
            setData(x);
            console.log(x);
            
            // Handle data
        };
        xhr.send();
        }


    return(
        <div>
            <div className="border border-success m-4 box">
                   <p className="fw-bold m-4">The result :</p> 
                   <div className="m-4">
                      {data}
                   </div>
            </div>
            <Button type="button" onClick={buttonHandler} className="m-4" variant="primary">Primary</Button>{' '}
        </div>
    )
}


export default Home