---
title: Message 消息提示
nav:
  path: /components
  title: Message 消息提示
---

## Message 消息提示

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

```tsx | pure
Message({ message: '这是一条消息' });
```

<code src="./demo/index.tsx">

## 不同状态的消息提示

用来显示「成功、警告、消息、错误」类的操作反馈。设置 type 字段可以定义不同的状态，默认为 info。

<code src="./demo/type.tsx">

## 可关闭的消息提示

可以添加关闭按钮。

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 close 设置为 true 此外 Message 拥有可控的 duration， 默认的关闭时间为 3000 毫秒。

<code src="./demo/close.tsx">

<API src="./Message.tsx">
