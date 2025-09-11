import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Award, Calendar } from "lucide-react";

const Consultants = () => {
  const consultants = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      experience: "15 years",
      education: "MD, Harvard Medical School",
      certifications: ["Board Certified Cardiologist", "Echo Specialist"],
      bio: "Dr. Johnson specializes in interventional cardiology and has performed over 2,000 cardiac procedures. She is known for her patient-centered approach and innovative treatment methods.",
      availability: "Mon, Wed, Fri",
      location: "Building A, Floor 3",
      phone: "+1 (555) 123-4567",
      email: "s.johnson@zionhealth.com"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      experience: "12 years",
      education: "MD, Johns Hopkins University",
      certifications: ["Board Certified Neurologist", "Stroke Specialist"],
      bio: "Dr. Chen is an expert in stroke care and neurological disorders. He has published numerous research papers and is actively involved in clinical trials for new treatments.",
      availability: "Tue, Thu, Sat",
      location: "Building B, Floor 2",
      phone: "+1 (555) 234-5678",
      email: "m.chen@zionhealth.com"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      experience: "10 years",
      education: "MD, Stanford Medical School",
      certifications: ["Board Certified Pediatrician", "Adolescent Medicine"],
      bio: "Dr. Rodriguez provides comprehensive care for children from birth through adolescence. She has a special interest in childhood development and preventive care.",
      availability: "Mon, Tue, Thu",
      location: "Building C, Floor 1",
      phone: "+1 (555) 345-6789",
      email: "e.rodriguez@zionhealth.com"
    },
    {
      id: 4,
      name: "Dr. David Thompson",
      specialty: "Orthopedics",
      experience: "18 years",
      education: "MD, Mayo Clinic School of Medicine",
      certifications: ["Board Certified Orthopedic Surgeon", "Sports Medicine"],
      bio: "Dr. Thompson specializes in sports medicine and joint replacement surgery. He has worked with professional athletes and is known for his minimally invasive surgical techniques.",
      availability: "Wed, Fri, Sat",
      location: "Building A, Floor 2",
      phone: "+1 (555) 456-7890",
      email: "d.thompson@zionhealth.com"
    },
    {
      id: 5,
      name: "Dr. Lisa Wang",
      specialty: "Ophthalmology",
      experience: "14 years",
      education: "MD, University of Pennsylvania",
      certifications: ["Board Certified Ophthalmologist", "Retinal Specialist"],
      bio: "Dr. Wang is a leading expert in retinal diseases and cataract surgery. She uses the latest laser technology and has a high success rate in complex eye procedures.",
      availability: "Mon, Wed, Fri",
      location: "Building B, Floor 3",
      phone: "+1 (555) 567-8901",
      email: "l.wang@zionhealth.com"
    },
    {
      id: 6,
      name: "Dr. Robert Martinez",
      specialty: "General Medicine",
      experience: "20 years",
      education: "MD, UCLA School of Medicine",
      certifications: ["Board Certified Internal Medicine", "Preventive Medicine"],
      bio: "Dr. Martinez provides comprehensive primary care with a focus on preventive medicine and chronic disease management. He believes in building long-term relationships with his patients.",
      availability: "Tue, Thu, Sat",
      location: "Building C, Floor 2",
      phone: "+1 (555) 678-9012",
      email: "r.martinez@zionhealth.com"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Medical Consultants
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our team of experienced and board-certified medical professionals dedicated to providing you with the highest quality healthcare
          </p>
        </div>

        {/* Consultants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {consultants.map((consultant) => (
            <Card key={consultant.id} className="hover:shadow-medical transition-smooth border-border">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {consultant.name}
                    </CardTitle>
                    <Badge variant="secondary" className="mb-2">
                      {consultant.specialty}
                    </Badge>
                    <CardDescription className="text-muted-foreground">
                      {consultant.experience} of experience
                    </CardDescription>
                  </div>
                  <Button variant="default" size="sm" className="shadow-medical">
                    Book Now
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Education & Certifications */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-primary" />
                    Education & Certifications
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">{consultant.education}</p>
                  <div className="flex flex-wrap gap-1">
                    {consultant.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">About</h4>
                  <p className="text-sm text-muted-foreground">{consultant.bio}</p>
                </div>

                {/* Contact & Schedule Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-muted-foreground">Available: {consultant.availability}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-muted-foreground">{consultant.location}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-muted-foreground">{consultant.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-muted-foreground">{consultant.email}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-secondary rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Schedule Your Appointment?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our consultants are here to provide you with personalized care and expert medical advice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-medical">
              Book Online
            </Button>
            <Button size="lg" variant="outline">
              Call Reception
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultants;