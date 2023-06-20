const flock = [];

let alignSlider, cohesionSlider, separationSlider;

function setup() {


    createCanvas(1200, 480);
    alignSlider = createSlider(0, 2, 1.5, 0.1);
    alignSlider.position(20, 500);
    cohesionSlider = createSlider(0, 2, 1, 0.1);
    cohesionSlider.position(520, 500);
    separationSlider = createSlider(0, 2, 2, 0.1);
    separationSlider.position(920, 500);

    text('red', alignSlider.x * 2 + alignSlider.width, 500);
    text('green', cohesionSlider.x * 2 + cohesionSlider.width, 500);
    text('blue', separationSlider.x * 2 + separationSlider.width, 500);


    for (let i = 0; i < 200; i++) {
        flock.push(new Boid());
    }
}

function draw() {
    background(0);

    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }

}
