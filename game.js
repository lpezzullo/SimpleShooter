
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var player;
var enemy;
var rocks;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {
    game.physics.enable(Phaser.Physics.ARCADE);
    player = new Player(game, 500, 500);
    enemy = new Enemy(game, 50, 50);

    rocks = game.add.group();
    for (var i = 0; i <5; i++) {
        var rock = Rock(game, rocks, i * 100, 300);
    }
    // rocks = new Rock(game, 300, 300);
}

function collisionHandler(thing_one, thing_two) {
    thing_one.collide();
}

function update() {
    game.physics.arcade.overlap(player, enemy, collisionHandler, null, this);
    game.physics.arcade.overlap(rocks, player, collisionHandler, null, this);

}
