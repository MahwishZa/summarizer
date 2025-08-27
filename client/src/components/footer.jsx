import { Link } from 'react-router-dom';
import { navigation } from '../assets/content';

const Footer = () => {
  return (
    <footer className="py-10 px-4">
      <div className="rounded-3xl shadow-md max-w-7xl mx-auto px-6 sm:px-12 py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-12">
          {/* Logo */}
          <div className="sm:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Scribe</h2>
            <p className="text-sm leading-relaxed">
              Scribe is your AI-powered assistant for fast, accurate text summarization. Whether you're processing reports, articles, or documents—Scribe makes it easy to distill content in seconds.
            </p>
          </div>

          {/* Links */}
          <div className="sm:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="sm:w-1/3 flex flex-col justify-start bg-accent text-[#2A2B2A] p-6 rounded-3xl">
            <h3 className="text-xl font-semibold mb-4">Ready to summarize?</h3>
            <p className="text-sm mb-4">
              Start turning lengthy content into clear, concise summaries effortlessly
            </p>
            <Link to="/service" className="btn px-4 py-2">
              Try Now
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-[#F7F7F7] pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Scribe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;