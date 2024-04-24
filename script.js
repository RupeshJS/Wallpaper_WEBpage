document.addEventListener("DOMContentLoaded", function () {
    const wallpapersSection = document.querySelector('.wallpapers');
    const searchInput = document.getElementById('searchInput');

    // Sample data for wallpapers (replace this with your actual data)
    const wallpapersData = [
        { src: 'anime/1.jpeg', alt: 'Wallpaper 1' },
        { src: 'anime/2.jpg', alt: 'Wallpaper 2' },
        { src: 'anime/3.jpg', alt: 'Wallpaper 3' },
        { src: 'anime/4.jpg', alt: 'Wallpaper 4' },
        { src: 'anime/5.jpg', alt: 'Wallpaper 5' },
        { src: 'anime/6.jpg', alt: 'Wallpaper 6' },
        { src: 'anime/7.jpg', alt: 'Wallpaper 7' },
        { src: 'anime/8.jpg', alt: 'Wallpaper 8' },
        { src: 'anime/9.jpg', alt: 'Wallpaper 9' },
        { src: 'anime/10.jpg', alt: 'Wallpaper 10' },
        { src: 'anime/11.jpg', alt: 'Wallpaper 11' },
        { src: 'anime/12.jpg', alt: 'Wallpaper 12' },
        { src: 'anime/13.jpg', alt: 'Wallpaper 13' },
        { src: 'anime/14.jpg', alt: 'Wallpaper 14' },
        { src: 'anime/15.jpg', alt: 'Wallpaper 15' },
        { src: 'anime/16.jpg', alt: 'Wallpaper 16' },
        { src: 'anime/17.jpg', alt: 'Wallpaper 17' },

        // Add more wallpapers as needed
    ];

    // Function to download the image
    function downloadImage(url) {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = url.split('/').pop(); // Set the filename to the last part of the URL
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

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
                downloadImage(wallpaper.src);
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

document.addEventListener("DOMContentLoaded", function () {
    const introVideo = document.querySelector('.intro-video');
    const contentWrapper = document.querySelector('.content-wrapper');

    // Play the intro video for 2 seconds
    setTimeout(() => {
        introVideo.classList.add('fade-out');
    }, 2000);

    // Remove the intro video container and display the content after fade out
    setTimeout(() => {
        introVideo.parentElement.remove();
        contentWrapper.style.display = 'block';
    }, 5000); // 2 seconds for fade out + 3 seconds for total duration
});
