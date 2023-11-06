const image = document.getElementById('image');
let images = ['1.jpg', '2.jpg'];
let clickCount = 0;

image.addEventListener('click', () => {
    clickCount++;
    document.getElementById('click-count').textContent = `BONK次數: ${clickCount}`;
    
    image.src = images[1];
    setTimeout(() => {
        image.src = images[0];
    }, 100); // 将延迟时间改为0.01秒
});
