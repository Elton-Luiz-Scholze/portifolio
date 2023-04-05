import {
  SiPostgresql,
  SiTypescript,
  SiDjango,
  SiExpress,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
  FaGit,
  FaPython,
} from "react-icons/fa";
import { DiLinux } from "react-icons/di";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  { title: "Tailwind", img: SiTailwindcss },
  {
    title: "JS",
    img: FaJs,
  },
  {
    title: "React",
    img: FaReact,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Node JS",
    img: FaNode,
  },
  { title: "Express", img: SiExpress },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Python", img: FaPython },
  { title: "Django", img: SiDjango },
  { title: "SQLite", img: SiSqlite },
  { title: "Git", img: FaGit },
  { title: "Linux", img: DiLinux },
];
