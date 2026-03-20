const pre = document.getElementById('ascii-canvas');

const width = 80; 
const height = 40; 
const text = "sæm ə ˈwɪtni ɛn-ɛl-piː & lɪŋˈɡwɪstɪks";

let frame = 0; 

function animate() {
    let grid = Array.from({ length: height }, () => Array(width).fill(' '));

    for (let i = 0; i < 200; i++){
        let theta = 0.2 * i + frame * 0.5; 

        let breath = Math.sin(frame * 0.02) * 10 + 15;
        let r = (i / 200) * breath; 

        let x = Math.floor(width / 2 + r * Math.cos(theta) * 2);
        let y = Math.floor(height / 2 + r * Math.sin(theta));

        if (x >= 0 && x <  width && y >= 0 && y < height) {
            grid[y][x] = text[i % text.length];
        }
    }
    pre.textContent = grid.map(row => row.join('')).join('\n');

    frame++;
    requestAnimationFrame(animate);
}

animate();




