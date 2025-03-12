import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarDays,
  MapPin,
  Clock,
  Users,
  Search,
  Filter,
  Calendar,
  ArrowRight,
} from "lucide-react";
import foundation from "@/public/2.jpeg";

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Healthcare event"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Events & Activities
            </h1>
            <p className="text-lg md:text-xl">
              Join us at our upcoming events to learn more about our work,
              support our cause, and connect with like-minded individuals
              passionate about healthcare access.
            </p>
          </div>
        </div>
      </section>

      {/* Event Search & Filter */}
      {/* <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search events" className="pl-10" />
              </div>

              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="conference">Conferences</SelectItem>
                    <SelectItem value="workshop">Workshops</SelectItem>
                    <SelectItem value="fundraiser">Fundraisers</SelectItem>
                    <SelectItem value="community">
                      Community Outreach
                    </SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="newyork">New York</SelectItem>
                    <SelectItem value="london">London</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="global">Global</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Button className="w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Events Calendar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="past" className="w-full">
            <div className="flex justify-between items-center mb-8">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>

              {/* <div className="flex items-center">
                <Button variant="outline" size="sm" className="mr-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Month View
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  List View
                </Button>
              </div> */}
            </div>

            {/* Upcoming Events */}
            <TabsContent value="upcoming" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Annual Healthcare Conference",
                    date: "July 15-17, 2025",
                    time: "9:00 AM - 5:00 PM",
                    location: "Grand Convention Center, New York",
                    image:
                      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    description:
                      "Join healthcare professionals from around the world for three days of presentations, workshops, and networking focused on improving healthcare access globally.",
                    attendees: 500,
                    type: "Conference",
                  },
                  {
                    title: "Community Health Fair",
                    date: "August 5, 2025",
                    time: "10:00 AM - 4:00 PM",
                    location: "Central Park, New York City",
                    image:
                      "https://images.unsplash.com/photo-1469571486292-b53601010b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    description:
                      "A free health fair offering screenings, consultations, and health education for community members of all ages.",
                    attendees: 1000,
                    type: "Community Outreach",
                  },
                  {
                    title: "Fundraising Gala Dinner",
                    date: "August 20, 2025",
                    time: "7:00 PM - 10:00 PM",
                    location: "Grand Hotel, Chicago",
                    image:
                      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    description:
                      "An elegant evening of dining and entertainment to raise funds for our mobile clinic program in rural communities.",
                    attendees: 250,
                    type: "Fundraiser",
                  },
                  {
                    title: "Medical Volunteer Training",
                    date: "September 10, 2025",
                    time: "9:00 AM - 5:00 PM",
                    location: "Healthcare Foundation HQ, San Francisco",
                    image:
                      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    description:
                      "Comprehensive training for healthcare professionals volunteering for our international medical missions.",
                    attendees: 100,
                    type: "Training",
                  },
                  {
                    title: "Global Health Symposium",
                    date: "September 25, 2025",
                    time: "10:00 AM - 4:00 PM",
                    location: "Virtual Event",
                    image:
                      "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    description:
                      "An online symposium featuring experts discussing the latest trends and challenges in global healthcare delivery.",
                    attendees: 1000,
                    type: "Conference",
                  },
                  {
                    title: "Healthcare Innovation Workshop",
                    date: "October 5, 2025",
                    time: "1:00 PM - 5:00 PM",
                    location: "Tech Hub, Boston",
                    image:
                      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    description:
                      "A hands-on workshop exploring innovative approaches to healthcare delivery in resource-limited settings.",
                    attendees: 75,
                    type: "Workshop",
                  },
                ].map((event, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {event.type}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        {event.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-start text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {event.attendees} expected attendees
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" asChild>
                        <Link href={`/events/${index}`}>Details</Link>
                      </Button>
                      <Button asChild>
                        <Link href={`/events/${index}#register`}>Register</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg">
                  Load More Events
                </Button>
              </div>
            </TabsContent>

            {/* Past Events */}
            <TabsContent value="past" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Foundation Laying Ceremony",
                    date: "January 4, 2025",
                    location: "Isado-kiri, Kabba-Bunu LGA, Kogi State, Nigeria",
                    image: foundation,
                    type: "Community Outreach",
                  },
                ].map((event, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {event.type}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        {event.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        {event.location}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/gallery">View Recap</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg">
                  View More Past Events
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Event */}
      {/* <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Event
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Annual Healthcare Conference"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                Conference
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Annual Healthcare Conference 2025
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <CalendarDays className="h-5 w-5 mr-3" />
                  <span>July 15-17, 2025</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>9:00 AM - 5:00 PM daily</span>
                </div>
                <div className="flex items-start text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-3 mt-1" />
                  <span>
                    Grand Convention Center
                    <br />
                    123 Main Street, New York, NY 10001
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Join healthcare professionals from around the world for three
                days of presentations, workshops, and networking focused on
                improving healthcare access globally. This year&apos;s theme is
                &quot;Innovation in Healthcare Delivery for Underserved Communities.&quot;
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="font-semibold">Highlights:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary rounded-full p-1">
                      <svg
                        className="h-3 w-3 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>
                      Keynote speeches from leading healthcare experts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary rounded-full p-1">
                      <svg
                        className="h-3 w-3 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>Interactive workshops and panel discussions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary rounded-full p-1">
                      <svg
                        className="h-3 w-3 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>
                      Networking opportunities with global healthcare leaders
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary rounded-full p-1">
                      <svg
                        className="h-3 w-3 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>
                      Exhibition showcasing the latest healthcare technologies
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#">Register Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#">View Full Schedule</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Event Registration */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Event Registration
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Interested in attending one of our events? Fill out the form below
              to pre-register, and we&apos;ll send you all the details.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Registration Form</CardTitle>
                <CardDescription>
                  Please provide your information to register for an upcoming
                  event.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event">Select Event</Label>
                  <Select>
                    <SelectTrigger id="event">
                      <SelectValue placeholder="Choose an event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conference">
                        Annual Healthcare Conference (July 15-17, 2025)
                      </SelectItem>
                      <SelectItem value="healthfair">
                        Community Health Fair (August 5, 2025)
                      </SelectItem>
                      <SelectItem value="gala">
                        Fundraising Gala Dinner (August 20, 2025)
                      </SelectItem>
                      <SelectItem value="training">
                        Medical Volunteer Training (September 10, 2025)
                      </SelectItem>
                      <SelectItem value="symposium">
                        Global Health Symposium (September 25, 2025)
                      </SelectItem>
                      <SelectItem value="workshop">
                        Healthcare Innovation Workshop (October 5, 2025)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Your Role</Label>
                  <Select>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthcare">
                        Healthcare Professional
                      </SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="researcher">Researcher</SelectItem>
                      <SelectItem value="donor">Donor</SelectItem>
                      <SelectItem value="partner">
                        Partner Organization
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequirements">
                    Special Requirements (Optional)
                  </Label>
                  <Input
                    id="specialRequirements"
                    placeholder="Any dietary restrictions, accessibility needs, etc."
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Submit Registration</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Host an Event With Us</h2>
              <p className="mb-6">
                Are you interested in hosting a fundraiser, awareness event, or
                community health initiative in partnership with the HealthCare
                Foundation? We&apos;d love to collaborate with you!
              </p>
              <p className="mb-8">
                Our events team can provide support, resources, and guidance to
                help make your event a success while furthering our mission of
                improving healthcare access worldwide.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Contact Our Events Team{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="People organizing an event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated on Our Events
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on upcoming events,
            early registration opportunities, and special announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email address"
              className="sm:min-w-[300px]"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
