'use client';

import { dashboardData } from '@/data/dashboard';
import { TiltCard } from './TiltCard';

export function TimeTracker() {
  const { totalHours, targetHours, percentage } = dashboardData.timeTracker;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <TiltCard className="cursor-pointer">
      <div className="bg-neutral-surface dark:bg-dark-neutral-surface rounded-2xl border border-neutral-border dark:border-dark-neutral-border p-6">
        <h3 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain mb-6 text-center">
          本周工作负载
        </h3>

        <div className="flex items-center justify-center">
          <div className="relative w-44 h-44">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 160 160"
            >
              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                className="text-neutral-border dark:text-dark-neutral-border"
              />
              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="text-primary-500 dark:text-dark-primary-500 transition-all duration-500"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-neutral-textMain dark:text-dark-neutral-textMain">
                {totalHours}h
              </span>
              <span className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                共 {targetHours}h
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 dark:bg-dark-primary-500/10 rounded-full">
            <span className="w-2 h-2 bg-primary-500 dark:bg-dark-primary-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-700 dark:text-dark-primary-700">
              已完成 {percentage}%
            </span>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
