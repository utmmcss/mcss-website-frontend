import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container py-20 md:py-32 gap-10">
      <div className="text-center space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#AEC8F1] to-[#D8DAFF] text-transparent bg-clip-text italic">
              Mathematical & Computational Sciences Society
            </span>
          </h1>
        </main>

        <p className="text-xl text-muted-foreground italic">
          University of Toronto Mississauga
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Become a member</Button>
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
