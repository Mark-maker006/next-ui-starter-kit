import {
  ArrowUpRightIcon,
  BriefcaseBusinessIcon,
  Building2Icon,
  CalendarDaysIcon,
  CheckCircle2Icon,
  CircleDotIcon,
  FlameIcon,
  Layers3Icon,
  SearchIcon,
  UserRoundIcon,
  UsersRoundIcon,
} from 'lucide-react';

import { TiltCard } from '@/components/dashboard/TiltCard';
import { TopNav } from '@/components/dashboard/TopNav';
import { Badge } from '@/components/shared/ui/badge';
import { Button } from '@/components/shared/ui/button';
import { Progress } from '@/components/shared/ui/progress';

const pipeline = [
  { label: '开放职位', value: 18, detail: '本月新增 4 个' },
  { label: '管道健康度', value: '73%', detail: '覆盖重点职位' },
  { label: '招聘团队', value: 7, detail: '产品、研发、职能' },
  { label: '待审批 Offer', value: 6, detail: '3 个需审批' },
];

const pipelineStages = [
  { label: '寻访', count: 216, value: 82 },
  { label: '筛选', count: 94, value: 64 },
  { label: '面试', count: 47, value: 42 },
  { label: 'Offer', count: 12, value: 18 },
];

const jobs = [
  {
    title: '高级后端工程师',
    department: '研发',
    owner: '许安',
    initials: '许',
    priority: '紧急',
    progress: 68,
    candidates: 32,
    target: '6月14日',
    location: '远程',
  },
  {
    title: '产品市场经理',
    department: '增长',
    owner: '陈琳',
    initials: '陈',
    priority: '高',
    progress: 54,
    candidates: 21,
    target: '6月20日',
    location: '北京',
  },
  {
    title: '人力数据分析伙伴',
    department: '人力',
    owner: '马骏',
    initials: '马',
    priority: '中',
    progress: 42,
    candidates: 16,
    target: '7月02日',
    location: '上海混合办公',
  },
  {
    title: '资深产品设计师',
    department: '设计',
    owner: '罗晴',
    initials: '罗',
    priority: '高',
    progress: 77,
    candidates: 28,
    target: '6月09日',
    location: '深圳',
  },
];

const teamLeads = [
  { name: '许安', team: '平台研发招聘', load: '5 个职位' },
  { name: '陈琳', team: '商业化团队', load: '4 个职位' },
  { name: '罗晴', team: '体验设计团队', load: '3 个职位' },
];

function priorityClass(priority: string) {
  if (priority === '紧急') {
    return 'bg-red-500/15 text-red-700 dark:bg-red-400/15 dark:text-red-300';
  }

  if (priority === '高') {
    return 'bg-primary-500/15 text-neutral-textMain dark:bg-dark-primary-500/15 dark:text-dark-secondary-500';
  }

  return 'bg-neutral-background text-neutral-textMuted dark:bg-dark-neutral-background dark:text-dark-neutral-textMuted';
}

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-neutral-background transition-colors duration-300 dark:bg-dark-neutral-background">
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <TopNav />

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <TiltCard maxRotation={4} scale={1.01} className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-neutral-border bg-neutral-surface p-5 shadow-[var(--shadow-elevated)] dark:border-dark-neutral-border dark:bg-dark-neutral-surface sm:p-6">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-500/15 px-3 py-1 text-sm font-medium text-neutral-textMain dark:bg-dark-primary-500/15 dark:text-dark-secondary-500">
                <BriefcaseBusinessIcon className="h-4 w-4 text-primary-500 dark:text-dark-primary-500" />
                职位管道
              </div>
              <h1 className="text-3xl font-bold leading-tight text-neutral-textMain dark:text-dark-neutral-textMain">
                职位管理
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted sm:text-base">
                从一个招聘运营视图查看开放职位、招聘速度和团队负责人。
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {pipeline.map((item) => (
                  <TiltCard
                    key={item.label}
                    className="h-full cursor-pointer"
                    maxRotation={8}
                    scale={1.02}
                  >
                    <div className="h-full rounded-2xl bg-neutral-background p-4 dark:bg-dark-neutral-background">
                      <div className="text-2xl font-bold leading-none text-neutral-textMain dark:text-dark-neutral-textMain">
                        {item.value}
                      </div>
                      <p className="mt-2 text-sm font-medium text-neutral-textMain dark:text-dark-neutral-textMain">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs text-neutral-textMuted dark:text-dark-neutral-textMuted">
                        {item.detail}
                      </p>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </TiltCard>

          <TiltCard maxRotation={5} scale={1.01} className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-neutral-border bg-neutral-surface p-5 dark:border-dark-neutral-border dark:bg-dark-neutral-surface sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                    管道概览
                  </h2>
                  <p className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                    按阶段查看候选人流转
                  </p>
                </div>
                <Layers3Icon className="h-5 w-5 text-primary-500 dark:text-dark-primary-500" />
              </div>

              <div className="space-y-4">
                {pipelineStages.map((stage) => (
                  <div key={stage.label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-neutral-textMain dark:text-dark-neutral-textMain">
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
            </div>
          </TiltCard>
        </section>

        <section className="rounded-2xl border border-neutral-border bg-neutral-surface p-4 dark:border-dark-neutral-border dark:bg-dark-neutral-surface sm:p-5">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                在招职位
              </h2>
              <p className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                查看每个重点岗位的进度、优先级和负责人。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-neutral-border bg-neutral-background px-4 py-3 dark:border-dark-neutral-border dark:bg-dark-neutral-background sm:min-w-[280px]">
                <SearchIcon className="h-4 w-4 shrink-0 text-neutral-textMuted dark:text-dark-neutral-textMuted" />
                <span className="truncate text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                  搜索职位或部门
                </span>
              </div>
              <Button className="gap-2 rounded-2xl bg-primary-500 text-neutral-900 hover:bg-primary-400 dark:bg-dark-primary-500 dark:text-dark-neutral-background dark:hover:bg-dark-primary-400">
                新建职位
                <ArrowUpRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {jobs.map((job) => (
              <TiltCard
                key={job.title}
                className="h-full cursor-pointer"
                maxRotation={6}
                scale={1.02}
              >
                <article className="h-full rounded-2xl border border-neutral-border bg-neutral-background p-4 dark:border-dark-neutral-border dark:bg-dark-neutral-background sm:p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <Badge
                          className={`border-transparent ${priorityClass(job.priority)}`}
                        >
                          <FlameIcon className="mr-1 h-3.5 w-3.5" />
                          {job.priority}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-neutral-border text-neutral-textMuted dark:border-dark-neutral-border dark:text-dark-neutral-textMuted"
                        >
                          {job.department}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                        {job.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                        <span className="inline-flex items-center gap-1.5">
                          <Building2Icon className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDaysIcon className="h-4 w-4" />
                          目标 {job.target}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <UsersRoundIcon className="h-4 w-4" />
                          {job.candidates} 位候选人
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-neutral-surface px-3 py-2 dark:bg-dark-neutral-surface">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 text-xs font-bold text-neutral-900 dark:bg-dark-primary-500 dark:text-dark-neutral-background">
                        {job.initials}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-textMain dark:text-dark-neutral-textMain">
                          {job.owner}
                        </p>
                        <p className="text-xs text-neutral-textMuted dark:text-dark-neutral-textMuted">
                          团队负责人
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-neutral-textMuted dark:text-dark-neutral-textMuted">
                        招聘进度
                      </span>
                      <span className="font-medium text-neutral-textMain dark:text-dark-neutral-textMain">
                        {job.progress}%
                      </span>
                    </div>
                    <Progress value={job.progress} className="h-2" />
                  </div>
                </article>
              </TiltCard>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {teamLeads.map((lead) => (
            <TiltCard
              key={lead.name}
              className="h-full cursor-pointer"
              maxRotation={7}
              scale={1.02}
            >
              <div className="h-full rounded-2xl border border-neutral-border bg-neutral-surface p-5 dark:border-dark-neutral-border dark:bg-dark-neutral-surface">
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-xl bg-primary-500/15 p-2 text-primary-600 dark:bg-dark-primary-500/15 dark:text-dark-primary-500">
                    <UserRoundIcon className="h-5 w-5" />
                  </div>
                  <Badge
                    variant="outline"
                    className="border-neutral-border text-neutral-textMuted dark:border-dark-neutral-border dark:text-dark-neutral-textMuted"
                  >
                    {lead.load}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                  {lead.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                  {lead.team}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-dark-primary-500">
                  <CheckCircle2Icon className="h-4 w-4" />
                  本周校准已完成
                </div>
              </div>
            </TiltCard>
          ))}
        </section>
      </div>
    </div>
  );
}
