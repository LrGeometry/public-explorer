import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon
} from "react-share";

const MediaShare = () => (
  <div className="d-flex flex1 mt-3 justify-content-center align-items-center">
    <FacebookShareButton
      url="facebook.com"
      quote="herc"
      className="Demo__some-network__share-button"
    >
      <FacebookIcon size={25} round />
    </FacebookShareButton>

    <TwitterShareButton
      url="twitter.com"
      title="herc"
      className="Demo__some-network__share-button"
    >
      <TwitterIcon size={25} round />
    </TwitterShareButton>

    <WhatsappShareButton
      url="web.whatsapp.com"
      title="herc"
      separator=":: "
      className="Demo__some-network__share-button"
    >
      <WhatsappIcon size={25} round />
    </WhatsappShareButton>
  </div>
);

export default MediaShare;
