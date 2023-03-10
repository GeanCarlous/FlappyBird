console.log('[DevSoutinho] Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

// [PLANO DE FUNDO]
const PlanoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha() {
        contexto.fillStyle = '#70c5ce'
        contexto.fillRect(0,0, canvas.width, canvas.height)

        contexto.drawImage(
            sprites,
            PlanoDeFundo.spriteX, PlanoDeFundo.spriteY, // Sprite X, Sprite Y
            PlanoDeFundo.largura, PlanoDeFundo.altura, // Altura e largura do recorte na sprite
            PlanoDeFundo.x, PlanoDeFundo.y,
            PlanoDeFundo.largura, PlanoDeFundo.altura,
        );

        contexto.drawImage(
            sprites,
            PlanoDeFundo.spriteX, PlanoDeFundo.spriteY, // Sprite X, Sprite Y
            PlanoDeFundo.largura, PlanoDeFundo.altura, // Altura e largura do recorte na sprite
            PlanoDeFundo.x + PlanoDeFundo.largura, PlanoDeFundo.y,
            PlanoDeFundo.largura, PlanoDeFundo.altura,
        );
    },
};

// [CHÃO]
const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha() {
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, // Sprite X, Sprite Y
            chao.largura, chao.altura, // Altura e largura do recorte na sprite
            chao.x, chao.y,
            chao.largura, chao.altura,
        );

        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, // Sprite X, Sprite Y
            chao.largura, chao.altura, // Altura e largura do recorte na sprite
            chao.x + chao.largura, chao.y,
            chao.largura, chao.altura,
        );
    }
}

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    velocidade: 0,
    gravidade: 0.25,
    atualiza() {
        flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade;
        console.log(flappyBird.velocidade);
        flappyBird.y = flappyBird.y + flappyBird.velocidade;
    },
    desenha() {
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY, // Sprite X, Sprite Y
            flappyBird.largura, flappyBird.altura, // Altura e largura do recorte na sprite
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura,
        );
    }
}

function loop() { 

    flappyBird.atualiza();
    PlanoDeFundo.desenha();
    chao.desenha();  
    flappyBird.desenha();


    requestAnimationFrame(loop);
}


loop();
