class Auto {
    constructor(name, year, color, engine){
        this.name = name;
        this.year = year;
        this.color = color;
        this.engine = engine;
    }
    startEngine(){
        console.log(`${this.name} Engine started`);
    }
}

class Car extends Auto {
    constructor(name, year, color, engine, maxSpeed){
        super(name, year, color, engine)
        this.maxSpeed = maxSpeed
    }
}

const Cars = new Car('Toyota Tundra', 2022, 'Red', 'v6', 180);
console.log(Cars);
Cars.startEngine();

// Air planes

class Fighter {
    constructor(name, year, color, engine){
        this.name = name;
        this.year = year;
        this.color = color;
        this.engine = engine;
    }
    startEngine(){
        console.log(`${this.name} gained altitude`);
    }
}

class Plane extends Fighter {
    constructor(name, year, color, engine, maxSpeed){
        super(name, year, color, engine)
        this.maxSpeed = maxSpeed
    }
}

const Planes = new Fighter ('a-10', 1974-1985, 'silver', 'GE TF-34', 984);
console.log(Planes);
Planes.startEngine();
