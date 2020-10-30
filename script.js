let body = document.body;
let square = document.getElementById('col');
let color, margin_top, margin_left, border_radius, width, height;
let z = 0;
let now, all, x, y;

let setter = () => {
    setInterval(() => {
        if (z > 29) {
            clearInterval(setter);
        } else {
            z++;
            let div = document.createElement('div');

            // changeing function
            let tamam_halat = () => {
                // circles 
                color = Math.floor(Math.random() * 256);
                margin_top = Math.floor(Math.random() * 80);
                margin_left = Math.floor(Math.random() * 80);
                width = Math.floor(Math.random() * (100 - 20 + 1) + 20);
                height = Math.floor(Math.random() * (100 - 20 + 1) + 20);
                border_radius = Math.floor(Math.random() * (width / 2));

                // circles color
                div.style.background = `rgb(0 , ${color},${color})`;
                div.style.boxShadow = `0px 10px 30px rgb(0 , ${color},${color})`;

                // circles size and margin
                div.style.marginTop = `${margin_top }vh`;
                div.style.marginLeft = `${margin_left}vw`;
                div.style.width = `${width}px`;
                div.style.height = `${height}px`;
                div.style.borderRadius = `${margin_left}px`;
                div.addEventListener('mouseenter', () => {
                    tamam_halat();
                });
            }
            tamam_halat();
            div.className = 'color';
            body.appendChild(div);

            // chagen every 10sec 
            setInterval(() => {
                tamam_halat();
                // div.style.animation = "rot 1s ease-in-out";
                // body.style.background = `rgb(${color} ,${color} ,${color})`;
            }, 10000);
        }
    }, 100);
}
setter();