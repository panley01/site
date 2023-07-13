import {DiscordUser} from "./types";

interface Props {
  userId: DiscordUser["id"];
  banner: DiscordUser["banner"];
  globalName: DiscordUser["global_name"];
}

function Banner({userId, banner, globalName}: Props) {
  const maskId = `banner-mask-${userId}`;
  const bannerUrl = banner !== null
    ? `https://cdn.discordapp.com/banners/${userId}/${banner}.png?size=480`
    : null;

  // todo: no banner
  return (
    <svg className="discord-profile__banner-wrapper" viewBox="0 0 340 120">
      <mask id={maskId}>
        <rect fill="white" x="0" y="0" width="100%" height="100%"/>
        <circle fill="black" cx="58" cy="112" r="46"/>
      </mask>
      <foreignObject width="100%" height="100%" mask={`url(#${maskId})`}>
        <img
          src={bannerUrl}
          className="discord-profile__banner-image"
          alt={`${globalName}'s banner`}
          draggable={false}
        />
      </foreignObject>
    </svg>
  );
}

export default Banner;