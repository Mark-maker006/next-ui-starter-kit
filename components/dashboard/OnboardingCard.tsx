'use client';

import { CheckIcon } from 'lucide-react';
import { dashboardData } from '@/data/dashboard';
import { TiltCard } from './TiltCard';

export function OnboardingCard() {
  const completedCount = dashboardData.onboardingTasks.filter(
    (task) => task.completed,
  ).length;
  const totalCount = dashboardData.onboardingTasks.length;
  const progressPercent = (completedCount / totalCount) * 100;

  return (
    <TiltCard className="cursor-pointer">
      <div className="bg-neutral-surface dark:bg-dark-neutral-surface rounded-2xl p-6 border border-neutral-border dark:border-dark-neutral-border">
        <div className="flex items-center justify-between mb-6 min-w-0">
          <h3 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain truncate">
            入职待办
          </h3>
          <span className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted shrink-0 ml-2">
            {completedCount}/{totalCount} 已完成
          </span>
        </div>

        <div className="h-2 bg-neutral-border dark:bg-dark-neutral-border rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-primary-500 dark:bg-dark-primary-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="space-y-3">
          {dashboardData.onboardingTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-3 p-3 bg-neutral-background dark:bg-dark-neutral-border/50 rounded-xl min-w-0"
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                  task.completed
                    ? 'bg-primary-500 dark:bg-dark-primary-500'
                    : 'border-2 border-neutral-border dark:border-dark-neutral-textMuted'
                }`}
              >
                {task.completed && (
                  <CheckIcon className="w-3 h-3 text-neutral-900 dark:text-dark-neutral-background" />
                )}
              </div>
              <span
                className={`flex-1 text-sm truncate ${
                  task.completed
                    ? 'text-neutral-textMuted dark:text-dark-neutral-textMuted line-through'
                    : 'text-neutral-textMain dark:text-dark-neutral-textMain'
                }`}
              >
                {task.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
