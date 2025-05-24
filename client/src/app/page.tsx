import Navbar from "@/components/Navbar";
import Landing from "./(nondashboard)/landing/page";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Landing />
      </main>
    </div>
  );
}
