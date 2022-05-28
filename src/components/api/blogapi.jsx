import React, { createContext, useState } from 'react'
export const sai=createContext()
const Blogapi = (props) => {

    const [data,setData]=useState([
    
  
{
  "Title" : " Jug Jug Jeeyo trailer launch: Varun Dhawan silences journalist who questions Kiara Advani why she isn't married with this SAVAGE reply",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/Varun_Dhawan_Schools_Journalist_For_Kiara_Advani_At_Jug_jugg_Jeeyo_Trailer_Launch.jpg?impolicy=Medium_Widthonly&w=400",
  "BlogContent"   : "The Kiara Advani and Varun Dhawan starrer"
},
{
  "Title" : " Tiger Shroff, Nawazuddin Siddiqui and Tara Sutaria starrer Heropanti 2 to begin streaming on Amazon Prime Video on May 27, 2022",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://media2.bollywoodhungama.in/wp-content/uploads/2022/05/Tiger-Shroff-Nawazuddin-Siddiqui-and-Tara-Sutaria-starrer-Heropanti-to-begin-streaming-on-Amazon-Prime-Video-on-May-27-2022-1-600x450.jpg",
  "BlogContent"   : "Tiger Shroff, Nawazuddin Siddiqui and Tara Sutaria starrer Heropanti 2 to begin streaming on Amazon Prime Video on May 27, 2022"
},
{
  "Title" : " SCOOP: After Venkatesh and Pooja Hegde, Salman Khan gets Jagapathi Babu on board for Kabhi Eid Kabhi Diwali",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/05/SCOOP-After-Venkatesh-and-Pooja-Hegde-Salman-Khan-gets-Jagapathi-Babu-on-board-for-Kabhi-Eid-Kabhi-Diwali-346x260.jpg",
  "BlogContent"   : "jagapathi babu acts with salman khan for his new film"
},


    ])
  return (
    <div>
      <sai.Provider value={[data,setData]}>
        {props.children }
      </sai.Provider>
    </div>
  )
}

export default Blogapi;