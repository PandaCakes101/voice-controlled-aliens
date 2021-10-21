function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Bx50eIEns/model.json', modelready);
}

function modelready() {
    classifier.classify(gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}
