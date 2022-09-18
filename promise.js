const {
    promiseTheaterIXX,
    promiseTheaterVGC
} = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
    try {
        const promiseOne = await promiseTheaterIXX();
        const promiseTwo = await promiseTheaterVGC();

        const output  = [...promiseOne, ...promiseTwo]
            .filter((value) => value.hasil === emosi)
            .length;
        return output;
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    promiseOutput,
};