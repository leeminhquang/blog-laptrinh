---
title: "Java Socket TCP cơ bản"
date: 2025-10-23T10:00:00+07:00
draft: false
tags: ["Java","Socket","TCP"]
categories: ["Java"]
---

## Mục tiêu
- Tìm hiểu cách Java dùng socket để giao tiếp TCP.

## Ví dụ code
```java
ServerSocket ss = new ServerSocket(8080);
Socket s = ss.accept();
System.out.println("Client kết nối: " + s);
s.close(); ss.close();
