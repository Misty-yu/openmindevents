import Hero from '@/components/home/hero';
import WhyThisForumMatters from '@/components/home/why-this-forum-matters';
import ForumOverview from '@/components/home/forum-overview';
import WhyAttend from '@/components/home/why-attend';
import WhoShouldAttend from '@/components/home/who-should-attend';
import KeyTopics from '@/components/home/key-topics';
import PastEvents from '@/components/home/past-events';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyThisForumMatters />
      <ForumOverview />
      <WhyAttend />
      <WhoShouldAttend />
      <KeyTopics />
      <PastEvents />
    </>
  );
}
