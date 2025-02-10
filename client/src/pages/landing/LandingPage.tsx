import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="max-w-6xl mx-auto h-screen flex flex-col">
      <div className="p-6 flex items-center gap-4">
        <img src="/mascot.svg" alt="logo" className="size-12" />
        <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
          Lingo
        </h1>
      </div>
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <img src="/mascot.svg" alt="logo" className="size-32" />
          <div className="flex flex-col max-w-sm items-center ">
            <h2 className="text-3xl font-extrabold text-zinc-700 mb-10 text-center">
              The free, fun, and effective way to learn a language!
            </h2>
            <div className="space-y-3 w-[80%]">
              <Button asChild className="w-full" variant="secondary">
                <Link to="/register">Start</Link>
              </Button>
              <Button asChild className="w-full text-sky-500">
                <Link to="/login">I already have an account</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
