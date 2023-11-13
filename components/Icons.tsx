import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineTeam,
  AiOutlineProject,
  AiOutlineSetting,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { IconType } from "react-icons";
import { HiOutlineUsers } from "react-icons/hi";
import { MdReadMore } from "react-icons/md";
import { BsBodyText } from "react-icons/bs";

function IconWrapper(Icon: IconType) {
  return ({ className }: { className?: string }) => (
    <Icon size={20} className={className} />
  );
}

export const SettingIcon = IconWrapper(AiOutlineSetting);
export const SearchIcon = IconWrapper(AiOutlineSearch);
export const UserIcon = IconWrapper(AiOutlineUser);
export const HomeIcon = IconWrapper(AiOutlineHome);
export const LogOutIcon = IconWrapper(AiOutlineLogout);
export const TeamIcon = IconWrapper(AiOutlineTeam);
export const ProjectIcon = IconWrapper(AiOutlineProject);
export const UsersIcon = IconWrapper(HiOutlineUsers);
export const AddUserIcon = IconWrapper(AiOutlineUserAdd);
export const ReadMoreIcon = IconWrapper(MdReadMore);
export const TextBodyIcon = IconWrapper(BsBodyText);
