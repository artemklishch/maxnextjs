import Head from "next/head";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";

const EventsPage = (props) => {
  const router = useRouter();
  const onSearchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  if (props.areGetEventsFailed) {
    return <p>Failed to load data</p>;
  }
  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of greate events, that allow you to evolve"
        />
      </Head>
      <EventsSearch onSearch={onSearchHandler} />
      <EventList items={props.events} />
    </Fragment>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents,
    },
    revalidate: 1800,
  };
}
