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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Healthcare contact center"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl">
              Have questions or want to get involved? We&apos;re here to help.
              Reach out to our team through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
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
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="volunteer">Volunteering</SelectItem>
                        <SelectItem value="donation">Donations</SelectItem>
                        <SelectItem value="partnership">
                          Partnership Opportunities
                        </SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      rows={5}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="consent" />
                    <Label htmlFor="consent" className="text-sm">
                      I consent to having this website store my submitted
                      information so they can respond to my inquiry.
                    </Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Our Locations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Headquarters</h3>
                    <p className="text-muted-foreground">
                      House 110, <br />
                      Babatunde Folawiyo Street,
                      <br />
                      River Park Estate,
                      <br />
                      Airport Road,
                      <br />
                      Abuja, Nigeria
                      <br />
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <h3 className="font-semibold">Main Line</h3>
                    <p className="text-muted-foreground">+234 803 373 8461</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">Donations</h3>
                    <p className="text-muted-foreground">+234 803 373 8461</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <h3 className="font-semibold">General Inquiries</h3>
                    <p className="text-muted-foreground">
                      info@philipnipahealthfoundation.com
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">Volunteer Opportunities</h3>
                    <p className="text-muted-foreground">
                      volunteer@philipnipahealthfoundation.com
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">Donations</h3>
                    <p className="text-muted-foreground">
                      donate@philipnipahealthfoundation.com
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">Media Inquiries</h3>
                    <p className="text-muted-foreground">
                      media@philipnipahealthfoundation.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Hours of Operation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      All times are in West African Time (WAT).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Find Us</h2>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
              alt="Map location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/90 p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Interactive map coming soon</p>
                <p className="text-sm text-muted-foreground">
                  We&apos;re working on integrating a live map feature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Find quick answers to common questions about contacting us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What is the typical response time?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We aim to respond to all inquiries within 24-48 business
                  hours. For urgent matters, please call our main line.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How can I schedule a meeting with your team?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can request a meeting through our contact form or by
                  emailing info@philipnipahealthfoundation.com with your
                  availability and the purpose of the meeting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you offer tours of your facilities?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer scheduled tours of our headquarters for
                  potential partners, donors, and volunteers. Please contact us
                  at least two weeks in advance to arrange a visit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How can I update my contact information?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you&apos;re a donor, volunteer, or partner and need to
                  update your contact information, please email us with your
                  current and new details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-destructive" />
              Emergency Contact Information
            </h2>
            <p className="mb-4">
              For medical emergencies, please call your local emergency
              services.
            </p>
            <p className="mb-4">
              For urgent matters related to our programs or services that cannot
              wait for regular business hours:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-md">
                <h3 className="font-semibold">Emergency Hotline</h3>
                <p className="text-muted-foreground">+234 803 373 8461</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Available 24/7
                </p>
              </div>
              <div className="bg-background p-4 rounded-md">
                <h3 className="font-semibold">Emergency Email</h3>
                <p className="text-muted-foreground">
                  emergency@philipnipahealthfoundation.com
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Monitored 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Connect With Us on Social Media
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow us on social media to stay updated on our latest news,
            events, and impact stories.
          </p>
          <div className="flex justify-center flex-wrap space-x-2 space-y-2 md:space-x-4">
            <Button variant="outline" size="lg" className="rounded-full">
              Facebook
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Twitter
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Instagram
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
