import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineTeam,
  AiOutlineProject,
  AiOutlineSetting,
  AiOutlineUserAdd,
  AiOutlineSelect,
  AiOutlineFilter,
  AiOutlineSortAscending,
  AiOutlineCheckSquare,
  AiOutlineSync,
  AiOutlineEdit,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { IconType } from "react-icons";
import { HiOutlineUsers } from "react-icons/hi";
import { MdReadMore } from "react-icons/md";
import { BsBodyText } from "react-icons/bs";
import { RiArrowGoBackLine } from "react-icons/ri";

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
export const SelectIcon = IconWrapper(AiOutlineSelect);
export const FilterIcon = IconWrapper(AiOutlineFilter);
export const SortIcon = IconWrapper(AiOutlineSortAscending);
export const CheckIcon = IconWrapper(AiOutlineCheckSquare);
export const SyncIcon = IconWrapper(AiOutlineSync);
export const GoBackIcon = IconWrapper(RiArrowGoBackLine);
export const EditIcon = IconWrapper(AiOutlineEdit);
export const JoinIcon = IconWrapper(AiOutlineUsergroupAdd);
