import {
  BellRing,
  Building2,
  CheckCircle2,
  CircleAlert,
  DatabaseZap,
  KeyRound,
  Mail,
  PlugZap,
  Save,
  ShieldCheck,
  Slack,
  UsersRound,
  Webhook,
} from 'lucide-react';
import { TopNav } from '@/components/dashboard';
import { TiltCard } from '@/components/dashboard/TiltCard';
import { Badge } from '@/components/shared/ui/badge';
import { Button } from '@/components/shared/ui/button';
import { Input } from '@/components/shared/ui/input';
import { Label } from '@/components/shared/ui/label';
import { Progress } from '@/components/shared/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shared/ui/select';
import { Switch } from '@/components/shared/ui/switch';
import { Tabs, TabsList, TabsTrigger } from '@/components/shared/ui/tabs';

const notificationPrefs = [
  {
    title: '面试提醒',
    description: '在面试开始前提醒招聘团队和面试官。',
    checked: true,
  },
  {
    title: '候选人阶段变更',
    description: '当候选人进入新阶段时通知负责招聘同事。',
    checked: true,
  },
  {
    title: '每周管理层摘要',
    description: '每周一发送招聘表现和岗位风险摘要。',
    checked: false,
  },
];

const roles = [
  { name: '管理员', users: 4, access: '完整工作区控制权限' },
  { name: '用人经理', users: 18, access: '职位、候选人、面试评分表' },
  { name: '面试官', users: 42, access: '已分配面试与反馈' },
];

const integrations = [
  { name: '飞书', status: '已连接', detail: '人才提醒群', icon: Slack },
  {
    name: '北森系统',
    status: '同步中',
    detail: '已同步 12 个职位',
    icon: DatabaseZap,
  },
  {
    name: 'Webhook API',
    status: '需处理',
    detail: '密钥将在 3 天后轮换',
    icon: Webhook,
  },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-neutral-background dark:bg-dark-neutral-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <TopNav />

        <TiltCard maxRotation={3} scale={1.01}>
          <section className="bg-neutral-surface dark:bg-dark-neutral-surface rounded-2xl border border-neutral-border dark:border-dark-neutral-border shadow-[var(--shadow-elevated)] p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <Badge className="mb-3 bg-primary-500 text-neutral-textMain hover:bg-primary-500 dark:text-dark-neutral-background">
                  工作区设置
                </Badge>
                <h1 className="text-3xl font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                  系统偏好
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                  管理组织信息、自动化规则、访问权限和已连接的招聘系统。
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Tabs defaultValue="general">
                  <TabsList className="bg-neutral-background dark:bg-dark-neutral-background">
                    <TabsTrigger value="general">通用</TabsTrigger>
                    <TabsTrigger value="access">权限</TabsTrigger>
                    <TabsTrigger value="apps">应用</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button variant="primary" className="gap-2">
                  <Save className="h-4 w-4" />
                  保存更改
                </Button>
              </div>
            </div>
          </section>
        </TiltCard>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="rounded-2xl border border-neutral-border bg-neutral-surface p-6 shadow-[var(--shadow-elevated)] dark:border-dark-neutral-border dark:bg-dark-neutral-surface lg:col-span-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                  组织设置
                </h2>
                <p className="mt-1 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                  配置工作区身份信息和招聘默认规则。
                </p>
              </div>
              <Building2 className="h-5 w-5 text-primary-600 dark:text-primary-500" />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="company-name">公司名称</Label>
                <Input id="company-name" defaultValue="Mark.cc 人才中心" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workspace-url">工作区地址</Label>
                <Input id="workspace-url" defaultValue="markcc.team" />
              </div>
              <div className="space-y-2">
                <Label>默认时区</Label>
                <Select defaultValue="pst">
                  <SelectTrigger>
                    <SelectValue placeholder="选择时区" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pst">中国标准时间</SelectItem>
                    <SelectItem value="est">新加坡时间</SelectItem>
                    <SelectItem value="utc">UTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>招聘模式</Label>
                <Select defaultValue="balanced">
                  <SelectTrigger>
                    <SelectValue placeholder="选择招聘模式" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="balanced">均衡推进</SelectItem>
                    <SelectItem value="speed">速度优先</SelectItem>
                    <SelectItem value="quality">质量优先</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-neutral-background p-5 dark:bg-dark-neutral-background">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-neutral-textMain dark:text-dark-neutral-textMain">
                  资料完善度
                </span>
                <span className="text-neutral-textMuted dark:text-dark-neutral-textMuted">
                  86%
                </span>
              </div>
              <Progress value={86} className="mt-3 h-2" />
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-border bg-neutral-surface p-6 shadow-[var(--shadow-elevated)] dark:border-dark-neutral-border dark:bg-dark-neutral-surface lg:col-span-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                  通知偏好
                </h2>
                <p className="mt-1 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                  选择哪些流程动态需要通知团队。
                </p>
              </div>
              <BellRing className="h-5 w-5 text-primary-600 dark:text-primary-500" />
            </div>

            <div className="mt-6 space-y-4">
              {notificationPrefs.map((pref) => (
                <div
                  key={pref.title}
                  className="flex items-start justify-between gap-4 rounded-2xl bg-neutral-background p-4 dark:bg-dark-neutral-background"
                >
                  <div>
                    <p className="font-medium text-neutral-textMain dark:text-dark-neutral-textMain">
                      {pref.title}
                    </p>
                    <p className="mt-1 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                      {pref.description}
                    </p>
                  </div>
                  <Switch
                    defaultChecked={pref.checked}
                    aria-label={pref.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="rounded-2xl border border-neutral-border bg-neutral-surface p-6 shadow-[var(--shadow-elevated)] dark:border-dark-neutral-border dark:bg-dark-neutral-surface lg:col-span-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                  权限与角色
                </h2>
                <p className="mt-1 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                  让访问权限与招聘职责保持一致。
                </p>
              </div>
              <ShieldCheck className="h-5 w-5 text-primary-600 dark:text-primary-500" />
            </div>

            <div className="mt-6 space-y-3">
              {roles.map((role) => (
                <TiltCard
                  key={role.name}
                  className="cursor-pointer"
                  maxRotation={5}
                  scale={1.01}
                >
                  <div className="rounded-2xl border border-neutral-border bg-neutral-background p-4 dark:border-dark-neutral-border dark:bg-dark-neutral-background">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-primary-500/15 p-2 text-primary-600 dark:text-primary-500">
                          <UsersRound className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-textMain dark:text-dark-neutral-textMain">
                            {role.name}
                          </p>
                          <p className="text-xs text-neutral-textMuted dark:text-dark-neutral-textMuted">
                            {role.access}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">{role.users} 人</Badge>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>

            <Button variant="outlinePrimary" className="mt-5 w-full gap-2">
              <KeyRound className="h-4 w-4" />
              管理权限规则
            </Button>
          </div>

          <div className="rounded-2xl border border-neutral-border bg-neutral-surface p-6 shadow-[var(--shadow-elevated)] dark:border-dark-neutral-border dark:bg-dark-neutral-surface lg:col-span-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                  集成状态
                </h2>
                <p className="mt-1 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                  查看推动招聘数据流转的已连接工具。
                </p>
              </div>
              <PlugZap className="h-5 w-5 text-primary-600 dark:text-primary-500" />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {integrations.map((integration) => {
                const Icon = integration.icon;
                const isWarning = integration.status === '需处理';

                return (
                  <TiltCard
                    key={integration.name}
                    className="h-full cursor-pointer"
                    maxRotation={6}
                    scale={1.02}
                  >
                    <div className="h-full rounded-2xl border border-neutral-border bg-neutral-background p-5 dark:border-dark-neutral-border dark:bg-dark-neutral-background">
                      <div className="flex items-center justify-between">
                        <div className="rounded-xl bg-primary-500/15 p-2 text-primary-600 dark:text-primary-500">
                          <Icon className="h-5 w-5" />
                        </div>
                        {isWarning ? (
                          <CircleAlert className="h-5 w-5 text-amber-500" />
                        ) : (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                      <h3 className="mt-5 font-semibold text-neutral-textMain dark:text-dark-neutral-textMain">
                        {integration.name}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                        {integration.detail}
                      </p>
                      <Badge
                        variant={isWarning ? 'secondary' : 'outline'}
                        className="mt-4"
                      >
                        {integration.status}
                      </Badge>
                    </div>
                  </TiltCard>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-neutral-background p-5 dark:bg-dark-neutral-background sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary-500/15 p-2 text-primary-600 dark:text-primary-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-neutral-textMain dark:text-dark-neutral-textMain">
                    邮件域名验证
                  </p>
                  <p className="text-sm text-neutral-textMuted dark:text-dark-neutral-textMuted">
                    markcc.com 已通过验证，可用于发送候选人通知邮件。
                  </p>
                </div>
              </div>
              <Button variant="ghost">查看 DNS</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
