// 全域初始化函數，可以在所有頁面調用
function initExplorerEvents() {
  // 為所有 section header 添加點擊事件
  const sectionHeaders = document.querySelectorAll('.section-header');
  
  sectionHeaders.forEach(header => {
    // 移除已存在的點擊事件
    const clone = header.cloneNode(true);
    header.parentNode.replaceChild(clone, header);
    
    clone.addEventListener('click', (event) => {
      // 確保點擊事件不會傳播到子元素
      if (event.target.tagName === 'A' || event.target.closest('a')) {
        return; // 如果點擊的是鏈接或鏈接內的元素，不執行折疊邏輯
      }
      
      const content = clone.nextElementSibling;
      const icon = clone.querySelector('i');
      
      // 切换折叠状态
      clone.classList.toggle('collapsed');
      content.classList.toggle('collapsed');
      
      // 本地存储折叠状态
      const sectionId = clone.textContent.trim();
      localStorage.setItem(`section-${sectionId}`, clone.classList.contains('collapsed'));
    });
    
    // 恢复保存的折叠状态
    const sectionId = clone.textContent.trim();
    const isCollapsed = localStorage.getItem(`section-${sectionId}`) === 'true';
    
    if (isCollapsed) {
      clone.classList.add('collapsed');
      clone.nextElementSibling.classList.add('collapsed');
    }
  });
  
  // 修改標籤、文件夾和文件項目的點擊事件處理
  const itemElements = document.querySelectorAll('.folder, .file, .tag-item');
  
  itemElements.forEach(item => {
    // 移除可能已存在的點擊事件
    const clone = item.cloneNode(true);
    item.parentNode.replaceChild(clone, item);
    
    // 確保整個項目區域可點擊
    const linkElement = clone.querySelector('a');
    if (linkElement) {
      const href = linkElement.getAttribute('href');
      
      clone.addEventListener('click', (event) => {
        // 如果點擊的是鏈接本身，讓瀏覽器正常處理
        if (event.target === linkElement || linkElement.contains(event.target)) {
          return;
        }
        
        // 否則模擬點擊鏈接
        event.preventDefault();
        window.location.href = href;
      });
    }
    
    // 標籤 hover 效果
    if (clone.classList.contains('tag-item')) {
      clone.addEventListener('mouseenter', () => {
        const icon = clone.querySelector('i');
        if (icon) icon.classList.add('fa-bounce');
      });
      
      clone.addEventListener('mouseleave', () => {
        const icon = clone.querySelector('i');
        if (icon) icon.classList.remove('fa-bounce');
      });
    }
  });
}

// 頁面加載完成時初始化事件
document.addEventListener('DOMContentLoaded', function() {
  initExplorerEvents();
});
