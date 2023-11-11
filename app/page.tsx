import ExploreBy from "@/components/ui/ExploreBy";
import Hero from "../components/ui/Hero";
import TrendingStories from "@/components/ui/TrendingStories";
import FeaturedTopics from "@/components/ui/FeaturedTopics";
import OurTopPicks from "@/components/ui/OurTopPicks";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-lg px-4 lg:px-0">
      <Hero />
      <ExploreBy />
      <TrendingStories />
      <FeaturedTopics />
      <OurTopPicks />
    </main>
  );
}
