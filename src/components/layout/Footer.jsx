import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/bhuwankhatri' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/bhuwankhatri' },
    { icon: <FaTwitter />, href: 'https://twitter.com/bhuwankhatri' },
  ];

  return (
    <footer className="bg-secondary text-text-muted py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Bhuwan Khatri. All rights reserved.</p>
        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-accent transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;