//Modules-Encalpsulated Code (only share minimum)
//CommonJs,every file is module by (default)

const { john, peter } = require('./4-names')
const sayHi = require('./5-utils')

sayHi('susan')
sayHi(john)
sayHi(peter)
