import React, { Component } from 'react'
import InstagramEmbed from "react-instagram-embed";

export class Instapost extends Component {
  render() {
    var postURL = 'https://www.instagram.com/p/'+ this.props.postURL
    return (
      <div>
        <InstagramEmbed
          url={postURL}
          clientAccessToken={process.env.REACT_APP_INSTA_KEY}
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />
      </div>
    )
  }
}

export default Instapost
