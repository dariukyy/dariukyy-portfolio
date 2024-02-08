import { AboutItem } from "../../data/about";
import Option from "./Option";

type OptionItemProps = {
  active: number;
  setActive: (id: number) => void;
  item: AboutItem;
};

const OptionItem = ({ item, active, setActive }: OptionItemProps) => (
  <li>
    <Option
      onClick={() => setActive(item.id)}
      active={active}
      key={item.id}
      item={item}
    >
      {item.option}
    </Option>
  </li>
);

export default OptionItem;
