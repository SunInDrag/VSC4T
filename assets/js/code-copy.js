document.addEventListener('DOMContentLoaded', function() {
  // 處理 .highlight 容器
  document.querySelectorAll('.highlight').forEach(function(block) {
    if (block.querySelector('.code-header')) return;

    // 取得語言
    let language = 'text';
    const codeElement = block.querySelector('code');
    if (codeElement) {
      const match = codeElement.className.match(/language-([\w\d\-]+)/);
      if (match) language = match[1];
    }

    // header
    const header = document.createElement('div');
    header.className = 'code-header';

    const headerLeft = document.createElement('div');
    headerLeft.className = 'code-header-left';
    const languageSpan = document.createElement('span');
    languageSpan.className = `code-language language-${language}`;
    languageSpan.textContent = language.charAt(0).toUpperCase() + language.slice(1);
    headerLeft.appendChild(languageSpan);

    const headerRight = document.createElement('div');
    headerRight.className = 'code-header-right';
    const copyButton = document.createElement('button');
    copyButton.className = 'code-header-button copy-button';
    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
    copyButton.addEventListener('click', function() {
      let code = '';
      if (codeElement) code = codeElement.textContent;
      else {
        const pre = block.querySelector('pre');
        if (pre) code = pre.textContent;
      }
      navigator.clipboard.writeText(code).then(function() {
        copyButton.innerHTML = '<i class="fas fa-check"></i>';
        copyButton.classList.add('copied');
        setTimeout(function() {
          copyButton.innerHTML = '<i class="fas fa-copy"></i>';
          copyButton.classList.remove('copied');
        }, 2000);
      });
    });
    headerRight.appendChild(copyButton);

    header.appendChild(headerLeft);
    header.appendChild(headerRight);

    const pre = block.querySelector('pre');
    if (pre) {
      block.insertBefore(header, pre);
    } else {
      block.insertBefore(header, block.firstChild);
    }
  });

  // 處理沒有 .highlight 的 <pre>
  document.querySelectorAll('pre').forEach(function(pre) {
    if (pre.closest('.highlight')) return;
    if (pre.parentElement.classList.contains('code-block')) return;

    // 包一層 .code-block
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    // 取得語言
    let language = 'text';
    const codeElement = pre.querySelector('code');
    if (codeElement) {
      const match = codeElement.className.match(/language-([\w\d\-]+)/);
      if (match) language = match[1];
    }

    // header
    const header = document.createElement('div');
    header.className = 'code-header';

    const headerLeft = document.createElement('div');
    headerLeft.className = 'code-header-left';
    const languageSpan = document.createElement('span');
    languageSpan.className = `code-language language-${language}`;
    languageSpan.textContent = language.charAt(0).toUpperCase() + language.slice(1);
    headerLeft.appendChild(languageSpan);

    const headerRight = document.createElement('div');
    headerRight.className = 'code-header-right';
    const copyButton = document.createElement('button');
    copyButton.className = 'code-header-button copy-button';
    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
    copyButton.addEventListener('click', function() {
      let code = '';
      if (codeElement) code = codeElement.textContent;
      else code = pre.textContent;
      navigator.clipboard.writeText(code).then(function() {
        copyButton.innerHTML = '<i class="fas fa-check"></i>';
        copyButton.classList.add('copied');
        setTimeout(function() {
          copyButton.innerHTML = '<i class="fas fa-copy"></i>';
          copyButton.classList.remove('copied');
        }, 2000);
      });
    });
    headerRight.appendChild(copyButton);

    header.appendChild(headerLeft);
    header.appendChild(headerRight);

    wrapper.insertBefore(header, pre);
  });
}); 