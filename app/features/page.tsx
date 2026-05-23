import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { Badge } from '@/components/shared/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shared/ui/card';
import {
  BarChart3,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  FileText,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const featureModules: {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}[] = [
  {
    title: '员工档案',
    description: '集中管理员工资料、岗位、薪酬备注、文件和汇报关系变更记录。',
    icon: Users,
    items: ['按团队和城市智能筛选', '员工档案时间线', '证件与合同提醒'],
  },
  {
    title: '招聘流程',
    description:
      '通过阶段跟踪、面试反馈和招聘团队协作，将候选人从投递推进到 Offer。',
    icon: BriefcaseBusiness,
    items: ['招聘阶段看板', 'Offer 审批流程', '候选人评分表'],
  },
  {
    title: '面试安排',
    description: '协调日历、时区和面试官安排，减少反复沟通和重复预约。',
    icon: CalendarClock,
    items: ['面试官可用时间', '日历同步', '自动提醒'],
  },
  {
    title: '入职计划',
    description:
      '把已接受的 Offer 转成结构化入职计划，明确任务、负责人、截止日期和进度。',
    icon: ClipboardList,
    items: ['按岗位生成模板', 'IT 与薪酬任务', '新员工清单'],
  },
  {
    title: '人力数据分析',
    description: '提前掌握人员规模、招聘速度、留任风险和团队负载信号。',
    icon: BarChart3,
    items: ['招聘漏斗指标', '团队容量视图', '可导出的管理报表'],
  },
  {
    title: '安全的人事记录',
    description: '通过精细权限、审计记录和安全文件管理保护敏感人事数据。',
    icon: ShieldCheck,
    items: ['基于角色的访问', '审计追踪', '加密附件'],
  },
];

const workflows = [
  '发起 HC 申请并开放职位',
  '筛选候选人并沉淀结构化反馈',
  '联动财务与用人经理审批 Offer',
  '为 HR、IT、薪酬团队启动入职任务',
];

export default function Features() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between fancy-overlay">
      <Header />

      <main className="my-12 flex w-full flex-col items-center">
        <section className="w-full p-6 container-narrow">
          <Badge variant="secondary" className="mb-5 w-fit">
            人力资源运营平台
          </Badge>
          <h1 className="max-w-xs text-4xl font-semibold leading-tight fancy-heading sm:max-w-none md:text-6xl md:leading-tight">
            让人力资源运营更清晰、更高效
          </h1>

          <p className="mt-6 max-w-3xl text-base text-muted-foreground md:text-xl">
            Mark.cc
            将招聘、员工档案、入职和报表集中到一个工作区，帮助快速成长的团队减少流程摩擦。
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['18%', '招聘周期跟踪更快'],
              ['42', '默认人力流程模板'],
              ['7x24', '核心记录安全访问'],
            ].map(([value, label]) => (
              <Card key={label} className="border-border/60 bg-card/80">
                <CardContent className="p-5">
                  <div className="text-3xl font-semibold">{value}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="w-full p-6 container-narrow">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureModules.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card key={feature.title} className="bg-card/85">
                  <CardHeader>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {feature.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="grid w-full gap-4 p-6 container-narrow lg:grid-cols-[1fr_1.2fr]">
          <Card className="bg-card/85">
            <CardHeader>
              <Sparkles className="h-6 w-6 text-primary-600 dark:text-primary-300" />
              <CardTitle>为跨职能人力协作而设计</CardTitle>
              <CardDescription>
                让 HR、财务、用人经理和 IT
                在从岗位申请到入职第一天的流程中保持同一节奏。
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card/85">
            <CardContent className="grid gap-3 p-6 sm:grid-cols-2">
              {workflows.map((workflow, index) => (
                <div
                  key={workflow}
                  className="flex gap-3 rounded-lg border p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-200">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium">{workflow}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="w-full p-6 container-narrow">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-card/85">
              <CardHeader>
                <MessageSquareText className="h-6 w-6 text-primary-600 dark:text-primary-300" />
                <CardTitle>围绕决策进行协作</CardTitle>
                <CardDescription>
                  对候选人评论、分配跟进事项，并把每一次人员决策保留在正确记录上。
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/85">
              <CardHeader>
                <FileText className="h-6 w-6 text-primary-600 dark:text-primary-300" />
                <CardTitle>无需整理表格的报表</CardTitle>
                <CardDescription>
                  导出清晰的招聘、编制和入职报表，用于管理层复盘、审计和周会。
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
