'use client';

import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { dashboardData } from '@/data/dashboard';
import { TiltCard } from './TiltCard';
import { getAssetPath } from '@/lib/utils';

export function ProfileCard() {
  return (
    <TiltCard className="cursor-pointer">
      <div className="bg-neutral-surface dark:bg-dark-neutral-surface rounded-2xl p-6 border border-neutral-border dark:border-dark-neutral-border overflow-hidden">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-border dark:border-dark-neutral-border shrink-0">
            <img
              src={getAssetPath(dashboardData.user.avatar)}
              alt={dashboardData.user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain truncate">
              {dashboardData.user.name}
            </h3>
            <p className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted truncate">
              {dashboardData.user.role}
            </p>
          </div>
          <div className="bg-primary-500 dark:bg-dark-primary-500 text-neutral-900 dark:text-dark-neutral-background px-3 py-1 rounded-full text-sm font-semibold shadow-md shrink-0">
            {dashboardData.user.salary}
          </div>
        </div>

        <div className="space-y-3 mt-6 pt-4 border-t border-neutral-border dark:border-dark-neutral-border">
          <div className="flex items-center gap-3 text-sm text-neutral-textMain dark:text-dark-neutral-textMain min-w-0">
            <MailIcon className="w-4 h-4 shrink-0 text-neutral-textMuted dark:text-dark-neutral-textMuted" />
            <span className="truncate">sihan.chen@mark.cc</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-textMain dark:text-dark-neutral-textMain">
            <PhoneIcon className="w-4 h-4 shrink-0 text-neutral-textMuted dark:text-dark-neutral-textMuted" />
            <span>+86 138 0000 1234</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-textMain dark:text-dark-neutral-textMain min-w-0">
            <MapPinIcon className="w-4 h-4 shrink-0 text-neutral-textMuted dark:text-dark-neutral-textMuted" />
            <span className="truncate">上海市徐汇区</span>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
