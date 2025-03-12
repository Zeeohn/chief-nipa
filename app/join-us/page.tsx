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
import {
  Heart,
  Users,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Clock,
  DollarSign,
  CreditCard,
  Briefcase,
  Award,
} from "lucide-react";

export default function JoinUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Healthcare volunteers"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Mission
            </h1>
            <p className="text-lg md:text-xl">
              There are many ways to get involved and make a difference. Whether
              you want to volunteer, donate, or partner with us, your support
              helps us provide essential healthcare services to those in need.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="volunteer" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger
                value="volunteer"
                id="volunteer"
                className="text-lg py-3"
              >
                Volunteer
              </TabsTrigger>
              <TabsTrigger value="donate" id="donate" className="text-lg py-3">
                Donate
              </TabsTrigger>
            </TabsList>

            {/* Volunteer Tab */}
            <TabsContent value="volunteer" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Volunteer Opportunities
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Join our global network of dedicated volunteers who are
                    making a difference in healthcare delivery around the world.
                    We offer various volunteer opportunities for healthcare
                    professionals and non-medical volunteers alike.
                  </p>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Briefcase className="h-5 w-5 mr-2 text-primary" />
                          Medical Professionals
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          We need doctors, nurses, pharmacists, and other
                          healthcare professionals to provide direct medical
                          care in our programs worldwide.
                        </p>
                        <ul className="mt-4 space-y-2">
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
                            <span>Short-term medical missions (2-4 weeks)</span>
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
                            <span>Long-term placements (6+ months)</span>
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
                            <span>Telemedicine consultations</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Users className="h-5 w-5 mr-2 text-primary" />
                          Non-Medical Volunteers
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          We also need volunteers with skills in administration,
                          logistics, education, communications, and more.
                        </p>
                        <ul className="mt-4 space-y-2">
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
                            <span>Community health education</span>
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
                            <span>Program coordination and logistics</span>
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
                            <span>Fundraising and event organization</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Award className="h-5 w-5 mr-2 text-primary" />
                          Volunteer Benefits
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
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
                            <span>Professional development and training</span>
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
                              International experience in global health
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
                            <span>Opportunity to make a meaningful impact</span>
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
                            <span>Certificate of volunteer service</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Volunteer Application Form */}
                <div>
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-2xl">
                        Volunteer Application
                      </CardTitle>
                      <CardDescription>
                        Fill out the form below to apply for volunteer
                        opportunities. Our team will contact you to discuss
                        available positions.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 space-y-4">
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
                          <Input
                            id="lastName"
                            placeholder="Enter your last name"
                          />
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
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="profession">Profession/Expertise</Label>
                        <Select>
                          <SelectTrigger id="profession">
                            <SelectValue placeholder="Select your profession" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="doctor">Doctor</SelectItem>
                            <SelectItem value="nurse">Nurse</SelectItem>
                            <SelectItem value="pharmacist">
                              Pharmacist
                            </SelectItem>
                            <SelectItem value="administrator">
                              Administrator
                            </SelectItem>
                            <SelectItem value="educator">Educator</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="availability">Availability</Label>
                        <Select>
                          <SelectTrigger id="availability">
                            <SelectValue placeholder="Select your availability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="short-term">
                              Short-term (2-4 weeks)
                            </SelectItem>
                            <SelectItem value="medium-term">
                              Medium-term (1-6 months)
                            </SelectItem>
                            <SelectItem value="long-term">
                              Long-term (6+ months)
                            </SelectItem>
                            <SelectItem value="remote">
                              Remote/Virtual only
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Why do you want to volunteer with us?
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your motivation and relevant experience"
                          rows={4}
                        />
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the volunteer terms and conditions and
                          consent to the processing of my personal data.
                        </Label>
                      </div>
                    </CardContent>
                    <CardFooter className="px-0 pt-4">
                      <Button className="w-full">Submit Application</Button>
                    </CardFooter>
                  </Card>

                  {/* Volunteer Testimonial */}
                  <div className="mt-8 bg-muted p-6 rounded-lg">
                    <blockquote className="italic text-muted-foreground">
                      &quot;Volunteering with the Chief Philip Olorunnipa Health
                      Foundation has been the most rewarding experience of my
                      career. I&apos;ve gained invaluable skills while making a
                      real difference in people&apos;s lives.&quot;
                    </blockquote>
                    <div className="mt-4 flex items-center">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                          alt="Volunteer testimonial"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Dr. Kayode</p>
                        <p className="text-sm text-muted-foreground">
                          Volunteer since 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Donate Tab */}
            <TabsContent value="donate" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Support Our Mission
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Your generous donations help us provide essential healthcare
                    services to underserved communities worldwide. Every
                    contribution, no matter the size, makes a difference in
                    someone&apos;s life.
                  </p>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Heart className="h-5 w-5 mr-2 text-primary" />
                          Your Impact
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="bg-primary/10 p-3 rounded-lg mr-4">
                              <DollarSign className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold">$25</h4>
                              <p className="text-sm text-muted-foreground">
                                Provides essential medications for 10 patients
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="bg-primary/10 p-3 rounded-lg mr-4">
                              <DollarSign className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold">$100</h4>
                              <p className="text-sm text-muted-foreground">
                                Funds a mobile clinic visit to a remote village
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="bg-primary/10 p-3 rounded-lg mr-4">
                              <DollarSign className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold">$500</h4>
                              <p className="text-sm text-muted-foreground">
                                Supports training for 5 community health workers
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="bg-primary/10 p-3 rounded-lg mr-4">
                              <DollarSign className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold">$1,000</h4>
                              <p className="text-sm text-muted-foreground">
                                Provides medical equipment for a rural clinic
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Clock className="h-5 w-5 mr-2 text-primary" />
                          Ways to Give
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
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
                            <div>
                              <span className="font-medium">
                                One-time donation
                              </span>
                              <p className="text-sm text-muted-foreground">
                                Make a single contribution of any amount
                              </p>
                            </div>
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
                            <div>
                              <span className="font-medium">
                                Monthly giving
                              </span>
                              <p className="text-sm text-muted-foreground">
                                Join our sustainer program with recurring
                                donations
                              </p>
                            </div>
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
                            <div>
                              <span className="font-medium">
                                Corporate partnerships
                              </span>
                              <p className="text-sm text-muted-foreground">
                                Engage your company in our mission
                              </p>
                            </div>
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
                            <div>
                              <span className="font-medium">Legacy giving</span>
                              <p className="text-sm text-muted-foreground">
                                Include us in your estate planning
                              </p>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">
                        Our Commitment to Transparency
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        We are committed to financial transparency and
                        accountability. 85% of all donations go directly to our
                        programs, with only 15% used for administrative costs
                        and fundraising.
                      </p>
                      {/* <Link href="#" className="text-sm text-primary hover:underline">
                        View our annual financial reports →
                      </Link> */}
                    </div>
                  </div>
                </div>

                {/* Donation Form */}
                <div>
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-2xl">
                        Make a Donation
                      </CardTitle>
                      <CardDescription>
                        Your support helps us provide essential healthcare
                        services to those who need it most.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 space-y-4">
                      <div className="space-y-2">
                        <Label>Donation Amount</Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          <Button variant="outline" className="w-full">
                            $25
                          </Button>
                          <Button variant="outline" className="w-full">
                            $50
                          </Button>
                          <Button variant="outline" className="w-full">
                            $100
                          </Button>
                          <Button variant="outline" className="w-full">
                            $250
                          </Button>
                        </div>
                        <div className="mt-2">
                          <Input
                            placeholder="Other amount"
                            type="number"
                            min="1"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Donation Frequency</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" className="w-full">
                            One-time
                          </Button>
                          <Button variant="outline" className="w-full">
                            Monthly
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="donorName">Full Name</Label>
                        <Input
                          id="donorName"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="donorEmail">Email</Label>
                        <Input
                          id="donorEmail"
                          type="email"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Payment Method</Label>
                        <div className="grid grid-cols-1 gap-2">
                          <div className="border rounded-md p-3 flex items-center space-x-3">
                            <CreditCard className="h-5 w-5 text-muted-foreground" />
                            <span>Credit/Debit Card</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="receiptNeeded" />
                        <Label htmlFor="receiptNeeded" className="text-sm">
                          I would like to receive a tax receipt for my donation.
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="newsletter" />
                        <Label htmlFor="newsletter" className="text-sm">
                          Keep me updated about the impact of my donation and
                          other foundation news.
                        </Label>
                      </div>
                    </CardContent>
                    <CardFooter className="px-0 pt-4">
                      <Button className="w-full">Complete Donation</Button>
                    </CardFooter>
                  </Card>

                  {/* Secure Payment Notice */}
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground flex items-center justify-center">
                      <svg
                        className="h-4 w-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        ></path>
                      </svg>
                      Secure payment processing. Your financial information is
                      encrypted and protected.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hear from our volunteers, donors, and the communities we serve about
            the impact of our work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              // {
              //   quote: "Volunteering as a nurse with the HealthCare Foundation changed my perspective on global health. The experience was challenging but incredibly rewarding.",
              //   name: "Sarah Thompson, RN",
              //   role: "Medical Volunteer",
              //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              // },
              // {
              //   quote: "I've been a monthly donor for three years. The foundation's transparency about how funds are used gives me confidence that my contributions are making a real difference.",
              //   name: "Michael Rodriguez",
              //   role: "Monthly Donor",
              //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              // },
              {
                quote:
                  "The clinic in our village has improved the health of our entire community. Children who were once sick are now thriving thanks to the foundation's work.",
                name: "Folayemi Adewara",
                role: "Community Member",
                image:
                  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <svg
                      className="h-8 w-8 text-primary/40"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <blockquote className="text-muted-foreground mb-6">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Find answers to common questions about volunteering and donating.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>
                  How can I volunteer if I&apos;m not a healthcare professional?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We have many roles for non-medical volunteers, including
                  administration, logistics, education, communications, and
                  fundraising. Your skills and time are valuable regardless of
                  your professional background.
                </p>
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader>
                <CardTitle>Is my donation tax-deductible?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, the HealthCare Foundation is a registered 501(c)(3) nonprofit organization, and all donations are tax-deductible to the extent allowed by law. You will receive a tax receipt for your donation.
                </p>
              </CardContent>
            </Card> */}

            <Card>
              <CardHeader>
                <CardTitle>
                  What are the time commitments for volunteers?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer flexible volunteering opportunities ranging from
                  short-term assignments (2-4 weeks) to long-term placements (6+
                  months). We also have remote volunteering options that can be
                  done from anywhere.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How is my donation used?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  85% of all donations go directly to our programs, with only
                  15% used for administrative costs and fundraising. Your
                  donation helps provide medical care, supplies, education, and
                  training in underserved communities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Do volunteers need to cover their own expenses?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Volunteers typically cover their own travel expenses and
                  accommodations. However, we provide support with logistics,
                  local transportation, and meals during work hours. Some
                  long-term positions may include stipends.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I specify where my donation goes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can designate your donation for specific programs or
                  regions. However, unrestricted donations give us the
                  flexibility to allocate funds where they are most needed at
                  any given time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether through volunteering your time or making a donation, your
            support helps us provide essential healthcare services to those who
            need it most.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#volunteer">Become a Volunteer</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-500 hover:bg-white/10 hover:border-black hover:text-blue-500"
              asChild
            >
              <Link href="#donate">Make a Donation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
