import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

const HomePage = (props) => {
  if (props.areGetEventsFailed) {
    return <p>Failed to load data</p>;
  }
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of greate events, that allow you to evolve"
        />
      </Head>
      <EventList items={props.featuredEvents} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  try {
    const featuredEvents = await getFeaturedEvents();
    return {
      props: {
        featuredEvents: featuredEvents,
      },
      revalidate: 1800,
    };
  } catch (err) {
    return {
      props: {
        areGetEventsFailed: true,
      },
    };
  }
}
