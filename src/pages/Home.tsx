import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Award, Clock, Stethoscope, Brain, Bone, Eye } from "lucide-react";
import heroImage from "@/assets/hospital-hero.jpg";

const Home = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Comprehensive primary care for all your health needs"
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Advanced heart care with state-of-the-art technology"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert neurological care and treatment"
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Specialized bone and joint treatment"
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care and vision services"
    },
    {
      icon: Users,
      title: "Pediatrics",
      description: "Dedicated healthcare for children and adolescents"
    }
  ];

  const stats = [
    { icon: Users, number: "50,000+", label: "Happy Patients" },
    { icon: Award, number: "25+", label: "Years Experience" },
    { icon: Stethoscope, number: "50+", label: "Expert Doctors" },
    { icon: Clock, number: "24/7", label: "Emergency Care" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-pink-300">Zion Health Center</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Providing exceptional healthcare services with compassion, expertise, and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-medical bg-primary hover:bg-primary/90">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-medical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Medical Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare solutions tailored to meet your needs with the latest technology and expert care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-medical transition-smooth border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-gradient rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Zion Health Center
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over 25 years, Zion Health Center has been dedicated to providing exceptional 
                healthcare services to our community. Our team of experienced medical professionals 
                is committed to delivering personalized care with compassion and expertise.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe in treating not just the condition, but the whole person. Our modern 
                facilities and advanced technology ensure that you receive the best possible care 
                in a comfortable and welcoming environment.
              </p>
              <Button size="lg" className="shadow-medical">
                Learn More About Us
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border-border">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Accredited</h3>
                <p className="text-sm text-muted-foreground">Joint Commission Certified</p>
              </Card>
              <Card className="p-6 text-center border-border">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">Board-certified physicians</p>
              </Card>
              <Card className="p-6 text-center border-border">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Compassionate</h3>
                <p className="text-sm text-muted-foreground">Patient-centered care</p>
              </Card>
              <Card className="p-6 text-center border-border">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">24/7 Care</h3>
                <p className="text-sm text-muted-foreground">Emergency services</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-medical-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Schedule an appointment with our expert medical team today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-lg">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;