# 贡献指南

感谢你对 Web4SDK 的关注！欢迎提交 Issue 和 Pull Request。

## 开发流程

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'Add some feature'`
4. 推送分支：`git push origin feature/your-feature`
5. 提交 Pull Request

## 开发环境

- Node.js >= 16.0.0
- TypeScript >= 5.0

## 代码规范

- 使用 TypeScript strict 模式
- 遵循 ESLint 规则：`npm run lint`
- 提交前确保测试通过：`npm test`

## 提交信息格式

```
type(scope): description

# 类型：
# feat: 新功能
# fix: 修复
# docs: 文档
# refactor: 重构
# test: 测试
# chore: 构建/工具
```

## 问题反馈

- 使用 GitHub Issues 提交 Bug 报告或功能建议
- 描述问题时请包含：复现步骤、预期行为、实际行为
