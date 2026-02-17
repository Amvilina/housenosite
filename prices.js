(function() {
    'use strict';

    // Дезинфекция: 3 блока (без участка)
    var PRICE_GROUPS_DISINFECTION = [
        { title: 'В квартире', rows: [ ['комната', '800 ₽'], ['1-к квартира', '1000 ₽'], ['2-к квартира', '1300 ₽'], ['3-к квартира', '1500 ₽'], ['др. площадь', 'договорная'] ] },
        { title: 'В частном доме', rows: [ ['до 100 м²', '3000 ₽'], ['100 м² - 200 м²', '37 ₽/м²'], ['200 м² - 300 м²', '33 ₽/м²'], ['300 м² - 400 м²', '26 ₽/м²'], ['др. площадь', 'договорная'] ] },
        { title: 'В организации', rows: [ ['до 100 м²', '3000 ₽'], ['100 м² - 200 м²', '37 ₽/м²'], ['200 м² - 300 м²', '33 ₽/м²'], ['300 м² - 400 м²', '26 ₽/м²'], ['др. площадь', 'договорная'] ] }
    ];

    // Обработка от насекомых / грызунов: 4 блока
    var PRICE_GROUPS_INSECTS_RODENTS = [
        { title: 'В квартире', rows: [ ['комната', '800 ₽'], ['1-к квартира', '1000 ₽'], ['2-к квартира', '1300 ₽'], ['3-к квартира', '1500 ₽'], ['др. площадь', 'договорная'] ] },
        { title: 'В частном доме', rows: [ ['до 100 м²', '3000 ₽'], ['100 м² - 200 м²', '37 ₽/м²'], ['200 м² - 300 м²', '33 ₽/м²'], ['300 м² - 400 м²', '26 ₽/м²'], ['др. площадь', 'договорная'] ] },
        { title: 'Обработка участка', rows: [ ['до 10 соток', '750 ₽/сотка'], ['10-30 соток', '650 ₽/сотка'], ['30-50 соток', '550 ₽/сотка'], ['от 50 соток', '450 ₽/сотка'], ['др. площадь', 'договорная'] ] },
        { title: 'В организации', rows: [ ['до 100 м²', '3000 ₽'], ['100 м² - 200 м²', '37 ₽/м²'], ['200 м² - 300 м²', '33 ₽/м²'], ['300 м² - 400 м²', '26 ₽/м²'], ['др. площадь', 'договорная'] ] }
    ];

    // Обработка от запахов: 3 блока (без участка)
    var PRICE_GROUPS_SMELLS = [
        { title: 'В квартире', rows: [ ['комната', '800 ₽'], ['1-к квартира', '1000 ₽'], ['2-к квартира', '1300 ₽'], ['3-к квартира', '1500 ₽'], ['др. площадь', 'договорная'] ] },
        { title: 'В частном доме', rows: [ ['до 100 м²', '3000 ₽'], ['100 м² - 200 м²', '37 ₽/м²'], ['200 м² - 300 м²', '33 ₽/м²'], ['300 м² - 400 м²', '26 ₽/м²'], ['др. площадь', 'договорная'] ] },
        { title: 'В организации', rows: [ ['до 100 м²', '3000 ₽'], ['100 м² - 200 м²', '37 ₽/м²'], ['200 м² - 300 м²', '33 ₽/м²'], ['300 м² - 400 м²', '26 ₽/м²'], ['др. площадь', 'договорная'] ] }
    ];

    // Обработка участков: одна таблица
    var PRICE_GROUPS_PLOTS = [
        { title: 'Обработка участков', rows: [ ['до 10 соток', '750 ₽/сотка'], ['10-30 соток', '650 ₽/сотка'], ['30-50 соток', '550 ₽/сотка'], ['50-100 соток', '470 ₽/сотка'], ['100-200 соток', '400 ₽/сотка'], ['др. площадь', 'договорная'] ] }
    ];

    // Обработка от плесени: одна таблица по площади
    var PRICE_GROUPS_MOLD = [
        { title: 'Обработка от плесени', rows: [ ['1 м²', '1520 ₽'], ['2-3 м²', '1150 ₽'], ['3-6 м²', '960 ₽'], ['6-10 м²', '770 ₽'], ['10-15 м²', '690 ₽'], ['др. площадь', 'договорная'] ] }
    ];

    var PRICE_LIST = {
        disinfection: { title: 'Дезинфекция', groups: PRICE_GROUPS_DISINFECTION },
        insects: { title: 'Обработка от насекомых', groups: PRICE_GROUPS_INSECTS_RODENTS },
        rodents: { title: 'Обработка от грызунов', groups: PRICE_GROUPS_INSECTS_RODENTS },
        plots: { title: 'Обработка участков', groups: PRICE_GROUPS_PLOTS },
        smells: { title: 'Обработка от запахов', groups: PRICE_GROUPS_SMELLS },
        mold: { title: 'Обработка от плесени', groups: PRICE_GROUPS_MOLD }
    };

    var SECTION_ORDER = ['disinfection', 'insects', 'rodents', 'plots', 'smells', 'mold'];

    function escapeHtml(text) {
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function renderTableGroup(group) {
        var groupEl = document.createElement('div');
        groupEl.className = 'price-table__group price-table__group--card';
        var titleEl = document.createElement('h3');
        titleEl.className = 'price-table__group-title';
        titleEl.textContent = group.title;
        groupEl.appendChild(titleEl);
        var subheader = document.createElement('div');
        subheader.className = 'price-table__subheader price-table__subheader--two';
        subheader.innerHTML = '<span>Помещение</span><span>Стоимость</span>';
        groupEl.appendChild(subheader);
        var rowsWrap = document.createElement('div');
        rowsWrap.className = 'price-table__rows';
        for (var i = 0; i < group.rows.length; i++) {
            var row = group.rows[i];
            var rowEl = document.createElement('div');
            rowEl.className = 'price-table__row';
            rowEl.innerHTML = '<span class="price-table__area">' + escapeHtml(row[0]) + '</span><span class="price-table__price">' + escapeHtml(row[1]) + '</span>';
            rowsWrap.appendChild(rowEl);
        }
        groupEl.appendChild(rowsWrap);
        return groupEl;
    }

    function renderPriceSection(sectionId) {
        var data = PRICE_LIST[sectionId];
        if (!data) return null;
        var wrapper = document.createElement('div');
        wrapper.className = 'price-table__wrapper price-table__wrapper--simple price-table__wrapper--groups-' + data.groups.length;
        wrapper.setAttribute('data-section', sectionId);
        for (var g = 0; g < data.groups.length; g++) {
            wrapper.appendChild(renderTableGroup(data.groups[g]));
        }
        return wrapper;
    }

    function renderAllPriceSections(container) {
        if (!container) return;
        container.innerHTML = '';
        for (var i = 0; i < SECTION_ORDER.length; i++) {
            var sectionId = SECTION_ORDER[i];
            var wrapper = renderPriceSection(sectionId);
            if (wrapper) {
                if (i === 0) wrapper.classList.add('active');
                container.appendChild(wrapper);
            }
        }
    }

    function init() {
        var root = document.getElementById('price-tables-root');
        if (root) renderAllPriceSections(root);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.PRICE_LIST = PRICE_LIST;
    window.SECTION_ORDER = SECTION_ORDER;
    window.renderPriceSection = renderPriceSection;
    window.renderAllPriceSections = renderAllPriceSections;
})();
