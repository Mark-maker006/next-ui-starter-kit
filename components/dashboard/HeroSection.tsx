'use client';

import { PlayIcon, VideoIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import { dashboardData } from '@/data/dashboard';
import { TiltCard } from './TiltCard';
import { getAssetPath } from '@/lib/utils';

export function HeroSection() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-neutral-textMain dark:text-dark-neutral-textMain mb-3 leading-tight">
        欢迎回来，思涵
      </h1>
      <p className="text-base text-neutral-textMuted dark:text-dark-neutral-textMuted mb-6">
        今天的招聘进展、团队负载和入职事项已为你整理好。
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        {dashboardData.stats.map((stat) => (
          <TiltCard key={stat.label} className="cursor-pointer">
            <div className="bg-neutral-surface dark:bg-dark-neutral-surface rounded-2xl p-4 border border-neutral-border dark:border-dark-neutral-border h-full flex flex-col">
              <div className="text-2xl lg:text-3xl font-bold text-neutral-textMain dark:text-dark-neutral-textMain mb-2 leading-none">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted mb-4">
                {stat.label}
              </div>
              <div className="mt-auto h-1.5 bg-neutral-border dark:bg-dark-neutral-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 dark:bg-dark-primary-500 rounded-full"
                  style={{ width: `${(stat.value / stat.total) * 100}%` }}
                />
              </div>
            </div>
          </TiltCard>
        ))}

        <TiltCard className="cursor-pointer">
          <div className="bg-neutral-surface dark:bg-dark-neutral-surface rounded-2xl p-4 border border-neutral-border dark:border-dark-neutral-border">
            <div className="mb-3">
              <h2 className="text-base font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                快捷操作
              </h2>
              <p className="text-xs text-neutral-textMuted dark:text-dark-neutral-textMuted">
                一键开启下一场面试流程
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 w-full py-2 bg-primary-500 dark:bg-dark-primary-500 text-neutral-900 dark:text-dark-neutral-background rounded-xl font-medium hover:bg-primary-400 dark:hover:bg-dark-primary-400 transition-colors">
              <PlayIcon className="w-4 h-4" />
              开始面试
            </button>

            <div className="border-t border-neutral-border dark:border-dark-neutral-border pt-3 mt-3">
              <h3 className="text-xs font-medium text-neutral-textMuted dark:text-dark-neutral-textMuted mb-2">
                即将开始
              </h3>
              {dashboardData.upcomingInterviews.length > 0 && (
                <div className="flex items-center gap-2 p-1.5 bg-neutral-background dark:bg-dark-neutral-border/30 rounded-lg">
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                    <img
                      src={getAssetPath(
                        dashboardData.upcomingInterviews[0].avatar,
                      )}
                      alt={dashboardData.upcomingInterviews[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-neutral-textMain dark:text-dark-neutral-textMain truncate block">
                      {dashboardData.upcomingInterviews[0].name}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {dashboardData.upcomingInterviews[0].type ===
                      '视频面试' ? (
                        <VideoIcon className="w-3 h-3 text-primary-500 dark:text-dark-primary-500" />
                      ) : (
                        <MapPinIcon className="w-3 h-3 text-primary-500 dark:text-dark-primary-500" />
                      )}
                      <span className="text-xs text-primary-500 dark:text-dark-primary-500">
                        {dashboardData.upcomingInterviews[0].type}
                      </span>
                      <span className="text-xs text-neutral-textMuted dark:text-dark-neutral-textMuted ml-auto">
                        {dashboardData.upcomingInterviews[0].time}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </TiltCard>
      </div>

      <TiltCard className="cursor-pointer">
        <div className="bg-neutral-surface dark:bg-dark-neutral-surface rounded-2xl border border-neutral-border dark:border-dark-neutral-border p-4">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h3 className="text-base font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
              今日日程
            </h3>
            <span className="text-xs text-neutral-textMuted dark:text-dark-neutral-textMuted">
              {new Date().toLocaleDateString('zh-CN', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {dashboardData.calendarEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-start gap-3 p-3 bg-neutral-background dark:bg-dark-neutral-background rounded-xl hover:bg-neutral-border/50 dark:hover:bg-dark-neutral-border/50 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-textMuted dark:text-dark-neutral-textMuted shrink-0">
                  <ClockIcon className="w-3.5 h-3.5" />
                  {event.time}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1.5 min-w-0">
                    <VideoIcon className="w-3.5 h-3.5 text-primary-500 dark:text-dark-primary-500 shrink-0" />
                    <span className="text-sm font-medium text-neutral-textMain dark:text-dark-neutral-textMain truncate">
                      {event.title}
                    </span>
                  </div>

                  {event.candidates.length > 0 && (
                    <div className="flex items-center gap-1.5">
                      <div className="flex -space-x-1.5">
                        {event.candidates.slice(0, 3).map((candidate, idx) => (
                          <div
                            key={idx}
                            className="w-6 h-6 rounded-full border-2 border-neutral-surface dark:border-dark-neutral-surface overflow-hidden shrink-0"
                          >
                            <img
                              src={getAssetPath(candidate)}
                              alt="Candidate"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-neutral-textMuted dark:text-dark-neutral-textMuted">
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
    </div>
  );
}
