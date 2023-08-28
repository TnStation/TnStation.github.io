
    document.addEventListener('DOMContentLoaded', function() {
        const clickableImages = document.querySelectorAll('.clickable-image');

        clickableImages.forEach(image => {
            image.addEventListener('click', function() {
                const imageUrl = this.style.backgroundImage.slice(4, -1).replace(/"/g, "");
                openFullScreen(imageUrl);
            });
        });

        function openFullScreen(imageUrl) {
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.innerHTML = `<div class="fullscreen-image" style="background-image: url('${imageUrl}')"></div>`;
            document.body.appendChild(overlay);

            overlay.addEventListener('click', function() {
                this.remove();
            });
        }
    });
