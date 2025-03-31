'use client';

import { contactContent } from '@/cms/contact';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message sent successfully!');
        // Clear the form by resetting formData to an empty object
        setFormData({});
        // Also reset the form element to clear the UI
        e.target.reset();
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{contactContent.hero.title}</h1>
        <h2 className="text-2xl text-blue-600 mb-4">{contactContent.hero.subtitle}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{contactContent.hero.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            { contactContent?.contactInfo?.email && <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href={`mailto:${contactContent.contactInfo.email}`} className="text-blue-600 hover:underline">
                  {contactContent.contactInfo.email}
                </a>
              </div>
            </div>}
            { contactContent?.contactInfo?.phone && <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href={`tel:${contactContent.contactInfo.phone}`} className="text-blue-600 hover:underline">
                  {contactContent.contactInfo.phone}
                </a>
              </div>
            </div>}
            { contactContent?.contactInfo?.address && <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">{contactContent.contactInfo.address}</p>
              </div>
            </div>}
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              { contactContent?.contactInfo?.socialMedia?.linkedin && <a href={contactContent.contactInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <Linkedin className="w-6 h-6" />
              </a>}
              { contactContent?.contactInfo?.socialMedia?.twitter && <a href={contactContent.contactInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <Twitter className="w-6 h-6" />
              </a>}
              { contactContent?.contactInfo?.socialMedia?.instagram && <a href={contactContent.contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <Instagram className="w-6 h-6" />
              </a>}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">{contactContent.form.title}</h2>
          <p className="text-gray-600 mb-6">{contactContent.form.description}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {contactContent.form.fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    rows="4"
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    value={formData[field.name] || ''}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    value={formData[field.name] || ''}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
     { contactContent?.faq?.questions && <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">{contactContent.faq.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactContent.faq.questions.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>}
    </div>
  );
} 