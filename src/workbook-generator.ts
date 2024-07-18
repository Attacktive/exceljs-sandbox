import ExcelJS from "exceljs";
import { generateWorksheetIn } from "./worksheet-generator.js";

export const generateWorkbook = () => {
	const workbook = new ExcelJS.Workbook();
	workbook.creator = "Attacktive";
	workbook.lastModifiedBy = "Attacktive";

	generateWorksheetIn(workbook);

	return workbook;
};
