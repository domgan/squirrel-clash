import { LegacyRef, useEffect, useRef, useState } from 'react';
import kaboom, { KaboomCtx } from 'kaboom';
import kaboomGame from './game/board';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './game/constants';
import GameInterface from './GameInterface';

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isBattle, setIsBattle] = useState(false);
  const [kInstance, setKInstance] = useState<KaboomCtx | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const k = kaboom({
      global: true,
      canvas: canvasRef.current,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT
    })

    setKInstance(k);
    kaboomGame(k, setIsBattle)
  }, [isGameStarted]);

  return (
    <div style={{ display: "flex", gap: "80px", margin: "40px" }}>
      {isGameStarted
        ? <canvas ref={canvasRef as LegacyRef<HTMLCanvasElement>} width={SCREEN_WIDTH} height={SCREEN_HEIGHT} />
        : <button onClick={() => setIsGameStarted(true)}>Start the Game!</button>
      }
      <GameInterface k={kInstance} isBattle={isBattle} />
    </div>
  );
};

export default Game;
