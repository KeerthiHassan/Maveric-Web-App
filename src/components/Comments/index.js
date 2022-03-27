import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Comment from './Comment';

const Comments = () => {
const { postId } = useParams();
console.log(postId);
const url=`http://localhost:8000/posts/${postId}/comments`
console.log(url);
const[commentArray, setcomment]=useState([]);
let arrow="<",arrow1=">";
useEffect(()=>
{
    axios.get(url)
.then(response=>
    {
        console.log(response.data)
        setcomment(response.data)
    })

},[url])

if(commentArray){
    return(    
          
        <div><div>
        {   
        commentArray.map(comment => <Comment data={comment}/>)   
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

export default Comments;