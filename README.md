# BG Bank 前端项目

基于 Next.js 和 React 构建的现代银行仪表盘应用，具有清晰直观的用户界面。

## 技术栈

- **框架：** Next.js 14.0.4 (App Router)
- **开发语言：** TypeScript
- **样式解决方案：** Tailwind CSS
- **组件：** 
  - 自定义 React 组件
  - Headless UI 组件
- **状态管理：** React Hooks
- **图表：** Recharts
- **图标：** lucide-react
- **日期处理：** date-fns

## 项目结构

```
bg-bank-front/
├── public/              # 静态资源文件（图片、头像等）
├── src/
│   ├── app/            # Next.js 13+ App Router 目录
│   │   ├── (auth)/     # 认证相关页面
│   │   ├── (dashboard)/# 仪表盘相关页面
│   │   │   ├── dashboard/    # 主仪表盘
│   │   │   ├── analytics/    # 数据分析页面
│   │   │   └── settings/     # 用户设置
│   │   └── page.tsx    # 首页
│   ├── components/     # React 组件
│   │   ├── features/   # 功能型组件
│   │   ├── layouts/    # 布局组件
│   │   └── ui/         # 通用UI组件
│   └── utils/         # 工具函数和配置
└── 配置文件
    ├── next.config.js   # Next.js 配置
    ├── tailwind.config.ts # Tailwind CSS 配置
    └── tsconfig.json    # TypeScript 配置
```

## 功能模块

### 1. 用户认证
- 用户登录/注册
- 个人资料管理
- 会话管理

### 2. 仪表盘
- 财务状况概览
- 交易历史记录
- 收入支出图表
- 快捷操作菜单

### 3. 交易管理
- 交易列表视图
- 交易详情
- 好友管理
- 转账功能

### 4. 数据分析
- 收入支出图表
- 财务统计
- 性能指标
- 数据可视化

### 5. 设置中心
- 个人资料设置
- 账户管理
- 偏好设置
- 安全设置

### 6. UI 组件
- 响应式布局
- 自定义头像系统
- 交互式图表
- 现代化仪表盘设计
- 加载状态和动画

## 开发指南

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 开发规范

- 遵循 TypeScript 最佳实践
- 使用 Tailwind CSS 进行样式开发
- 保持组件模块化
- 遵循 Next.js 13+ 开发规范
- 注重响应式设计
