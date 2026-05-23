import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingSignupUrl = '#';

export const pricingFrequencies: PricingTierFrequency[] = [
  { id: '1', value: '1', label: '月付', priceSuffix: '/月' },
  { id: '1', value: '2', label: '年付', priceSuffix: '/年' },
];

export const pricingTiers: PricingTier[] = [
  {
    name: '免费版',
    id: 'tier-1',
    href: '#',
    price: { 1: '¥0', 2: '¥0' },
    discountPrice: { 1: '', 2: '' },
    description: '适合刚开始搭建招聘和人事流程的小团队。',
    features: ['跨设备访问', '基础通知提醒', '基础角色权限'],
    featured: false,
    highlighted: false,
    cta: '免费开始',
  },
  {
    name: '专业版',
    id: 'tier-2',
    href: '#',
    discountPrice: { 1: '¥29', 2: '¥299' },
    price: { 1: '¥39', 2: '¥399' },
    description: '适合需要更多自动化和协作能力的成长团队。',
    features: ['包含免费版全部功能', '自定义流程模板', '第三方应用集成'],
    featured: false,
    highlighted: true,
    cta: '开始使用',
    soldOut: true,
  },
  {
    name: '企业版',
    id: 'tier-3',
    href: '#',
    price: { 1: '¥99', 2: '¥999' },
    discountPrice: { 1: '', 2: '' },
    description: '适合多团队、多权限和高安全要求的组织。',
    features: ['包含专业版全部功能', '优先支持', '企业级安全控制'],
    featured: true,
    highlighted: false,
    cta: '联系开通',
  },
];
