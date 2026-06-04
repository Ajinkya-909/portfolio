import socials from "../data/socials.json";
import { Mail, MapPin, Download } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-black-50 bg-black-100/30 relative overflow-hidden mt-20">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white-50/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0 items-center justify-between">
          
          {/* Left / Center Info */}
          <div className="md:col-span-8 flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="text-blue-50 text-sm max-w-xs">
                Feel free to reach out for collaborations or just a friendly hello.
              </p>
            </div>
            
            <div className="space-y-4">
              <a href={`mailto:${socials.email}`} className="flex items-center gap-3 text-sm text-blue-50 hover:text-white-50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-black-200 border border-black-50 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                {socials.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-blue-50">
                <div className="w-8 h-8 rounded-full bg-black-200 border border-black-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                {socials.location}
              </div>
            </div>
          </div>

          {/* Right Socials & Resume */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6">
            <div className="flex items-center gap-3">
              <a href={socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-black-200 border border-black-50 flex items-center justify-center text-blue-50 hover:text-black hover:bg-white-50 transition-all">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-black-200 border border-black-50 flex items-center justify-center text-blue-50 hover:text-black hover:bg-white-50 transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={socials.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-black-200 border border-black-50 flex items-center justify-center text-blue-50 hover:text-black hover:bg-white-50 transition-all">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
            
            <a href={socials.resume} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-black-50 bg-black-200 hover:border-white-50/30 text-white-50 text-sm font-semibold transition-all">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-black-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-50/50">
          <p>&copy; {new Date().getFullYear()} Ajinkya Deshmukh. All rights reserved.</p>
          <p className="flex items-center gap-1">Built with React & Vite <span className="text-white-50">✨</span></p>
        </div>
      </div>
    </footer>
  );
}
