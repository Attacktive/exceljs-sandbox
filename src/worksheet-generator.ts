import { Workbook } from "exceljs";
import virtualMachines from "../assets/dummy-data.json" with { type: "json" };
import { format } from "./formatter.js";
import { isVirtualMachineArray } from "./types/virtual-machine.js";

export const generateWorksheetIn = (workbook: Workbook) => {
	const worksheet = workbook.addWorksheet("Virtual Machines");

	worksheet.columns = [
		{
			header: "Name",
			key: "name"
		},
		{
			header: "Provisioned space",
			key: "provisionedSpaceInGb"
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
			key: "memorySizeInGb"
		}
	];

	if (!isVirtualMachineArray(virtualMachines)) {
		throw new Error(`The source data is not an array of VirtualMachine: ${JSON.stringify(virtualMachines)} (typeof it: ${typeof virtualMachines})`);
	}

	const formattedVirtualMachines = format(virtualMachines);

	worksheet.addRows(formattedVirtualMachines);
};
