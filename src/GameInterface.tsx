const GameInterface = ({ isBattle }: { isBattle: boolean }) => {
    return (
        isBattle
            ? <a>Battle controls / todo</a>
            : <a>Map controls / todo</a>
    );
};

export default GameInterface;
