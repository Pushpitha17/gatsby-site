import React from "react"
import { useQuery } from "react-query"

const API_KEY = "AIzaSyDZK00lowQV_ar2FQ6W2UcrwOWEwaU4ruk"
const Channel_Id = "UCC5NPVVnatGWNSZq36e-EZQ"

const fetchdata = async () => {
  const fetchPlaylistId = await (
    await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${Channel_Id}&key=${API_KEY}`
    )
  ).json()

  const playlistId =
    fetchPlaylistId.items[0].contentDetails.relatedPlaylists.uploads

  const fetchUploads = await (
    await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${API_KEY}`
    )
  ).json()

  const thumbnails = fetchUploads.items.map(item => {
    return [
      item.snippet.thumbnails.standard.url,
      item.snippet.resourceId.videoId,
    ]
  })
  // console.log(fetchUploads.items)
  return thumbnails
}

const Music = props => {
  const { data, status } = useQuery("youtube", fetchdata)

  console.log(data, status)
  return (
    <div>
      music page
      {data
        ? data.map((item, index) => (
            <div
              style={{ height: "400px", width: "500px", margin: "3em" }}
              key={index}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${item[1]}`}
                srcDoc={`<style>
          *{padding:0;margin:0;overflow:hidden}
          html,body{height:100%}
          img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
          span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
          </style>
          <a href=https://www.youtube.com/embed/${item[1]}?autoplay=1>
          <img src=${item[0]} alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'>
          <span>▶</span>
          </a>`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))
        : data}
    </div>
  )
}

export default Music

//GET https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUC5NPVVnatGWNSZq36e-EZQ&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

{
  /* <iframe width="1536" height="754" src="https://www.youtube.com/embed/CQmLEa976IU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
