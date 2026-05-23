'use client';

import * as Accordion from '@radix-ui/react-accordion';
import {
  ChevronDownIcon,
  LaptopIcon,
  DollarSignIcon,
  GiftIcon,
} from 'lucide-react';
import { dashboardData } from '@/data/dashboard';
import { TiltCard } from './TiltCard';

const iconMap: Record<string, typeof LaptopIcon> = {
  办公设备: LaptopIcon,
  薪酬信息: DollarSignIcon,
  员工福利: GiftIcon,
};

export function AccordionList() {
  return (
    <TiltCard className="cursor-pointer">
      <div className="bg-neutral-surface dark:bg-dark-neutral-surface rounded-2xl border border-neutral-border dark:border-dark-neutral-border overflow-hidden">
        <Accordion.Root type="multiple" className="w-full">
          {dashboardData.accordionItems.map((item) => {
            const Icon = iconMap[item.title] || LaptopIcon;
            return (
              <Accordion.Item
                key={item.title}
                value={item.title}
                className="border-b border-neutral-border dark:border-dark-neutral-border last:border-b-0"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-neutral-background dark:hover:bg-dark-neutral-background transition-colors group">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-neutral-background dark:bg-dark-neutral-background shrink-0">
                        <Icon className="w-4 h-4 text-neutral-textMuted dark:text-dark-neutral-textMuted" />
                      </div>
                      <span className="font-medium text-neutral-textMain dark:text-dark-neutral-textMain truncate">
                        {item.title}
                      </span>
                    </div>
                    <ChevronDownIcon className="w-4 h-4 text-neutral-textMuted dark:text-dark-neutral-textMuted transition-transform duration-200 group-data-[state=open]:rotate-180 shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-4 pb-4 pt-2">
                    <ul className="space-y-2">
                      {item.items.map((subItem, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted pl-10 truncate"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </div>
    </TiltCard>
  );
}
