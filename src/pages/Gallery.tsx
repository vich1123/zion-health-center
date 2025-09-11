import { useState } from "react";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "facilities", name: "Facilities" },
    { id: "equipment", name: "Equipment" },
    { id: "staff", name: "Staff" },
    { id: "events", name: "Events" }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Modern Reception Area",
      category: "facilities",
      description: "Our welcoming reception area with comfortable seating",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Advanced MRI Scanner",
      category: "equipment",
      description: "State-of-the-art MRI imaging technology",
      image: "https://images.unsplash.com/photo-1583912086096-8c60d75d3ad3?w=500&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Emergency Department",
      category: "facilities",
      description: "24/7 emergency care facility",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Surgical Suite",
      category: "facilities",
      description: "Modern operating theater with advanced equipment",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Medical Team Meeting",
      category: "staff",
      description: "Our dedicated medical professionals in consultation",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Ultrasound Equipment",
      category: "equipment",
      description: "High-resolution ultrasound diagnostic equipment",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Patient Room",
      category: "facilities",
      description: "Comfortable private patient rooms",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Nursing Staff",
      category: "staff",
      description: "Our caring and professional nursing team",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Health Fair Event",
      category: "events",
      description: "Community health screening event",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=400&fit=crop"
    },
    {
      id: 10,
      title: "Laboratory",
      category: "facilities",
      description: "Fully equipped diagnostic laboratory",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=400&fit=crop"
    },
    {
      id: 11,
      title: "CT Scanner",
      category: "equipment",
      description: "Advanced CT imaging technology",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=400&fit=crop"
    },
    {
      id: 12,
      title: "Medical Conference",
      category: "events",
      description: "Annual medical conference and continuing education",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=400&fit=crop"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a visual tour of our modern facilities, advanced equipment, and dedicated team members
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-smooth ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-medical"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-medical transition-smooth border-border">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Virtual Tour CTA */}
        <div className="text-center mt-16 p-8 bg-medical-gradient rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to See More?
          </h3>
          <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
            Schedule a visit or take our virtual tour to explore our facilities and meet our team in person
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-smooth shadow-lg">
              Schedule a Visit
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-smooth">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;