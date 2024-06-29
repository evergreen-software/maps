class TimeSeriesCollection {
    constructor() {
        this.series = [];
    }

    plot(line){
        
    }
}

function series(name, values) {
    return { name, values };
}

function timeValue(time, value) {
    return { time, value };
}

function createSeriesCollection(...series) {
    const collection = new TimeSeriesCollection();
    series.forEach((s) => {
        collection.addSeries(s.name, s.values);
    });
    return collection;
}