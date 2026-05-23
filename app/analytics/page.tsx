import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarClock,
  ChartNoAxesCombined,
  CircleDollarSign,
  MousePointerClick,
  Sparkles,
  TrendingUp,
  UsersRound,
} from 'lucide-react';
import { TopNav } from '@/components/dashboard';
import { TiltCard } from '@/components/dashboard/TiltCard';
import { Badge } from '@/components/shared/ui/badge';
import { Button } from '@/components/shared/ui/button';
import { Progress } from '@/components/shared/ui/progress';
import { Tabs, TabsList, TabsTrigger } from '@/components/shared/ui/tabs';

const metrics = [
  {
    label: '活跃候选人',
    value: '1,284',
    delta: '+18.4%',
    icon: UsersRound,
  },
  {
    label: '面试转化率',
    value: '42%',
    delta: '+6.1%',
    icon: CalendarClock,
  },
  {
    label: 'Offer 接受率',
    value: '71%',
    delta: '+3.8%',
    icon: Sparkles,
  },
  {
    label: '人均招聘成本',
    value: '¥2.3万',
    delta: '-9.5%',
    icon: CircleDollarSign,
  },
];

const funnel = [
  { stage: '已寻访', count: 2400, rate: 100 },
  { stage: '已筛选', count: 1320, rate: 55 },
  { stage: '已面试', count: 684, rate: 29 },
  { stage: '终面', count: 226, rate: 9 },
  { stage: '已入职', count: 84, rate: 4 },
];

const channels = [
  { name: 'BOSS 直聘', applicants: 486, quality: 82, spend: '¥5.8万' },
  { name: '内部推荐', applicants: 214, quality: 91, spend: '¥1.5万' },
  { name: '猎聘', applicants: 362, quality: 64, spend: '¥4.1万' },
  { name: '官网投递', applicants: 298, quality: 73, spend: '¥0.8万' },
];

const trendBars = [42, 54, 48, 66, 71, 63, 78, 84, 76, 88, 91, 96];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-neutral-background dark:bg-dark-neutral-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <TopNav />

        <TiltCard maxRotation={4} scale={1.01}>
          <section className="bg-neutral-surface dark:bg-dark-neutral-surface rounded-2xl border border-neutral-border dark:border-dark-neutral-border shadow-[var(--shadow-elevated)] p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <Badge className="mb-3 bg-primary-500 text-neutral-textMain hover:bg-primary-500 dark:text-dark-neutral-background">
                  实时分析
                </Badge>
                <h1 className="text-3xl font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                  招聘数据分析
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                  监控所有开放职位的招聘漏斗转化、渠道效率和每周招聘趋势。
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Tabs defaultValue="30d">
                  <TabsList className="bg-neutral-background dark:bg-dark-neutral-background">
                    <TabsTrigger value="7d">7d</TabsTrigger>
                    <TabsTrigger value="30d">30d</TabsTrigger>
                    <TabsTrigger value="90d">90d</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button variant="primary" className="gap-2">
                  导出报表
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        </TiltCard>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <TiltCard
                key={metric.label}
                className="h-full cursor-pointer"
                maxRotation={8}
                scale={1.02}
              >
                <div className="h-full rounded-2xl border border-neutral-border bg-neutral-surface p-5 shadow-[var(--shadow-elevated)] dark:border-dark-neutral-border dark:bg-dark-neutral-surface">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-primary-500/15 p-2 text-primary-600 dark:text-primary-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 dark:text-primary-500">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {metric.delta}
                    </span>
                  </div>
                  <p className="mt-5 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                    {metric.value}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <TiltCard maxRotation={4} scale={1.01} className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-neutral-border bg-neutral-surface p-6 shadow-[var(--shadow-elevated)] dark:border-dark-neutral-border dark:bg-dark-neutral-surface">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                    招聘漏斗
                  </h2>
                  <p className="mt-1 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                    从候选人寻访到入职的整体转化情况。
                  </p>
                </div>
                <BriefcaseBusiness className="h-5 w-5 text-primary-600 dark:text-primary-500" />
              </div>

              <div className="mt-6 space-y-5">
                {funnel.map((item) => (
                  <div key={item.stage} className="space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-neutral-textMain dark:text-dark-neutral-textMain">
                        {item.stage}
                      </span>
                      <span className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                        {item.count.toLocaleString()} 位候选人
                      </span>
                    </div>
                    <Progress value={item.rate} className="h-3" />
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>

          <TiltCard maxRotation={4} scale={1.01} className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-neutral-border bg-neutral-surface p-6 shadow-[var(--shadow-elevated)] dark:border-dark-neutral-border dark:bg-dark-neutral-surface">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                    趋势摘要
                  </h2>
                  <p className="mt-1 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                    近 12 周合格候选人变化。
                  </p>
                </div>
                <ChartNoAxesCombined className="h-5 w-5 text-primary-600 dark:text-primary-500" />
              </div>

              <div className="mt-8 flex h-56 items-end gap-2">
                {trendBars.map((height, index) => (
                  <div
                    key={`${height}-${index}`}
                    className="flex flex-1 items-end rounded-t-xl bg-primary-500/15 dark:bg-primary-500/10"
                    style={{ height: `${height}%` }}
                  >
                    <div className="h-2/3 w-full rounded-t-xl bg-primary-500" />
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-neutral-background p-4 dark:bg-dark-neutral-background">
                  <p className="text-xs text-neutral-textMuted dark:text-dark-neutral-textMuted">
                    管道周期
                  </p>
                  <p className="mt-1 text-xl font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                    18 天
                  </p>
                </div>
                <div className="rounded-xl bg-neutral-background p-4 dark:bg-dark-neutral-background">
                  <p className="text-xs text-neutral-textMuted dark:text-dark-neutral-textMuted">
                    预计入职
                  </p>
                  <p className="mt-1 text-xl font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                    37
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
        </section>

        <section className="rounded-2xl border border-neutral-border bg-neutral-surface p-6 shadow-[var(--shadow-elevated)] dark:border-dark-neutral-border dark:bg-dark-neutral-surface">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                渠道表现
              </h2>
              <p className="mt-1 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                对比各渠道候选人数量、质量评分和投放成本。
              </p>
            </div>
            <BarChart3 className="h-5 w-5 text-primary-600 dark:text-primary-500" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-4">
            {channels.map((channel) => (
              <TiltCard
                key={channel.name}
                className="h-full cursor-pointer"
                maxRotation={6}
                scale={1.02}
              >
                <div className="h-full rounded-2xl border border-neutral-border bg-neutral-background p-5 dark:border-dark-neutral-border dark:bg-dark-neutral-background">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                      {channel.name}
                    </h3>
                    <MousePointerClick className="h-4 w-4 text-primary-600 dark:text-primary-500" />
                  </div>
                  <p className="mt-4 text-2xl font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                    {channel.applicants}
                  </p>
                  <p className="text-xs text-neutral-textMuted dark:text-dark-neutral-textMuted">
                    位候选人
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-textMuted dark:text-dark-neutral-textMuted">
                        质量
                      </span>
                      <span className="font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                        {channel.quality}%
                      </span>
                    </div>
                    <Progress value={channel.quality} className="h-2" />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-neutral-textMuted dark:text-dark-neutral-textMuted">
                      花费
                    </span>
                    <span className="font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                      {channel.spend}
                    </span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
