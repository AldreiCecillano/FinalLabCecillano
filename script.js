const apiKey = 'JXukjZyQDp4UG0vPKOjMeGSEFJE2VXON'; // Replace with your GIPHY API key
const form = document.getElementById('search-form');
const gifsContainer = document.getElementById('gifs');
const loadingIndicator = document.getElementById('loading');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value;
    gifsContainer.innerHTML = '';
    loadingIndicator.style.display = 'block';

    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=12`);
        const data = await response.json();
        
        if (data.data.length === 0) {
            gifsContainer.innerHTML = '<p class="text-center">No GIFs found!</p>';
        } else {
            data.data.forEach(gif => {
                const gifCard = `
                    <div class="col-md-4 gif-card">
                        <div class="card">
                            <img src="${gif.images.fixed_height.url}" class="card-img-top" alt="${gif.title}">
                            <div class="card-body">
                                <h5 class="card-title">${gif.title}</h5>
                            </div>
                        </div>
                    </div>
                `;
                gifsContainer.innerHTML += gifCard;
            });
        }
    } catch (error) {
        console.error('Error fetching GIFs:', error);
        gifsContainer.innerHTML = '<p class="text-danger text-center">An error occurred while fetching GIFs.</p>';
    } finally {
        loadingIndicator.style.display = 'none';
    }
});
