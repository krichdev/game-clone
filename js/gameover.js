var gameOver = function(game){
	localStorage.highscore = 0;
}

gameOver.prototype = {
	init: function(score){

	},

	create: function(){

		this.overTitle = game.add.sprite(250, -200, 'gameover');

		game.input.onTap.add(this.restartMenu, this);

		game.add.tween(this.overTitle).to({y: 90}, 900).start();

		this.setHighScore();

	},

	restartMenu: function(){
		this.game.state.start('menu');
	},	

	setHighScore: function(){
		if(score > localStorage.highscore){
			localStorage.highscore = score;
			this.newHighScore = game.add.text(125, -250, "New High Score! " +score, {font: "30px Press Start 2P", fill: "red"});
			game.add.tween(this.newHighScore).to({y: 250}, 1000).start();
		} else {
			this.finalScore = game.add.text(375, -250, +score, {font: "30px Press Start 2P", fill: "#ffffff"});
			game.add.tween(this.finalScore).to({y: 250}, 900).start();
		}
	},

}