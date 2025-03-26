import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 md:px-10 py-12 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-700 mb-6">
            Have questions or want to get involved? Reach out to us using the form or contact information below.
          </p>
          
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <IoMailOutline className="text-blue-800" size={22} />
                  <a href="mailto:contact@globalshapersbengaluru.org" className="text-blue-800 hover:underline">
                    contact@globalshapersbengaluru.org
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <IoLocationOutline className="text-blue-800" size={22} />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="border-gray-300 focus:border-blue-800"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Your Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="border-gray-300 focus:border-blue-800"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                required
                className="border-gray-300 focus:border-blue-800"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows="5"
                required
                className="border-gray-300 focus:border-blue-800"
              />
            </div>
            
            <Button
              type="submit"
              className="bg-blue-800 text-white hover:bg-blue-700 w-full"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
} 