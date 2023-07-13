export interface DiscordUser {
  id: `${number}`;
  username: string;
  global_name: string;
  avatar: string | null;
  discriminator: `${number}`
  public_flags: number,
  flags: number,
  banner?: string,
  bio?: string,
  theme_colors?: [number, number]
  premium_type: 0 | 1 | 2 | 3,
}