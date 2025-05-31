"use client";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiRedux,
  SiFirebase,
  SiSwagger,
  SiDocker,
  SiLinux,
  SiGit,
  SiJirasoftware,
  SiPrisma,
} from "react-icons/si";
import styles from "./contact.module.scss";

const categories = [
  {
    title: "Languages",
    skills: [
      { icon: <SiJavascript />, label: "JavaScript" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <SiHtml5 />, label: "HTML" },
      { icon: <SiCss3 />, label: "CSS" },
      { icon: <SiSass />, label: "SCSS" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { icon: <SiReact />, label: "React" },
      { icon: <SiNextdotjs />, label: "Next.js" },
      { icon: <SiNodedotjs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express" },
      { icon: <SiNestjs />, label: "NestJS" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { icon: <SiMysql />, label: "MySQL" },
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <SiPrisma />, label: "Prisma" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { icon: <SiGit />, label: "Git" },
      { icon: <SiLinux />, label: "Linux" },
      { icon: <SiDocker />, label: "Docker" },
      { icon: <SiSwagger />, label: "Swagger" },
      { icon: <SiFirebase />, label: "Firebase" },
      { icon: <SiJirasoftware />, label: "JIRA" },
      { icon: <SiRedux />, label: "Redux" },
      { icon: <SiGraphql />, label: "GraphQL" },
    ],
  },
];

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>Tech Stack</h2>
      <div className={styles.skillsGrid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.skillsCategory}>
            <h3>{category.title}</h3>
            <div className={styles.skillsIcons}>
              {category.skills.map(({ icon, label }) => (
                <div key={label} className={styles.skillItem}>
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
