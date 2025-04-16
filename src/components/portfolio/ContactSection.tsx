
import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For a real implementation, you would handle the form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Show success message (in a real app)
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-deep-purple/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-60 h-60 rounded-full bg-portfolio-purple/5 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-portfolio-teal/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto mb-6"></div>
          <p className="text-portfolio-gray max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out. I'm always open to new ideas and collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact info cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-portfolio-deep-purple/80 backdrop-blur-sm border border-portfolio-purple/10 rounded-xl p-6 transition-all duration-300 hover:border-portfolio-purple/30">
              <div className="w-12 h-12 rounded-full bg-portfolio-purple/10 flex items-center justify-center mb-4">
                <Mail size={20} className="text-portfolio-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Email Me</h3>
              <p className="text-portfolio-gray text-sm mb-2">I'll respond as soon as possible</p>
              <a href="mailto:hello@example.com" className="text-portfolio-teal hover:underline">hello@example.com</a>
            </div>
            
            <div className="bg-portfolio-deep-purple/80 backdrop-blur-sm border border-portfolio-purple/10 rounded-xl p-6 transition-all duration-300 hover:border-portfolio-purple/30">
              <div className="w-12 h-12 rounded-full bg-portfolio-purple/10 flex items-center justify-center mb-4">
                <MapPin size={20} className="text-portfolio-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <p className="text-portfolio-gray text-sm mb-2">Available for remote work</p>
              <p className="text-portfolio-teal">New York, USA</p>
            </div>
            
            <div className="bg-portfolio-deep-purple/80 backdrop-blur-sm border border-portfolio-purple/10 rounded-xl p-6 transition-all duration-300 hover:border-portfolio-purple/30">
              <div className="w-12 h-12 rounded-full bg-portfolio-purple/10 flex items-center justify-center mb-4">
                <Phone size={20} className="text-portfolio-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Call Me</h3>
              <p className="text-portfolio-gray text-sm mb-2">Mon-Fri, 9am-5pm EST</p>
              <a href="tel:+11234567890" className="text-portfolio-teal hover:underline">+1 (123) 456-7890</a>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-portfolio-deep-purple/80 backdrop-blur-sm border border-portfolio-purple/10 rounded-xl p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-portfolio-gray mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-portfolio-deep-purple border border-portfolio-purple/20 rounded-md px-4 py-2 text-portfolio-white focus:border-portfolio-teal focus:outline-none focus:ring-1 focus:ring-portfolio-teal transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm text-portfolio-gray mb-1">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-portfolio-deep-purple border border-portfolio-purple/20 rounded-md px-4 py-2 text-portfolio-white focus:border-portfolio-teal focus:outline-none focus:ring-1 focus:ring-portfolio-teal transition-colors"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm text-portfolio-gray mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-portfolio-deep-purple border border-portfolio-purple/20 rounded-md px-4 py-2 text-portfolio-white focus:border-portfolio-teal focus:outline-none focus:ring-1 focus:ring-portfolio-teal transition-colors"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm text-portfolio-gray mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-portfolio-deep-purple border border-portfolio-purple/20 rounded-md px-4 py-2 text-portfolio-white resize-none focus:border-portfolio-teal focus:outline-none focus:ring-1 focus:ring-portfolio-teal transition-colors"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-portfolio-purple hover:bg-portfolio-bright-purple text-white py-3 px-8 rounded-md transition-all duration-300 flex items-center gap-2 group"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
