import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Filter, Play, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = [
    { id: 'all', label: 'All Media' },
    { id: 'photos', label: 'Photos' },
    { id: 'videos', label: 'Videos' },
    { id: '2024', label: '2024' },
    { id: '2023', label: '2023' }
  ];

  const mediaItems = [
    {
      id: 1,
      type: 'photo',
      src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cultural Fest Performance',
      year: '2024',
      event: 'Annual Cultural Fest',
      category: 'event'
    },
    {
      id: 2,
      type: 'photo',
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Team Collaboration',
      year: '2024',
      event: 'Workshop',
      category: 'behind-scenes'
    },
    {
      id: 3,
      type: 'video',
      src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sports Championship Highlights',
      year: '2023',
      event: 'Sports Day',
      category: 'event'
    },
    {
      id: 4,
      type: 'photo',
      src: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Photography Workshop',
      year: '2024',
      event: 'Workshop',
      category: 'workshop'
    },
    {
      id: 5,
      type: 'photo',
      src: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Alumni Meet Gathering',
      year: '2023',
      event: 'Alumni Meet',
      category: 'event'
    },
    {
      id: 6,
      type: 'photo',
      src: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Freshers Welcome',
      year: '2023',
      event: 'Freshers',
      category: 'event'
    },
    {
      id: 7,
      type: 'video',
      src: 'https://images.pexels.com/photos/1181265/pexels-photo-1181265.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tech Symposium Coverage',
      year: '2024',
      event: 'Symposium',
      category: 'event'
    },
    {
      id: 8,
      type: 'photo',
      src: 'https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Campus Life Moments',
      year: '2024',
      event: 'Daily Life',
      category: 'campus'
    },
    {
      id: 9,
      type: 'photo',
      src: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Art Exhibition',
      year: '2024',
      event: 'Cultural Fest',
      category: 'event'
    },
    {
      id: 10,
      type: 'video',
      src: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Behind the Scenes',
      year: '2024',
      event: 'Production',
      category: 'behind-scenes'
    },
    {
      id: 11,
      type: 'photo',
      src: 'https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Student Awards Ceremony',
      year: '2023',
      event: 'Awards',
      category: 'event'
    },
    {
      id: 12,
      type: 'photo',
      src: 'https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Innovation Showcase',
      year: '2024',
      event: 'Tech Fair',
      category: 'event'
    }
  ];

  const filteredItems = mediaItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photos') return item.type === 'photo';
    if (activeFilter === 'videos') return item.type === 'video';
    if (activeFilter === '2024' || activeFilter === '2023') return item.year === activeFilter;
    return true;
  });

  const openLightbox = (imageSrc: string, index: number) => {
    setLightboxImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredItems.length;
    setCurrentImageIndex(nextIndex);
    setLightboxImage(filteredItems[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredItems.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setLightboxImage(filteredItems[prevIndex].src);
  };

  return (
    <div className="pt-16 bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-dark-card border-b border-green/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-green">Our Gallery</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            A visual journey through NSUT's most memorable moments, captured by our talented team
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-dark-card/50 backdrop-blur-sm sticky top-16 z-40 border-b border-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-300" />
              <span className="font-medium text-gray-300">Filter Media:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-green text-black shadow-lg scale-105'
                      : 'bg-dark-card text-gray-300 hover:bg-green/20 hover:text-green border border-green/20'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white"
                style={{ 
                  height: index % 3 === 0 ? '320px' : index % 3 === 1 ? '280px' : '300px',
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => openLightbox(item.src, index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.event} • {item.year}</p>
                  </div>
                </div>

                {/* Media Type Icon */}
                <div className="absolute top-4 right-4">
                  {item.type === 'video' ? (
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <Play className="h-5 w-5 text-white" />
                    </div>
                  ) : (
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 left-4 bg-green text-black px-2 py-1 rounded text-xs font-medium">
                  {item.year}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-dark-card rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="h-12 w-12 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No media found</h3>
              <p className="text-gray-300">Try adjusting your filter to see more content.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="font-bold text-lg">{filteredItems[currentImageIndex]?.title}</h3>
              <p className="text-white/80">
                {filteredItems[currentImageIndex]?.event} • {filteredItems[currentImageIndex]?.year}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-dark-card border-t border-green/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Want to See Your Work Here?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our photography and videography team to contribute to our growing collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="inline-flex items-center space-x-2 bg-green text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-green-dark transition-colors"
            >
              <ImageIcon className="h-5 w-5" />
              <span>Join Photography Team</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-green/20 backdrop-blur-sm text-green border border-green/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-green/30 transition-colors"
            >
              <Play className="h-5 w-5" />
              <span>Submit Your Work</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;