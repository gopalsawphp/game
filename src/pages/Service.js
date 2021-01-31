import React, { useEffect, useState } from 'react';
import Card from './Card';
import Sdata from './Sdata';


const Service = () => {
    const [Data,setData]=useState(Sdata);

  //  useEffect(()=>{
  //   setData(Data);
  // },[Data]);

  const readMoreTogle = (id) => {
     setData((oldData) => {
    return oldData.prototype.map((ele,index) => {
        if(index === id){
          ele.btnName='-Less More';
         // break;
           
        }
        console.log("---------------------------");
        console.log(oldData);
       return oldData;
       });
      
   });



//   const cc =  Data.forEach(data => {
//     data.btnName='-Less More';
//   });
//   setData(cc);
// return;
  }


  

       
    return(
         <React.Fragment>
         
         <div className="my-5">
            <h1 className="text-center">Our Services</h1>
         </div>
          
         <div className="container-fluid">
         <div className="row">
         <div className="col-10 mx-auto">
         <div className="row gy-4">
          {
            Data.map((element,ind) =>{
                return <Card key={ind} title={element.title} imgSrc={element.imageSrc} descp={element.discp} btnName={element.btnName} id={element.id} readMoreBtn={readMoreTogle} />
              })                  
          }
         </div>
         </div>
         </div>  

        </div>
         </React.Fragment>
    )
}

export default Service;