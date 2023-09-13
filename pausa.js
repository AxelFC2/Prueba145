// Crea una nueva escena.
var pauseScene = new Scene();

// Añade un botón a la escena.
var pauseButton = new Button();
pauseButton.text = "Pausa";
pauseScene.addChild(pauseButton);

// Establece la propiedad `onClick` del botón en una función que pause el juego.
pauseButton.onClick = function() {
// Pausa el juego.
game.paused = true;
};

// Añade la escena al juego.
game.addScene(pauseScene);