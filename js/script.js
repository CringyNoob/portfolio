/* ==========================================================================
   MD. WALI ULLAH KHAN - PORTFOLIO JAVASCRIPT
   Interactivity, Theme Management, ScrollSpy, Filters, Modals & Print Handlers
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // 1. DOM Elements
    // --------------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleText = document.getElementById('theme-toggle-text');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const pubCards = document.querySelectorAll('.pub-card');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    const bibtexModal = document.getElementById('bibtex-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const bibtexCodeEl = document.getElementById('bibtex-code');
    const copyBibtexBtn = document.getElementById('copy-bibtex-btn');
    const toastNotification = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');

    const RESUME_PATH = './assets/docs/Md_Wali_Ullah_Khan_Resume.pdf';

    // --------------------------------------------------------------------------
    // 2. Theme Toggle & Persistence
    // --------------------------------------------------------------------------
    function updateThemeUI(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const isDark = theme === 'dark';
        
        if (themeToggleIcon) {
            themeToggleIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
        if (themeToggleText) {
            themeToggleText.textContent = isDark ? 'Light' : 'Dark';
        }
        if (mobileThemeToggle) {
            mobileThemeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        }
    }

    const savedTheme = localStorage.getItem('portfolio_theme') || 
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    
    updateThemeUI(savedTheme);

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('portfolio_theme', nextTheme);
        updateThemeUI(nextTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }

    // --------------------------------------------------------------------------
    // 3. Mobile Navigation Drawer
    // --------------------------------------------------------------------------
    function openMobileNav() {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openMobileNav);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeMobileNav);
    }

    // Close mobile nav when a section link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                closeMobileNav();
            }
        });
    });

    // --------------------------------------------------------------------------
    // 4. ScrollSpy Navigation Highlighting
    // --------------------------------------------------------------------------
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // --------------------------------------------------------------------------
    // 5. Scroll-to-Top Button
    // --------------------------------------------------------------------------
    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --------------------------------------------------------------------------
    // 6. Publication Filter Tabs
    // --------------------------------------------------------------------------
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            pubCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const topic = card.getAttribute('data-topic');

                const isMatch = (filter === 'all') || 
                                (category === filter) || 
                                (topic && topic.includes(filter));

                if (isMatch) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(8px)';
                    setTimeout(() => {
                        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 40);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --------------------------------------------------------------------------
    // 7. BibTeX Modal & Copy Toast
    // --------------------------------------------------------------------------
    const bibtexData = {
        'pub-epi-benchmark': `@article{khan2026benchmarking,
  title={Benchmarking Enhancer--Promoter Interaction Prediction Models to Understand the Landscape of Different Architectures},
  author={Khan, Md. Wali Ullah and collaborators},
  journal={Briefings in Bioinformatics},
  publisher={Oxford Academic},
  year={2026},
  note={Under Review}
}`,
        'pub-holo-geon': `@inproceedings{khan2026hologeon,
  title={Holo-GeoN: Structure-Free, Physics-Constrained Prediction of Mutation Effects on Protein Stability and Pathogenicity},
  author={Khan, Md. Wali Ullah and collaborators},
  booktitle={Machine Learning in Computational Biology (MLCB)},
  year={2026},
  note={Under Review}
}`,
        'pub-harne-pi': `@article{khan2026harnepi,
  title={HARNE-PI: Enhancing Enhancer--Promoter Interaction Prediction via Position-Aware Encoding and KAN--Transformer Fusion},
  author={Khan, Md. Wali Ullah and collaborators},
  journal={Target: Nature Methods},
  year={2026},
  note={In Preparation}
}`,
        'pub-algorithmic-companion': `@inproceedings{khan2026companion,
  title={The Algorithmic Companion: Human Trust, Privacy Awareness, and Self-Disclosure in AI Chatbots---The Effect of Empathy and Follow-up Questions},
  author={Khan, Md. Wali Ullah and collaborators},
  booktitle={Target: ACM Conference on Human Factors in Computing Systems (CHI)},
  year={2026},
  note={In Preparation}
}`,
        'pub-fraud-detection': `@article{khan2026multimodal,
  title={Interpretable Multimodal Mining for Early Financial Fraud Detection: Synthesizing Identity and Transactional Velocity},
  author={Khan, Md. Wali Ullah and collaborators},
  journal={Target: ACM/IEEE Transactions},
  year={2026},
  note={In Preparation}
}`
    };

    function showToast(msg) {
        if (!toastNotification) return;
        toastMessage.textContent = msg;
        toastNotification.classList.add('show');
        setTimeout(() => {
            toastNotification.classList.remove('show');
        }, 3000);
    }

    document.querySelectorAll('.btn-bibtex').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const pubId = btn.getAttribute('data-pub-id');
            const bibText = bibtexData[pubId] || `@article{khan2026,\n  author = {Khan, Md. Wali Ullah},\n  year = {2026}\n}`;
            bibtexCodeEl.textContent = bibText;
            bibtexModal.classList.add('open');
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            bibtexModal.classList.remove('open');
        });
    }

    if (bibtexModal) {
        bibtexModal.addEventListener('click', (e) => {
            if (e.target === bibtexModal) {
                bibtexModal.classList.remove('open');
            }
        });
    }

    if (copyBibtexBtn) {
        copyBibtexBtn.addEventListener('click', () => {
            const textToCopy = bibtexCodeEl.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast('BibTeX copied to clipboard!');
                bibtexModal.classList.remove('open');
            }).catch(err => {
                console.error('Failed to copy', err);
            });
        });
    }

    // Direct Quick-Copy for email/phone cards
    document.querySelectorAll('.copy-text-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const text = btn.getAttribute('data-copy');
            if (text) {
                navigator.clipboard.writeText(text).then(() => {
                    showToast(`Copied ${text} to clipboard!`);
                });
            }
        });
    });

    // --------------------------------------------------------------------------
    // 8. Ctrl+P / Cmd+P Print Handler
    // --------------------------------------------------------------------------
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
            e.preventDefault();
            window.open(RESUME_PATH, '_blank');
        }
    });
});
