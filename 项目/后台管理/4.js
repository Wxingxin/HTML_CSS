document.addEventListener("DOMContentLoaded", function () {
  const sidebarNav = document.querySelector(".sidebar-nav");
  const navItems = sidebarNav.querySelectorAll(".nav-item"); // 所有可点击的菜单项
  const contentPages = document.querySelectorAll(
    ".admin-content .content-page"
  );
  const pageTitleElement = document.getElementById("page-title");
  const logoutButton = document.getElementById("logout");

  // 函数：关闭所有打开的子菜单
  function closeAllSubmenus(exceptThisOne = null) {
    const openSubmenus = sidebarNav.querySelectorAll(".submenu.open");
    openSubmenus.forEach((submenu) => {
      const parentLink = submenu.previousElementSibling;
      if (submenu !== exceptThisOne) {
        submenu.classList.remove("open");
        submenu.style.maxHeight = null;
        if (parentLink && parentLink.classList.contains("has-submenu")) {
          parentLink.classList.remove("open"); // 移除父链接的 open 状态 (用于箭头)
        }
      }
    });
  }

  // 函数：切换子菜单的展开/折叠
  function toggleSubmenu(submenuLink) {
    const submenu = submenuLink.nextElementSibling; // 子菜单ul元素
    if (submenu && submenu.classList.contains("submenu")) {
      // 可选：手风琴效果，展开一个时关闭其他
      // if (!submenu.classList.contains('open')) {
      //     closeAllSubmenus(submenu);
      // }

      submenu.classList.toggle("open");
      submenuLink.classList.toggle("open"); // 用于箭头旋转

      if (submenu.classList.contains("open")) {
        submenu.style.maxHeight = submenu.scrollHeight + "px"; // 展开
      } else {
        submenu.style.maxHeight = null; // 折叠
      }
    }
  }

  // 函数：切换页面显示并更新标题
  function showPage(pageId, pageName) {
    contentPages.forEach((page) => {
      page.classList.remove("active");
    });
    const targetPage = document.getElementById(pageId + "-page");
    if (targetPage) {
      targetPage.classList.add("active");
      if (pageTitleElement && pageName) {
        pageTitleElement.textContent = pageName;
      }
    } else {
      console.warn(`页面 ID "${pageId}-page" 未找到。`);
      // 可以选择显示一个默认页面或错误提示
      const dashboardPage = document.getElementById("dashboard-page");
      if (dashboardPage) {
        dashboardPage.classList.add("active");
        if (pageTitleElement) pageTitleElement.textContent = "仪表盘";
      }
    }
  }

  // 函数：设置侧边栏链接的激活状态
  function setActiveLink(clickedLink) {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    clickedLink.classList.add("active");

    // 如果点击的是子菜单项，确保其父菜单是展开状态
    // (如果父菜单不是手风琴模式，并且可能已关闭)
    let parentSubmenu = clickedLink.closest(".submenu");
    if (parentSubmenu && !parentSubmenu.classList.contains("open")) {
      const parentLink = parentSubmenu.previousElementSibling;
      if (parentLink && parentLink.classList.contains("has-submenu")) {
        toggleSubmenu(parentLink); // 展开父菜单
      }
    }
  }

  // 使用事件委托处理侧边栏导航点击
  sidebarNav.addEventListener("click", function (event) {
    const clickedEl = event.target.closest(".nav-item"); // 找到被点击的 .nav-item

    if (!clickedEl) return; // 如果点击的不是 .nav-item 或其子元素，则不处理

    event.preventDefault(); // 阻止a标签的默认跳转

    if (clickedEl.classList.contains("has-submenu")) {
      // 如果点击的是父菜单
      toggleSubmenu(clickedEl);
    } else {
      // 如果点击的是普通菜单项或子菜单项
      const pageId = clickedEl.dataset.page;
      // 提取纯文本作为页面名称，移除可能的图标和箭头文本
      let pageName = clickedEl.cloneNode(true); // 克隆节点以移除子元素
      pageName.querySelectorAll(".icon, .arrow").forEach((el) => el.remove());
      pageName = pageName.textContent.trim();

      if (pageId) {
        showPage(pageId, pageName);
        setActiveLink(clickedEl);

        // 如果点击的是顶级菜单项 (非子菜单项)，则关闭所有其他子菜单
        if (
          !clickedEl.classList.contains("sub-item") &&
          !clickedEl.classList.contains("has-submenu")
        ) {
          closeAllSubmenus();
        }

        window.location.hash = pageId; // 更新URL哈希值
      }
    }
  });

  // 根据URL哈希值加载初始页面
  function loadInitialPage() {
    let pageId = window.location.hash.substring(1); // 去掉 #
    let linkToActivate = null;
    let pageName = "仪表盘"; // 默认页面名称

    if (pageId) {
      linkToActivate = sidebarNav.querySelector(
        `.nav-item[data-page="${pageId}"]`
      );
    }

    if (linkToActivate) {
      let tempPageName = linkToActivate.cloneNode(true);
      tempPageName
        .querySelectorAll(".icon, .arrow")
        .forEach((el) => el.remove());
      pageName = tempPageName.textContent.trim();
    } else {
      // 如果哈希值无效或不存在，默认显示仪表盘
      pageId = "dashboard";
      linkToActivate = sidebarNav.querySelector(
        '.nav-item[data-page="dashboard"]'
      );
      if (linkToActivate) {
        let tempPageName = linkToActivate.cloneNode(true);
        tempPageName
          .querySelectorAll(".icon, .arrow")
          .forEach((el) => el.remove());
        pageName = tempPageName.textContent.trim();
      }
    }

    if (linkToActivate) {
      showPage(pageId, pageName);
      setActiveLink(linkToActivate);

      // 如果激活的链接在子菜单中，则展开其父菜单
      const parentSubmenu = linkToActivate.closest(".submenu");
      if (parentSubmenu) {
        const parentLink = parentSubmenu.previousElementSibling;
        if (
          parentLink &&
          parentLink.classList.contains("has-submenu") &&
          !parentSubmenu.classList.contains("open")
        ) {
          toggleSubmenu(parentLink);
        }
      }
    } else {
      // 极端情况：连仪表盘链接都找不到
      showPage("dashboard", "仪表盘");
    }
  }

  loadInitialPage(); // 页面加载时执行
  window.addEventListener("hashchange", loadInitialPage); // 监听哈希变化

  // 退出按钮示例
  if (logoutButton) {
    logoutButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (confirm("您确定要退出登录吗？")) {
        alert("您已退出系统！");
        // 实际应用中: window.location.href = '/login.html';
      }
    });
  }
});
