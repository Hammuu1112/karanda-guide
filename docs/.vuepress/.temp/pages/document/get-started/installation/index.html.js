import comp from "/workspaces/karanda-guide/docs/.vuepress/.temp/pages/document/get-started/installation/index.html.vue"
const data = JSON.parse("{\"path\":\"/document/get-started/installation/\",\"title\":\"installation\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"installation\",\"createTime\":\"2024/10/08 04:26:38\",\"permalink\":\"/document/get-started/installation/\",\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"notes/document/get-started/installation.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10000,\"name\":\"notes\"},{\"id\":\"c49268\",\"sort\":10001,\"name\":\"document\"},{\"id\":\"dad0a5\",\"sort\":10002,\"name\":\"get-started\"}]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
