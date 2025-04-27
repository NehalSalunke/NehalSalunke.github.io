document.addEventListener('DOMContentLoaded', function() {
    // Project filtering
    const filterButtons = document.querySelectorAll('.btn-filter');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Project modal functionality
    const modal = document.querySelector('.project-modal');
    const closeModal = document.querySelector('.close-modal');
    
    // Close modal when clicking X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Project click event (would be enhanced with actual project data)
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.id;
            // In a real implementation, you would load project data based on the ID
            const modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML = `
                <h2>${this.querySelector('h3').textContent}</h2>
                <p class="project-category">${this.querySelector('.project-category').textContent}</p>
                <div class="project-image">
                    ${this.querySelector('.project-image').innerHTML}
                </div>
                <div class="project-details">
                    <p>${this.querySelector('.project-description').textContent}</p>
                    <h3>Technologies Used</h3>
                    <div class="project-tech">
                        ${this.querySelector('.project-tech').innerHTML}
                    </div>
                    <div class="project-links">
                        ${this.querySelector('.project-links').innerHTML}
                    </div>
                </div>
            `;
            modal.style.display = 'block';
        });
    });
});