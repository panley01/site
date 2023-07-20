import {ReactNode} from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function ProfileSection({ title, children }: Props) {
  return (
    <div className="discord-profile__section">
      <p className="discord-profile__section__title">{title}</p>
      <div className="discord-profile__section__content">
        {children}
      </div>
    </div>
  );
}

export default ProfileSection;