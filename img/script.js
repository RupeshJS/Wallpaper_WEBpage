document.addEventListener("DOMContentLoaded", function () {
    const wallpapersSection = document.querySelector('.wallpapers');
    const searchInput = document.getElementById('searchInput');

    // Sample data for wallpapers (replace this with your actual data)
    const wallpapersData = [
        { src: 'img/1.png', alt: 'Wallpaper 1' },
        { src: 'img/5.jpg', alt: 'Wallpaper 2' },
        { src: 'img/18.jpg', alt: 'Wallpaper 3' },
        // Add more wallpapers as needed
    ];

    // Populate wallpapers
    function populateWallpapers(data) {
        wallpapersSection.innerHTML = '';
        data.forEach(wallpaper => {
            const wallpaperContainer = document.createElement('div');
            wallpaperContainer.classList.add('wallpaper-container');

            const wallpaperImage = document.createElement('img');
            wallpaperImage.src = wallpaper.src;
            wallpaperImage.alt = wallpaper.alt;
            wallpaperImage.classList.add('wallpaper');

            const downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download';
            downloadButton.classList.add('download-button');
            downloadButton.addEventListener('click', function () {
                window.location.href = wallpaper.src;
            });

            wallpaperContainer.appendChild(wallpaperImage);
            wallpaperContainer.appendChild(downloadButton);
            wallpapersSection.appendChild(wallpaperContainer);
        });
    }

    // Initial population
    populateWallpapers(wallpapersData);

    // Search functionality
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredWallpapers = wallpapersData.filter(wallpaper =>
            wallpaper.alt.toLowerCase().includes(searchTerm)
        );
        populateWallpapers(filteredWallpapers);
    });
});
