/**
 * Xlab CMS (Content Management System) Binding Script
 */
(function () {
    const data = window.XlabData;
    if (!data) {
        console.error("XlabData 객체를 찾을 수 없습니다. 데이터 로드에 실패했습니다.");
        return;
    }

    // 1. 단일 데이터 바인딩 (data-cms, data-cms-src)
    function bindSimpleData() {
        const textElements = document.querySelectorAll("[data-cms]");
        textElements.forEach(el => {
            const keyPath = el.getAttribute("data-cms");
            const val = getValueFromPath(data, keyPath);
            if (val !== undefined && val !== null) {
                // 개행 문자는 <br>로 치환
                el.innerHTML = val.replace(/\n/g, '<br>');
            }
        });

        const imgElements = document.querySelectorAll("[data-cms-src]");
        imgElements.forEach(el => {
            const keyPath = el.getAttribute("data-cms-src");
            const val = getValueFromPath(data, keyPath);
            if (val) {
                el.src = val;
            }
        });
    }

    // 2. 홈 슬라이더 렌더링 (index.html)
    function renderHomeSlider() {
        if (!data.home || !data.home.slides) return;
        const sliderDown = document.querySelector(".slider__down");
        const sliderUp = document.querySelector(".slider__up");
        const sliderDots = document.querySelector(".slider-dots");
        
        if (sliderDown && sliderUp && sliderDots) {
            sliderDown.innerHTML = "";
            sliderUp.innerHTML = "";
            sliderDots.innerHTML = "";

            data.home.slides.forEach((slide, index) => {
                // Slider Images
                sliderDown.innerHTML += `<img src="${slide.image}" alt="${slide.title}">`;

                // Slider Texts
                const activeClass = index === 0 ? "is-active" : "";
                sliderUp.innerHTML += `
                    <div class="slider__txt ${activeClass}">
                        <div class="slider__txtwrap">
                            <span class="slider__category">${slide.category}</span>
                            <h1>${slide.title}</h1>
                            <a href="${slide.btnLink}" class="slider__btn">
                                <span class="slider__btn__txt">${slide.btnText}</span>
                                <span class="slider__btn__icon">
                                    <svg><use xlink:href="${window.isEn ? '../' : ''}assets/svg/svg-map.svg#arrow-next"/></svg>
                                </span>
                            </a>
                        </div>
                    </div>
                `;

                // Dots
                sliderDots.innerHTML += `<button class="slider-dots__item">${index + 1}</button>`;
            });
        }
    }

    // 3. 제품 리스트 렌더링 (products.html)
    function renderProducts() {
        if (!data.products || !data.products.items) return;
        const container = document.getElementById("cms-products-list");
        if (container) {
            container.innerHTML = "";
            data.products.items.forEach(item => {
                container.innerHTML += `
                    <div style="margin-bottom: 40px; padding-bottom: 40px; border-bottom: 1px solid #efefef;">
                        <img src="${item.image}" alt="${item.name}" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;">
                        <h2>${item.name}</h2>
                        <p style="color: #666; font-weight: bold; margin-bottom: 15px;">${item.spec}</p>
                        <p>${item.desc}</p>
                        <br>
                        <a href="${item.storeLink}" class="btn" style="display:inline-block; padding: 10px 20px; background:#000; color:#fff; text-decoration:none; border-radius: 4px;">구매하기 / 구매문의</a>
                    </div>
                `;
            });
        }
    }

    // 4. 솔루션 리스트 렌더링 (solutions.html)
    function renderSolutions() {
        if (!data.solutions || !data.solutions.categories) return;
        const container = document.getElementById("cms-solutions-list");
        if (container) {
            container.innerHTML = "";
            data.solutions.categories.forEach(item => {
                container.innerHTML += `
                    <article style="margin-bottom: 50px;">
                        <figure class="post__featured-image post__image--full">
                            <img src="${item.image}" alt="${item.title}" style="border-radius: 8px;">
                        </figure>
                        <div class="post__content">
                            <h3>${item.title}</h3>
                            <p>${item.desc}</p>
                        </div>
                    </article>
                `;
            });
        }
    }

    // 유틸: "home.heroTitle" 같은 경로 문자열로 객체 내 값을 찾는 함수
    function getValueFromPath(obj, path) {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    }

    // 데이터 바인딩 실행!
    bindSimpleData();
    if(document.querySelector(".slider__down")) renderHomeSlider();
    if(document.getElementById("cms-products-list")) renderProducts();
    if(document.getElementById("cms-solutions-list")) renderSolutions();
})();
