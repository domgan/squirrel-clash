import React, { useEffect, useRef } from 'react';
import kaboom from 'kaboom';
import kaboomGame from './game/board';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './game/constants';

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const k = kaboom({
      global: true,
      // if you don't want kaboom to create a canvas and insert under document.body
      canvas: canvasRef.current,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT
    })

    kaboomGame(k)

  }, []);

  return <canvas ref={canvasRef} width={SCREEN_WIDTH} height={SCREEN_HEIGHT} />;
};

export default Game;
