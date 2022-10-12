import React ,{useEffect, useState} from 'react'

import axios  from 'axios';
const Song = () => {
    const [news ,setNews]=useState([]);
    const URL1="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8054cbf260c34c07b069dc7f331ec4bd";



   useEffect(() => {

  const getData=async ()=>{
    try{
        var a= await axios.get(URL1);   
        console.log(a.data.articles);
        setNews(a.data.articles); 
    }
    catch(err){
        console.log(err.message);
    }
     
    }
 
getData();
        // .then(res=>{
        //     // console.log(res.data.articles)
    
        //     setNews(res.data.articles)
        // }).catch((e=>console.log(e.message)))

    }, [])
    console.log(news);




  return (

    <>

<h1 style={{textAlign:"center",
                paddingBottom:"60px"}}>Todays News</h1>
               
                {
                news.map((obj, index) =>
                   

                        <table border="2px" key={index}>
                            <thead >
                                <tr >
                                    <th className='author' style={{"paddingLeft":"30px"}}>Author</th>
                                    <th className='title' style={{"paddingLeft":"60px"}}>Title</th>
                                    <th className='content' style={{"paddingLeft":"60px"}}>News</th>
                                </tr>
                            </thead>
                            <tbody  key={index}>
                                <tr border="2px">
                                    <td className='author'>{obj.author}</td>
                                    <td className='title'>{obj.title}</td>
                                    <td className='content'>{obj.content}</td>
                                </tr>
                            </tbody>
                        </table>
                        
                )
                }
    </>
  )
}

export default Song