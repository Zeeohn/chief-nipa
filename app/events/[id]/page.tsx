"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, Clock, Users, ArrowLeft } from "lucide-react";

const events = [
  {
    id: "1",
    title: "Annual Healthcare Conference",
    date: "July 15-17, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "International Conference Center, Abuja",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description:
      "Join healthcare professionals from around the world for three days of presentations, workshops, and networking focused on improving healthcare access globally.",
    attendees: 500,
    type: "Conference",
    agenda: [
      "Day 1: Opening Ceremony and Keynote Speeches",
      "Day 2: Breakout Sessions and Panel Discussions",
      "Day 3: Workshops and Closing Ceremony",
    ],
    speakers: [
      {
        name: "Dr. Roland Felix Bolorunduro",
        title: "Chairman, Chief Olorunnipa Health Foundation",
        topic: "The Future of Global Healthcare Access",
      },
      {
        name: "Paduganao Johnson Jonalyn Ortega",
        title: "Vice Chairman, Chief Olorunnipa Health Foundation",
        topic: "Innovation in Healthcare Delivery",
      },
      {
        name: "Prof. Maria Rodriguez",
        title: "Head of Public Health, Stanford University",
        topic: "Community Health Initiatives",
      },
    ],
  },
  // Add more events as needed
];

// export function generateStaticParams() {
//   return events.map((event) => ({ id: event.id }));
// }

export default function EventPage(params: any) {
  const eventId = params.id as unknown as string; // Temporary type assertion

  const event = events.find((e) => e.id === eventId) || null;
  // const [event, setEvent] = useState<null | {
  //   id: string;
  //   title: string;
  //   date: string;
  //   time: string;
  //   location: string;
  //   image: string;
  //   description: string;
  //   attendees: number;
  //   type: string;
  //   agenda: string[];
  //   speakers: { name: string; title: string; topic: string }[];
  // }>(null);

  // useEffect(() => {
  //   const fetchEvent = () => {
  //     const event = events.find((e) => e.id === params.id);
  //     setEvent(event || null);
  //   };

  //   fetchEvent();
  // }, [params.id]);

  // if (!event) {
  //   return null;
  // }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={event?.image || ""}
            alt={event?.title || ""}
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <Button variant="ghost" className="text-white mb-4" asChild>
            <Link href="/events">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {event?.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <CalendarDays className="h-5 w-5 mr-2" />
              {event?.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              {event?.time}
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              {event?.location}
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              {event?.attendees} Expected Attendees
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>About the Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-8">
                    {event?.description}
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Event Agenda</h3>
                  <ul className="space-y-2 mb-8">
                    {event?.agenda?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 bg-primary rounded-full p-1">
                          <svg
                            className="h-3 w-3 text-primary-foreground"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-4">
                    Featured Speakers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event?.speakers?.map((speaker, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <h4 className="font-semibold">{speaker.name}</h4>
                          <p className="text-sm text-primary mb-2">
                            {speaker.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Speaking on: {speaker.topic}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Registration Card */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Register for this Event</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold mb-2">Free Registration</p>
                    <p className="text-sm text-muted-foreground">
                      Limited seats available
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                      <span>{event?.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{event?.time}</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-primary" />
                      <span>{event?.location}</span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Register Now
                  </Button>

                  <p className="text-sm text-center text-muted-foreground">
                    Need help? Contact our events team at
                    <br />
                    <a
                      href="mailto:events@philipnipahealthfoundation"
                      className="text-primary hover:underline"
                    >
                      events@philipnipahealthfoundation
                    </a>
                  </p>
                </CardContent>
              </Card>

              {/* Share Event */}
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Share Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="sm">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {/* <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Related Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      i === 1
                        ? "1469571486292-b53601010b89"
                        : i === 2
                        ? "1519671482749-fd09be7ccebf"
                        : "1454165804606-c3d57bc86b40"
                    }?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`}
                    alt={`Related event ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Upcoming Healthcare Event
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join us for another exciting healthcare event.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
