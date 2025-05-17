# BlackCat - A Solarized Dark Hugo Theme

BlackCat是一個基於VSC4T-hexo主題移植到Hugo的主題，使用了Solarized Dark配色方案，模擬了VS Code編輯器的外觀。這是一個專為開發者和技術博客設計的主題。

## 特點

- 基於Solarized Dark配色方案
- VS Code風格的界面
- 響應式設計，適配各種設備
- 支持搜索功能
- 代碼高亮
- 目錄導航
- 標籤和分類頁面
- 支持分類作為數組或單一字串

## 安裝

### 作為git子模塊

```bash
git submodule add https://github.com/your-username/blackcat.git themes/blackcat
```

然後在config.toml文件中設置：

```toml
theme = "blackcat"
```

## 配置

在`config.toml`中的配置示例：

```toml
# 基本設置
baseURL = "https://example.com/"
languageCode = "zh-tw"
title = "My Blog"
theme = "blackcat"

# 主題參數
[params]
  # 樣式配置
  [params.style]
    theme_color = "#002b36"  # Solarized Base03
    link_color = "#268bd2"   # Solarized Blue
    accent_color = "#859900" # Solarized Green
    font_family = "JetBrains Mono, Consolas, Monaco, monospace"
    background_color = "#073642" # Solarized Base02
    text_color = "#93a1a1"   # Solarized Base1
  
  # 側邊欄配置
  [params.sidebar]
    enabled = true
    position = "left"
    [params.sidebar.mobile]
      enabled = false
      hamburger = true
  
  # 移動端配置
  [params.mobile]
    enabled = true
    breakpoint = 768
    scale_fix = true
    nav_style = "drawer"
    font_size_adjust = 0.9
    content_width = "100%"
    hide_elements = ["sidebar-toc"]
    custom_style = true
    touch_optimization = true
    code_optimization = true
  
  # 首頁文章數量
  index_posts = 10
  
  # 開啟 MathJax 數學公式支持
  mathjax = true
  
  # 社交連結
  [params.social]
    github = "your_github_username"
    twitter = "your_twitter_username"
    email = "your_email@example.com"
```

## License

此主題基於MIT License進行分發。
