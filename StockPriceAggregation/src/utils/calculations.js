export function calculateCovariance(dataX, dataY) {
    const meanX = dataX.reduce((a, b) => a + b, 0) / dataX.length;
    const meanY = dataY.reduce((a, b) => a + b, 0) / dataY.length;
  
    return dataX.reduce((sum, x, i) => sum + (x - meanX) * (dataY[i] - meanY), 0) / (dataX.length - 1);
  }
  
  export function calculateStandardDeviation(data) {
    const mean = data.reduce((a, b) => a + b, 0) / data.length;
    return Math.sqrt(data.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / (data.length - 1));
  }
  
  export function calculateCorrelation(dataX, dataY) {
    const covariance = calculateCovariance(dataX, dataY);
    const stdDevX = calculateStandardDeviation(dataX);
    const stdDevY = calculateStandardDeviation(dataY);
  
    return covariance / (stdDevX * stdDevY);
  }