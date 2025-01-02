document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.expandable');
    const links = document.querySelectorAll('.section-link');
    const downloadBtn = document.getElementById('download-pdf');
    const form = document.querySelector('form');

    // Gestion des sections cliquables
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

    // Navigation des liens
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === 'index.html') return;
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

    // Téléchargement du PDF
    downloadBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'Claude Shannon.pdf';
        link.download = 'Claude Shannon.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Gestion du QCM
    const correctAnswers = {
        Q1: 'algèbre',
        Q2: '1948',
        Q3: 'Alan',
        Q4: 'Médaille'
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let score = 0;
        const results = [];

        for (const question in correctAnswers) {
            const userAnswer = form.querySelector(`input[name="${question}"]:checked`);
            if (userAnswer) {
                if (userAnswer.value === correctAnswers[question]) {
                    score++;
                    results.push(`Question ${question.slice(1)} : Bonne réponse !`);
                } else {
                    results.push(`Question ${question.slice(1)} : Mauvaise réponse. La bonne réponse était : ${correctAnswers[question]}.`);
                }
            } else {
                results.push(`Question ${question.slice(1)} : Aucune réponse sélectionnée.`);
            }
        }

        const resultContainer = document.createElement('div');
        resultContainer.innerHTML = `<h3>Résultats</h3><p>Score : ${score} / ${Object.keys(correctAnswers).length}</p>`;
        results.forEach(result => {
            const p = document.createElement('p');
            p.textContent = result;
            resultContainer.appendChild(p);
        });
        form.appendChild(resultContainer);
    });
});
