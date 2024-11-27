document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.expandable');
    const links = document.querySelectorAll('.section-link');
    const downloadBtn = document.getElementById('download-pdf');

    // Gestion des sections cliquables pour afficher le contenu
    sections.forEach(section => {
        const h2 = section.querySelector('h2');
        const content = section.querySelector('.content');

        h2.addEventListener('click', () => {
            section.classList.toggle('active');
            if (section.classList.contains('active')) {
                content.style.display = 'block';
                section.setAttribute('aria-expanded', 'true');
            } else {
                content.style.display = 'none';
                section.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Gestion des liens de navigation
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Ne pas empêcher le comportement par défaut pour le lien "Retour à l'accueil"
            if (link.getAttribute('href') === 'index.html') {
                return;
            }
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            targetSection.classList.add('active');
            targetSection.scrollIntoView({ behavior: 'smooth' });
            const content = targetSection.querySelector('.content');
            content.style.display = 'block';
            targetSection.setAttribute('aria-expanded', 'true');
        });
    });

    // Code pour le bouton de téléchargement en PDF
    downloadBtn.addEventListener('click', () => {
        // Crée un élément <a> temporaire pour déclencher le téléchargement
        const link = document.createElement('a');
        link.href = 'Claude Shannon.pdf'; // Chemin vers votre fichier PDF
        link.download = 'Claude Shannon.pdf'; // Nom du fichier à télécharger
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});