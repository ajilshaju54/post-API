
import React, { useEffect, useState } from 'react';



function App() {
const[posts,setPosts]=useState([]);

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => setPosts(posts.splice(0,100)))
   
},[])

 


  return (
   <div className='text-center'>
    <h1 className='bg-primary text-white'> Fetch API Data</h1>
    {
      posts.map((post)=>
        <div key={post.id} className='bg-dark'>
       <h1 className='text-info'>{post.title}</h1>
       <p className='text-white'>{post.body}</p>
       </div>
      )
    }
   </div>

  );
}

export default App;
