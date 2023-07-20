import "../../css/discord-profiles.css"
import type {DiscordUser} from "./types";
import Banner from "./Banner.tsx";
import Avatar from "./Avatar.tsx";
import Badges from "./Badges.tsx";
import ProfileSection from "./ProfileSection.tsx";

function intToRgb(integer: number): [number, number, number] {
  const red = (integer >> (8 * 2)) & 0xFF;
  const green = (integer >> 8) & 0xFF;
  const blue = integer & 0xFF;

  return [red, green, blue];
}

interface Props {
  discordUser: DiscordUser;
}

function DiscordProfile({discordUser}: Props) {
  const [primaryInt, secondaryInt] = discordUser.theme_colors ?? [0, 0];
  const [primaryRed, primaryGreen, primaryBlue] = intToRgb(primaryInt);
  const [secondaryRed, secondaryGreen, secondaryBlue] = intToRgb(secondaryInt);

  const discordMemberSinceTimestamp = Number((BigInt(discordUser.id) >> BigInt(22)) + BigInt(1420070400000));
  const discordMemberSinceDate = new Date(discordMemberSinceTimestamp);
  const discordMemberSinceDateString = discordMemberSinceDate.toLocaleDateString(
    "en-US",
    {
      year: 'numeric',
      day: 'numeric',
      month: 'short'
    }
  );

  return (
    <div
      className="discord-profile theme-light"
      style={{
        // @ts-ignore
        "--profile-gradient-primary": `rgb(${primaryRed}, ${primaryGreen}, ${primaryBlue})`,
        // @ts-ignore
        "--profile-gradient-secondary": `rgb(${secondaryRed}, ${secondaryGreen}, ${secondaryBlue})`,
      }}
    >
      <Banner userId={discordUser.id} banner={discordUser.banner} globalName={discordUser.global_name}/>
      <Avatar userId={discordUser.id} avatarHash={discordUser.avatar} globalName={discordUser.global_name}/>
      <div className="discord-profile__main">
        <Badges flags={discordUser.public_flags} premiumType={discordUser.premium_type} />
        <div className="discord-profile__content">
          <div className="discord-profile__display-name">
            {discordUser.global_name}
          </div>
          <div className="discord-profile__username">
            {discordUser.username}
          </div>
          <div className="discord-profile__divider" />
          {discordUser.bio && (
            <ProfileSection title="about me">
              <div className="discord-profile__bio">
                {discordUser.bio}
              </div>
            </ProfileSection>
          )}
          <ProfileSection title="discord member since">
            {discordMemberSinceDateString}
          </ProfileSection>
        </div>
      </div>
    </div>
  );
}

export default DiscordProfile;