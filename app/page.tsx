import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarDays,
  Users,
  Heart,
  Award,
  ArrowRight,
  MapPin,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Healthcare professionals"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Improving Lives Through Healthcare
            </h1>
            <p className="text-lg md:text-xl mb-8">
              We&apos;re dedicated to providing quality healthcare services to
              underserved communities worldwide, ensuring everyone has access to
              the care they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/join-us#donate">Donate Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "50+",
                label: "Cities Served",
                icon: <MapPin className="h-10 w-10 text-primary mb-4" />,
              },
              {
                number: "1M+",
                label: "Lives Impacted",
                icon: <Heart className="h-10 w-10 text-primary mb-4" />,
              },
              {
                number: "5,000+",
                label: "Healthcare Professionals",
                icon: <Users className="h-10 w-10 text-primary mb-4" />,
              },
              {
                number: "100+",
                label: "Medical Equipments",
                icon: <Award className="h-10 w-10 text-primary mb-4" />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg shadow-sm"
              >
                <div className="flex justify-center">{stat.icon}</div>
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Programs</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We run various healthcare initiatives to address the most pressing
            medical needs in underserved communities.
          </p>

          <Tabs defaultValue="medical" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="medical">Medical Care</TabsTrigger>
              <TabsTrigger value="education">Health Education</TabsTrigger>
              <TabsTrigger value="emergency">Emergency Response</TabsTrigger>
            </TabsList>

            <TabsContent value="medical" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Medical Care Programs
                  </h3>
                  <p className="mb-4">
                    Our medical care programs provide essential healthcare
                    services to communities with limited access to medical
                    facilities. We operate mobile clinics, permanent health
                    centers, and specialized treatment programs.
                  </p>
                  <ul className="space-y-2 mb-6">
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
                      <span>Mobile medical clinics reaching remote areas</span>
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
                      <span>Maternal and child health services</span>
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
                      <span>Chronic disease management programs</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/about">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Medical care program"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Health education program"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4">
                    Health Education Programs
                  </h3>
                  <p className="mb-4">
                    Our health education initiatives empower communities with
                    knowledge about disease prevention, nutrition, hygiene, and
                    other essential health topics.
                  </p>
                  <ul className="space-y-2 mb-6">
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
                      <span>Community health workshops</span>
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
                      <span>School-based health education programs</span>
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
                      <span>Training for local health workers</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/about">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="emergency" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Emergency Response Programs
                  </h3>
                  <p className="mb-4">
                    When disasters strike, our emergency response teams are
                    ready to provide immediate medical assistance, supplies, and
                    support to affected communities.
                  </p>
                  <ul className="space-y-2 mb-6">
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
                      <span>Rapid deployment medical teams</span>
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
                      <span>Emergency medical supply distribution</span>
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
                      <span>Post-disaster healthcare rehabilitation</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/about">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Emergency response program"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Latest News */}
      {/* <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Latest News</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Stay updated with our recent activities, achievements, and
            announcements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "New Medical Center Opens in Rural Community",
                date: "June 15, 2025",
                image:
                  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                excerpt:
                  "Our foundation has opened a new medical center providing essential healthcare services to over 10,000 residents in a previously underserved rural area.",
              },
              {
                title: "Annual Healthcare Conference Announced",
                date: "May 28, 2025",
                image:
                  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                excerpt:
                  "Join us for our annual healthcare conference bringing together experts from around the world to discuss innovations in medical care for underserved communities.",
              },
              {
                title: "Successful Vaccination Campaign Reaches Milestone",
                date: "May 10, 2025",
                image:
                  "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                excerpt:
                  "Our vaccination campaign has successfully reached 100,000 children in remote areas, providing protection against preventable diseases.",
              },
            ].map((news, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{news.title}</CardTitle>
                  <CardDescription>{news.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{news.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="#">View All News</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Upcoming Events
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join us at our upcoming events to support our cause and learn more
            about our work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Community Health Fair",
                date: "July 15, 2025",
                time: "10:00 AM - 4:00 PM",
                location: "Central Park, New York City",
                image:
                  "https://images.unsplash.com/photo-1469571486292-b53601010b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Fundraising Gala Dinner",
                date: "August 5, 2025",
                time: "7:00 PM - 10:00 PM",
                location: "Grand Hotel, Chicago",
                image:
                  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Medical Volunteer Training",
                date: "August 20, 2025",
                time: "9:00 AM - 5:00 PM",
                location: "Healthcare Foundation HQ, San Francisco",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    {event.date} • {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                    {event.location}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href="/events">Details</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/events">Register</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether through donations, volunteering, or spreading awareness,
            your support helps us provide essential healthcare services to those
            who need it most.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/join-us#volunteer">Volunteer</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-500 hover:bg-white/10 hover:border-black hover:text-blue-500"
              asChild
            >
              <Link href="/join-us#donate">Donate</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
