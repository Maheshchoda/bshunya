import {
  ExploreBy,
  ExploreSkeleton,
  FeaturedSkeleton,
  FeaturedTopics,
  Hero,
  HeroSkeleton,
  OurTopPicks,
  OurTopPicksSkeleton,
  TrendingSkeleton,
  TrendingStories,
} from "@/components/ui";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-lg px-4 lg:px-0">
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<ExploreSkeleton />}>
        <ExploreBy />
      </Suspense>
      <Suspense fallback={<TrendingSkeleton />}>
        <TrendingStories />
      </Suspense>
      <Suspense fallback={<FeaturedSkeleton />}>
        <FeaturedTopics />
      </Suspense>
      <Suspense fallback={<OurTopPicksSkeleton />}>
        <OurTopPicks />
      </Suspense>
    </main>
  );
}
