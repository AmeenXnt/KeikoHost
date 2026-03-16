import chalk from "chalk"

const purple = chalk.hex("#a855f7").bold

console.log(purple(`
╔════════════════════════════════════════╗
║               @eypzx/baileys           ║
║        Modified Baileys Library        ║
╠════════════════════════════════════════╣
║  Creator : Eypz                        ║
║  GitHub  : https://github.com/EypzX    ║
╚════════════════════════════════════════╝
`));

import makeWASocket from './Socket/index.js';
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map