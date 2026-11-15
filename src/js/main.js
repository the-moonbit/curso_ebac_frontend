document.addEventListener('DOMContentLoaded', function() {
    const eras = [
        "Eyes Wide Open (2015)",
        "EVOLution (2016)",
        "Singular: Act I (2018)",
        "Singular: Act II (2019)",
        "Emails I Can't Send (2022)",
        "Short n' Sweet (2024)"
    ];

    const btn = document.getElementById('sortear-btn');
    const display = document.getElementById('era-display');

    if (btn && display) {
        btn.addEventListener('click', function() {
            // Efeito visual rápido de transição
            display.style.opacity = 0;
            
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * eras.length);
                display.textContent = eras[randomIndex];
                display.style.opacity = 1;
            }, 150);
        });
    }
});