"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowDownCircle,
  Facebook,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

// Schema
const fromSchema = z.object({
  YourName: z.string().min(1, "Name is required"),
  YourEmail: z.string().email("Invalid email address"),
  Message: z.string().min(1, "Message is required"),
});
type FromType = z.infer<typeof fromSchema>;

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FromType>({
    resolver: zodResolver(fromSchema),
  });

  const handleFormSubmit = (data: FromType) => {
    console.log("Form submitted with data:", data);
    reset();
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center px-4 md:px-0 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto py-10 text-white">
          <div className="bg-transparent w-full flex flex-col lg:flex-row justify-between items-start lg:space-x-10 space-y-10 lg:space-y-0 px-4 md:px-8">
            {/* Contact Info */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Get in Touch{" "}
              </h2>
              <p className="mt-2 md:mt-4 text-sm md:text-base">
                I am a passionate web developer and designer dedicated to
                creating intuitive and dynamic user experiences. Let's connect
                and build something great together!
              </p>

              <div className="mt-6 space-y-3 text-sm md:text-base">
                <p className="flex items-center gap-2">
                  <span className="text-[#6E76FB] font-medium">Phone:</span>
                  <span>+91 99036 83766</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#6E76FB] font-medium">Email:</span>
                  <span>jayantadebnathwork7@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#6E76FB] font-medium">Location:</span>
                  <span>North 24 Pgs, Kolkata, India</span>
                </p>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd3gpXCte110LabZCkp0P6iffgCw38Qg4crdjlxHOHVoQABvw/viewform?usp=header"
                target="_blank"
              >
                <Button
                  type="submit"
                  className="w-1/2 bg-gradient-to-r from-[#6E76FB] to-[#A970FF] text-white px-8 py-5 mt-8 cursor-pointer text-lg font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2"
                >
                  Send Message
                  <ArrowDownCircle className="w-5 h-5" />
                </Button>
              </a>

              <div className="w-full mt-6">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-white">
                  Social Handle
                </h2>
                <div className="flex items-center space-x-4">
                  {[
                    {
                      icon: <Linkedin className="text-[#6E76FB]" />,
                      href: "https://www.linkedin.com/in/jayanta-debnath-622a7b316/",
                      label: "LinkedIn",
                    },
                    {
                      icon: <Github className="text-[#6E76FB]" />,
                      href: "https://github.com/Creative-Wave",
                      label: "GitHub",
                    },
                    {
                      icon: <Twitter className="text-[#6E76FB]" />,
                      href: "https://twitter.com",
                      label: "Twitter",
                    },
                    {
                      icon: <Mail className="text-[#6E76FB]" />,
                      href: "mailto:jayantadebnathwork7@gmail.com",
                      label: "Email",
                    },
                    {
                      icon: <Facebook className="text-[#6E76FB]" />,
                      href: "https://www.facebook.com/profile.php?id=100048386407006",
                      label: "Facebook",
                    },
                  ].map(({ icon, href, label }, i) => (
                    <a
                      key={i}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 md:w-12 md:h-12 bg-white flex justify-center items-center rounded-full hover:scale-105 transition"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Google map*/}
            <motion.div
              className="w-full lg:w-1/2 backdrop-blur-sm bg-white/5 border border-[#6E76FB] rounded-xl p-5 sm:p-8 shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-lg shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5744822653013!2d88.48265187508741!3d22.583800879503435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e56a2f75cf3%3A0x295d14f36b89e0d0!2sBarasat%2C%20West%20Bengal%20700324!5e0!3m2!1sen!2sin!4v1691483346279!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
          <div className="bg-white text-black p-6 md:p-8 rounded-xl shadow-lg text-center max-w-sm w-full">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
              Success!
            </h3>
            <p className="text-sm md:text-base">
              Your message has been sent successfully.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
