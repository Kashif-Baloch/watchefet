import React from 'react';
import { Clock } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Clock className="h-5 w-5 text-gold-500" />
      <span className="font-serif text-xl uppercase tracking-widest text-white">
        Timeless <span className="text-gold-500">Chrono</span>
      </span>
    </div>
  );
};

export default Logo;