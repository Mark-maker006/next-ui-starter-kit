// @ts-nocheck

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { LandingProductSteps } from '@/components/landing/LandingProductSteps';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import Image from '@/components/shared/Image';
import { Button } from '@/components/shared/ui/button';
import Link from 'next/link';
import { CreditCard, Lock, Shield, TrendingUp, Users, Zap } from 'lucide-react';

export default function Page() {
  return (
    <>
      <Header className="mb-4" />

      <LandingPrimaryImageCtaSection
        title="让人力资源管理更轻松"
        description="用 Mark.cc 统一管理员工、面试、招聘和入职流程，让团队协作更清晰。"
        imageSrc="/static/images/1.webp"
        imageAlt="工作台预览"
        imagePosition="right"
        imageShadow="hard"
        textPosition="left"
        withBackground={false}
        variant="primary"
        minHeight={350}
      >
        <Button size="xl" asChild>
          <Link href="/dashboard">进入工作台</Link>
        </Button>
        <Button size="xl" variant="outlinePrimary" asChild>
          <Link href="/pricing">查看价格</Link>
        </Button>
        <LandingSocialProof
          className="mt-6 w-full"
          avatarItems={[
            {
              imageSrc: '/static/images/people/1.webp',
              name: '陈思涵',
            },
            {
              imageSrc: '/static/images/people/2.webp',
              name: '张明',
            },
            {
              imageSrc: '/static/images/people/3.webp',
              name: '李雨桐',
            },
          ]}
          numberOfUsers={1100}
          suffixText="位团队成员正在使用"
        />
      </LandingPrimaryImageCtaSection>

      <div className="container-wide p-12 w-full flex flex-wrap items-center justify-center gap-6 dark:invert">
        <span className="w-full text-center text-sm opacity-70 dark:invert">
          被这些团队关注
        </span>
        <Image
          src="/static/images/outlets/tech-crunch.svg"
          alt="TechCrunch"
          width={300}
          height={300}
          className="w-auto h-6"
        />
        <Image
          src="/static/images/outlets/the-new-york-times.svg"
          alt="The New York Times"
          width={300}
          height={300}
          className="w-auto h-8"
        />
        <Image
          src="/static/images/outlets/cnn.svg"
          alt="CNN"
          width={300}
          height={300}
          className="w-auto h-7"
        />
        <Image
          src="/static/images/outlets/the-verge.svg"
          alt="The Verge"
          width={300}
          height={300}
          className="w-auto h-7"
        />
      </div>

      <LandingFeatureList
        id="features"
        title="人力团队需要的核心工具都在这里"
        description="用清晰、强大的工具管理招聘、员工档案、入职和数据分析。"
        featureItems={[
          {
            title: '看清招聘进展',
            description:
              '自动汇总候选人阶段、面试安排和 Offer 状态，用易读图表快速发现瓶颈。',
            icon: <TrendingUp className="w-8 h-8" />,
          },
          {
            title: '快速推进协作',
            description:
              '让 HR、用人经理和面试官在同一流程中分配任务、提交反馈、确认下一步。',
            icon: <Zap className="w-8 h-8" />,
          },
          {
            title: '标准化入职流程',
            description:
              '基于岗位自动生成入职清单，连接 IT、薪酬和行政任务，减少遗漏。',
            icon: <CreditCard className="w-8 h-8" />,
          },
          {
            title: '企业级数据安全',
            description:
              '通过权限控制、审计记录和加密传输保护员工与候选人敏感数据。',
            icon: <Shield className="w-8 h-8" />,
          },
          {
            title: '多团队统一管理',
            description:
              '将多个部门、城市和招聘团队集中在一个工作台中，统一查看和管理。',
            icon: <Users className="w-8 h-8" />,
          },
          {
            title: '隐私可控',
            description:
              '按角色控制薪酬、文件和面试备注可见范围，让敏感信息只给该看的人看。',
            icon: <Lock className="w-8 h-8" />,
          },
        ]}
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
      />

      <LandingProductSteps
        title="三步开始使用"
        description="无需复杂部署，快速把招聘和人事流程搬到 Mark.cc。"
        display="grid"
        withBackground={false}
        variant="primary"
      >
        <LandingProductFeature
          title="1. 创建工作区"
          description="使用企业邮箱创建账号，设置公司名称、部门和城市，几分钟即可完成基础配置。"
          imageSrc="/static/images/2.webp"
          imageAlt="创建工作区流程"
          imagePosition="center"
          imageShadow="soft"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
        <LandingProductFeature
          title="2. 导入人员与职位"
          description="导入员工档案和在招职位，配置招聘阶段、面试模板和审批规则。"
          imageSrc="/static/images/3.webp"
          imageAlt="导入人员和职位"
          imagePosition="center"
          imageShadow="soft"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
        <LandingProductFeature
          title="3. 开始协同推进"
          description="在工作台查看候选人、面试、入职任务和数据分析，让团队每天都有明确优先级。"
          imageSrc="/static/images/4.webp"
          imageAlt="管理招聘流程"
          imagePosition="center"
          imageShadow="soft"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
      </LandingProductSteps>

      <LandingProductFeature
        id="security"
        title="你的人力数据由我们认真保护"
        descriptionComponent={
          <>
            <p className="mb-6">
              我们认真对待安全。员工档案、候选人资料、薪酬信息和审批记录都会通过权限与审计机制保护。
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Shield className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>传输加密：</strong>
                  保护员工和候选人数据在传输过程中的安全
                </span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>角色权限：</strong>
                  按部门、岗位和职责控制敏感信息可见范围
                </span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>审计追踪：</strong>
                  关键操作保留记录，便于复核与合规检查
                </span>
              </li>
            </ul>
          </>
        }
        imageSrc="/static/images/5.webp"
        imageAlt="安全功能"
        imagePosition="right"
        imageShadow="hard"
        textPosition="left"
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
        imagePerspective="bottom"
        zoomOnHover
        minHeight={350}
      />

      <LandingTestimonialReadMoreWrapper>
        <LandingTestimonialGrid
          title="被越来越多 HR 团队认可"
          description="看看用户如何使用 Mark.cc 提升招聘和人力运营效率。"
          testimonialItems={[
            {
              name: '林佳怡',
              text: 'Mark.cc 让我们终于能在一个页面看清招聘进展，候选人卡在哪个阶段一目了然。',
              handle: '@linjiayi',
              imageSrc: '/static/images/people/4.webp',
              url: '#',
              verified: true,
            },
            {
              name: '周亦航',
              text: '用人经理和 HR 的沟通少了很多来回确认，面试反馈也更及时。',
              handle: '@zhouyihang',
              imageSrc: '/static/images/people/5.webp',
              url: '#',
              verified: true,
            },
            {
              name: '王雨桐',
              text: '面试安排和提醒很好用，候选人体验比以前稳定很多。',
              handle: '@wangyutong',
              imageSrc: '/static/images/people/6.webp',
              url: '#',
            },
            {
              name: '赵晨',
              text: '界面很清晰，没有复杂菜单，新同事上手也很快。',
              handle: '@zhaochen',
              imageSrc: '/static/images/people/7.webp',
              url: '#',
              verified: true,
            },
            {
              name: '陈琳',
              text: '员工档案、入职任务和招聘进度集中起来后，月度复盘省了很多时间。',
              handle: '@chenlin',
              imageSrc: '/static/images/people/8.webp',
              url: '#',
            },
            {
              name: '许安',
              text: '权限控制让我们放心把面试官、财务和管理层放进同一个流程里协作。',
              handle: '@xuan',
              imageSrc: '/static/images/people/9.webp',
              url: '#',
              verified: true,
            },
            {
              name: '罗晴',
              text: '报表终于不用临时拼表了，招聘周会可以直接看最新数据。',
              handle: '@luoqing',
              imageSrc: '/static/images/people/10.webp',
              url: '#',
            },
            {
              name: '马骏',
              text: '从岗位开放到 Offer 审批的链路更顺了，团队知道每天该优先处理什么。',
              handle: '@majun',
              imageSrc: '/static/images/people/11.webp',
              url: '#',
              verified: true,
            },
            {
              name: '李华',
              text: '候选人备注和面试记录集中沉淀后，交接和复盘都更轻松。',
              handle: '@lihua',
              imageSrc: '/static/images/people/12.webp',
              url: '#',
            },
          ]}
          withBackground={false}
          variant="primary"
        />
      </LandingTestimonialReadMoreWrapper>

      <LandingSaleCtaSection
        id="pricing"
        title="简单透明的价格"
        description="按团队规模选择合适方案，没有隐藏费用。"
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
      >
        <Button size="xl" asChild>
          <Link href="/pricing">查看方案</Link>
        </Button>
      </LandingSaleCtaSection>

      <LandingFaqCollapsibleSection
        id="faq"
        title="常见问题"
        description="关于 Mark.cc 的使用、配置和安全问题，这里有快速答案。"
        faqItems={[
          {
            question: 'Mark.cc 可以免费使用吗？',
            answer:
              '可以。Mark.cc 提供包含核心功能的免费方案，也为需要更多能力的团队提供高级方案，没有隐藏费用。',
          },
          {
            question: '员工数据安全吗？',
            answer:
              '安全是我们的优先级。系统通过加密传输、权限控制和审计记录保护员工与候选人数据。',
          },
          {
            question: 'Mark.cc 可以集成哪些人力系统？',
            answer:
              'Mark.cc 支持与常见日历、身份认证、薪酬和招聘系统集成。具体系统可联系支持团队确认。',
          },
          {
            question: '手机上可以使用吗？',
            answer:
              '可以。Mark.cc 支持手机、平板和桌面端响应式访问，方便随时查看人力数据。',
          },
          {
            question: '面试安排如何工作？',
            answer:
              '你可以配置面试规则和面试官安排，系统会帮助整理可用时间、发送提醒并沉淀反馈。',
          },
          {
            question: '遇到问题怎么办？',
            answer:
              '可以通过帮助中心、在线咨询或工单联系我们，我们会协助你完成配置和排查问题。',
          },
        ]}
        withBackground={false}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      />

      <LandingSaleCtaSection
        title="准备好升级你的人力工作台了吗？"
        description="现在开始用 Mark.cc 更清晰地管理招聘、员工和入职流程。"
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
      >
        <Button size="xl" asChild>
          <Link href="/dashboard">免费开始</Link>
        </Button>
      </LandingSaleCtaSection>

      <Footer className="mt-8" />
    </>
  );
}
