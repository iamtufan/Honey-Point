/* ============================================================
   SUNDARBAN PURE HONEY — Master JavaScript
   ============================================================ */

// ─── PRODUCT DATA ───
const PRODUCTS = [
    { id: 1, name: "Sundarban Pure Honey", weight: "1 kg", price: 699, oldPrice: 899, category: "pure", image: "./assets/1Lhoney.jpeg", badge: "Bestseller", badgeClass: "badge-best", rating: 4.5, reviews: 128, desc: "100% raw, unprocessed honey from the mangrove forests of Sundarban. Rich in enzymes, antioxidants, and natural goodness.", stock: "In Stock" },
    { id: 2, name: "Sundarban Pure Honey", weight: "500g", price: 399, oldPrice: 499, category: "pure", image: "./assets/500mlhoney.jpeg", badge: "20% Off", badgeClass: "badge-sale", rating: 4, reviews: 95, desc: "Medium jar of pure golden honey. Perfect for daily use, cooking, smoothies, and natural remedies.", stock: "In Stock" },
    { id: 3, name: "Sundarban Pure Honey", weight: "250g", price: 249, oldPrice: null, category: "pure", image: "./assets/250mlhoney.jpeg", badge: "New", badgeClass: "badge-new", rating: 5, reviews: 72, desc: "Compact jar ideal for trial, gifting, or personal use. Same premium quality in a smaller, convenient size.", stock: "In Stock" },
    { id: 4, name: "Wild Forest Honey", weight: "1 kg", price: 799, oldPrice: 999, category: "wild", image: "./assets/1Lhoney.jpeg", badge: "Popular", badgeClass: "badge-best", rating: 4.5, reviews: 86, desc: "Collected from the deepest parts of Sundarban mangrove forest. Bold, earthy flavor with complex undertones.", stock: "In Stock" },
    { id: 5, name: "Wild Forest Honey", weight: "500g", price: 449, oldPrice: null, category: "wild", image: "./assets/500mlhoney.jpeg", badge: null, badgeClass: null, rating: 4, reviews: 64, desc: "Half-kilogram jar of authentic wild forest honey. Intense flavor and rich nutritional profile.", stock: "In Stock" },
    { id: 6, name: "Organic Raw Honey", weight: "1 kg", price: 749, oldPrice: 949, category: "organic", image: "./assets/1Lhoney.jpeg", badge: "Organic", badgeClass: "badge-new", rating: 4.5, reviews: 58, desc: "Certified organic, unheated, and unfiltered. Retains all natural enzymes, pollen, and health benefits.", stock: "In Stock" },
    { id: 7, name: "Organic Raw Honey", weight: "500g", price: 429, oldPrice: null, category: "organic", image: "./assets/500mlhoney.jpeg", badge: null, badgeClass: null, rating: 4, reviews: 41, desc: "Premium organic honey in a convenient 500g jar. Perfect for health-conscious families.", stock: "In Stock" },
    { id: 8, name: "Mangrove Honey", weight: "1 kg", price: 899, oldPrice: 1099, category: "mangrove", image: "./assets/1Lhoney.jpeg", badge: "Premium", badgeClass: "badge-best", rating: 5, reviews: 37, desc: "Rare mangrove flower honey with a distinctive aromatic profile. Limited seasonal collection.", stock: "In Stock" },
    { id: 9, name: "Mangrove Honey", weight: "500g", price: 499, oldPrice: null, category: "mangrove", image: "./assets/500mlhoney.jpeg", badge: null, badgeClass: null, rating: 4.5, reviews: 29, desc: "Experience the unique taste of mangrove honey. A delicacy prized for its medicinal properties.", stock: "Low Stock" },
    { id: 10, name: "Honey Gift Pack", weight: "3 × 250g", price: 999, oldPrice: 1299, category: "gift", image: "./assets/250mlhoney.jpeg", badge: "Gift", badgeClass: "badge-sale", rating: 5, reviews: 43, desc: "Beautifully packaged set of 3 mini honey jars. Perfect gift for Diwali, weddings, and celebrations.", stock: "Low Stock" },
    { id: 11, name: "Royal Honey Collection", weight: "4 × 250g", price: 1299, oldPrice: 1599, category: "gift", image: "./assets/250mlhoney.jpeg", badge: "Royal", badgeClass: "badge-best", rating: 5, reviews: 22, desc: "Our premium gift set with 4 varieties of Sundarban honey in an elegant presentation box.", stock: "In Stock" },
    { id: 12, name: "Immunity Honey Pack", weight: "500g", price: 599, oldPrice: null, category: "organic", image: "./assets/500mlhoney.jpeg", badge: "Health", badgeClass: "badge-new", rating: 4.5, reviews: 55, desc: "Specially curated honey blend enhanced with natural herbs for boosted immunity and wellness.", stock: "In Stock" },
];

const WA_NUMBER = "919564846891";

function getWhatsAppUrl(productName) {
    const msg = encodeURIComponent(`Hello, I want to order ${productName} from Sundarban Pure Honey. Please provide delivery details.`);
    return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

function renderStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) html += '<i class="fas fa-star star"></i>';
        else if (i - 0.5 <= rating) html += '<i class="fas fa-star-half-alt star"></i>';
        else html += '<i class="far fa-star star empty"></i>';
    }
    return html;
}

function createProductCard(product) {
    const waUrl = getWhatsAppUrl(`${product.name} (${product.weight})`);
    const oldPriceHTML = product.oldPrice ? `<span class="old-price">₹${product.oldPrice}</span>` : '';
    const badgeHTML = product.badge ? `<span class="product-badge ${product.badgeClass}">${product.badge}</span>` : '';
    const stockClass = product.stock === 'Low Stock' ? 'low-stock' : 'in-stock';
    const stockIcon = product.stock === 'Low Stock' ? 'fa-exclamation-circle' : 'fa-check-circle';
    const stockText = product.stock === 'Low Stock' ? 'Only a Few Left' : 'In Stock';

    return `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}" data-price="${product.price}" data-rating="${product.rating}" data-name="${product.name}">
            <div class="product-image-wrap">
                <img src="${product.image}" alt="${product.name} ${product.weight}" loading="lazy">
                ${badgeHTML}
                <button class="product-wishlist" aria-label="Add to Wishlist" onclick="toggleWishlist(this, ${product.id})"><i class="far fa-heart"></i></button>
                <button class="product-quick-view" onclick="openQuickView(${product.id})">Quick View</button>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-rating">
                    ${renderStars(product.rating)}
                    <span class="count">(${product.reviews})</span>
                </div>
                <div class="product-meta">
                    <div class="product-price">₹${product.price} ${oldPriceHTML}</div>
                    <span class="product-weight">${product.weight}</span>
                </div>
                <div class="product-stock ${stockClass}"><i class="fas ${stockIcon}"></i> ${stockText}</div>
                <div class="product-actions">
                    <a href="${waUrl}" class="btn-whatsapp" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    <a href="${waUrl}" class="btn-buy" target="_blank" rel="noopener"><i class="fas fa-shopping-bag"></i> Buy Now</a>
                </div>
            </div>
        </div>`;
}

// ─── QUICK VIEW MODAL ───
function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quickViewModal');
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.name;
    document.getElementById('modalName').textContent = `${product.name} — ${product.weight}`;
    document.getElementById('modalRating').innerHTML = renderStars(product.rating) + `<span class="count">(${product.reviews} reviews)</span>`;
    document.getElementById('modalPrice').innerHTML = `₹${product.price}` + (product.oldPrice ? ` <span class="old-price">₹${product.oldPrice}</span>` : '');
    document.getElementById('modalDesc').textContent = product.desc;

    const stockEl = document.getElementById('modalStock');
    if (stockEl) {
        stockEl.className = `product-stock ${product.stock === 'Low Stock' ? 'low-stock' : 'in-stock'}`;
        stockEl.innerHTML = `<i class="fas ${product.stock === 'Low Stock' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${product.stock === 'Low Stock' ? 'Only a Few Left' : 'In Stock'}`;
    }

    const waUrl = getWhatsAppUrl(`${product.name} (${product.weight})`);
    document.getElementById('modalWhatsApp').href = waUrl;
    document.getElementById('modalBuy').href = waUrl;

    const weightEl = document.getElementById('modalWeight');
    if (weightEl) weightEl.innerHTML = `<span class="product-weight">${product.weight}</span>`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ─── WISHLIST ───
function toggleWishlist(btn, productId) {
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('active')) {
        icon.className = 'fas fa-heart';
        let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        if (!wishlist.includes(productId)) wishlist.push(productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } else {
        icon.className = 'far fa-heart';
        let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        wishlist = wishlist.filter(id => id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
}

// ─── INITIALIZE ───
document.addEventListener('DOMContentLoaded', () => {

    // ══════════════════════════════════════════
    // SCROLL PROGRESS BAR
    // ══════════════════════════════════════════
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        if (scrollProgress) {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = scrolled + '%';
        }
    });

    // ══════════════════════════════════════════
    // STICKY HEADER + GLASSMORPHISM
    // ══════════════════════════════════════════
    const header = document.getElementById('siteHeader');
    const marquee = document.getElementById('marqueeBar');

    window.addEventListener('scroll', () => {
        if (!header) return;
        if (window.scrollY > 80) {
            header.classList.add('scrolled');
            header.classList.remove('has-marquee');
            if (marquee) marquee.style.transform = 'translateY(-100%)';
        } else {
            header.classList.remove('scrolled');
            header.classList.add('has-marquee');
            if (marquee) marquee.style.transform = 'translateY(0)';
        }
    });

    // ══════════════════════════════════════════
    // HAMBURGER MENU
    // ══════════════════════════════════════════
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            hamburger.setAttribute('aria-expanded', mobileMenu.classList.contains('active'));
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ══════════════════════════════════════════
    // DARK MODE
    // ══════════════════════════════════════════
    const darkToggle = document.getElementById('darkToggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
    }

    if (darkToggle) {
        updateDarkIcon();
        darkToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            document.body.classList.toggle('dark');
            localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
            updateDarkIcon();
        });
    }

    function updateDarkIcon() {
        if (!darkToggle) return;
        const icon = darkToggle.querySelector('i');
        if (document.body.classList.contains('dark')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    // ══════════════════════════════════════════
    // SCROLL REVEAL (IntersectionObserver)
    // ══════════════════════════════════════════
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // ══════════════════════════════════════════
    // ANIMATED COUNTERS
    // ══════════════════════════════════════════
    const counters = document.querySelectorAll('.stat-number[data-target]');
    let countersAnimated = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.target);
                    const duration = 1500;
                    const start = performance.now();

                    function animate(now) {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        counter.textContent = Math.floor(target * eased).toLocaleString();
                        if (progress < 1) requestAnimationFrame(animate);
                        else counter.textContent = target.toLocaleString() + (counter.parentElement.querySelector('.stat-label')?.textContent.includes('%') ? '%' : '+');
                    }
                    requestAnimationFrame(animate);
                });
            }
        });
    }, { threshold: 0.2 });

    counters.forEach(c => counterObserver.observe(c));

    // ══════════════════════════════════════════
    // TESTIMONIAL SLIDER
    // ══════════════════════════════════════════
    const testimonialTrack = document.getElementById('testimonialTrack');
    const testimonialDots = document.getElementById('testimonialDots');
    let currentTestimonial = 0;
    let testimonialInterval;

    function isMobileView() {
        return window.innerWidth <= 768;
    }

    function getTestimonialCount() {
        if (!testimonialTrack) return 0;
        if (isMobileView()) {
            // Count individual cards (display:contents flattens slides)
            return testimonialTrack.querySelectorAll('.testimonial-card').length;
        }
        return testimonialTrack.children.length; // slide count
    }

    function buildTestimonialDots() {
        if (!testimonialDots) return;
        const total = getTestimonialCount();
        testimonialDots.innerHTML = '';
        for (let i = 0; i < total; i++) {
            const dot = document.createElement('button');
            dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
            dot.dataset.slide = i;
            dot.setAttribute('aria-label', 'Review ' + (i + 1));
            dot.addEventListener('click', () => {
                clearInterval(testimonialInterval);
                goToTestimonial(i);
                startTestimonialAutoplay();
            });
            testimonialDots.appendChild(dot);
        }
    }

    function goToTestimonial(index) {
        if (!testimonialTrack) return;
        const total = getTestimonialCount();
        if (total === 0) return;
        currentTestimonial = index % total;

        if (isMobileView()) {
            // On mobile, each card is a flex child. Use actual card width.
            const cards = testimonialTrack.querySelectorAll('.testimonial-card');
            if (cards.length > 0) {
                const cardWidth = cards[0].offsetWidth;
                testimonialTrack.style.transform = `translateX(-${currentTestimonial * cardWidth}px)`;
            }
        } else {
            // Desktop: 2 slides, each min-width:100%
            testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
        }

        if (testimonialDots) {
            testimonialDots.querySelectorAll('.slider-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentTestimonial);
            });
        }
    }

    function startTestimonialAutoplay() {
        clearInterval(testimonialInterval);
        testimonialInterval = setInterval(() => {
            const total = getTestimonialCount();
            if (total > 0) goToTestimonial((currentTestimonial + 1) % total);
        }, 5000);
    }

    // Build dots and start
    buildTestimonialDots();
    if (testimonialTrack) startTestimonialAutoplay();

    // Rebuild on resize (e.g. orientation change)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            currentTestimonial = 0;
            buildTestimonialDots();
            goToTestimonial(0);
            clearInterval(testimonialInterval);
            startTestimonialAutoplay();
        }, 250);
    });

    // ══════════════════════════════════════════
    // BEST SELLERS SLIDER
    // ══════════════════════════════════════════
    const bsTrack = document.getElementById('bestsellerTrack');
    const bsPrev = document.getElementById('bsPrev');
    const bsNext = document.getElementById('bsNext');
    let bsPosition = 0;

    function getBsCardWidth() {
        if (!bsTrack || !bsTrack.firstElementChild) return 275;
        return bsTrack.firstElementChild.offsetWidth + 16;
    }

    function getBsMaxScroll() {
        if (!bsTrack) return 0;
        return Math.max(0, bsTrack.scrollWidth - bsTrack.parentElement.offsetWidth);
    }

    if (bsPrev) {
        bsPrev.addEventListener('click', () => {
            bsPosition = Math.max(0, bsPosition - getBsCardWidth());
            bsTrack.style.transform = `translateX(-${bsPosition}px)`;
        });
    }

    if (bsNext) {
        bsNext.addEventListener('click', () => {
            bsPosition = Math.min(getBsMaxScroll(), bsPosition + getBsCardWidth());
            bsTrack.style.transform = `translateX(-${bsPosition}px)`;
        });
    }

    // Drag / Touch support for best sellers
    if (bsTrack) {
        let isDragging = false, startX = 0, dragStart = 0;
        bsTrack.addEventListener('mousedown', (e) => { isDragging = true; startX = e.pageX; dragStart = bsPosition; });
        bsTrack.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const diff = startX - e.pageX;
            bsPosition = Math.max(0, Math.min(getBsMaxScroll(), dragStart + diff));
            bsTrack.style.transform = `translateX(-${bsPosition}px)`;
        });
        document.addEventListener('mouseup', () => { isDragging = false; });

        bsTrack.addEventListener('touchstart', (e) => { startX = e.touches[0].pageX; dragStart = bsPosition; }, { passive: true });
        bsTrack.addEventListener('touchmove', (e) => {
            const diff = startX - e.touches[0].pageX;
            bsPosition = Math.max(0, Math.min(getBsMaxScroll(), dragStart + diff));
            bsTrack.style.transform = `translateX(-${bsPosition}px)`;
        }, { passive: true });
    }

    // ══════════════════════════════════════════
    // FAQ ACCORDION
    // ══════════════════════════════════════════
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
            document.querySelectorAll('.faq-question').forEach(q => q.setAttribute('aria-expanded', 'false'));

            if (!isActive) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ══════════════════════════════════════════
    // BACK TO TOP BUTTON
    // ══════════════════════════════════════════
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (backToTop) {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        }
    });
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ══════════════════════════════════════════
    // QUICK VIEW MODAL CLOSE
    // ══════════════════════════════════════════
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('quickViewModal');

    if (modalClose) modalClose.addEventListener('click', closeQuickView);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeQuickView();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeQuickView();
    });

    // ══════════════════════════════════════════
    // CUSTOM CURSOR
    // ══════════════════════════════════════════
    const cursor = document.getElementById('customCursor');
    if (cursor && window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button, .product-card, .category-card, .feature-card, .faq-question').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    // ══════════════════════════════════════════
    // SHOP PAGE — RENDERING & FILTERING
    // ══════════════════════════════════════════
    const shopGrid = document.getElementById('shopProductGrid');
    if (shopGrid) {
        function renderShopProducts(products) {
            shopGrid.innerHTML = products.map(p => createProductCard(p)).join('');
            const count = document.getElementById('resultsCount');
            if (count) count.textContent = `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`;

            const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
            shopGrid.querySelectorAll('.product-wishlist').forEach(btn => {
                const card = btn.closest('.product-card');
                const id = parseInt(card.dataset.id);
                if (wishlist.includes(id)) {
                    btn.classList.add('active');
                    btn.querySelector('i').className = 'fas fa-heart';
                }
            });
        }

        function applyFilters() {
            let results = [...PRODUCTS];

            const checkedCategories = [...document.querySelectorAll('.category-filter:checked')].map(cb => cb.value);
            if (checkedCategories.length > 0 && !checkedCategories.includes('all')) {
                results = results.filter(p => checkedCategories.includes(p.category));
            }

            const priceRange = document.getElementById('priceRange');
            if (priceRange) {
                const maxPrice = parseInt(priceRange.value);
                results = results.filter(p => p.price <= maxPrice);
            }

            const search = document.getElementById('shopSearch');
            if (search && search.value.trim()) {
                const q = search.value.trim().toLowerCase();
                results = results.filter(p =>
                    p.name.toLowerCase().includes(q) ||
                    p.desc.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q) ||
                    p.weight.toLowerCase().includes(q)
                );
            }

            const sortSelect = document.getElementById('sortSelect');
            if (sortSelect) {
                switch (sortSelect.value) {
                    case 'price-low': results.sort((a, b) => a.price - b.price); break;
                    case 'price-high': results.sort((a, b) => b.price - a.price); break;
                    case 'rating': results.sort((a, b) => b.rating - a.rating); break;
                    case 'name': results.sort((a, b) => a.name.localeCompare(b.name)); break;
                }
            }

            renderShopProducts(results);
        }

        renderShopProducts(PRODUCTS);

        document.querySelectorAll('.category-filter').forEach(cb => {
            cb.addEventListener('change', (e) => {
                if (e.target.value === 'all' && e.target.checked) {
                    document.querySelectorAll('.category-filter').forEach(c => { if (c.value !== 'all') c.checked = false; });
                } else {
                    const allCb = document.querySelector('.category-filter[value="all"]');
                    if (allCb) allCb.checked = false;
                }
                applyFilters();
            });
        });

        const priceRange = document.getElementById('priceRange');
        const priceValue = document.getElementById('priceValue');
        if (priceRange) {
            priceRange.addEventListener('input', () => {
                if (priceValue) priceValue.textContent = `₹${priceRange.value}`;
                applyFilters();
            });
        }

        const shopSearch = document.getElementById('shopSearch');
        if (shopSearch) {
            let searchTimeout;
            shopSearch.addEventListener('input', () => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(applyFilters, 200);
            });
        }

        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) sortSelect.addEventListener('change', applyFilters);

        const gridView = document.getElementById('gridView');
        const listView = document.getElementById('listView');
        if (gridView && listView) {
            gridView.addEventListener('click', () => {
                shopGrid.classList.remove('list-view');
                gridView.classList.add('active');
                listView.classList.remove('active');
            });
            listView.addEventListener('click', () => {
                shopGrid.classList.add('list-view');
                listView.classList.add('active');
                gridView.classList.remove('active');
            });
        }

        const filterToggle = document.getElementById('filterToggle');
        const filterContent = document.getElementById('filterContent');
        if (filterToggle && filterContent) {
            if (window.innerWidth < 1024) filterContent.style.display = 'none';
            filterToggle.addEventListener('click', () => {
                const isHidden = filterContent.style.display === 'none';
                filterContent.style.display = isHidden ? 'block' : 'none';
                filterToggle.innerHTML = isHidden
                    ? '<i class="fas fa-times mr-2"></i> Close Filters'
                    : '<i class="fas fa-sliders-h mr-2"></i> Filters';
            });
        }
    }

    // ══════════════════════════════════════════
    // CONTACT FORM
    // ══════════════════════════════════════════
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            contactForm.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));
            contactForm.querySelectorAll('input, textarea, select').forEach(el => el.classList.remove('error'));

            let isValid = true;
            const fullName = document.getElementById('fullName');
            if (!fullName.value.trim()) { markError(fullName); isValid = false; }

            const mobile = document.getElementById('mobile');
            if (!mobile.value.trim() || !/^[0-9]{10}$/.test(mobile.value.trim())) { markError(mobile); isValid = false; }

            const email = document.getElementById('email');
            if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { markError(email); isValid = false; }

            const pincode = document.getElementById('pincode');
            if (pincode.value.trim() && !/^[0-9]{6}$/.test(pincode.value.trim())) { markError(pincode); isValid = false; }

            const agree = document.getElementById('agreeTerms');
            if (agree && !agree.checked) {
                agree.closest('.form-group').classList.add('has-error');
                isValid = false;
            }

            if (!isValid) return;

            const submitBtn = document.getElementById('submitBtn');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            try {
                let sentSuccessfully = false;

                // 1. Attempt send via EmailJS
                if (typeof emailjs !== 'undefined') {
                    try {
                        const serviceID = (typeof EMAILJS_SERVICE_ID !== 'undefined') ? EMAILJS_SERVICE_ID : 'service_o23mmte';
                        const templateID = (typeof EMAILJS_TEMPLATE_ID !== 'undefined') ? EMAILJS_TEMPLATE_ID : 'template_6ighggc';
                        const publicKey = (typeof EMAILJS_PUBLIC_KEY !== 'undefined') ? EMAILJS_PUBLIC_KEY : 'EcSZ4UNld3HliUnCW';

                        if (emailjs.init) {
                            emailjs.init({ publicKey });
                        }

                        // Extract template params from form and provide standard aliases (from_name, reply_to, etc.)
                        const formDataObj = new FormData(contactForm);
                        const templateParams = {};
                        formDataObj.forEach((val, key) => { templateParams[key] = val; });

                        templateParams.from_name = templateParams.fullName || templateParams.name || '';
                        templateParams.name = templateParams.fullName || '';
                        templateParams.user_email = templateParams.email || '';
                        templateParams.reply_to = templateParams.email || '';
                        templateParams.user_mobile = templateParams.mobile || templateParams.phone || '';
                        templateParams.phone = templateParams.mobile || '';

                        let res = null;
                        try {
                            res = await emailjs.sendForm(serviceID, templateID, contactForm, publicKey);
                        } catch (sfErr) {
                            console.warn('emailjs.sendForm failed, falling back to emailjs.send:', sfErr);
                            res = await emailjs.send(serviceID, templateID, templateParams, publicKey);
                        }

                        if (res && (res.status === 200 || res.text === 'OK')) {
                            sentSuccessfully = true;
                        }
                    } catch (ejErr) {
                        console.warn('EmailJS attempt notice:', ejErr);
                    }
                }

                // 2. Direct Lead Email backup (FormSubmit -> honeypoint26@gmail.com)
                if (!sentSuccessfully) {
                    const formData = new FormData(contactForm);
                    if (!formData.has('_subject')) formData.append('_subject', 'New Lead from Honey Point Contact Form!');
                    if (!formData.has('_captcha')) formData.append('_captcha', 'false');
                    if (!formData.has('_template')) formData.append('_template', 'table');

                    const response = await fetch('https://formsubmit.co/ajax/honeypoint26@gmail.com', {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                    if (response.ok) {
                        sentSuccessfully = true;
                    }
                }

                const formSuccess = document.getElementById('formSuccess');
                const formErrorMsg = document.getElementById('formErrorMsg');

                if (sentSuccessfully) {
                    if (formSuccess) formSuccess.style.display = 'flex';
                    if (formErrorMsg) formErrorMsg.style.display = 'none';
                    contactForm.reset();
                } else {
                    if (formErrorMsg) formErrorMsg.style.display = 'flex';
                    if (formSuccess) formSuccess.style.display = 'none';
                }
            } catch (error) {
                const formSuccess = document.getElementById('formSuccess');
                const formErrorMsg = document.getElementById('formErrorMsg');
                if (formErrorMsg) formErrorMsg.style.display = 'flex';
                if (formSuccess) formSuccess.style.display = 'none';
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            }
        });

        function markError(input) {
            input.classList.add('error');
            const group = input.closest('.form-group');
            if (group) group.classList.add('has-error');
        }

        contactForm.querySelectorAll('input, textarea, select').forEach(el => {
            el.addEventListener('input', () => {
                el.classList.remove('error');
                const group = el.closest('.form-group');
                if (group) group.classList.remove('has-error');
            });
        });
    }

    if (marquee) {
        marquee.style.transition = 'transform 0.3s ease';
    }

}); // end DOMContentLoaded