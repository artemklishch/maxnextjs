import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

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
    <div>
      <EventsSearch onSearch={onSearchHandler} />
      <EventList items={props.events} />
    </div>
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
