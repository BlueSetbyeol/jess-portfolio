import Jess from "./assets/jess.png";
import { HERO } from "./utils/informations";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import Hero from "./components/Hero";
import SmallPresentation from "./components/SmallPresentation";
import DesktopPresentation from "./components/DesktopPresentation";

function App() {
  return (
    <>
      <main className="h-[93svh] max-w-full flex flex-col justify-center items-center gap-6 overflow-y-auto no-scrollbar">
        <section className="absolute w-screen -z-3 top-0 md:top-[20%]">
          <Hero />
        </section>
        <Card
          className="min-w-[40svw] border border-primary flex items-center"
          style={{
            animation: "5s ease-in",
          }}
        >
          <section className="flex flex-col md:flex-row md:gap-6 items-center justify-start md:pr-40">
            <img src={Jess} alt="jessica couble" className="size-35" />
            <h1 className="tracking-tight font-extrabold mb-6 leading-[0.95] text-[clamp(3rem,9vw,6.5rem)]">
              {HERO.line1}
              <br />
              {HERO.line2}
              <br />
              <span className="text-[0.92em] text-primary font-medium italic font-mono">
                {HERO.italic}
              </span>
            </h1>
          </section>
          <h2>What would you like to know ?</h2>
        </Card>
        <SmallPresentation />
        <DesktopPresentation />
      </main>
      <footer className="h-[7svh] w-full border-t border-border py-2">
        <div className="w-full px-2 flex flex-nowrap lg:justify-center gap-2 relative z-0 items-center overflow-x-auto no-scrollbar">
          {HERO.tags.map((tag) => (
            <Button
              variant="outline"
              key={tag.label}
              className="text-[0.73rem] py-[0.3rem] px-[0.85rem] rounded-3 font-sans tracking-tighter"
            >
              {tag.label}
            </Button>
          ))}
        </div>
      </footer>
    </>
  );
}

export default App;
