(() => {
    const deletePage = () => {
        const editLinks = document.querySelectorAll('.edit-usertext');
        editLinks.forEach(a => a.click());
        const textAreas = document.querySelectorAll('.usertext-edit textarea');
        textAreas.forEach(a => (a.value = 'Stop reading me.'));
        const saveButtons = document.querySelectorAll('.usertext-buttons .save');
        let currentTimeout = 0;
        const editSubmissions = Array.from(saveButtons).map(
            node =>
                new Promise(resolve => {
                    setTimeout(() => {
                        node.click();
                        resolve();
                    }, currentTimeout);
                    currentTimeout += 1500;
                })
        );
        currentTimeout = 0;
        return Promise.all(editSubmissions).then(() => {
            const deletes = document.querySelectorAll('[data-event-action="delete"]');
            deletes.forEach(a => a.click());
            const confirms = document.querySelectorAll('.del-button a.yes');
            const confirmDeletes = Array.from(confirms).map(
                node =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            node.click();
                            resolve();
                        }, currentTimeout);
                        currentTimeout += 1500;
                    })
            );
            return Promise.all(confirmDeletes);
        });
    };
    const deleteAll = () => {
        deletePage().then(() => {
            if (document.querySelector('.nav-buttons .next-button')) {
                document.querySelector('.tabmenu .selected').click();
                setTimeout(() => deleteAll(), 2000);
            }
        });
    };
    deleteAll();
})();
