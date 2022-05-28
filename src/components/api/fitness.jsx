import React, { createContext, useState } from "react";
export const fitness = createContext();
const Fitnessapi = (props) => {
  const [dataFit, setDataFit] = useState([
   {
            "source": {
            "id": null,
            "name": "New York Post"
            },
            "author": "The Sun",
            "title": "Woman's life is saved after she spotted something unusual in mirror - New York Post ",
            "description": "A woman has recalled the moment she spotted something unusual in the mirror which ended up saving her life.",
            "url": "https://nypost.com/2022/05/24/womans-life-is-saved-after-she-spotted-something-unusual-in-mirror/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/05/susan-cycles-314.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2022-05-24T23:57:00Z",
            "content": "A woman has recalled the moment she spotted something unusual in the mirror which ended up saving her life. \r\nSusan Hunter-Dabson was blowdrying her hair and noticed something odd when she lifted her… [+2971 chars]"
            },
           {
            "source": {
            "id": null,
            "name": "Buzzfeed"
            },
            "author": "Liz Richardson",
            "title": "People Who Accidentally Woke Up Mid-Surgery Are Sharing What Happened, And I Truly Have No Words - BuzzFeed",
            "description": "\"I woke up during a gastric bypass surgery in 2001. I couldn't hear anything and knew my eyes were taped shut. It was the worst pain of my life — nothing has ever come close to it.\"",
            "url": "https://www.buzzfeed.com/lizmrichardson/people-who-woke-up-mid-surgery-stories",
            "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/20/19/enhanced/d7047feb97bd/original-6595-1653075859-13.jpg?crop=1250:654;0,149%26downsize=1250:*",
            "publishedAt": "2022-05-24T22:46:03Z",
            "content": "\"I didn't feel any pain, though, since my mouth was probably shot up full of Novocain. I kind of wanted to not be in that situation, so I mustered all of my strength and twitched my finger a bit. Eit… [+486 chars]"
            },
           {
            "source": {
            "id": null,
            "name": "Daily Mail"
            },
            "author": "John Ely Senior",
            "title": "One previous UK patient had monkeypox in body for 76 days - Daily Mail",
            "description": "British experts found one monkeypox patient suffered a post-sex relapse six weeks after being given the all clear, in a study of the UK's seven previous monkeypox cases.",
            "url": "https://www.dailymail.co.uk/news/article-10849249/One-previous-UK-patient-monkeypox-body-76-days.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2022/05/24/14/58222443-0-image-a-52_1653398128069.jpg",
            "publishedAt": "2022-05-24T22:30:46Z",
            "content": "Monkeypox may be able to linger in the body for 10 weeks even after the tell-tale rash has disappeared, scientists say. \r\nExperts don't believe patients can be contagious for that length of time but … [+9168 chars]"
            },
           
  ]);
  return (
    <div>
      <fitness.Provider value={[dataFit, setDataFit]}>
        {props.children}
      </fitness.Provider>
    </div>
  );
};
export default Fitnessapi;