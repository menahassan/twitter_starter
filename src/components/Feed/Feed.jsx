import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed({tweets, setTweets, userProfile}) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox 
      userProfile = {userProfile}
      setTweets = {setTweets}
      tweets = {tweets}
      />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{
      tweets.map((tweet, idx) => (
        <Tweet 
        tweet= {tweet}
        key = {idx}
        />
      ))
      }</div>
    </div>
  )
}
