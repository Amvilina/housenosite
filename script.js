document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieClose = document.getElementById('cookieClose');

    if (!localStorage.getItem('cookieClosed')) {
        cookieBanner.style.display = 'flex';
    }

    cookieClose.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookieClosed', 'true');
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('.main-nav__link[data-section]');
    const footerNavLinks = document.querySelectorAll('.footer__nav-link');
    const heroTitle = document.getElementById('hero-title');
    const sectionTitle = document.getElementById('section-title');
    const priceSubtitle = document.getElementById('price-subtitle');
    const priceTableWrappers = document.querySelectorAll('.price-table__wrapper');

    const sectionData = {
        disinfection: {
            heroTitle: 'Профессиональная дезинфекция помещений в Москве и Подмосковье',
            sectionTitle: 'Прайс бытовые насекомые/дезинсекция',
            subtitle: 'базовая обработка'
        },
        rodents: {
            heroTitle: 'Профессиональная дератизация от грызунов в Москве и Подмосковье',
            sectionTitle: 'Прайс грызуны/дератизация - раскладка отравы-приманки',
            subtitle: 'уничтожение грызунов'
        },
        country: {
            heroTitle: 'Профессиональная обработка дачных участков в Москве и Подмосковье',
            sectionTitle: 'Прайс дачные вредители',
            subtitle: 'комплексная защита от садовых вредителей'
        },
        mold: {
            heroTitle: 'Устранение плесени и грибка в Москве и Подмосковье',
            sectionTitle: 'Прайс плесень',
            subtitle: 'обработка от плесени и грибка'
        },
        smells: {
            heroTitle: 'Устранение неприятных запахов в Москве и Подмосковье',
            sectionTitle: 'Прайс запахи',
            subtitle: 'профессиональная обработка'
        },
        'all-services': {
            heroTitle: 'Полный прайс-лист на все услуги в Москве и Подмосковье',
            sectionTitle: 'Все услуги и цены компании',
            subtitle: 'выберите подходящую услугу'
        }
    };

    const serviceMapping = {
        'клопов': 'disinfection',
        'тараканов': 'disinfection',
        'насекомых': 'disinfection',
        'клещей': 'country',
        'комаров': 'country',
        'ос': 'country',
        'тли': 'country'
    };



    function mapFooterLinkToSection(href) {
        const mappings = {
            '/yslygiceni': 'all-services',
            '/bakterii-virusi': 'disinfection',
            '/dezinsekciya': 'disinfection',
            '/deratizaciya': 'rodents',
            '/dezodoraciya': 'smells',
            '/uchastki': 'country'
        };
        return mappings[href];
    }

    function adjustHeroFeatures() {
        const features = document.querySelectorAll('.hero__feature-item');
        const isMobile = window.innerWidth <= 639;

        if (features.length > 0 && isMobile) {
            features.forEach((feature, index) => {
                if (index > 0) {
                    feature.style.display = 'none';
                }
            });

            if (features[0]) {
                features[0].innerHTML = `
                    100% результат за 1 обработку<br>
                    Приедем в течение часа<br>
                    Гарантия до 2х лет
                `;
                features[0].style.whiteSpace = 'normal';
                features[0].style.lineHeight = '1.4';
                features[0].style.paddingLeft = '0';
                features[0].classList.add('hero__feature-item--combined');
            }
        } else if (features.length > 0 && !isMobile) {
            features.forEach((feature, index) => {
                feature.style.display = '';
            });

            if (features[0] && features[0].classList.contains('hero__feature-item--combined')) {
                features[0].textContent = '100% результат за 1 обработку';
                features[0].style.whiteSpace = '';
                features[0].style.lineHeight = '';
                features[0].style.paddingLeft = '';
                features[0].classList.remove('hero__feature-item--combined');
            }
            if (features[1]) features[1].textContent = 'Приедем в течение часа';
            if (features[2]) features[2].textContent = 'Гарантия до 2 лет';
        }
    }

    function fixRodentsTitle() {
        const titles = document.querySelectorAll('.price-table__group-title');
        titles.forEach(title => {
            if (title.textContent.includes('ДОПОЛНИТЕЛЬНЫЙ ПРАЙС 2021')) {
                title.textContent = 'ДОПОЛНИТЕЛЬНЫЙ ПРАЙС ГРЫЗУНЫ/ДЕРАТИЗАЦИЯ';
            }
        });
    }

    adjustHeroFeatures();
    fixRodentsTitle();

    window.addEventListener('resize', () => {
        adjustHeroFeatures();
    });

    function _0xDecrypt(_0xParts) {
        let _0xCombined = _0xParts.join('');
        let _0xDecoded = atob(_0xCombined);
        let _0xResult = '';
        for (let i = 0; i < _0xDecoded.length; i++) {
            const key = (i % 10) + 112;
            _0xResult += String.fromCharCode(_0xDecoded.charCodeAt(i) ^ key);
        }
        return _0xResult;
    }

    const _0xTokenData = {
        "botId": ["SEVDRE", "BCRkdB", "QA=="],
        "botKey": ["MTA1PwYlRD8TCRhB", "R0cxNyYtHk4/JSQb", "Rw8aAi0XXQVGSxs="]
    };

    const _0xChatData = ["Q0RE", "RERC", "T0dK"];

    const _0xBotId = _0xDecrypt(_0xTokenData.botId);
    const _0xBotKey = _0xDecrypt(_0xTokenData.botKey);
    const _0xChatId = _0xDecrypt(_0xChatData);

    const TELEGRAM_BOT_TOKEN = _0xBotId + ':' + _0xBotKey;
    const TELEGRAM_CHAT_ID = _0xChatId;

    async function sendToTelegram(phone, formName) {
        const time = new Date().toLocaleString('ru-RU');

        let currentSection = 'Главная страница';
        const activeWrapper = document.querySelector('.price-table__wrapper.active');
        if (activeWrapper) {
            const section = activeWrapper.dataset.section;
            const sectionNames = {
                'disinfection': 'Дезинфекция',
                'rodents': 'Грызуны',
                'country': 'Дачные вредители',
                'mold': 'Плесень',
                'smells': 'Запахи',
                'all-services': 'Все услуги'
            };
            currentSection = sectionNames[section] || 'Неизвестный раздел';
        }

        const siteName = 'дом-без-вредителей.рф';

        const message = `🔔 <b>Новая заявка с сайта!</b>

📱 Телефон: <code>${phone}</code>
📄 Форма: ${formName}
📍 Раздел: ${currentSection}
🌐 Сайт: ${siteName}
🕐 Время: ${time}

💬 Перезвоните клиенту как можно скорее!`;

        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'HTML'
                })
            });

            const result = await response.json();
            return result.ok;
        } catch (error) {
            console.error('Ошибка отправки:', error);
            return false;
        }
    }

    function validatePhone(phone) {
        const cleanPhone = phone.replace(/\D/g, '');
        return cleanPhone.length >= 10;
    }

    function formatPhone(phone) {
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.length >= 10) {
            const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
            if (match) {
                return `+7 (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
            }
        }
        return phone;
    }

    function showNotification(message, isSuccess = true) {
        const oldNotifications = document.querySelectorAll('.notification');
        oldNotifications.forEach(n => n.remove());

        const notification = document.createElement('div');
        notification.className = `notification ${isSuccess ? 'notification--success' : 'notification--error'}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('notification--show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('notification--show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    async function handleFormSubmit(form, formName) {
        const phoneInput = form.querySelector('input[type="tel"]');
        const phone = phoneInput.value;

        if (!validatePhone(phone)) {
            showNotification('Пожалуйста, введите корректный номер телефона', false);
            phoneInput.focus();
            return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Отправка...';

        const formattedPhone = formatPhone(phone);
        const success = await sendToTelegram(formattedPhone, formName);

        if (success) {
            showNotification('Спасибо! Мы свяжемся с вами в ближайшее время');
            phoneInput.value = '';
        } else {
            showNotification('Произошла ошибка. Попробуйте позвонить нам напрямую', false);
        }

        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }

    function initFAQ() {
        const faqItems = document.querySelectorAll('.faq__item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq__question');
            const answer = item.querySelector('.faq__answer');

            answer.removeAttribute('hidden');

            question.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const isExpanded = question.getAttribute('aria-expanded') === 'true';

                const column = item.parentElement;
                column.querySelectorAll('.faq__item').forEach(otherItem => {
                    const otherQuestion = otherItem.querySelector('.faq__question');
                    const otherAnswer = otherItem.querySelector('.faq__answer');

                    if (otherItem !== item) {
                        otherQuestion.setAttribute('aria-expanded', 'false');
                        otherAnswer.classList.remove('active');
                    }
                });

                if (!isExpanded) {
                    question.setAttribute('aria-expanded', 'true');
                    answer.classList.add('active');
                } else {
                    question.setAttribute('aria-expanded', 'false');
                    answer.classList.remove('active');
                }
            });
        });
    }

    initFAQ();

    function initReviewsSlider() {
        const slider = document.getElementById('reviews-slider');
        if (!slider) return;

        const slides = slider.querySelector('.reviews__slides');
        const slideElements = slider.querySelectorAll('.reviews__slide');
        const prevBtn = document.querySelector('.reviews__arrow--prev');
        const nextBtn = document.querySelector('.reviews__arrow--next');
        const dots = document.querySelectorAll('.reviews__dot');

        let currentSlide = 0;
        const totalSlides = slideElements.length;

        function updateSlider() {
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;

            slideElements.forEach((slide, index) => {
                slide.classList.toggle('reviews__slide--active', index === currentSlide);
            });

            dots.forEach((dot, index) => {
                dot.classList.toggle('reviews__dot--active', index === currentSlide);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        nextBtn?.addEventListener('click', nextSlide);
        prevBtn?.addEventListener('click', prevSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
            });
        });

        setInterval(nextSlide, 5000);
    }

    initReviewsSlider();

    function initDiscountTimer() {
        const timerElement = document.getElementById('discount-timer');
        if (!timerElement) return;

        const now = new Date();
        const endOfDay = new Date(now);
        endOfDay.setHours(23, 59, 59, 999);

        function updateTimer() {
            const now = new Date();
            const timeLeft = endOfDay - now;

            if (timeLeft <= 0) {
                endOfDay.setDate(endOfDay.getDate() + 1);
                return;
            }

            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const formattedTime =
                String(hours).padStart(2, '0') + ' : ' +
                String(minutes).padStart(2, '0') + ' : ' +
                String(seconds).padStart(2, '0');

            timerElement.textContent = formattedTime;
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    }

    initDiscountTimer();

    function addCallbackForms() {
        const formTemplate = document.querySelector('.callback-form-template');
        if (!formTemplate) return;

        document.querySelectorAll('.callback-form').forEach(form => {
            if (!form.parentElement.classList.contains('callback-form-template')) {
                form.remove();
            }
        });

        priceTableWrappers.forEach(wrapper => {
            if (wrapper.classList.contains('active')) {
                const formClone = formTemplate.querySelector('.callback-form').cloneNode(true);
                wrapper.appendChild(formClone);
            }
        });
    }

    function switchSection(section, scrollToTables = true) {
        navLinks.forEach(link => {
            link.classList.remove('main-nav__link--active');
            if (link.dataset.section === section) {
                link.classList.add('main-nav__link--active');
            }
        });

        if (sectionData[section]) {
            heroTitle.textContent = sectionData[section].heroTitle;
            sectionTitle.textContent = sectionData[section].sectionTitle;
            priceSubtitle.textContent = sectionData[section].subtitle;
        }

        priceTableWrappers.forEach(wrapper => {
            if (wrapper.dataset.section === section) {
                wrapper.classList.add('active');
            } else {
                wrapper.classList.remove('active');
            }
        });

        setTimeout(addCallbackForms, 10);

        if (scrollToTables) {
            setTimeout(() => {
                const priceSection = document.querySelector('.price-table');
                if (priceSection) {
                    const headerHeight = document.querySelector('.site-header').offsetHeight || 86;
                    const offset = 20;
                    const elementPosition = priceSection.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            if (section) {
                switchSection(section);
            }
        });
    });

    footerNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const section = mapFooterLinkToSection(href);

            if (section) {
                e.preventDefault();
                switchSection(section);
            }
        });
    });

    const serviceItems = document.querySelectorAll('.services-grid__item');
    serviceItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceName = this.querySelector('.services-grid__name').textContent.trim();
            const targetSection = serviceMapping[serviceName];

            if (targetSection) {
                switchSection(targetSection);
            }
        });
    });

    const methodTabs = document.querySelectorAll('.methods__tab');
    const methodContents = document.querySelectorAll('.methods__item');

    methodTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;

            methodTabs.forEach(t => t.classList.remove('methods__tab--active'));
            this.classList.add('methods__tab--active');

            methodContents.forEach(content => {
                if (content.classList.contains('methods__item--active')) {
                    content.classList.add('methods__item--hiding');
                    setTimeout(() => {
                        content.classList.remove('methods__item--active', 'methods__item--hiding');
                    }, 300);
                }
            });

            setTimeout(() => {
                methodContents.forEach(content => {
                    if (content.dataset.content === targetTab) {
                        content.classList.add('methods__item--active');
                    }
                });
            }, 300);
        });
    });

    switchSection('disinfection', false);

    function initScrollTop() {
        const scrollBtn = document.querySelector('.scroll-top');
        if (!scrollBtn) return;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    initScrollTop();

    function initMobileMenu() {
        const burgerBtn = document.querySelector('.burger-menu');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeBtn = document.querySelector('.mobile-menu__close');
        const overlay = document.querySelector('.mobile-menu__overlay');
        const mobileLinks = document.querySelectorAll('.mobile-menu__link[data-section]');
        const body = document.body;

        function openMenu() {
            mobileMenu.classList.add('active');
            body.classList.add('menu-open');
        }

        function closeMenu() {
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }

        burgerBtn?.addEventListener('click', openMenu);
        closeBtn?.addEventListener('click', closeMenu);
        overlay?.addEventListener('click', closeMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const section = this.dataset.section;

                if (section) {
                    switchSection(section);

                    mobileLinks.forEach(l => l.classList.remove('mobile-menu__link--active'));
                    this.classList.add('mobile-menu__link--active');
                }

                closeMenu();
            });
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                const section = this.dataset.section;
                mobileLinks.forEach(mobileLink => {
                    if (mobileLink.dataset.section === section) {
                        mobileLink.classList.add('mobile-menu__link--active');
                    } else {
                        mobileLink.classList.remove('mobile-menu__link--active');
                    }
                });
            });
        });
    }

    initMobileMenu();

    const heroForm = document.querySelector('.hero__form');
    if (heroForm) {
        heroForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            await handleFormSubmit(this, 'Главная форма (шапка сайта)');
        });
    }

    const discountForm = document.querySelector('.discount__form');
    if (discountForm) {
        discountForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            await handleFormSubmit(this, 'Форма со скидкой 25%');
        });
    }

    document.addEventListener('submit', async function(e) {
        if (e.target.classList.contains('callback-form__form')) {
            e.preventDefault();

            const activeSection = document.querySelector('.price-table__wrapper.active');
            let sectionName = 'Неизвестный раздел';

            if (activeSection) {
                const section = activeSection.dataset.section;
                const sectionNames = {
                    'disinfection': 'Дезинфекция',
                    'rodents': 'Грызуны',
                    'country': 'Дачные вредители',
                    'mold': 'Плесень',
                    'smells': 'Запахи',
                    'all-services': 'Все услуги'
                };
                sectionName = sectionNames[section] || section;
            }

            await handleFormSubmit(e.target, `Форма обратной связи (${sectionName})`);
        }
    });

    // Делегированная обработка всех полей телефона (в том числе добавляемых динамически)
    document.addEventListener('input', function(e) {
        const input = e.target;
        if (!(input instanceof HTMLInputElement)) return;
        if (input.type !== 'tel') return;

        const currentValue = input.value;
        const previousValue = input.dataset.prevValue || '';
        const inputType = e.inputType || '';

        let digits = currentValue.replace(/\D/g, '');
        const prevDigits = previousValue.replace(/\D/g, '');

        // Если поле очистили или ввели только мусор — очищаем полностью
        if (digits.length === 0) {
            input.value = '';
            input.dataset.prevValue = '';
            return;
        }

        // Нормализуем первую цифру
        if (digits[0] === '8') {
            digits = '7' + digits.slice(1);
        }

        // Особый случай: нажали backspace на границе с тире/пробелом/скобкой в конце
        // Тогда браузер удалил только разделитель, а мы дополнительно "съедаем" одну цифру,
        // чтобы интуитивно удалялась и цифра, и разделитель.
        if (
            inputType.startsWith('delete') &&
            input.selectionStart === currentValue.length && // курсор в конце
            prevDigits.length === digits.length &&          // количество цифр не изменилось
            previousValue.length - currentValue.length === 1 // ушёл ровно один символ (разделитель)
        ) {
            digits = digits.slice(0, -1);
        }

        let formatted = '+7';
        if (digits.length > 1) {
            formatted += ' (' + digits.slice(1, 4);
        }
        if (digits.length >= 4) {
            formatted += ') ' + digits.slice(4, 7);
        }
        if (digits.length >= 7) {
            formatted += '-' + digits.slice(7, 9);
        }
        if (digits.length >= 9) {
            formatted += '-' + digits.slice(9, 11);
        }

        input.value = formatted;
        input.dataset.prevValue = formatted;
    });
});