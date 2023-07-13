import {DiscordUser} from "./types";

interface Props {
  userId: DiscordUser["id"];
  avatarHash: DiscordUser["avatar"];
  globalName: DiscordUser["global_name"];
}

function Avatar({userId, avatarHash, globalName}: Props) {
  const avatarUrl = avatarHash !== null
    ? `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.webp?size=80`
    : null;

  // todo: no avatar
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