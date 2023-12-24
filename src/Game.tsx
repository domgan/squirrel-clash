import React, { useEffect, useRef, useState } from 'react';
import kaboom from 'kaboom';
import kaboomGame from './game/board';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './game/constants';
import GameInterface from './GameInterface';

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const [isBattle, setIsBattle] = useState(false);

  console.log(isBattle);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const k = kaboom({
      global: true,
      canvas: canvasRef.current,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT
    })

    kaboomGame(k, setIsBattle)
  }, []);

  return (
    <div style={{ display: "flex", gap: "100px" }}>
      <canvas ref={canvasRef} width={SCREEN_WIDTH} height={SCREEN_HEIGHT} />
      <GameInterface isBattle={isBattle} />
    </div>
  );
};

export default Game;
