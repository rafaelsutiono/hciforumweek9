function digitalDecipher(eMessage, key) {
    const alphabet = new Map([
        [1, "A"],
        [2, "B"],
        [3, "C"],
        [4, "D"],
        [5, "E"],
        [6, "F"],
        [7, "G"],
        [8, "H"],
        [9, "I"],
        [10, "J"],
        [11, "K"],
        [12, "L"],
        [13, "M"],
        [14, "N"],
        [15, "O"],
        [16, "P"],
        [17, "Q"],
        [18, "R"],
        [19, "S"],
        [20, "T"],
        [21, "U"],
        [22, "V"],
        [23, "W"],
        [24, "X"],
        [25, "Y"],
        [26, "Z"]
    ]);
    
    var rslt = "";
    const Key = key.toString().split("");

    console.log("split key: ", Key)
    console.log('key length: ', Key.length)
    
    for (var i = 0; i < eMessage.length; i++) {
        console.log('eMessage: ', eMessage[i])
        console.log('key: ', Key[i % Key.length])

        console.log('result: ', eMessage[i] - Key[i % Key.length]);
        console.log('message: ', alphabet.get(eMessage[i] - Key[i % Key.length]))
        rslt += alphabet.get(eMessage[i] - Key[i % Key.length]);
    }

    return rslt;
}