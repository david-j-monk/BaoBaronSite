import React, { Component } from 'react'
import InstagramEmbed from "react-instagram-embed";

export class Instapost extends Component {
  render() {
    return (
      <div>
        <InstagramEmbed
          url={process.env.REACT_APP_INSTA_URL}
          clientAccessToken={process.env.REACT_APP_INSTA_KEY}
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    )
  }
}

export default Instapost
