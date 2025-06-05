import React from 'react';
import { cn } from '../../utils/cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={cn(
      'mb-8',
      centered && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;