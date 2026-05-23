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
  CheckCircle2,
  DatabaseBackup,
  Eye,
  FileLock2,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  ScanSearch,
  ShieldCheck,
  Siren,
  UserCog,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const controls: {
  title: string;
  description: string;
  icon: LucideIcon;
  practices: string[];
}[] = [
  {
    title: '访问控制',
    description: '基于角色的权限让薪酬、文件和候选人备注只对授权团队可见。',
    icon: UserCog,
    practices: ['最小权限角色', '经理范围视图', '会话控制'],
  },
  {
    title: '数据保护',
    description: '在人事记录传输、存储、导出和文件处理过程中保护敏感数据。',
    icon: FileLock2,
    practices: ['TLS 传输加密', '加密存储', '受控导出'],
  },
  {
    title: '身份安全',
    description: '管理员可以按公司策略配置登录控制，并查看认证活动。',
    icon: Fingerprint,
    practices: ['支持单点登录', '支持多因素认证', '登录历史'],
  },
  {
    title: '可审计性',
    description: '记录重要人事操作，便于管理员排查访问、编辑和审批变更。',
    icon: ScanSearch,
    practices: ['记录变更历史', '权限复核', '导出日志'],
  },
];

const complianceAreas = [
  ['隐私运营', '数据保留设置、主体请求流程和工作区级隐私控制。'],
  ['供应商审查', '为采购和 IT 评估提供安全文档和运营说明。'],
  ['事件准备', '明确升级路径、客户沟通步骤和事后复盘流程。'],
  ['人事治理', '保留 Offer、访问决策、文件变更和管理员配置的审批链路。'],
];

const adminChecklist = [
  '每月复核管理员和财务权限',
  '要求高权限用户启用强认证',
  '按角色和部门限制薪酬可见性',
  '季度合规复核前导出审计日志',
  '离职流程中及时移除访问权限',
];

export default function Security() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between fancy-overlay">
      <Header />

      <main className="my-12 flex w-full flex-col items-center">
        <section className="w-full p-6 container-narrow">
          <Badge variant="secondary" className="mb-5 w-fit">
            安全与合规
          </Badge>
          <h1 className="max-w-xs text-4xl font-semibold leading-tight fancy-heading sm:max-w-none md:text-6xl md:leading-tight">
            安全是人力数据的底线
          </h1>

          <p className="mt-6 max-w-3xl text-base text-muted-foreground md:text-xl">
            Mark.cc
            面向真实人力数据场景设计：员工隐私档案、招聘决策、薪酬信息和需要严格控制访问的文件。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: '默认安全',
                detail: '核心安全控制在工作区创建时即默认启用。',
              },
              {
                icon: KeyRound,
                title: '精细权限',
                detail: '为 HR、管理层、经理和面试官配置不同访问范围。',
              },
              {
                icon: Eye,
                title: '操作可审计',
                detail: '敏感更新可追踪，便于调查和复核。',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title} className="bg-card/85">
                  <CardHeader>
                    <Icon className="h-6 w-6 text-primary-600 dark:text-primary-300" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.detail}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="w-full p-6 container-narrow">
          <div className="grid gap-4 md:grid-cols-2">
            {controls.map((control) => {
              const Icon = control.icon;

              return (
                <Card key={control.title} className="bg-card/85">
                  <CardHeader>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{control.title}</CardTitle>
                    <CardDescription>{control.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2 text-sm sm:grid-cols-3">
                      {control.practices.map((practice) => (
                        <li key={practice} className="rounded-lg border p-3">
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="grid w-full gap-4 p-6 container-narrow lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="bg-card/85">
            <CardHeader>
              <LockKeyhole className="h-6 w-6 text-primary-600 dark:text-primary-300" />
              <CardTitle>管理员安全清单</CardTitle>
              <CardDescription>
                HR 和 IT
                团队可执行的安全动作，帮助工作区在增长过程中保持清晰可控。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                {adminChecklist.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/85">
            <CardHeader>
              <CardTitle>合规支持范围</CardTitle>
              <CardDescription>
                为常见人力 SaaS 审查需求提供工具和流程支持。
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {complianceAreas.map(([title, detail]) => (
                <div key={title} className="rounded-lg border p-4">
                  <p className="font-medium">{title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="w-full p-6 container-narrow">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-card/85">
              <CardHeader>
                <DatabaseBackup className="h-6 w-6 text-primary-600 dark:text-primary-300" />
                <CardTitle>韧性与恢复</CardTitle>
                <CardDescription>
                  通过备份、变更监控和恢复流程，保障关键人事记录在服务事件中的可访问性。
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/85">
              <CardHeader>
                <Siren className="h-6 w-6 text-primary-600 dark:text-primary-300" />
                <CardTitle>负责任披露</CardTitle>
                <CardDescription>
                  安全报告会按严重程度分流，交由对应团队处理，并跟踪到修复复核完成。
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
