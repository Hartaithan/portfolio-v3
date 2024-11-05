import { icons } from "@/constants/icons";
import type { IconProps, Icon as IconType } from "@/models/icon";
import type { FC } from "react";

interface Props extends IconProps {
  icon: IconType;
}

const Icon: FC<Props> = (props) => {
  const { icon, ...rest } = props;
  const Item = icons[icon];
  return <Item {...rest} />;
};

export default Icon;
