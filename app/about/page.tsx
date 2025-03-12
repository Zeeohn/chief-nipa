import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart,
  Award,
  Users,
  Clock,
  Globe,
  BookOpen,
  Smile,
  Shield,
} from "lucide-react";
import president from "@/public/president.jpg";
import vPresident from "@/public/vice-president.jpeg";
import chairman from "@/public/chairman.jpeg";
import vChairman from "@/public/vice-chairman.jpeg";
import secretary from "@/public/secretary.jpeg";
import treasurer from "@/public/treasurer.jpg";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Healthcare professionals in a meeting"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Our Foundation
            </h1>
            <p className="text-lg md:text-xl">
              Learn about our mission, values, and the dedicated team working to
              improve healthcare access worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold flex items-center">
                    <Heart className="h-6 w-6 mr-2 text-primary" /> Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To provide quality healthcare services to underserved
                    communities worldwide, ensuring everyone has access to the
                    care they deserve regardless of their socioeconomic status
                    or geographic location.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold flex items-center">
                    <Globe className="h-6 w-6 mr-2 text-primary" /> Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    A world where quality healthcare is accessible to all, where
                    preventable diseases are eliminated, and where communities
                    are empowered to maintain their health and well-being.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare professionals helping patients"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Core Values
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            These principles guide our work and define our approach to
            healthcare delivery around the world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart className="h-10 w-10 mb-4 text-primary" />,
                title: "Compassion",
                description:
                  "We approach our work with empathy and understanding, recognizing the dignity of every individual we serve.",
              },
              {
                icon: <Shield className="h-10 w-10 mb-4 text-primary" />,
                title: "Integrity",
                description:
                  "We maintain the highest ethical standards in all our operations, ensuring transparency and accountability.",
              },
              {
                icon: <Award className="h-10 w-10 mb-4 text-primary" />,
                title: "Excellence",
                description:
                  "We strive for the highest quality in healthcare delivery, continuously improving our methods and approaches.",
              },
              {
                icon: <Users className="h-10 w-10 mb-4 text-primary" />,
                title: "Collaboration",
                description:
                  "We work together with communities, governments, and other organizations to achieve greater impact.",
              },
              {
                icon: <BookOpen className="h-10 w-10 mb-4 text-primary" />,
                title: "Education",
                description:
                  "We believe in empowering communities through health education and knowledge sharing.",
              },
              {
                icon: <Globe className="h-10 w-10 mb-4 text-primary" />,
                title: "Inclusivity",
                description:
                  "We serve all people regardless of race, religion, gender, or socioeconomic status.",
              },
              {
                icon: <Smile className="h-10 w-10 mb-4 text-primary" />,
                title: "Respect",
                description:
                  "We honor the cultures, traditions, and values of the communities we serve.",
              },
              {
                icon: <Clock className="h-10 w-10 mb-4 text-primary" />,
                title: "Sustainability",
                description:
                  "We develop programs that create lasting change and can be maintained by local communities.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Leadership Team
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Meet the dedicated professionals leading our foundation&apos;s
            mission to improve healthcare access worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Chief Philip E. Olorunnipa",
                role: "President",
                bio: "Chief Philip had a strong love for humanity and desired to help the sick children by providing access to health care to children who cannot afford it.",
                image: president,
              },
              {
                name: "Evang. Elijah D. O Eniolorunda",
                role: "Vice President",
                bio: "An evangelist who has passion for spreading the Word of God. This has led him to join this mission to provide affordable and accessible healthcare.",
                image: vPresident,
              },
              {
                name: "Dr. Roland Felix Bolorunduro",
                role: "Chairman",
                bio: "Dr. Roland brings his years of expertise as a medical practitioner, ensuring that the right decisions are made concerning medical standards.",
                image: chairman,
              },
              {
                name: "Paduganao Johnson Jonalyn Ortega",
                role: "Vice Chairman",
                bio: "Jonalyn brings her expertise with human and public relations to the team to ensure that the organization relates well with every internal and external entity.",
                image: vChairman,
              },
              {
                name: "Mr. Johnson Isaac",
                role: "Secretary",
                bio: "Mr. Johnson handles the more subtle and important matters. With his expertise, he ensures everything is organized including files, memos, and every other necessary document.",
                image: secretary,
              },
              {
                name: "Comr. Raymond Johnson",
                role: "Treasurer",
                bio: "Comr. Raymond handles all financial services and operations. Always ensuring that the organizations finances and records are up to date, keeping record of cash inflow and expenses ensuring judicious use of resources and funds.",
                image: treasurer,
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-fill"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      {/* <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our History</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From humble beginnings to global impact, explore the journey of our
            foundation.
          </p>

          <Tabs defaultValue="2010" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="2010">2010-2013</TabsTrigger>
              <TabsTrigger value="2014">2014-2017</TabsTrigger>
              <TabsTrigger value="2018">2018-2021</TabsTrigger>
              <TabsTrigger value="2022">2022-Present</TabsTrigger>
            </TabsList>

            <TabsContent value="2010" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Foundation beginnings"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    The Beginning (2010-2013)
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2010:</span> Founded by
                        Dr. Sarah Johnson with a small team of five healthcare
                        professionals.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2011:</span> Launched
                        our first mobile clinic program in rural communities.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2012:</span> Expanded
                        operations to three countries, focusing on maternal and
                        child health.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2013:</span> Received
                        our first major grant, allowing us to build our first
                        permanent clinic.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="2014" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">
                    Growth & Expansion (2014-2017)
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2014:</span> Launched
                        our health education program, training local community
                        health workers.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2015:</span> Responded
                        to our first major disaster, providing emergency medical
                        relief.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2016:</span> Established
                        partnerships with 10 major international organizations.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2017:</span> Reached the
                        milestone of serving over 100,000 patients across 15
                        countries.
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Foundation growth period"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="2018" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Foundation innovation period"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Innovation & Impact (2018-2021)
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2018:</span> Launched
                        our research department to develop innovative healthcare
                        solutions.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2019:</span> Implemented
                        telemedicine programs in remote areas, connecting
                        patients with specialists.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2020:</span> Led global
                        COVID-19 response efforts in underserved communities.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2021:</span> Received
                        international recognition for our innovative healthcare
                        delivery models.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="2022" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">
                    Global Leadership (2022-Present)
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2022:</span> Expanded to
                        50+ countries, with over 5,000 healthcare professionals
                        in our network.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2023:</span> Launched
                        our global healthcare policy advocacy initiative.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2024:</span> Established
                        the Healthcare Innovation Fund to support promising
                        healthcare startups.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary rounded-full p-1 flex-shrink-0">
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
                      <div>
                        <span className="font-semibold">2025:</span> Celebrating
                        15 years with the milestone of impacting over 1 million
                        lives worldwide.
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Foundation global leadership"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section> */}

      {/* Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Partners</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We collaborate with organizations around the world to maximize our
            impact and reach.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
            ].map((logo, index) => (
              <div key={index} className="flex justify-center p-4">
                <div className="relative h-16 w-32">
                  <Image
                    src={logo}
                    alt={`Partner organization ${index + 1}`}
                    fill
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Together, we can make quality healthcare accessible to everyone,
            everywhere. Join us as a volunteer, donor, or partner in our
            mission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/join-us#volunteer">Become a Volunteer</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-500 hover:bg-white/10 hover:border-black hover:text-blue-500"
              asChild
            >
              <Link href="/join-us#donate">Make a Donation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
