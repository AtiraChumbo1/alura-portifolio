 let colors = [];
let numParticles = 100;
let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(random(width), random(height)));
    }
}

function draw() {
    background(255, 50); // Fundo com leve transparência
    for (let particle of particles) {
        particle.update();
        particle.display();
    }
}

class Particle {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(1, 3));
        this.size = random(5, 15);
    }

    update() {
        this.position.add(this.velocity);
        if (this.position.x > width || this.position.x < 0) {
            this.velocity.x *= -1;
        }
        if (this.position.y > height || this.position.y < 0) {
            this.velocity.y *= -1;
        }
    }

    display() {
        fill(100, 100, 250, 150);
        noStroke();
        ellipse(this.position.x, this.position.y, this.size);
    }
}
