import {DiscordUser} from "./types";

const badgeMap: {
  bit: number;
  fileName: string;
  order: number;
}[] = [
  {
    bit: 0,
    fileName: "staff.png",
    order: 1,
  },
  {
    bit: 1,
    fileName: "partner.png",
    order: 2,
  },
  {
    bit: 18,
    fileName: "alumni.png",
    order: 3
  },
  {
    bit: 2,
    fileName: "hse.png",
    order: 4
  },
  {
    bit: 6,
    fileName: "hs-bravery.png",
    order: 5
  },
  {
    bit: 7,
    fileName: "hs-brilliance.png",
    order: 6
  },
  {
    bit: 8,
    fileName: "hs-balance.png",
    order: 7
  },
  {
    bit: 14,
    fileName: "bh-gold.png",
    order: 8
  },
  {
    bit: 3,
    fileName: "bh.png",
    order: 9
  },
  {
    bit: 22,
    fileName: "active-dev.png",
    order: 10,
  },
  {
    bit: 17,
    fileName: "verified-bot-dev.png",
    order: 11
  },
  {
    bit: 9,
    fileName: "early-supporter.png",
    order: 12
  },
];

function Badge({fileName}: {fileName: string}) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}images/discord-badges/${fileName}`}
      className="discord-profile__badge"
      draggable={false}
      alt=""
    />
  );
}

interface Props {
  flags: DiscordUser["public_flags"];
  premiumType: DiscordUser["premium_type"];
}

function Badges({flags, premiumType}: Props) {
  const badges = badgeMap
    .filter(({bit}) => flags & (1 << Number(bit)))
    .sort((a, b) => a.order > b.order ? 1 : -1)
    .map(({fileName}) => fileName);

  return (
    <div className="discord-profile__badges">
      {badges.map((badgeFileName) => (
        <Badge fileName={badgeFileName} />
      ))}
      {premiumType > 0 && (
        <Badge fileName="nitro.png" />
      )}
    </div>
  )
}

export default Badges;