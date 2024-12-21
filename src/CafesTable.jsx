import React from "react";
import { useState, useEffect } from "react";

const CafesTable = () => {
  const [cafes, setCafes] = useState();

  // , {
  //   headers:{
  //     accept: 'application/json',
  //     'User-agent': 'learning app',
  //   }}

  // const jsonFileReader = async path => {
  //   return new Promise((resolve, reject) => {

  //       const request = new XMLHttpRequest();
  //       request.open('GET', path, true);
  //       request.responseType = 'blob';

  //       request.onload = () => {
  //         const reader = new FileReader();

  //         reader.onload = e => resolve(e.target.result);
  //         reader.onerror = err => reject(err);
  //         reader.readAsDataURL(request.response);
  //       };

  //       request.send();
  //   });
  // }

  // const returnJsonData = async (url) => {
  //   const jsonData = await jsonFileReader(url);
  //   console.log('Here is your JSON data: => ', jsonData);
  //   return jsonData;
  // };

  useEffect(() => {
    // console.log(returnJsonData('./file.json'));
    // fetch("__fixtures__/cafes.js", {
    //   method: "GET",
    //   headers: {
    //     // update with your user-agent
    //     "User-Agent":
    //       "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
    //     Accept: "application/json; charset=UTF-8",
    //   }})
    // fetch("http://localhost:8070/__fixtures__/cafes.js")
    // fetch("/cafes.js")
    fetch("cafes.js")
      .then((response) => {
        if (response.ok) {
          console.log('************************************************************');
          console.log('ok');
          // console.log(response);
          console.log(response.json());
          
          // const receivedResponse = response.text();
          // const receivedResponse = JSON.parse(response)
          // console.log(receivedResponse);
          // receivedResponse.lastIndexOf('}');
          // console.log(receivedResponse.lastIndexOf('}'));

          // return response;
          // return JSON.parse(JSON.stringify(response));
          // return JSON.parse(response);
          // return JSON.stringify(response);
          return response.json();
          // return response.text();
          // return JSON.parse(response);
          
        }
        // throw new Error('Something went wrong');
        // return Promise.reject(response);
      })
      // .then((response) => response.json())
      // .then((receivedCafes) => console.log(receivedCafes))
      // .then((receivedCafes) => console.log(receivedCafes.cafes))
      // .then((data) => setCafes(data.cafes))
      // .catch((error) => {
      //   console.log(error);
      //   console.log(11);
      // })
  }, []);

  return (
    <>
    </>
  );
    // <div id="container" className="container m-3">
    //   <div className="cafesTable">
    //     <div className="controls">
    //       <select defaultValue={'All'} name="subway" id="subway">
    //         <option value="All">Все</option>
    //         <option value="Московская">Московская</option>
    //         <option value="Арбат">Арбат</option>
    //         <option value="Парк Культуры">Парк Культуры</option>
    //         <option value="Красная Площадь">Красная Площадь</option>
    //         <option value="Театральная">Театральная</option>
    //       </select>
    //     </div>
    //     <ul className="cardsList">
    //       <li className="card">
    //         {/* <img src="https://via.placeholder.com/150" alt="" /> */}
    //         <h2>Name</h2>
    //         <p>decs</p>
    //         <p>Address</p>
    //         <p>Subway: Arbat</p>
    //         <p>8:00 - 20:00</p>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
};

export default CafesTable;