import Layout from "@/components/layout";
import Hero from "../components/hero";
import SectionRecipes from "@/components/sectionRecipes";
import SectionBusinessIdeas from "@/components/sectionBusinessIdeas";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SectionRecipes />
      <SectionBusinessIdeas />
    </Layout>
  );
}
