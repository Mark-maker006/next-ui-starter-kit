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
  BookOpen,
  CalendarClock,
  FileQuestion,
  Headphones,
  LifeBuoy,
  MessageCircle,
  PlayCircle,
  Search,
  Settings2,
  ShieldQuestion,
  UserPlus,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const helpCategories: {
  title: string;
  description: string;
  icon: LucideIcon;
  articles: string[];
}[] = [
  {
    title: '快速开始',
    description: '完成公司工作区设置，并邀请第一批团队成员。',
    icon: PlayCircle,
    articles: ['创建城市和部门', '邀请管理员和经理', '导入员工数据'],
  },
  {
    title: '员工档案',
    description: '管理员工资料、文件、任职记录和备注。',
    icon: UserPlus,
    articles: ['更新档案字段', '上传人事文件', '跟踪汇报关系变更'],
  },
  {
    title: '招聘流程',
    description: '配置职位、面试和审批相关流程。',
    icon: CalendarClock,
    articles: ['搭建面试阶段', '安排多轮面试', '收集评分表'],
  },
  {
    title: '权限管理',
    description: '控制 HR、财务、经理和面试官可以查看的内容。',
    icon: ShieldQuestion,
    articles: ['分配角色', '限制薪酬可见性', '查看访问日志'],
  },
  {
    title: '系统集成',
    description: '连接日历、邮件、薪酬和身份认证系统。',
    icon: Settings2,
    articles: ['同步企业日历', '配置单点登录', '导出薪酬更新'],
  },
  {
    title: '报表分析',
    description: '生成适合管理层查看的招聘和人员健康报表。',
    icon: BookOpen,
    articles: ['保存报表视图', '导出 CSV 文件', '分享看板截图'],
  },
];

const faqs = [
  [
    '可以从表格导入员工吗？',
    '可以。使用员工导入模板，映射字段、预览冲突，并确认后再创建记录。',
  ],
  [
    '用人经理如何提交反馈？',
    '用人经理会收到与候选人阶段关联的面试评分表，可按流程填写必填项和私密备注。',
  ],
  [
    '安全问题应该在哪里反馈？',
    '紧急安全问题请通过优先支持提交，并选择“安全”主题，以便对应团队快速分流处理。',
  ],
];

export default function Help() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between fancy-overlay">
      <Header />

      <main className="my-12 flex w-full flex-col items-center">
        <section className="w-full p-6 container-narrow">
          <Badge variant="secondary" className="mb-5 w-fit">
            帮助中心
          </Badge>
          <h1 className="max-w-xs text-4xl font-semibold leading-tight fancy-heading sm:max-w-none md:text-6xl md:leading-tight">
            我们如何帮你管理团队？
          </h1>

          <p className="mt-6 max-w-3xl text-base text-muted-foreground md:text-xl">
            查找 Mark.cc
            设置、招聘流程、员工档案维护和敏感人事信息权限管理的实用指南。
          </p>

          <div className="mt-8 flex flex-col gap-3 rounded-lg border bg-card/85 p-4 sm:flex-row sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200">
              <Search className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">热门搜索</p>
              <p className="text-sm text-muted-foreground">
                入职清单、日历同步、权限、候选人反馈、薪酬导出
              </p>
            </div>
          </div>
        </section>

        <section className="w-full p-6 container-narrow">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {helpCategories.map((category) => {
              const Icon = category.icon;

              return (
                <Card key={category.title} className="bg-card/85">
                  <CardHeader>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {category.articles.map((article) => (
                        <li key={article} className="flex items-center gap-2">
                          <FileQuestion className="h-4 w-4 shrink-0" />
                          <span>{article}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="grid w-full gap-4 p-6 container-narrow lg:grid-cols-3">
          {[
            {
              title: '工单支持',
              detail: '适合账号、账单和流程配置问题。',
              icon: LifeBuoy,
              meta: '通常 1 个工作日内回复',
            },
            {
              title: '在线咨询',
              detail: '在使用过程中快速咨询导航和操作问题。',
              icon: MessageCircle,
              meta: '付费工作区可用',
            },
            {
              title: '优先支持',
              detail: '升级登录、数据访问或影响生产使用的问题。',
              icon: Headphones,
              meta: '面向管理员和安全联系人',
            },
          ].map((channel) => {
            const Icon = channel.icon;

            return (
              <Card key={channel.title} className="bg-card/85">
                <CardHeader>
                  <Icon className="h-6 w-6 text-primary-600 dark:text-primary-300" />
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                  <CardDescription>{channel.detail}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{channel.meta}</Badge>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="w-full p-6 container-narrow">
          <Card className="bg-card/85">
            <CardHeader>
              <CardTitle>常见问题</CardTitle>
              <CardDescription>
                回答 HR 团队在配置阶段最常遇到的问题。
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              {faqs.map(([question, answer]) => (
                <div key={question} className="rounded-lg border p-4">
                  <p className="font-medium">{question}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{answer}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
