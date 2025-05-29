import Dashboard from "./Dashboard/Dashboard";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";

export default function Home() {
  return (
    <div>
      <section id="about"><Dashboard /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}
