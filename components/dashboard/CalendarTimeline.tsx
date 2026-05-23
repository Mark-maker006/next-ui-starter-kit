'use client';

import Image from 'next/image';
import { ClockIcon, VideoIcon } from 'lucide-react';
import { dashboardData } from '@/data/dashboard';
import { TiltCard } from './TiltCard';

export function CalendarTimeline() {
  return (
    <TiltCard className="cursor-pointer">
      <div className="bg-neutral-surface dark:bg-dark-neutral-surface rounded-2xl border border-neutral-border dark:border-dark-neutral-border p-6">
        <div className="flex items-center justify-between mb-6 min-w-0">
          <h3 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain truncate">
            今日日程
          </h3>
          <span className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted shrink-0">
            {new Date().toLocaleDateString('zh-CN', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>

        <div className="space-y-4">
          {dashboardData.calendarEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-start gap-4 p-4 bg-neutral-background dark:bg-dark-neutral-background rounded-xl hover:bg-neutral-border/50 dark:hover:bg-dark-neutral-border/50 transition-colors min-w-0"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-neutral-textMuted dark:text-dark-neutral-textMuted min-w-20 shrink-0">
                <ClockIcon className="w-4 h-4" />
                {event.time}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 min-w-0">
                  <VideoIcon className="w-4 h-4 text-primary-500 dark:text-dark-primary-500 shrink-0" />
                  <span className="font-medium text-neutral-textMain dark:text-dark-neutral-textMain truncate">
                    {event.title}
                  </span>
                </div>

                {event.candidates.length > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {event.candidates.map((candidate, idx) => (
                        <div
                          key={idx}
                          className="w-8 h-8 rounded-full border-2 border-neutral-surface dark:border-dark-neutral-surface overflow-hidden shrink-0"
                        >
                          <Image
                            src={candidate}
                            alt="Candidate"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-neutral-textMuted dark:text-dark-neutral-textMuted truncate">
                      {event.candidates.length} 位候选人
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
