import ExploreBy from "@/components/ui/ExploreBy";
import Hero from "../components/ui/Hero";
import TrendingStories from "@/components/ui/TrendingStories";
import FeaturedTopics from "@/components/ui/FeaturedTopics";

export default function Home() {
  return (
    <main className=" mx-auto max-w-screen-lg">
      <Hero />
      <ExploreBy />
      <TrendingStories />
      <FeaturedTopics />
    </main>
  );
}
