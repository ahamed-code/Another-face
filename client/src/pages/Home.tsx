import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoShowcase from "@/components/VideoShowcase";
import ProjectGallery from "@/components/ProjectGallery";
import Contact from "@/components/Contact";
import CursorFX from "@/components/CursorFX";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <CursorFX />
      <Navbar />
      <main>
        <Hero />
        <About />
        <VideoShowcase />
        <ProjectGallery />
        <Contact />
      </main>
      
      <footer className="py-6 text-center text-muted-foreground text-sm border-t border-white/10">
        <p>© {new Date().getFullYear()} Basheer Ahamed A. All rights reserved.</p>
      </footer>
    </div>
  );
}
