const GameInterface = ({ isBattle }: { isBattle: boolean }) => {
    return (
        isBattle ? <a>Battle controls</a>
            : <a>Map controls</a>
    );
};

export default GameInterface;
