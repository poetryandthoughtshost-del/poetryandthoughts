function filterPoems(category) {
    const poems = document.querySelectorAll('.poem-card');
    poems.forEach(poem => {
        if (poem.dataset.category === category) {
            poem.style.display = 'block';
        } else {
            poem.style.display = 'none';
        }
    });
}

function showAll() {
    const poems = document.querySelectorAll('.poem-card');
    poems.forEach(poem => poem.style.display = 'block');
}

function showPoem(poemCard) {
    const modal = document.getElementById('poemModal');
    const title = poemCard.querySelector('h3').textContent;
    const poemText = poemCard.dataset.poem;
    
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('poemText').innerHTML = poemText;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

// Initialize modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('poemModal');
    const closeBtn = document.querySelector('.close');
    
    // Close on X click
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
    
    // Close on outside click
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
    
    // Close on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});