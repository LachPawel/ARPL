import React from 'react';
import { Github, Youtube, Linkedin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { getTextColor, getBorderColor } from '../../theme';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer 
      className="border-t py-12 px-4 sm:px-6 mt-20"
      style={{ borderColor: getBorderColor(isDark) }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/LachPawel"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-50"
              style={{ color: getTextColor(isDark, 'primary') }}
            >
              <Github size={20} />
            </a>
            <a
              href="https://youtube.com/@arplearn"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-50"
              style={{ color: getTextColor(isDark, 'primary') }}
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/pawelach/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-50"
              style={{ color: getTextColor(isDark, 'primary') }}
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Email */}
          <a 
            href="mailto:pawel@arpl.dev"
            className="text-sm font-light hover:opacity-70 transition-opacity"
            style={{ color: getTextColor(isDark, 'secondary') }}
          >
            pawel@arpl.dev
          </a>

          {/* Copyright */}
          <p 
            className="text-xs font-light"
            style={{ color: getTextColor(isDark, 'tertiary') }}
          >
            © {new Date().getFullYear()} ARPL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
