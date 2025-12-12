/* =========================================
   SECURITY MEASURES (Run Immediately)
   ========================================= */


document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.tech-card, .project-card, .team-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Translation Data
    const translations = {
        vi: {
            nav: ['Trang chủ', 'Kỹ thuật', 'Dự án', 'Liên hệ'],
            hero_welcome: 'WELCOME<br>TO <br><span>T - Team</span>',
            hero_desc: 'Chào mừng đến với T - Team Studio – nơi hội tụ đam mê công nghệ! Được phát triển bởi team T - Team, chúng tôi mang đến giải pháp Custom Script, Car Decal, Model3D, Quần áo, Logo, Poster, Website, Quay dựng MV nền tảng FiveM và nhiều nội dung thú vị khác.',
            hero_btn: '<i class="fa-brands fa-discord"></i> Tham gia Discord',
            tech_title: 'Kỹ <span>thuật</span>',
            tech_cards: {
                model: { h3: 'Mô hình', p: 'Thiết kế mô hình 3D chất lượng cao' },
                design: { h3: 'Thiết kế', p: 'Logo, Banner, UI/UX chuyên nghiệp' },
                media: { h3: 'Truyền thông', p: 'Quay dựng MV, Media, Marketing' },
                code: { h3: 'Lập trình', p: 'Website, Script FiveM, Discord Bot' }
            },
            proj_title: 'Dự <span>án</span>',
            dash_cat: 'Danh mục',
            dash_all: 'Tất cả',
            filter_all: 'Tất cả',
            search_placeholder: 'Tìm sản phẩm...',
            info_title: 'Thông <span>tin</span>',
            service_title: 'DỊCH VỤ HỢP TÁC & PHÁT TRIỂN',
            service_desc: 'Nhận thiết kế & phát triển dự án theo yêu cầu — từ server FiveM đến website chuyên nghiệp.',
            service_list1: [
                'Nhận thiết kế & setup server FiveM hoàn chỉnh',
                'Tối ưu hiệu năng & bảo mật máy chủ',
                'Cập nhật & bảo trì định kỳ theo yêu cầu'
            ],
            service_list2: [
                'Phát triển website quản lý, giới thiệu server',
                'Tùy chỉnh giao diện, logo và hệ thống UI',
                'Ưu đãi đặc biệt cho đối tác liên hệ trực tiếp'
            ],
            cta_title: 'ƯU ĐÃI HỢP TÁC ĐẶC BIỆT',
            cta_desc: 'Liên hệ qua kênh chính thức để nhận gói khuyến mãi thiết kế & setup.',
            cta_btn: 'LIÊN HỆ HỢP TÁC',
            stats: { prod: 'SẢN PHẨM', lic: 'BẢN QUYỀN', mem: 'THÀNH VIÊN' },
            footer_dev: 'Phát triển bởi <b>&lt;/&gt; Nguyễn Trí</b>'
        },
        en: {
            nav: ['Home', 'Technical', 'Projects', 'Contact'],
            hero_welcome: 'WELCOME<br>TO <br><span>T - Team</span>',
            hero_desc: 'Welcome to T - Team Studio – where technology passion meets! Developed by T - Team, we provide Custom Scripts, Car Decals, 3D Models, Clothing, Logos, Posters, Websites, MV Production for FiveM and many other interesting contents.',
            hero_btn: '<i class="fa-brands fa-discord"></i> Join Discord',
            tech_title: 'Tech<span>nical</span>',
            tech_cards: {
                model: { h3: 'Modeling', p: 'High quality 3D model design' },
                design: { h3: 'Design', p: 'Professional Logo, Banner, UI/UX' },
                media: { h3: 'Media', p: 'MV Production, Media, Marketing' },
                code: { h3: 'Coding', p: 'Website, FiveM Script, Discord Bot' }
            },
            proj_title: 'Proj<span>ects</span>',
            dash_cat: 'Category',
            dash_all: 'All',
            filter_all: 'All',
            search_placeholder: 'Search products...',
            info_title: 'Infor<span>mation</span>',
            service_title: 'COOPERATION & DEVELOPMENT SERVICES',
            service_desc: 'Accepting design & development requests — from FiveM servers to professional websites.',
            service_list1: [
                'Complete FiveM server design & setup',
                'Server performance optimization & security',
                'Periodic updates & maintenance on request'
            ],
            service_list2: [
                'Management & showcase website development',
                'Custom UI, Logo, and System Interface',
                'Special offers for direct partnership contact'
            ],
            cta_title: 'SPECIAL PARTNERSHIP OFFER',
            cta_desc: 'Contact via official channels to receive design & setup promotion packages.',
            cta_btn: 'CONTACT PARTNERSHIP',
            stats: { prod: 'PRODUCTS', lic: 'LICENSE', mem: 'MEMBERS' },
            footer_dev: 'Developed by <b>&lt;/&gt; Nguyễn Trí</b>'
        }
    };

    // Tech Hover Data (Bilingual)
    const techData = {
        model: {
            title: { vi: 'Kỹ Thuật Mô hình', en: 'Modeling Tech' },
            items: [
                { icon: 'fa-shirt', text: { vi: 'Model Quần Áo', en: 'Clothing Model' } },
                { icon: 'fa-car', text: { vi: 'Model Phương Tiện', en: 'Vehicle Model' } },
                { icon: 'fa-map', text: { vi: 'Model Map', en: 'Map Model' } },
                { icon: 'fa-user', text: { vi: 'Model Nhân Vật', en: 'Character Model' } }
            ]
        },
        design: {
            title: { vi: 'Kỹ Thuật Thiết kế', en: 'Design Tech' },
            items: [
                { icon: 'fa-paint-roller', text: { vi: 'Decal Phương Tiện', en: 'Vehicle Decal' } },
                { icon: 'fa-vest', text: { vi: 'Thiết Kế Quần Áo', en: 'Clothing Design' } },
                { icon: 'fa-image', text: { vi: 'Thiết Kế Logo, Poster...', en: 'Logo, Poster Design...' } }
            ]
        },
        media: {
            title: { vi: 'Kỹ Thuật Truyền thông', en: 'Media Tech' },
            items: [
                { icon: 'fa-video', text: { vi: 'Quay Dựng MV', en: 'MV Production' } },
                { icon: 'fa-photo-film', text: { vi: 'Chỉnh Sửa Video', en: 'Video Editing' } },
                { icon: 'fa-camera', text: { vi: 'Chụp Ảnh Poster', en: 'Poster Photography' } },
                { icon: 'fa-gamepad', text: { vi: 'Streamer Game', en: 'Game Streamer' } }
            ]
        },
        code: {
            title: { vi: 'Kỹ Thuật Lập trình', en: 'Coding Tech' },
            items: [
                { icon: 'fa-server', text: { vi: 'Tuỳ Chỉnh Server', en: 'Server Customization' } },
                { icon: 'fa-gear', text: { vi: 'Tuỳ Chỉnh Tính Năng', en: 'Feature Customization' } },
                { icon: 'fa-toolbox', text: { vi: 'Phát Triển Công Cụ', en: 'Tool Development' } },
                { icon: 'fa-globe', text: { vi: 'Xây Dựng Website', en: 'Website Building' } }
            ]
        }
    };

    let currentLang = localStorage.getItem('site_lang') || 'vi';

    const techCards = document.querySelectorAll('.tech-card');
    const detailPanel = document.getElementById('tech-details');
    const detailTitle = document.getElementById('detail-title');
    const detailItems = document.getElementById('detail-items');

    function updateTechDetails(category) {
        if (!techData[category]) return;
        
        detailTitle.textContent = techData[category].title[currentLang];
        detailItems.innerHTML = techData[category].items.map(item => `
            <div class="sub-item">
                <i class="fa-solid ${item.icon}"></i>
                <span>${item.text[currentLang]}</span>
            </div>
        `).join('');
    }

    /* Language Switcher Logic */
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('site_lang', lang);
        
        const t = translations[lang];

        // Nav
        const navLinks = document.querySelectorAll('.nav-links a');
        if(navLinks.length >= 4) {
            t.nav.forEach((text, i) => navLinks[i].textContent = text);
        }
        
        // Hero
        document.querySelector('.hero-text h1').innerHTML = t.hero_welcome;
        document.querySelector('.hero-text p').textContent = t.hero_desc;
        document.querySelector('.hero-text .btn').innerHTML = t.hero_btn;

        // Technical
        document.querySelector('.technical .section-title').innerHTML = t.tech_title;
        document.querySelectorAll('.tech-card').forEach(card => {
            const cat = card.getAttribute('data-category');
            if(t.tech_cards[cat]) {
                card.querySelector('h3').textContent = t.tech_cards[cat].h3;
                card.querySelector('p').textContent = t.tech_cards[cat].p;
            }
        });

        // Projects
        document.querySelector('.projects .section-title').innerHTML = t.proj_title;
        document.querySelector('.panel-title').textContent = t.dash_cat;
        document.querySelector('#reset-all-cats').textContent = t.dash_all;
        document.querySelector('.pill[data-filter="all"]').textContent = t.filter_all;
        document.getElementById('project-search-input').placeholder = t.search_placeholder;

        // Info / Team
        const teamTitle = document.querySelector('.team .section-title');
        if(teamTitle) teamTitle.innerHTML = t.info_title;

        // Services
        const serviceHeaderH2 = document.querySelector('.service-header h2');
        if(serviceHeaderH2) {
             serviceHeaderH2.textContent = t.service_title;
             document.querySelector('.service-header p').textContent = t.service_desc;
             
             const list1 = document.querySelectorAll('.service-list ul:first-child li');
             t.service_list1.forEach((text, i) => { if(list1[i]) list1[i].innerHTML = `<i class="fa-solid fa-circle-check"></i> ${text}`; });
             
             const list2 = document.querySelectorAll('.service-list ul:last-child li');
             t.service_list2.forEach((text, i) => { if(list2[i]) list2[i].innerHTML = `<i class="fa-solid fa-circle-check"></i> ${text}`; });

             document.querySelector('.service-cta h3').textContent = t.cta_title;
             document.querySelector('.service-cta p').textContent = t.cta_desc;
             document.querySelector('.btn-service').textContent = t.cta_btn;
        }

        // Stats
        const statLabels = document.querySelectorAll('.stat-label');
        if(statLabels.length >= 3) {
            statLabels[0].textContent = t.stats.prod;
            statLabels[1].textContent = t.stats.lic;
            statLabels[2].textContent = t.stats.mem;
        }

        // Footer
        document.querySelector('.footer-dev').innerHTML = t.footer_dev;

        // Re-render things that depend on lang (like tech details if open)
        const activeCard = document.querySelector('.tech-card.active');
        if(activeCard) {
            updateTechDetails(activeCard.getAttribute('data-category'));
        }
    }

    // Toggle Button Event
    const langToggle = document.getElementById('lang-toggle');
    if(langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'vi' ? 'en' : 'vi';
            setLanguage(newLang);
        });
    }

    // Init
    setLanguage(currentLang);

    techCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
             // Remove active from others
             techCards.forEach(c => c.classList.remove('active'));
             card.classList.add('active');
             
             // Update content
             const category = card.getAttribute('data-category');
             updateTechDetails(category);

             // Show panel
             detailPanel.classList.add('visible');
        });
    });

    const technicalSection = document.querySelector('.technical .container');
    technicalSection.addEventListener('mouseleave', () => {
        detailPanel.classList.remove('visible');
        techCards.forEach(c => c.classList.remove('active'));
    });

    /* Theme Toggle */
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Check saved theme
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    /* =========================================
       PROJECTS & PAGINATION LOGIC
       ========================================= */
    
    // 1. Project Data
    const projects = [
        {
            id: 1,
            title: "T - TEAM Cltoh",
            subtitle: "Nguyễn Trí - All",
            category: "Clothes Model",
            group: "model",
            badges: ["CD", "CAN", "Độc quyền"],
            image: "assets/product1.png",
            imagePlaceholder: "linear-gradient(135deg, #1c1c1c, #333)",
            icon: "fa-shirt"
        },
    ];

    // State
    const state = {
        projects: projects,
        filter: 'all',
        activeGroup: 'all', 
        currentPage: 1,
        itemsPerPage: 4
    };

    // DOM Elements
    const projectGrid = document.getElementById('project-grid');
    const paginationContainer = document.getElementById('pagination');
    const filterPills = document.querySelectorAll('.pill');
    const searchInput = document.getElementById('project-search-input');
    const catCards = document.querySelectorAll('.cat-card');
    const resetCatBtn = document.getElementById('reset-all-cats');

    // Init Logic
    function initProjects() {
        renderProjects();
        setupFilters();
        setupSearch();
        setupCategoryLogic();
        updateCounts();
        
        // Fetch dynamic data from Vercel/MongoDB
        fetchDynamicProjects();
    }

    async function fetchDynamicProjects() {
        try {
            // Determine API URL
            const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            const API_URL = isLocal ? 'http://localhost:3000/api/projects' : '/api/projects';
            
            const res = await fetch(API_URL);
            if (!res.ok) return; // Silent fail if no DB connected yet
            
            const data = await res.json();
            
            if (Array.isArray(data) && data.length > 0) {
                const dynamicProjects = data.map(p => ({
                    id: p._id, // Mongo ID
                    title: p.title,
                    subtitle: p.subtitle,
                    badges: p.tags || [],
                    // Valid groups: 'model', 'design', 'code', 'media'
                    // The bot sends 'category' which usually matches these.
                    group: ['model', 'design', 'code', 'media'].includes(p.category) ? p.category : 'all', 
                    category: p.category || 'misc',
                    image: p.image,
                    // Defaults
                    imagePlaceholder: '#111',
                    icon: 'fa-layer-group'
                }));

                // Merge: Dynamic (Newest) + Static
                // 'projects' is the const variable with static data
                state.projects = [...dynamicProjects, ...projects];
                
                // Re-render
                renderProjects();
                updateCounts();
            }
        } catch (e) {
            console.log('Dynamic fetch info:', e);
        }
    }

    // Render Projects
    function renderProjects() {
        let filtered = state.projects;

        // 1. Filter by Group 
        if (state.activeGroup !== 'all') {
            filtered = filtered.filter(p => p.group === state.activeGroup);
        }

        // 2. Filter by Tag 
        if (state.filter !== 'all') {
            filtered = filtered.filter(p => p.category === state.filter);
        }

        // 3. Search
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        if (searchTerm) {
            filtered = filtered.filter(p => 
                p.title.toLowerCase().includes(searchTerm) || 
                p.subtitle.toLowerCase().includes(searchTerm)
            );
        }

        // 4. Paginate
        const totalItems = filtered.length;
        const totalPages = Math.ceil(totalItems / state.itemsPerPage) || 1;
        
        if (state.currentPage > totalPages) state.currentPage = totalPages;
        if (state.currentPage < 1) state.currentPage = 1;

        const start = (state.currentPage - 1) * state.itemsPerPage;
        const end = start + state.itemsPerPage;
        const paginatedItems = filtered.slice(start, end);

        // 5. Render Grid
        if (projectGrid) {
            projectGrid.innerHTML = '';
            if (paginatedItems.length === 0) {
                projectGrid.innerHTML = '<div style="color:#aaa; text-align:center; grid-column:1/-1;">Không tìm thấy sản phẩm nào.</div>';
            } else {
                paginatedItems.forEach(item => {
                    const card = createProjectCard(item);
                    projectGrid.appendChild(card);
                });
            }
        }

        // 6. Render Pagination
        renderPagination(totalItems, totalPages);
    }

    // Helper: Create Card HTML
    function createProjectCard(item) {
        const badgesHtml = item.badges.map(b => {
             let className = 'badge';
             if (b === 'Độc quyền') className += ' exclusive';
             else className += ' cd'; // default style
             return `<span class="${className}">${b}</span>`;
        }).join('');

        const imageHtml = item.image 
            ? `<img src="${item.image}" alt="${item.title}" class="card-img-real" onerror="this.parentElement.innerHTML='<div class=\'card-img-placeholder\' style=\'background: ${item.imagePlaceholder}\'><i class=\'fa-solid ${item.icon}\' style=\'font-size: 4rem; color: rgba(255,255,255,0.1);\'></i></div>'">` 
            : `<div class="card-img-placeholder" style="background: ${item.imagePlaceholder};">
                 <i class="fa-solid ${item.icon}" style="font-size: 4rem; color: rgba(255,255,255,0.1);"></i>
               </div>`;

        const div = document.createElement('div');
        div.className = 'project-card-new';
        
        // Add click listener to open modal (Entire card is clickable)
        div.style.cursor = 'pointer';
        div.addEventListener('click', (e) => {
            // If clicking contact button, let it bubble or handle separately? 
            // The user might want the modal even when clicking contact? 
            // Usually contact button should be independent.
            if(e.target.closest('.btn-contact-full')) return;
            openProjectModal(item);
        });

        div.innerHTML = `
            <div class="card-badges">${badgesHtml}</div>
            <div class="card-image-wrapper">
                ${imageHtml}
            </div>
            <div class="card-content">
                <h3>${item.title}</h3>
                <p class="card-sub">${item.subtitle}</p>
            </div>
            <div class="card-action">
                <button class="btn-contact-full"><i class="fa-brands fa-discord"></i> Liên hệ ngay</button>
            </div>
        `;
        return div;
    }

    // =========================================
    // PROJECT MODAL LOGIC
    // =========================================
    const projectModal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalCreator = document.getElementById('modal-creator');
    const modalOwner = document.getElementById('modal-owner');
    const closeModalBtn = document.getElementById('close-modal');

    function openProjectModal(item) {
        if (!projectModal) return;
        
        // Populate Data
        modalTitle.textContent = item.title;
        
        // Logic to extract Creator vs Owner from Subtitle (e.g. "BOY CN - QTA X")
        let creator = 'T-Team';
        let owner = 'Khách hàng';
        
        if (item.subtitle && item.subtitle.includes('-')) {
            const parts = item.subtitle.split('-');
            creator = parts[0].trim();
            owner = parts[1].trim();
        } else {
            creator = item.subtitle || 'T-Team';
        }

        modalCreator.textContent = creator;
        modalOwner.textContent = owner;

        // Image
        if (item.image) {
            modalImage.src = item.image;
            modalImage.style.display = 'block';
        } else {
            // Fallback if no image
            modalImage.src = 'assets/logo.png';
        }
        
        // Show Modal
        projectModal.classList.add('active');
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
             projectModal.classList.remove('active');
        });
    }

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.classList.remove('active');
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                projectModal.classList.remove('active');
            }
        });
    }

    // Render Pagination UI
    function renderPagination(totalItems, totalPages) {
        paginationContainer.innerHTML = '';

        const prevBtn = document.createElement('button');
        prevBtn.className = `page-btn ${state.currentPage === 1 ? 'disabled' : ''}`;
        prevBtn.textContent = 'Trước';
        prevBtn.onclick = () => {
            if (state.currentPage > 1) {
                state.currentPage--;
                renderProjects();
            }
        };

        const info = document.createElement('span');
        info.className = 'page-info';
        info.textContent = `Trang ${state.currentPage}/${totalPages} - ${totalItems} sản phẩm`;

        const nextBtn = document.createElement('button');
        nextBtn.className = `page-btn ${state.currentPage === totalPages ? 'disabled' : ''}`;
        nextBtn.textContent = 'Sau';
        nextBtn.onclick = () => {
            if (state.currentPage < totalPages) {
                state.currentPage++;
                renderProjects();
            }
        };

        paginationContainer.appendChild(prevBtn);
        paginationContainer.appendChild(info);
        paginationContainer.appendChild(nextBtn);
    }

    function setupFilters() {
        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                state.filter = pill.getAttribute('data-filter');
                state.currentPage = 1; 
                renderProjects();
            });
        });
    }

    function setupCategoryLogic() {
        catCards.forEach(card => {
            card.addEventListener('click', () => {
                const group = card.getAttribute('data-group');
                state.activeGroup = group;
                state.filter = 'all'; 
                state.currentPage = 1;
                catCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                updatePillsVisibility(group);
                renderProjects();
            });
        });

        if(resetCatBtn) {
            resetCatBtn.addEventListener('click', () => {
                state.activeGroup = 'all';
                state.filter = 'all';
                state.currentPage = 1;
                catCards.forEach(c => c.classList.remove('active'));
                updatePillsVisibility('all');
                renderProjects();
            });
        }
    }

    function updatePillsVisibility(group) {
        filterPills.forEach(pill => {
            const parent = pill.getAttribute('data-parent');
            const filterVal = pill.getAttribute('data-filter');
            
            if (filterVal === 'all') {
                pill.style.display = 'flex';
                pill.classList.add('active');
            } else {
                pill.classList.remove('active');
                if (group === 'all') {
                    pill.style.display = 'flex';
                } else if (parent === group) {
                    pill.style.display = 'flex';
                } else {
                    pill.style.display = 'none';
                }
            }
        });
    }

    function updateCounts() {
        const groupCounts = {};
        const catCounts = {};

        catCards.forEach(card => {
            const group = card.getAttribute('data-group');
            if(group) groupCounts[group] = 0;
        });
        filterPills.forEach(pill => {
            const filter = pill.getAttribute('data-filter');
            if(filter && filter !== 'all') catCounts[filter] = 0;
        });

        projects.forEach(p => {
            if (p.group) groupCounts[p.group] = (groupCounts[p.group] || 0) + 1;
            if (p.category) catCounts[p.category] = (catCounts[p.category] || 0) + 1;
        });

        catCards.forEach(card => {
            const group = card.getAttribute('data-group');
            const countSpan = card.querySelector('.cat-info span');
            if (group && countSpan) {
                countSpan.textContent = `${groupCounts[group] || 0} sản phẩm`;
            }
        });

        filterPills.forEach(pill => {
            const filter = pill.getAttribute('data-filter');
            const countSpan = pill.querySelector('.count');
            if (filter !== 'all' && countSpan) {
                countSpan.textContent = catCounts[filter] || 0;
            }
        });

        const statProducts = document.getElementById('stat-products');
        if (statProducts) {
             statProducts.textContent = projects.length; 
        }
        
        fetchDiscordCount();
    }

    async function fetchDiscordCount() {
        // Determine environment: Local (Node backend) vs Production (Vercel Serverless)
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:';
        // If file://, we still try localhost:3000
        const API_URL = isLocal ? 'http://localhost:3000/api/member-count' : '/api/member-count';
        
        const statMembers = document.getElementById('stat-members');
        
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Backend error or not running');
            
            const data = await response.json();
            
            if (data.count && data.count !== '---') {
                if (statMembers) {
                    statMembers.textContent = parseInt(data.count).toLocaleString('vi-VN');
                    localStorage.setItem('memberCount', data.count);
                }
            }
        } catch (error) {
            console.warn('Discord Fetch Failed:', error);
            // Fallback to local storage
            const saved = localStorage.getItem('memberCount');
            if (saved && statMembers) {
                statMembers.textContent = parseInt(saved).toLocaleString('vi-VN');
            }
            // If failed and no local storage, it stays as default HTML value (6.025)
        }
    }

    function setupSearch() {
        searchInput.addEventListener('input', () => {
            state.currentPage = 1;
            renderProjects();
        });
    }

    // Start
    initProjects();

    /* =========================================
       DEVTOOLS DETECTION (Advanced)
       ========================================= */
    let devToolsCount = 0;
    let maxWarnings = 3;
    let isWarningOpen = false;
    const warningModal = document.getElementById('warning-modal');
    const detectCountEl = document.getElementById('detect-count');
    const warningStatusEl = document.getElementById('warning-status');
    const closeWarningBtn = document.getElementById('close-warning');

    function showWarning() {
        if (isWarningOpen) return;
        isWarningOpen = true;
        devToolsCount++;
        
        if (detectCountEl) detectCountEl.textContent = devToolsCount;
        
        if (devToolsCount > maxWarnings) {
            if (warningStatusEl) warningStatusEl.textContent = "Quá 3 lần! Trang sẽ tự động tải lại...";
            if (closeWarningBtn) closeWarningBtn.style.display = 'none'; 
            setTimeout(() => {
                location.reload();
            }, 2000);
        } else {
            if (warningStatusEl) warningStatusEl.textContent = "";
        }

        if (warningModal) warningModal.classList.add('active');
    }

    if (closeWarningBtn) {
        closeWarningBtn.addEventListener('click', () => {
            if (devToolsCount <= maxWarnings) {
                if (warningModal) warningModal.classList.remove('active');
                isWarningOpen = false;
            }
        });
    }

    // Interactive Triggers (Right Click / Hotkeys) - Moved inside to access showWarning
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showWarning(); 
        return false;
    });

    document.addEventListener('keydown', (e) => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P'))
        ) {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'PrintScreen') {
            navigator.clipboard.writeText('');
            alert('Chụp màn hình bị vô hiệu hóa trên website này!');
            showWarning();
        }
    });

    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            showWarning(); // Direct call
        }
    });

    setInterval(() => {
        console.log('%cSecurity Check', 'color:transparent', element);
    }, 2000);

    /* =========================================
       CUSTOM CURSOR
       ========================================= */
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if(cursorDot) {
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        }
    });

    function animateCursor() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        // Standard movement
        if (!document.body.classList.contains('hovering') && cursorOutline) {
            cursorOutline.style.left = outlineX + 'px';
            cursorOutline.style.top = outlineY + 'px';
            cursorOutline.style.width = '30px';
            cursorOutline.style.height = '30px';
            cursorOutline.style.borderRadius = '0'; // Reset styling for corners
        }
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const interactiveSelectors = 'a, button, .project-card, .project-card-new, .tool-card, input, .cat-card, .team-card, .menu-btn, .discord-btn, .footer-pill';
    
    document.querySelectorAll(interactiveSelectors).forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            document.body.classList.add('hovering');
            
            const rect = el.getBoundingClientRect();
            
            if(cursorOutline) {
                cursorOutline.style.left = (rect.left + rect.width / 2) + 'px';
                cursorOutline.style.top = (rect.top + rect.height / 2) + 'px';
                cursorOutline.style.width = (rect.width + 10) + 'px';
                cursorOutline.style.height = (rect.height + 10) + 'px';
                
                const style = window.getComputedStyle(el);
                if(style.borderRadius !== '0px') {
                    cursorOutline.style.borderRadius = style.borderRadius;
                } else {
                    cursorOutline.style.borderRadius = '8px';
                }
            }
        });
        
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovering');
        });
    });
});
