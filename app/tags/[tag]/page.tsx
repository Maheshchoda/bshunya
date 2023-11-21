import { Suspense } from "react";
import TagSkeleton from "./TagSkeleton";
import Tags from "./Tags";

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
  }

  return { tagPageTitle, tagPageCaption };
}

const TagPage = async ({ params: { tag } }: { params: { tag: string } }) => {
  const { tagPageTitle, tagPageCaption } = getTitleAndCaption(tag);
  return (
    <div className="container mx-auto  max-w-screen-lg my-24 sm:my-32">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center font-bold  text-gray-800">
        {tagPageTitle}
      </h2>
      <h4 className="text-xl md:text-2xl lg:text-3xl font-sans text-center font-medium my-10 text-gray-600">
        {tagPageCaption}
      </h4>
      <Suspense fallback={<TagSkeleton />}>
        <Tags tag={tag} />
      </Suspense>
    </div>
  );
};

export default TagPage;
