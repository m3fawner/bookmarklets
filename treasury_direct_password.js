(() => {
    const input = document.querySelector('.pwordinput');
    input.readOnly = false;
    const pwd = prompt('Enter your password', '');
    input.value = pwd;
    document.querySelector('[value="Submit"]').click();
})();
