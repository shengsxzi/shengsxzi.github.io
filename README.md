# 个人学术网站

这是一个多页面静态个人学术网站，适合 PhD 申请阶段使用。风格参考简洁学术主页：主页只放个人介绍和研究概览，详细研究项目、CV 和生活内容分到单独页面。

## 页面结构

- `index.html`: Home，个人介绍、研究关键词、当前项目概览
- `research.html`: Research，work in progress 和 working papers
- `cv.html`: CV，提供 CV PDF 下载
- `life.html`: Life，预留个人生活、兴趣和照片内容
- `site-data.js`: 主要内容入口，后续大多数文字只改这里
- `styles.css`: 视觉样式
- `script.js`: 页面渲染逻辑
- `assets/Shaoxuanzi_Sheng_CV.pdf`: 当前 CV PDF
- `assets/profile.jpg`: 首页个人照片
- `assets/life-hero.jpg`: Life 页面顶部图片

## 编辑内容

主要编辑 [site-data.js](/Users/sleep/Documents/Playground/site-data.js)。

- `profile`: 姓名、身份、单位、邮箱、头像、链接
- `home`: 首页简介、research interests、education
- `research`: Research 页面，包括 work in progress、working papers 和之后的 preprint 链接
- `cv`: CV PDF 链接

## 本地预览

在当前文件夹运行：

```bash
python3 -m http.server 8000
```

然后打开：

```text
http://localhost:8000
```

也可以直接打开 `index.html`，但本地服务器预览更接近 GitHub Pages。

## 部署到 GitHub Pages

当前仓库为 `shengsxzi.github.io`，推送到 GitHub 后，公开网站地址通常是：

```text
https://shengsxzi.github.io/
```

如果 GitHub Pages 没有自动开启，可以在 GitHub 仓库中打开 `Settings` -> `Pages`，Source 选择 `Deploy from a branch`，Branch 选择 `main`，文件夹选择 `/root`。

## 替换头像和 CV

- 头像：替换 `assets/profile.jpg`，或在 `site-data.js` 里修改 `profile.photo`
- CV：替换 `assets/Shaoxuanzi_Sheng_CV.pdf`，或在 `site-data.js` 里修改 `cv.url`
