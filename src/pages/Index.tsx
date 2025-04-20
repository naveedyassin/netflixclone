
import NetflixNavbar from "@/components/NetflixNavbar";
import HeroBanner from "@/components/HeroBanner";
import ContentRow from "@/components/ContentRow";
import Footer from "@/components/Footer";
import { heroContent, trendingContent, popularContent, originals, documentaries } from "@/lib/mockData";

const Index = () => {
  return (
    <div className="relative">
      <NetflixNavbar />
      
      <main className="relative min-h-screen">
        <HeroBanner 
          title={heroContent.title}
          overview={heroContent.overview}
          backdropUrl={heroContent.backdropUrl}
        />
        
        <div className="relative pb-12 -mt-16 z-10">
          <ContentRow title="Trending Now" contents={trendingContent} />
          <ContentRow title="Popular on Netflix" contents={popularContent} />
          <ContentRow title="Netflix Originals" contents={originals} />
          <ContentRow title="Documentaries" contents={documentaries} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
