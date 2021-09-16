import React from "react";
import styles from "./SocialMediaShare.module.css";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

function SocialMediaShare() {
  const shareUrl = "www.google.com";
  return (
    <div className={styles.shareContainer}>
      <TwitterShareButton
        url={shareUrl}
        title={"Easy Cocktail Recipes!"}
        hashtags={["Cocktails", "CocktailRecipes"]}
      >
        <TwitterIcon size={50} round={true} />
      </TwitterShareButton>

      <WhatsappShareButton url={shareUrl} title={"Cocktail Recipes"}>
        <WhatsappIcon size={50} round={true} />
      </WhatsappShareButton>

      <FacebookShareButton url={shareUrl} quote={"Cocktail Recipes"}>
        <FacebookIcon size={50} round={true} />
      </FacebookShareButton>
      <EmailShareButton
        subject={"Cocktail Recipes"}
        body={"Check out this recipe! "}
        url={shareUrl}
      >
        <EmailIcon size={50} round={true} />
      </EmailShareButton>
    </div>
  );
}

export default SocialMediaShare;
