import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from './Post';

const Posts= ()=> {
    const url='http://localhost:8000/api/v1/posts'
    const[postArray, setposts]=useState([]);
    let arrow="<",arrow1=">"; 
     
    useEffect(()=>
    {
        axios.get(url)
    .then(response=>
        {
            console.log(response.data)
            setposts(response.data)
        })

    },[url])

    if(postArray){
    return(    
          
        <div><div>
        {   
            postArray.map(post => <Post data={post}/>)   
        }
        <br></br></div>
        <div className='row'>
         <div className="col-lg-2"></div>
        <div className="col-lg-8 text-right ">
        <button>{arrow}</button><button>1</button><button>{arrow1}</button>  
        </div>
        <div className="col-lg-2"></div>
        </div><br></br>
        </div>    
    );
}
return(
    <div><h1>Nothing</h1></div>
)
}
export default Posts;

    
    


