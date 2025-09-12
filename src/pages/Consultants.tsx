import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Award, Calendar } from "lucide-react";

const Consultants = () => {
  const consultants = [
    {
      id: 1,
      name: "Dr. S. Manogaran",
      specialty: "Anaesthesiology",
      experience: "25+ years",
      education: "M.B.B.S., D.A.",
      certifications: ["Anaesthesiologist", "Former Chief Surgeon"],
      bio: "Dr. Manogaran is a highly experienced anaesthesiologist and former Chief Surgeon at Govt. Stanley Medical College and Hospital. He brings decades of expertise in anaesthetic care and surgical support.",
      availability: "Mon to Sat",
      location: "Zion Health Center",
      phone: "9444509509",
      email: "info@zionhealth.com"
    },
    {
      id: 2,
      name: "Dr. M. Gnana Sezhian",
      specialty: "General Surgery",
      experience: "20+ years",
      education: "M.B.B.S., M.S., M.ch., D.N.B.(P.S), MBA",
      certifications: ["General Surgeon", "Plastic Surgeon", "Reconstructive Surgeon", "Facio Maxillary Surgeon"],
      bio: "Dr. Gnana Sezhian is a versatile surgeon specializing in general surgery, plastic and reconstructive surgery, and facio-maxillary procedures. His comprehensive training includes both medical and management qualifications.",
      availability: "Mon to Sat",
      location: "Zion Health Center",
      phone: "9444509509",
      email: "info@zionhealth.com"
    },
    {
      id: 3,
      name: "Dr. E. Suganya",
      specialty: "Pediatrics",
      experience: "15+ years",
      education: "M.B.B.S., M.D.(PAEDS), D.N.B.(PAEDS), MBA",
      certifications: ["Child Specialist", "Family Physician", "Assistant Professor in Paediatrics"],
      bio: "Dr. Suganya is a dedicated child specialist and family physician. She serves as Assistant Professor in Paediatrics at Institute of Child Health, Egmore, bringing academic excellence to clinical practice.",
      availability: "Mon to Sat",
      location: "Zion Health Center",
      phone: "9444509509",
      email: "info@zionhealth.com"
    },
    {
      id: 4,
      name: "Dr. D. Sathish Dev",
      specialty: "General Medicine",
      experience: "18+ years",
      education: "M.B.B.S., M.D., M.B.A.(H.A)",
      certifications: ["General Physician", "Family Physician", "Assistant Professor"],
      bio: "Dr. Sathish Dev is an experienced general and family physician with additional expertise in healthcare administration. He serves as Assistant Professor at Vels Medical College & Hospital.",
      availability: "Mon to Sat",
      location: "Zion Health Center",
      phone: "9444509509",
      email: "info@zionhealth.com"
    },
    {
      id: 5,
      name: "Dr. Sugantha Valli",
      specialty: "Radiology & Microbiology",
      experience: "12+ years",
      education: "M.B.B.S., M.D.",
      certifications: ["Sonologist", "Clinical Microbiologist", "Assistant Professor"],
      bio: "Dr. Sugantha Valli specializes in diagnostic imaging and clinical microbiology. She serves as Assistant Professor at Vels Medical College & Hospital, combining clinical expertise with academic teaching.",
      availability: "Mon to Sat",
      location: "Zion Health Center",
      phone: "9444509509",
      email: "info@zionhealth.com"
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