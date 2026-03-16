import HeaderClient from "./HeaderClient";

export default function Header({ disableNav = false }: { disableNav?: boolean }) {
  return <HeaderClient disableNav={disableNav} />;
}
