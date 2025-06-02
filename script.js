document.addEventListener('DOMContentLoaded', function() {
    const viewProgrammesButtons = document.querySelectorAll('.toggle-programmes');
    const backButtons = document.querySelectorAll('.programmes-list .back-button');

    viewProgrammesButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the '.programmes-list' within the same '.university-card'
            const universityCard = this.closest('.university-card');
            const programmesList = universityCard.querySelector('.programmes-list');
            
            if (programmesList) {
                // Toggle display of the clicked programme list
                const isHidden = programmesList.style.display === 'none' || programmesList.style.display === '';
                programmesList.style.display = isHidden ? 'block' : 'none';

                // Optional: Hide other open programme lists (simple version)
                // document.querySelectorAll('.programmes-list').forEach(list => {
                //     if (list !== programmesList) {
                //         list.style.display = 'none';
                //     }
                // });

                // Optional: Hide the main content of the card (e.g., logo, view button)
                // const mainCardContent = universityCard.querySelector('.uni-logo-placeholder'); // and other elements
                // if (mainCardContent) mainCardContent.style.display = isHidden ? 'none' : 'block';
                // this.style.display = isHidden ? 'none' : 'block'; // Hide/show the "View Programmes" button itself

            }
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            const programmesList = this.closest('.programmes-list');
            const universityCard = this.closest('.university-card');

            if (programmesList) {
                programmesList.style.display = 'none';
            }

            // Optional: Show the main content of the card again
            // const mainCardContent = universityCard.querySelector('.uni-logo-placeholder');
            // const viewButton = universityCard.querySelector('.toggle-programmes');
            // if (mainCardContent) mainCardContent.style.display = 'block';
            // if (viewButton) viewButton.style.display = 'block';
        });
    });
});
