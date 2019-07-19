import React from "react";
import Modal from "react-bootstrap/Modal";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  EmailShareButton,
  RedditIcon,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  PinterestIcon,
  ViberIcon
} from "react-share";

const MediaShare = ({ show, handleClose, quote }) => (
  <Modal show={show} onHide={handleClose} className="container ">
    <div className=" col-lg-12 col-sm-12 mt-3 mb-3">
      <div className="col-lg-12  d-flex no-gutter no-space col-sm-12 mt-2 mb-2">
        <div className="col-sm-3">
          <FacebookShareButton
            url="facebook.com"
            quote={quote}
            className="Demo__some-network__share-button col-sm-3"
          >
            <FacebookIcon size={60} round />
          </FacebookShareButton>
        </div>

        <div className="col-sm-4">
          <TwitterShareButton
            url="twitter.com"
            title={quote}
            className="Demo__some-network__share-button col-sm-4"
          >
            <TwitterIcon size={60} round />
          </TwitterShareButton>
        </div>

        <div className="col-sm-3">
          <WhatsappShareButton
            url=" "
            // title="herc"
            title={quote}
            // separator=" :: "
            className="Demo__some-network__share-button col-sm-3"
          >
            <WhatsappIcon size={60} round />
          </WhatsappShareButton>
        </div>
      </div>

      <div className="col-lg-12  d-flex no-gutter no-space col-sm-12 mt-2 mb-2">
        <div className="col-sm-3">
          <LinkedinShareButton
            url="linkedin.com"
            quote={quote}
            className="Demo__some-network__share-button col-sm-3"
          >
            <LinkedinIcon size={60} round />
          </LinkedinShareButton>
        </div>

        <div className="col-sm-4">
          <TelegramShareButton
            url="web.telegram.org"
            title={quote}
            className="Demo__some-network__share-button col-sm-4"
          >
            <TelegramIcon size={60} round />
          </TelegramShareButton>
        </div>

        <div className="col-sm-3">
          <PinterestShareButton
            url="https://www.pinterest.com"
            title="herc"
            separator=":: "
            className="Demo__some-network__share-button col-sm-3"
          >
            <PinterestIcon size={60} round />
          </PinterestShareButton>
        </div>
      </div>

      <div className="col-lg-12  d-flex no-gutter no-space col-sm-12 mt-2 mb-2">
        <div className="col-sm-3">
          <RedditShareButton
            url="reddit.com"
            quote={quote}
            className="Demo__some-network__share-button col-sm-3"
          >
            <RedditIcon size={60} round />
          </RedditShareButton>
        </div>

        <div className="col-sm-4">
          <ViberShareButton
            url="viber.com"
            title="herc"
            className="Demo__some-network__share-button col-sm-4"
          >
            <ViberIcon size={60} round />
          </ViberShareButton>
        </div>

        <div className="col-sm-3">
          <WhatsappShareButton
            url="web.whatsapp.com"
            title="herc"
            separator=":: "
            className="Demo__some-network__share-button col-sm-3"
          >
            <WhatsappIcon size={60} round />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  </Modal>
);

export default MediaShare;

// <div className="d-flex flex1 mt-3 justify-content-center align-items-center">
