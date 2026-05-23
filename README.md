# Next UI Starter Kit

一个可复用的 **Next.js 15 + React 19 + TypeScript + Tailwind CSS** UI 模板仓库，提取自 Mark.cc HR Dashboard 项目，适合快速启动后台仪表盘、SaaS 落地页、产品官网和管理系统原型。

这个仓库不是业务系统成品，而是一个可二次开发的 UI 起步模板：你可以直接复用组件、页面结构、主题配置、mock 数据组织方式和 GitHub Pages/Vercel 兼容配置。

## 适合什么场景

- 招聘、CRM、运营、数据看板等管理后台。
- SaaS 产品官网、定价页、FAQ、CTA、用户评价等落地页。
- 前端作品集或 UI 原型项目。
- 需要快速复用 Radix UI / shadcn 风格组件和 Tailwind 主题系统的 Next.js 项目。

## 包含内容

| 模块 | 内容 | 复用价值 |
| --- | --- | --- |
| `components/shared/ui/` | Button、Dialog、Tabs、Table、Chart、Toast、Sidebar 等基础组件 | 跨项目 UI 基座 |
| `components/dashboard/` | TopNav、ProfileCard、ProgressChart、TimeTracker、TiltCard 等 | 仪表盘和卡片交互模板 |
| `components/landing/` | Pricing、FAQ、CTA、Bento Grid、Testimonial、Footer、Navigation 等 | SaaS/产品官网落地页模板 |
| `components/shared/` | Header、Footer、ThemeSwitch、SearchProvider、Image、Link 等 | 应用级通用封装 |
| `app/` | Dashboard、Landing、Pricing、Analytics、Candidates、Jobs、Settings 等页面示例 | 可运行页面组合参考 |
| `data/config/` | 颜色、站点信息、导航、定价、SEO 配置 | 数据驱动配置模板 |
| `data/dashboard.ts` | 仪表盘 mock 数据结构 | 后续接 API 的数据结构参考 |
| `css/globals.css` | 全局样式、CSS 变量、主题样式 | 组件视觉表现基础 |
| `tailwind.config.js` | 主题色、动画、断点、插件配置 | Tailwind 设计系统 |
| `next.config.js` | 静态导出、basePath、assetPrefix、安全头、SVG loader | 部署与安全配置参考 |

## 技术栈

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 3
- Radix UI / shadcn 风格组件
- lucide-react
- next-themes
- Framer Motion
- Recharts
- GitHub Pages / Vercel 兼容配置

## 快速开始

### 环境要求

- Node.js `>= 22.0.0`
- npm

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

默认端口为：

```text
http://localhost:30001
```

### 构建生产版本

```bash
npm run build
```

## 如何复用到其他项目

### 方式一：作为完整模板启动新项目

1. 克隆本仓库。
2. 修改 `package.json` 中的 `name`、`description`。
3. 修改 `data/config/site.settings.js` 和 `data/config/metadata.js` 中的站点信息。
4. 替换 `public/static/images/` 下的品牌图片、头像和展示图。
5. 根据业务需要删除不需要的页面和组件。
6. 运行 `npm run build` 确认模板仍可构建。

### 方式二：复制组件到已有项目

如果你只想复用组件，建议至少复制这些文件：

```text
components/shared/ui/
components/shared/ThemeSwitch.tsx
components/shared/Image.tsx
components/shared/Link.tsx
components/dashboard/TiltCard.tsx
components/dashboard/hooks/
lib/utils.ts
css/globals.css
tailwind.config.js
```

然后确认目标项目中已经具备：

- `@/` 路径别名。
- Tailwind CSS content 路径覆盖目标组件目录。
- `class-variance-authority`、`clsx`、`tailwind-merge`、Radix UI、`lucide-react` 等依赖。
- `next-themes` 配置，如果使用暗色模式。

### 方式三：复用页面模板

可以直接复制下面的页面作为业务原型：

```text
app/dashboard/page.tsx
app/analytics/page.tsx
app/candidates/page.tsx
app/jobs/page.tsx
app/settings/page.tsx
app/landing/page.tsx
app/pricing/page.tsx
```

复制页面时，需要同步复制页面依赖的组件、`data/dashboard.ts`、`data/config/` 和全局样式。

## 二次开发建议

### 替换品牌与主题

主要修改：

```text
data/config/site.settings.js
data/config/metadata.js
data/config/colors.js
css/globals.css
tailwind.config.js
```

建议先改 `data/config/colors.js` 中的主色、辅助色和中性色，再根据页面效果微调 Tailwind class。

### 替换 mock 数据

当前 dashboard 示例主要由本地静态数据驱动。你可以先替换：

```text
data/dashboard.ts
```

如果要接入真实 API，可以把页面中的静态数组替换为接口请求结果，或引入你自己的数据获取层。

### 删除不需要的模块

- 只做后台：可以删除 `components/landing/` 和落地页相关 `app/*` 页面。
- 只做官网：可以删除 `components/dashboard/` 和 dashboard 页面。
- 只做组件库参考：可以保留 `components/shared/ui/`、`lib/utils.ts`、`css/globals.css` 和 Tailwind 配置。

### 保留交互动效

卡片 hover/tilt 效果位于：

```text
components/dashboard/TiltCard.tsx
components/dashboard/hooks/useTiltEffect.ts
```

使用方式：

```tsx
<TiltCard maxRotation={6} scale={1.02}>
  <div className="rounded-2xl border p-6">你的卡片内容</div>
</TiltCard>
```

## 部署说明

### 部署到 Vercel

1. 将仓库导入 Vercel。
2. 使用默认 Next.js 构建配置。
3. 执行 `npm run build`。

### 部署到 GitHub Pages

项目支持静态导出配置。部署到 GitHub Pages 时通常需要设置：

```bash
NEXT_EXPORT=true
NEXT_PUBLIC_BASE_PATH=/你的仓库名
```

并确保 `next.config.js` 中的 `basePath` 与 `assetPrefix` 使用相同的环境变量。

## 迁移注意事项

- 不要复制 `.env`、`.claude`、`.cursor`、`.vscode`、`.mcp.json`、`node_modules`、`.next`、`out` 等本地或私有文件。
- 如果页面图片路径异常，检查 `NEXT_PUBLIC_BASE_PATH` 和 `public/static/images`。
- 如果 Tailwind 样式缺失，检查 `tailwind.config.js` 的 `content` 路径和 `css/globals.css` 是否已引入。
- 如果组件导入失败，检查 `tsconfig.json` 中的 `@/` 路径别名。
- 如果暗色模式不生效，检查 `app/theme-providers.tsx` 和 `next-themes` 是否接入。

## 推荐开发流程

```bash
npm install
npm run dev
npm run build
```

在提交前建议检查：

```bash
git status
npm run build
```

## 来源说明

该模板提取自 Mark.cc HR Dashboard 项目中的通用 UI、页面模板、主题配置与组件组织方式，并去除了本地工具目录、私有配置、构建产物和上下文文件。

## License

MIT
