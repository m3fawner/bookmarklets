(() => {
    const ID_MAP = {
        RSUS: 'Rsu',
        OPTIONS: 'StockOption',
    };
    const INNER_TEXT_REGEX = /(\d{2}\/\d{2}\/\d{4})[^\d]*([\d,]+)/;
    const EXPANDER_ARROW_SELECTOR = '.sdps-table-expandable--collapsed td [aria-expanded=false]';
    const VEST_ROW_SELECTOR = '.sdps-table-nested sch-table:nth-of-type(2) tbody tr';

    const getCountStringForID = id => {
        const nodes = Array.from(document.querySelectorAll(`#${id} ${VEST_ROW_SELECTOR}`));
        if (nodes.length === 0) {
            return null;
        }
        const vestingMap = nodes.reduce((acc, node) => {
            const [, date, count] = node.innerText.match(INNER_TEXT_REGEX);
            return {
                ...acc,
                [date]: (acc[date] ?? 0) + parseInt(count.replaceAll(',', '')),
            };
        }, {});
        const sortedEntries = Object.entries(vestingMap)
            .filter(([vestingDate]) => new Date(vestingDate).getTime() > new Date().getTime())
            .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime());
        return sortedEntries.reduce(
            (acc, [vestingDate, vestingSum]) => acc + '\n' + vestingDate + ' ' + vestingSum,
            ''
        );
    };
    const produceAlert = (title, str) => {
        alert(title + '\n' + str);
    };
    document.querySelectorAll(EXPANDER_ARROW_SELECTOR).forEach(node => node.click());

    const optionsAlert = getCountStringForID(ID_MAP.OPTIONS);
    const rsuAlert = getCountStringForID(ID_MAP.RSUS);

    if (optionsAlert) {
        produceAlert('Options', optionsAlert);
    }

    if (rsuAlert) {
        produceAlert('RSUs', rsuAlert);
    }
})();
