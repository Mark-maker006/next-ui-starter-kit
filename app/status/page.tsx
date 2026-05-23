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
  Activity,
  AlertCircle,
  CheckCircle2,
  Clock3,
  Database,
  FileText,
  Gauge,
  MailCheck,
  Server,
  ShieldCheck,
  Wifi,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const services: {
  name: string;
  description: string;
  status: string;
  icon: LucideIcon;
}[] = [
  {
    name: '管理后台',
    description: '员工档案、数据分析和管理员工作区',
    status: '运行正常',
    icon: Gauge,
  },
  {
    name: '招聘流程',
    description: '职位阶段、候选人档案和评分表',
    status: '运行正常',
    icon: Activity,
  },
  {
    name: '面试安排',
    description: '日历同步、邀请和提醒发送',
    status: '运行正常',
    icon: Clock3,
  },
  {
    name: '文件存储',
    description: 'Offer、员工文件和审计导出',
    status: '运行正常',
    icon: FileText,
  },
  {
    name: '邮件通知',
    description: '任务提醒、审批和每周摘要',
    status: '运行正常',
    icon: MailCheck,
  },
  {
    name: '身份与访问',
    description: '登录、单点登录、会话管理和权限',
    status: '运行正常',
    icon: ShieldCheck,
  },
];

const metrics = [
  ['99.98%', '近 30 天平台可用性'],
  ['184 ms', 'API 响应中位数'],
  ['0', '当前故障事件'],
  ['12 分钟', '故障分流中位时长'],
];

const incidentHistory = [
  ['5月21日', '无故障报告', '所有系统运行正常'],
  ['5月18日', '日历同步延迟', '第三方服务重试积压清理后已恢复'],
  ['5月12日', '计划维护', '完成文件索引升级'],
];

export default function Status() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between fancy-overlay">
      <Header />

      <main className="my-12 flex w-full flex-col items-center">
        <section className="w-full p-6 container-narrow">
          <Badge variant="secondary" className="mb-5 w-fit">
            服务运行概览
          </Badge>
          <h1 className="max-w-xs text-4xl font-semibold leading-tight fancy-heading sm:max-w-none md:text-6xl md:leading-tight">
            系统状态
          </h1>

          <div className="mt-6 flex flex-col gap-4 rounded-lg border bg-card/85 p-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <div>
                <p className="text-lg font-semibold">所有系统运行正常</p>
                <p className="text-sm text-muted-foreground">
                  核心人事、招聘、通知和访问服务当前均处于健康状态。
                </p>
              </div>
            </div>
            <Badge variant="outline" className="w-fit">
              更新于 2026年5月21日
            </Badge>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(([value, label]) => (
              <Card key={label} className="bg-card/85">
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
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card key={service.name} className="bg-card/85">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300 dark:hover:bg-emerald-950">
                        {service.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="grid w-full gap-4 p-6 container-narrow lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="bg-card/85">
            <CardHeader>
              <CardTitle>事件记录</CardTitle>
              <CardDescription>
                面向 HR 管理员展示近期平台事件和维护记录。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {incidentHistory.map(([date, title, detail]) => (
                <div key={`${date}-${title}`} className="rounded-lg border p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-medium">{title}</p>
                    <Badge variant="outline">{date}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/85">
            <CardHeader>
              <AlertCircle className="h-6 w-6 text-primary-600 dark:text-primary-300" />
              <CardTitle>我们如何同步问题</CardTitle>
              <CardDescription>
                当服务健康影响人力流程时，管理员会通过站内通知和邮件收到事件更新。
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              {[
                ['排查中', '确认影响范围和受影响服务。'],
                ['已定位', '发布原因和当前缓解措施。'],
                ['监控中', '验证生产流量恢复情况。'],
                ['已解决', '发布最终总结和预防说明。'],
              ].map(([phase, detail]) => (
                <div key={phase} className="flex gap-3 rounded-lg border p-3">
                  <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-300" />
                  <div>
                    <p className="font-medium">{phase}</p>
                    <p className="text-muted-foreground">{detail}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="w-full p-6 container-narrow">
          <Card className="bg-card/85">
            <CardContent className="grid gap-4 p-6 md:grid-cols-3">
              <div className="flex gap-3">
                <Server className="h-5 w-5 shrink-0 text-primary-600 dark:text-primary-300" />
                <p className="text-sm text-muted-foreground">
                  持续监控应用、API、存储和通知等生产服务。
                </p>
              </div>
              <div className="flex gap-3">
                <Database className="h-5 w-5 shrink-0 text-primary-600 dark:text-primary-300" />
                <p className="text-sm text-muted-foreground">
                  按计划检查备份和文件索引，保障人事业务连续性。
                </p>
              </div>
              <div className="flex gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-primary-600 dark:text-primary-300" />
                <p className="text-sm text-muted-foreground">
                  每次事件分流都会检查身份认证和权限健康状况。
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
