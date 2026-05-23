import { LandingHeader } from '@/components/landing/navigation/LandingHeader';
import { LandingHeaderMenuItem } from '@/components/landing/navigation/LandingHeaderMenuItem';
import ThemeSwitch from '@/components/shared/ThemeSwitch';
import Image from '@/components/shared/Image';

export const Header = ({ className }: { className?: string }) => {
  return (
    <LandingHeader
      className={className}
      fixed
      withBackground
      variant="primary"
      logoComponent={
        <div className="flex items-center text-primary-500 dark:text-primary-500 gap-3">
          <Image
            src="/static/images/logo.webp"
            alt="Mark.cc logo"
            width={200}
            height={200}
            className="h-8 w-8 rounded-full"
          />
          <span className="font-bold text-lg">Mark.cc</span>
        </div>
      }
    >
      <LandingHeaderMenuItem href="/features">{'功能'}</LandingHeaderMenuItem>
      <LandingHeaderMenuItem href="/pricing">{'价格'}</LandingHeaderMenuItem>
      <LandingHeaderMenuItem href="/security">{'安全'}</LandingHeaderMenuItem>
      <LandingHeaderMenuItem href="/help">{'帮助'}</LandingHeaderMenuItem>
      <LandingHeaderMenuItem type="button" href="/dashboard">
        进入工作台
      </LandingHeaderMenuItem>

      <ThemeSwitch />
    </LandingHeader>
  );
};

export default Header;
