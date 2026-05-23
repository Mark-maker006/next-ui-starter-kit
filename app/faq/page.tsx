import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function FAQ() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            常见问题
          </h1>

          <p className="mt-6 md:text-xl">
            这里整理了使用 Mark.cc 管理招聘、员工档案和人力流程时最常见的问题。
          </p>

          <p className="mt-6 md:text-xl">
            <strong>如何开始使用 Mark.cc？</strong>
            创建工作区后，你可以导入员工和职位，配置招聘阶段，并开始安排面试和跟进入职任务。
          </p>

          <p className="mt-6 md:text-xl">
            <strong>员工信息安全吗？</strong>
            是的。系统通过权限控制、传输加密和审计记录保护员工与候选人数据。
          </p>

          <p className="mt-6 md:text-xl">
            <strong>可以在手机上使用吗？</strong>
            可以。Mark.cc 支持桌面端、平板和手机访问，界面会根据设备自动适配。
          </p>

          <p className="mt-6 md:text-xl">
            <strong>Mark.cc 可以帮助我管理哪些人力工作？</strong>{' '}
            你可以管理员工档案、安排面试、推进招聘流程、跟进入职任务，并查看招聘与团队数据报表。
          </p>

          <p className="mt-6 md:text-xl">
            <strong>如何联系支持？</strong>
            可以通过帮助中心、工单或在线咨询联系我们，我们会协助你完成配置和排查问题。
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
