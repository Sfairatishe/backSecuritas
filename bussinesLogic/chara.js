let weight = 0 //k
let temperature = 0  //C
let volume = 0 //V (M³)
let square = 0  //S (м²)
let porosity = 0 // (V - Vвещ) / V
let substDensity = 0 // плотность вещества (кл воды)
let volumeOfSpace = 0  //V0 (M³)
let porousness = 0 //скважность
let moisture = 0 //влага
let newMoisture = 0 //влага(изменения)
let humidity = 0 // влажность (%)
let bulkMass = 0 //насипная масса
let BulkMassChanges = 0

module.exports.getPorousness = (volume, volumeOfSpace) => (volume - volumeOfSpace) / volume;
module.exports.getBulkDensity  = (weight, volume) => weight / volume ;
module.exports.getbulkMass = (porousness, porosity, substDensity) => (1 - porosity)*(1 - substDensity)*porousness;
module.exports.getHumidity = (weight, moisture) => weight/moisture*100;
module.exports.getBulkMassChanges = (bulkMass, moistureInitial, moistureFinal) => (bulkMass*(100+moistureFinal)) / (100+moistureInitial);
