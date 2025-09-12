import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Calendar, Users, Stethoscope, Car } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Reception: 044 2554 5600",
        "Emergency: 044 2554 5600",
        "Appointments: 044 2554 5600"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: Mgs@zionhealthcentre.in",
        "Appointments: Mgs@zionhealthcentre.in",
        "Emergency: Mgs@zionhealthcentre.in"
      ]
    },
    {
      icon: MapPin,
      title: "Location",
      details: [
        "Block: 5, NO: 76, Kodungaiyur (East)",
        "Kaviarasu Kannadhasan Nagar",
        "Chennai, Tamil Nadu 600118"
      ]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Monday to Saturday: 10AM to 2PM, 6PM to 10PM",
        "Sunday: Closed"
      ]
    }
  ];

  const departments = [
    {
      icon: Calendar,
      name: "Appointments",
      phone: "+1 (555) 123-4568",
      hours: "Mon-Fri 8AM-6PM"
    },
    {
      icon: Stethoscope,
      name: "Emergency",
      phone: "+1 (555) 911-0000",
      hours: "24/7 Available"
    },
    {
      icon: Users,
      name: "Patient Services",
      phone: "+1 (555) 123-4569",
      hours: "Mon-Fri 8AM-5PM"
    },
    {
      icon: Car,
      name: "Ambulance",
      phone: "+1 (555) 911-1111",
      hours: "24/7 Emergency"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with Zion Health Center. We're here to help with your healthcare needs and answer any questions you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
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
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full shadow-medical">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg text-foreground">
                    <info.icon className="w-5 h-5 mr-3 text-primary" />
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Department Quick Contact */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Quick Contact by Department
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-medical transition-smooth border-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-medical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-semibold mb-2">{dept.phone}</p>
                  <p className="text-sm text-muted-foreground">{dept.hours}</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">
                Visit Our Location
              </CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                Find us at the heart of the medical district with ample parking and easy access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Interactive Map Coming Soon
                  </p>
                  <p className="text-muted-foreground">
                    Block: 5, NO: 76, Kodungaiyur (East), Kaviarasu Kannadhasan Nagar, Chennai, Tamil Nadu 600118
                  </p>
                  <Button variant="outline" className="mt-4">
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Notice */}
        <div className="mt-16 p-6 bg-red-50 border border-red-200 rounded-lg">
          <div className="text-center">
            <h3 className="text-xl font-bold text-red-800 mb-2">
              Medical Emergency?
            </h3>
            <p className="text-red-700 mb-4">
              If you're experiencing a medical emergency, don't use this form. Call immediately or visit our emergency department.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Call Emergency: 911
              </Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                Visit Emergency Dept
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;