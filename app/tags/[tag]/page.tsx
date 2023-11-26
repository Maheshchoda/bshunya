import { Suspense } from "react";
import TagSkeleton from "./TagSkeleton";
import Tags from "./Tags";
import { notFound } from "next/navigation";

interface Props {
  params: { tag: string };
}

export const generateStaticParams = async () => {
  const TagList = ["haircare", "skincare", "eatright", "recipes"];
  return TagList;
};

export async function generateMetadata({ params: { tag } }: Props) {
  const title = "Wellness Guides: Haircare to Healthy Eating";
  const description =
    "Navigate through our wellness guides for expert tips on haircare, skincare, nutritious recipes, and healthy eating habits. Start your journey to holistic health with Bshunya.";
  return {
    title: title,
    description: description,
    category: "Hair Care, Skin Care, Eat Right, Healthy Nutritious Recipes",
    alternates: {
      canonical: `/tags/${tag}`,
    },
    openGraph: {
      title: title,
      description: description,
      locale: "en_US",
      url: `/tags/${tag}`,
      type: "website",
      siteName: process.env.DOMAIN,
    },
  };
}

function getTitleAndCaption(tag: string) {
  let tagPageTitle = "";
  let tagPageCaption = "";
  if (tag === "haircare") {
    tagPageTitle = "Hair Care";
    tagPageCaption =
      "Explore expert tips and natural remedies to revitalize your hair's health and shine.";
  } else if (tag === "skincare") {
    tagPageTitle = "Skin Care";
    tagPageCaption = "Discover Purity and Balance for Your Skin'sBliss";
  } else if (tag === "eatright") {
    tagPageTitle = "Healthy Bites";
    tagPageCaption = "Eat Smart, Live Strong: Your Diet, Your Wellness";
  } else if (tag === "recipes") {
    tagPageTitle = "Yummy Healthful Treats";
    tagPageCaption = "Where Good Taste and Good Health Unite.";
  } else {
    return notFound();
  }

  return { tagPageTitle, tagPageCaption };
}

const TagPage = async ({ params: { tag } }: Props) => {
  const { tagPageTitle, tagPageCaption } = getTitleAndCaption(tag);
  return (
    <div className="container mx-auto max-w-screen-lg my-24 sm:my-32">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center font-bold  text-gray-800">
        {tagPageTitle}
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-sans text-center font-medium my-10 text-gray-600">
        {tagPageCaption}
      </h2>
      <Suspense fallback={<TagSkeleton />}>
        <Tags tag={tag} />
      </Suspense>
    </div>
  );
};

export default TagPage;
