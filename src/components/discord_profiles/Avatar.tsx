import {DiscordUser} from "./types";

interface Props {
  userId: DiscordUser["id"];
  avatarHash: DiscordUser["avatar"];
  globalName: DiscordUser["global_name"];
}

function Avatar({userId, avatarHash, globalName}: Props) {
  const avatarUrl = avatarHash !== null
    ? `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.webp?size=80`
    : `https://cdn.discordapp.com/embed/avatars/${Number(BigInt(userId) >> BigInt(22)) % 6}.png`;

  return (
    <img
      src={avatarUrl}
      className="discord-profile__avatar-image"
      alt={`${globalName}'s avatar`}
      draggable={false}
    />
  );
}

export default Avatar;