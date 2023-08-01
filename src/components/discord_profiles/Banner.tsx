import {DiscordUser} from "./types";

interface Props {
  userId: DiscordUser["id"];
  banner: DiscordUser["banner"];
  globalName: DiscordUser["global_name"];
  fallbackColor: string;
}

function Banner({userId, banner, globalName, fallbackColor}: Props) {
  const maskId = `banner-mask-${userId}`;
  const bannerUrl = banner !== null
    ? `https://cdn.discordapp.com/banners/${userId}/${banner}.png?size=480`
    : null;

  return (
    <svg className="discord-profile__banner-wrapper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 120">
      <mask id={maskId}>
        <rect fill="white" x="0" y="0" width="100%" height="100%"/>
        <circle fill="black" cx="58" cy="112" r="46"/>
      </mask>
      <foreignObject width="100%" height="100%" mask={`url(#${maskId})`}>
        {bannerUrl ? (
          <img
            src={bannerUrl}
            className="discord-profile__banner-image"
            alt={`${globalName}'s banner`}
            draggable={false}
          />
        ) : (
          <div style={{backgroundColor: fallbackColor, width: '100%', height: '100%' }}/>
        )}
      </foreignObject>
    </svg>
  );
}

export default Banner;