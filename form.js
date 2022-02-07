const form = document.querySelector('form');
    input = document.querySelectorAll('input');

const measage = {
    loading: 'Wait pls...',
    success: 'Form is ready',
    fail: 'Fail...'
};

const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

const clearInpust = () => {
    clearInpust.forEach(item => {
        item.value = '';
    })
}

form.forEach(item => {
    item.addEventListentr('submit', (e) => {
        e.preventDefault();

        let stutusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        item.appendChild(stutusMessage);

        const formData = new FormData(item);

        postData('server.php', formData)
            .then(res => {
                console.log(res);
                stutusMessage.textContent = message.success;
            })
            .catch(() => stutusMessage.textContent = message.fail)
            .finally(() => {
                clearInpust();
                setTimeout(() => {
                    stutusMessage.remove();
                }, 5000);
        });
    });
});