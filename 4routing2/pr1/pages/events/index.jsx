import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const EventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();
  const onSearchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <EventsSearch onSearch={onSearchHandler} />
      <EventList items={events} />
    </div>
  );
};

export default EventsPage;
