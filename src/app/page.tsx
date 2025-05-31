import MovingIcons from "@/Components/MovingIcons";
import Dashboard from "./Dashboard/Dashboard";
import Skills from "./Skills/Skills";
import Journey from "./journey/Journey";

export default function Home() {
  return (
    <div>
      <section id="about">
        <Dashboard />
      </section>
      <section id="journey">
        <Journey />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section>
        <MovingIcons />
      </section>
    </div>
  );
}
