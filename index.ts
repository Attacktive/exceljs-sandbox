import virtualMachines from "./assets/dummy-data.json" with { type: "json" };
import { generateWorkbook } from "./src/workbook-generator.js";

console.debug("virtualMachines:", virtualMachines);

const workbook = generateWorkbook();
workbook.xlsx.writeFile("virtual-machines.xlsx");
workbook.csv.writeFile("virtual-machines.csv");
