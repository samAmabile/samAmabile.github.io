const pre = document.getElementById('ascii-canvas');

const width = 80; 
const height = 40; 
const text = "sæm ə ˈwɪtni ɛn-ɛl-piː & lɪŋˈɡwɪstɪks";

let frame = 0; 

function animate() {
    if (!pre) return;
    let grid = Array.from({ length: height }, () => Array(width).fill(' '));

    let progress = (Math.sin(frame * 0.02) + 1) / 2;

    for (let i = 0; i < 200; i++){
        let startX = (width / 2 - text.length / 2) + (i % text.length);
        let startY = height / 2; 

        let theta = 0.2 * i + frame * 0.05;
        let breath = 20; 
        let r = (i / 200) * breath;
        let endX = width / 2 + r * Math.cos(theta) * 2;
        let endY = height / 2 + r * Math.sin(theta); 

        let x = Math.floor(startX + (endX - startX) * progress);
        let y = Math.floor(startY + (endY - startY) * progress);

        if (x >= 0 && x < width && y >= 0 && y < height){
            grid[y][x] = text[i % text.length];
        }

    }
    pre.textContent = grid.map(row => row.join('')).join('\n');
    frame++; 
    requestAnimationFrame(animate);

}


animate();




