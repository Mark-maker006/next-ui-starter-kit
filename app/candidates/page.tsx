import {
  BriefcaseBusinessIcon,
  CalendarClockIcon,
  CheckCircle2Icon,
  Clock3Icon,
  FilterIcon,
  MapPinIcon,
  SearchIcon,
  SparklesIcon,
  UserRoundCheckIcon,
  UsersRoundIcon,
} from 'lucide-react';

import { TiltCard } from '@/components/dashboard/TiltCard';
import { TopNav } from '@/components/dashboard/TopNav';
import { Badge } from '@/components/shared/ui/badge';
import { Button } from '@/components/shared/ui/button';
import { Progress } from '@/components/shared/ui/progress';

const metrics = [
  { label: '活跃候选人', value: '128', trend: '本周新增 18 人' },
  { label: '待面试', value: '34', trend: '今天已排 12 场' },
  { label: 'Offer 阶段', value: '11', trend: '接受意向 86%' },
  { label: '阶段停留时长', value: '4.2天', trend: '较上月缩短 1.1 天' },
];

const filters = ['全部职位', '产品', '研发', '设计', '终面'];

const candidates = [
  {
    name: '林佳怡',
    role: '高级产品设计师',
    location: '上海',
    stage: '终面',
    stageValue: 86,
    score: '94',
    interview: '今天 14:30',
    tags: ['作品集优秀', '团队带教'],
    accent: '林',
  },
  {
    name: '周亦航',
    role: '前端工程师',
    location: '杭州',
    stage: '技术面',
    stageValue: 58,
    score: '88',
    interview: '明天 10:00',
    tags: ['React', '工程体系'],
    accent: '周',
  },
  {
    name: '王雨桐',
    role: '人力运营负责人',
    location: '北京',
    stage: '用人经理面',
    stageValue: 72,
    score: '91',
    interview: '5月24日 11:15',
    tags: ['流程设计', 'HRIS'],
    accent: '王',
  },
  {
    name: '赵晨',
    role: '增长分析师',
    location: '远程',
    stage: 'HR 初筛',
    stageValue: 34,
    score: '82',
    interview: '5月25日 16:00',
    tags: ['SQL', '实验分析'],
    accent: '赵',
  },
];

const stageSummary = [
  { label: '已寻访', count: 42, value: 76 },
  { label: '筛选中', count: 31, value: 58 },
  { label: '面试中', count: 26, value: 49 },
  { label: 'Offer', count: 11, value: 22 },
];

const nextActions = [
  { label: '发送 Offer 材料', Icon: CheckCircle2Icon },
  { label: '确认面试官反馈', Icon: UserRoundCheckIcon },
  { label: '推进 6 位初筛候选人', Icon: CalendarClockIcon },
];

export default function CandidatesPage() {
  return (
    <div className="min-h-screen bg-neutral-background transition-colors duration-300 dark:bg-dark-neutral-background">
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <TopNav />

        <TiltCard maxRotation={4} scale={1.01}>
          <section className="rounded-2xl border border-neutral-border bg-neutral-surface p-5 shadow-[var(--shadow-elevated)] dark:border-dark-neutral-border dark:bg-dark-neutral-surface sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-500/15 px-3 py-1 text-sm font-medium text-neutral-textMain dark:bg-dark-primary-500/15 dark:text-dark-secondary-500">
                  <UsersRoundIcon className="h-4 w-4 text-primary-500 dark:text-dark-primary-500" />
                  候选人工作台
                </div>
                <h1 className="text-3xl font-bold leading-tight text-neutral-textMain dark:text-dark-neutral-textMain">
                  候选人
                </h1>
                <p className="mt-2 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted sm:text-base">
                  跟踪活跃人才、面试推进状态，以及最接近 Offer 决策的候选人。
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-[minmax(220px,1fr)_auto] lg:min-w-[440px]">
                <div className="flex items-center gap-3 rounded-2xl border border-neutral-border bg-neutral-background px-4 py-3 dark:border-dark-neutral-border dark:bg-dark-neutral-background">
                  <SearchIcon className="h-4 w-4 shrink-0 text-neutral-textMuted dark:text-dark-neutral-textMuted" />
                  <span className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                    按职位、技能或候选人搜索
                  </span>
                </div>
                <Button
                  variant="outlinePrimary"
                  className="h-auto gap-2 rounded-2xl border-neutral-border bg-neutral-background px-4 py-3 dark:border-dark-neutral-border dark:bg-dark-neutral-background"
                >
                  <FilterIcon className="h-4 w-4" />
                  筛选
                </Button>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {filters.map((filter, index) => (
                <Badge
                  key={filter}
                  variant={index === 0 ? 'default' : 'outline'}
                  className={
                    index === 0
                      ? 'border-transparent bg-primary-500 text-neutral-900 dark:bg-dark-primary-500 dark:text-dark-neutral-background'
                      : 'border-neutral-border bg-neutral-background text-neutral-textMuted dark:border-dark-neutral-border dark:bg-dark-neutral-background dark:text-dark-neutral-textMuted'
                  }
                >
                  {filter}
                </Badge>
              ))}
            </div>
          </section>
        </TiltCard>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <TiltCard
              key={metric.label}
              className="h-full cursor-pointer"
              maxRotation={8}
              scale={1.02}
            >
              <div className="h-full rounded-2xl border border-neutral-border bg-neutral-surface p-4 dark:border-dark-neutral-border dark:bg-dark-neutral-surface">
                <p className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                  {metric.label}
                </p>
                <div className="mt-3 flex items-end justify-between gap-3">
                  <span className="text-3xl font-bold leading-none text-neutral-textMain dark:text-dark-neutral-textMain">
                    {metric.value}
                  </span>
                  <span className="text-xs font-medium text-primary-600 dark:text-dark-primary-500">
                    {metric.trend}
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <section className="space-y-4 lg:col-span-8">
            {candidates.map((candidate) => (
              <TiltCard
                key={candidate.name}
                className="cursor-pointer"
                maxRotation={6}
                scale={1.02}
              >
                <article className="rounded-2xl border border-neutral-border bg-neutral-surface p-4 dark:border-dark-neutral-border dark:bg-dark-neutral-surface sm:p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-500 text-sm font-bold text-neutral-900 dark:bg-dark-primary-500 dark:text-dark-neutral-background">
                      {candidate.accent}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h2 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                            {candidate.name}
                          </h2>
                          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                            <span className="inline-flex items-center gap-1.5">
                              <BriefcaseBusinessIcon className="h-4 w-4" />
                              {candidate.role}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <MapPinIcon className="h-4 w-4" />
                              {candidate.location}
                            </span>
                          </div>
                        </div>
                        <Badge className="w-fit border-transparent bg-primary-500/15 text-neutral-textMain dark:bg-dark-primary-500/15 dark:text-dark-secondary-500">
                          评分 {candidate.score}
                        </Badge>
                      </div>

                      <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                        <div>
                          <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                            <span className="font-medium text-neutral-textMain dark:text-dark-neutral-textMain">
                              {candidate.stage}
                            </span>
                            <span className="text-neutral-textMuted dark:text-dark-neutral-textMuted">
                              {candidate.stageValue}%
                            </span>
                          </div>
                          <Progress
                            value={candidate.stageValue}
                            className="h-2"
                          />
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-xl bg-neutral-background px-3 py-2 text-sm text-neutral-textMuted dark:bg-dark-neutral-background dark:text-dark-neutral-textMuted">
                          <CalendarClockIcon className="h-4 w-4 text-primary-500 dark:text-dark-primary-500" />
                          {candidate.interview}
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {candidate.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-neutral-background px-3 py-1 text-xs font-medium text-neutral-textMuted dark:bg-dark-neutral-background dark:text-dark-neutral-textMuted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </TiltCard>
            ))}
          </section>

          <aside className="space-y-6 lg:col-span-4">
            <TiltCard maxRotation={5} scale={1.01}>
              <section className="rounded-2xl border border-neutral-border bg-neutral-surface p-5 dark:border-dark-neutral-border dark:bg-dark-neutral-surface">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                      面试阶段
                    </h2>
                    <p className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                      当前候选人分布
                    </p>
                  </div>
                  <Clock3Icon className="h-5 w-5 text-primary-500 dark:text-dark-primary-500" />
                </div>

                <div className="space-y-4">
                  {stageSummary.map((stage) => (
                    <div key={stage.label}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-neutral-textMain dark:text-dark-neutral-textMain">
                          {stage.label}
                        </span>
                        <span className="text-neutral-textMuted dark:text-dark-neutral-textMuted">
                          {stage.count}
                        </span>
                      </div>
                      <Progress value={stage.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </section>
            </TiltCard>

            <TiltCard maxRotation={5} scale={1.01}>
              <section className="rounded-2xl border border-neutral-border bg-neutral-surface p-5 dark:border-dark-neutral-border dark:bg-dark-neutral-surface">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-primary-500/15 p-2 text-primary-600 dark:bg-dark-primary-500/15 dark:text-dark-primary-500">
                    <SparklesIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                      今日重点动作
                    </h2>
                    <p className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                      建议优先处理
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {nextActions.map(({ label, Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-xl bg-neutral-background p-3 text-sm text-neutral-textMain dark:bg-dark-neutral-background dark:text-dark-neutral-textMain"
                    >
                      <Icon className="h-4 w-4 text-primary-500 dark:text-dark-primary-500" />
                      {label}
                    </div>
                  ))}
                </div>
              </section>
            </TiltCard>
          </aside>
        </div>
      </div>
    </div>
  );
}
