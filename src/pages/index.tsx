import dynamic from "next/dynamic";
import { NavButton } from "@/components/pages/TopBar";

const BasePage = dynamic(() => import("@/components/pages/BasePage"));

const navButtons: ReadonlyArray<NavButton> = [
  { title: "Что доставляем?", link: "#what" },
  // { title: 'Сравнить предложение', link: '#compare' },
  { title: "О компании", link: "#about" },
  { title: "Контакты", link: "#contacts" },
];

const Home = () => {
  return <BasePage navButtons={navButtons}>HELLO</BasePage>;
};

export default Home;
