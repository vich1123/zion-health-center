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
      title: "Senior Consultant",
      category: "staff",
      description: "Experienced medical consultant providing expert care",
      image: "/staff/doctor-1.jpg"
    },
    {
      id: 2,
      title: "Chief Medical Officer",
      category: "staff",
      description: "Senior physician with extensive clinical experience",
      image: "/staff/doctor-2.jpg"
    },
    {
      id: 3,
      title: "General Physician",
      category: "staff",
      description: "Dedicated family physician providing comprehensive care",
      image: "/staff/doctor-3.jpg"
    },
    {
      id: 4,
      title: "Surgical Specialist",
      category: "staff",
      description: "Expert surgeon ready for complex procedures",
      image: "/staff/surgeon.jpg"
    },
    {
      id: 5,
      title: "Modern Operation Theater",
      category: "facilities",
      description: "State-of-the-art surgical suite with advanced technology",
      image: "/facilities/operation-theater.jpg"
    },
    {
      id: 6,
      title: "Surgical Microscope",
      category: "equipment",
      description: "High-precision surgical microscope for detailed procedures",
      image: "/equipment/surgical-microscope.jpg"
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