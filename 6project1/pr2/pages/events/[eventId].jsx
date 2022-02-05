import { Fragment } from "react";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components//event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetailsPage = ({ event }) => {
  if (!event) {
    return <div className="center">Loading...</div>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        title={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((ev) => ({
    params: { eventId: ev.id },
  }));
  return {
    paths: paths,
    // fallback: true,
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const {
    params: { eventId },
  } = context;
  const certainEvent = await getEventById(eventId);

  return {
    props: {
      event: certainEvent,
    },
    revalidate: 30,
  };
}

export default EventDetailsPage;
