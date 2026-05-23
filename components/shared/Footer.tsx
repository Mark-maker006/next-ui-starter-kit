import { LandingFooter } from '@/components/landing/footer/LandingFooter';
import { LandingFooterColumn } from '@/components/landing/footer/LandingFooterColumn';
import { LandingFooterLink } from '@/components/landing/footer/LandingFooterLink';
import Image from '@/components/shared/Image';
import Link from 'next/link';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <LandingFooter
      className={className}
      title="Mark.cc"
      description="面向中国团队的人力资源管理工作台"
      withBackground
      withBackgroundGlow={false}
      variant="primary"
      backgroundGlowVariant="primary"
      withBackgroundGradient
      logoComponent={
        <div className="flex items-center text-primary-900 dark:text-primary-100 gap-3">
          <Image
            src="/static/images/logo.webp"
            alt="Mark.cc logo"
            width={200}
            height={200}
            className="h-8 w-8 rounded-full"
          />
          {'Mark.cc '}
        </div>
      }
    >
      <LandingFooterColumn title="产品">
        <LandingFooterLink href="/features">{'功能'}</LandingFooterLink>
        <LandingFooterLink href="/pricing">{'价格'}</LandingFooterLink>
        <LandingFooterLink href="/security">{'安全'}</LandingFooterLink>
        <LandingFooterLink href="/faq">{'常见问题'}</LandingFooterLink>
      </LandingFooterColumn>
      <LandingFooterColumn title="公司">
        <LandingFooterLink href="/about">{'关于我们'}</LandingFooterLink>
        <LandingFooterLink href="/careers">{'加入我们'}</LandingFooterLink>
        <LandingFooterLink href="/press">{'媒体报道'}</LandingFooterLink>
      </LandingFooterColumn>
      <LandingFooterColumn title="支持">
        <LandingFooterLink href="/help">{'帮助中心'}</LandingFooterLink>
        <LandingFooterLink href="/contact">{'联系我们'}</LandingFooterLink>
        <LandingFooterLink href="/status">{'系统状态'}</LandingFooterLink>
      </LandingFooterColumn>
      <LandingFooterColumn title="法律">
        <LandingFooterLink href="/terms">{'服务条款'}</LandingFooterLink>
        <LandingFooterLink href="/privacy">{'隐私政策'}</LandingFooterLink>
        <LandingFooterLink href="/cookies">{'Cookie 政策'}</LandingFooterLink>
      </LandingFooterColumn>
    </LandingFooter>
  );
};

export default Footer;
