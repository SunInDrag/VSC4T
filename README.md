

VSC4T @https://github.com/B143KC47/VSC4T HUGO移植版本

## 配色方案

- **基礎色調**：使用Solarized Light為基礎


## 安裝與使用

### 作為git子模塊安裝

```bash
git clone https://github.com/SunInDrag/VSC4T.git
```

然後在Hugo配置文件中設置：

```yml
theme = "VSC4T"
```

## 配置示例

在Hugo配置文件中的參數設置示例：

```toml
# 主題參數
[params]
  # 樣式配置
  [params.style]
    theme_color = "#fdf6e3"  # Solarized Base03
    link_color = "#268bd2"   # Solarized Blue
    accent_color = "#2aa198" # Solarized Cyan
    font_family = "Maple Mono NF CN, Consolas, Source Code Pro, monospace"
    background_color = "#eee8d5" # Solarized Base02
    text_color = "#040404"   # 深色文本
  
  # 側邊欄配置
  [params.sidebar]
    enabled = true
    position = "left"
  
  # 社交連結
  [params.social]
    github = "your_github_username"
    twitter = "your_twitter_username"
    email = "your_email@example.com"
```

## 致謝

https://github.com/B143KC47/


