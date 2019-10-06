const guessedNumber = Math.floor(Math.random() * 1000000);

const solveTheGame = () => {
    let verifyCalls = 0;
    let minBorder = 1;
    let maxBorder = 1000000;
    const maxVerifyCallsCount = 50;
    let averageNumber;

    while (verifyCalls < maxVerifyCallsCount) {
        averageNumber = Math.floor((minBorder + maxBorder) / 2);
        switch (verify(averageNumber)) {
            case 0: return averageNumber;
            case -1: {
                maxBorder = averageNumber;
                break;
            }
            case 1: {
                minBorder = averageNumber;
                break;
            }
        };
        verifyCalls++;
    };
    throw new Error('verify was called more than 50 times');
}

function verify(guess) {
    if (guess < guessedNumber) return 1;
    if (guess > guessedNumber) return -1;
    if (guess === guessedNumber) return 0;
}
