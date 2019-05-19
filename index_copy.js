// дефолтное значение
const FahrToCelsius  = function (fahr = 90) {
    return (fahr - 32) * 5 / 9
}

console.log(FahrToCelsius())
