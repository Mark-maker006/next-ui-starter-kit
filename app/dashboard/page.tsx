'use client';

import {
  TopNav,
  HeroSection,
  ProfileCard,
  AccordionList,
  ProgressChart,
  TimeTracker,
  OnboardingCard,
} from '@/components/dashboard';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-neutral-background dark:bg-dark-neutral-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <TopNav />

        <HeroSection />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative items-start">
          <div className="lg:col-span-3 space-y-6 relative z-10">
            <ProfileCard />
            <AccordionList />
          </div>

          <div className="lg:col-span-5 space-y-6 relative z-10">
            <ProgressChart />
          </div>

          <div className="lg:col-span-4 space-y-6 relative z-10">
            <TimeTracker />
            <OnboardingCard />
          </div>
        </div>
      </div>
    </div>
  );
}