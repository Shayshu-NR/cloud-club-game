const game = new Phaser.Game(800, 600, Phaser.AUTO)
game.state.add("MenuScreen", Mario_Game.Menu)
game.state.add("Loading", Mario_Game.loading)
game.state.add("Level_1", Mario_Game.level_1)
game.state.add("Level_2", Mario_Game.level_2)
game.state.start("MenuScreen")