"use client";

import React from 'react';
import { NewsletterPanel } from '@/components/home/NewsletterPanel';
import { AppDownloadPanel } from '@/components/home/AppDownloadPanel';

export const NewsletterAppSection = () => {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-16 bg-white overflow-hidden">
      <div className="mx-auto flex justify-center px-4 relative z-10">
        <div
          className="relative flex flex-col lg:flex-row items-center justify-between overflow-hidden border-t"
          style={{
            width: '90%',
            minHeight: '504.75px',
            padding: '56px',
            gap: '32px',
            background: 'linear-gradient(135deg, #F3F4F6 0%, #FFFFFF 50%, #ECFDF5 100%)',
            borderColor: 'rgba(208, 250, 229, 0.8)',
            boxShadow: '0px 25px 50px -12px rgba(0, 188, 125, 0.15)',
            borderRadius: '48px'
          }}
        >
          <NewsletterPanel />

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-[350px] bg-green-500/10 mx-6"></div>

          <AppDownloadPanel />
        </div>
      </div>
    </section>
  );
};