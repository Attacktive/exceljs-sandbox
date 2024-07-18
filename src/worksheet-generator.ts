import { Workbook } from "exceljs";
import virtualMachines from "../assets/dummy-data.json" with { type: "json" };

export const generateWorksheetIn = (workbook: Workbook) => {
	const worksheet = workbook.addWorksheet("Virtual Machines");

	worksheet.columns = [
		{
			header: "Name",
			key: "name"
		},
		{
			header: "Provisioned space",
			key: "provisionedSpace"
		},
		{
			header: "Guest OS",
			key: "guestOs"
		},
		{
			header: "Compatibility",
			key: "compatibility"
		},
		{
			header: "Memory size",
			key: "memorySize"
		}
	];

	worksheet.addRows(virtualMachines);
};
