import React from 'react';

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-2 mb-8">
      {subtitle && (
        <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <div className="h-1 w-16 bg-green-500 rounded mt-1"></div>
    </div>
  );
};
