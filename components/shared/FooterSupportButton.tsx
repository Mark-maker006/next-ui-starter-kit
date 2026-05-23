'use client';

import { version } from '@/data/app-info';
import { metadata } from '@/data/config/metadata';

const appWindow = typeof window !== 'undefined' ? window : null;
const appNavigator = typeof window !== 'undefined' ? window?.navigator : null;

const sanitizeMailBody = (body) => body.replace(/(?:\r\n|\r|\n)/g, '%0D%0A');

export const SUPPORT_EMAIL = metadata.supportEmail;

export const APP_INFO_TEXT = `


-------------------
请不要删除以下诊断信息。

页面地址: ${appWindow?.location.href}
版本: ${version}
设备信息: ${appNavigator?.userAgent}
窗口大小: ${appWindow?.innerWidth} x ${appWindow?.innerHeight}
平台: ${appNavigator?.platform}
Cookie 启用: ${appNavigator?.cookieEnabled}
网络连接: ${
  (
    appNavigator as unknown as {
      connection: {
        effectiveType: string;
      };
    }
  )?.connection?.effectiveType
}
-------------------
`;

const HELP_SUBJECT = `[${metadata.businessName}] 支持请求`;

export const HELP_HREF = `mailto:${SUPPORT_EMAIL}?subject=${HELP_SUBJECT}&body=${sanitizeMailBody(
  APP_INFO_TEXT,
)}`;

export const FooterSupportButton = () => {
  const openSupport = (e) => {
    e.preventDefault();
    window.open(HELP_HREF, '_blank');
  };

  return (
    <a href="#" onClick={openSupport} className={'nav-link'}>
      联系支持
    </a>
  );
};

export default FooterSupportButton;
