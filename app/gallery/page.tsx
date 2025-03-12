import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Healthcare gallery"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-lg md:text-xl">
              Explore images from our programs, events, and initiatives around
              the world. See the impact of our work through these visual
              stories.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search gallery" className="pl-10" />
            </div> */}

            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="programs">Programs</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="people">People</TabsTrigger>
                <TabsTrigger value="facilities">Facilities</TabsTrigger>
              </TabsList>

              {/* Gallery Grid */}
              <section className="py-12">
                <div className="container mx-auto px-4">
                  <TabsContent value="all" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          src: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Medical professionals examining patient",
                          caption:
                            "Our medical team providing care at a rural clinic in Kenya",
                          category: "programs",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Health education session",
                          caption:
                            "Community health education workshop in Guatemala",
                          category: "programs",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Medical team meeting",
                          caption:
                            "Planning session for our emergency response team",
                          category: "people",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Doctor with patient",
                          caption:
                            "Dr. Sarah Johnson with a patient at our mobile clinic",
                          category: "people",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Medical supplies",
                          caption:
                            "Medical supplies ready for distribution in emergency areas",
                          category: "programs",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Annual conference",
                          caption:
                            "Keynote speech at our Annual Healthcare Conference",
                          category: "events",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1469571486292-b53601010b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Community health fair",
                          caption:
                            "Community members at our health fair in Chicago",
                          category: "events",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "New medical center",
                          caption:
                            "Our newly opened medical center in rural Tanzania",
                          category: "facilities",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Medical director",
                          caption:
                            "Dr. Michael Chen, our Medical Director, training new volunteers",
                          category: "people",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Emergency response",
                          caption:
                            "Our emergency response team arriving in a disaster-affected area",
                          category: "programs",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Fundraising gala",
                          caption: "Annual fundraising gala in New York City",
                          category: "events",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Research team",
                          caption:
                            "Our research team developing innovative healthcare solutions",
                          category: "people",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Foundation beginnings",
                          caption:
                            "The founding team at our first clinic opening in 2010",
                          category: "people",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Volunteer training",
                          caption:
                            "Medical volunteer training session at our headquarters",
                          category: "events",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Healthcare professionals",
                          caption:
                            "Our team of healthcare professionals ready for deployment",
                          category: "people",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Executive director",
                          caption:
                            "Dr. Sarah Johnson, Executive Director, speaking at the UN",
                          category: "people",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Vaccination campaign",
                          caption:
                            "Child receiving vaccination during our campaign in rural India",
                          category: "programs",
                        },
                      ].map((image, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-lg"
                        >
                          <div className="aspect-[4/3] w-full overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={800}
                              height={600}
                              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white text-sm">
                              {image.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="programs" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          src: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Medical professionals examining patient",
                          caption:
                            "Our medical team providing care at a rural clinic in Kenya",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Health education session",
                          caption:
                            "Community health education workshop in Guatemala",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Medical supplies",
                          caption:
                            "Medical supplies ready for distribution in emergency areas",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Emergency response",
                          caption:
                            "Our emergency response team arriving in a disaster-affected area",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Vaccination campaign",
                          caption:
                            "Child receiving vaccination during our campaign in rural India",
                        },
                      ].map((image, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-lg"
                        >
                          <div className="aspect-[4/3] w-full overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={800}
                              height={600}
                              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white text-sm">
                              {image.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="events" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Annual conference",
                          caption:
                            "Keynote speech at our Annual Healthcare Conference",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1469571486292-b53601010b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Community health fair",
                          caption:
                            "Community members at our health fair in Chicago",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Fundraising gala",
                          caption: "Annual fundraising gala in New York City",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Volunteer training",
                          caption:
                            "Medical volunteer training session at our headquarters",
                        },
                      ].map((image, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-lg"
                        >
                          <div className="aspect-[4/3] w-full overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={800}
                              height={600}
                              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white text-sm">
                              {image.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="people" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Medical team meeting",
                          caption:
                            "Planning session for our emergency response team",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Doctor with patient",
                          caption:
                            "Dr. Sarah Johnson with a patient at our mobile clinic",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Medical director",
                          caption:
                            "Dr. Michael Chen, our Medical Director, training new volunteers",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Research team",
                          caption:
                            "Our research team developing innovative healthcare solutions",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Foundation beginnings",
                          caption:
                            "The founding team at our first clinic opening in 2010",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Healthcare professionals",
                          caption:
                            "Our team of healthcare professionals ready for deployment",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "Executive director",
                          caption:
                            "Dr. Sarah Johnson, Executive Director, speaking at the UN",
                        },
                      ].map((image, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-lg"
                        >
                          <div className="aspect-[4/3] w-full overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={800}
                              height={600}
                              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white text-sm">
                              {image.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="facilities" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                          alt: "New medical center",
                          caption:
                            "Our newly opened medical center in rural Tanzania",
                        },
                      ].map((image, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-lg"
                        >
                          <div className="aspect-[4/3] w-full overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={800}
                              height={600}
                              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white text-sm">
                              {image.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <div className="text-center mt-12">
                    <Button size="lg">Load More</Button>
                  </div>
                </div>
              </section>
            </Tabs>

            {/* <Button variant="outline" className="w-full md:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button> */}
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      {/* <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Featured Gallery
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A special collection highlighting our recent medical mission to
            rural communities in East Africa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="group relative h-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Medical team in East Africa"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      Medical Mission to East Africa
                    </h3>
                    <p className="text-white/90 text-sm">
                      Our team of doctors and nurses provided essential
                      healthcare services to over 2,000 patients in remote
                      villages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {[
              {
                src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                alt: "Doctor examining child",
                caption: "Pediatric check-up at mobile clinic",
              },
              {
                src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                alt: "Health education",
                caption: "Community health education session",
              },
              {
                src: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                alt: "Vaccination",
                caption: "Vaccination program for children",
              },
              {
                src: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                alt: "Medical supplies",
                caption: "Distributing medical supplies",
              },
              {
                src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                alt: "Medical team",
                caption: "Our medical team arriving in the village",
              },
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Submit Photos */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Photos</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Are you a volunteer, partner, or community member with photos from
            our programs or events? We&apos;d love to feature them in our
            gallery.
          </p>
          <Button size="lg">Submit Your Photos</Button>
        </div>
      </section>
    </div>
  );
}
