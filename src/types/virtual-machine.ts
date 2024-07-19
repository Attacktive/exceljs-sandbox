export interface VirtualMachine {
	name: string;
	provisionedSpace: number;
	guestOs: string;
	compatibility: string;
	memorySize: number;
}

export interface FormattedVirtualMachine extends VirtualMachine {
	provisionedSpaceInGb: string;
	memorySizeInGb: string;
}

export const isVirtualMachineArray = (input: unknown): input is VirtualMachine[] => {
	if (!Array.isArray(input)) {
		console.warn("The input is not an array.");
		return false;
	}

	return input.every(element => {
		if (!("name" in element)) {
			console.warn(`An element of the input array is missing the required property "name": ${JSON.stringify(element)}`);
			return false;
		}

		if (!("provisionedSpace" in element)) {
			console.warn(`An element of the input array is missing the required property "provisionedSpace": ${JSON.stringify(element)}`);
			return false;
		}

		if (!("guestOs" in element)) {
			console.warn(`An element of the input array is missing the required property "guestOs": ${JSON.stringify(element)}`);
			return false;
		}

		if (!("compatibility" in element)) {
			console.warn(`An element of the input array is missing the required property "compatibility": ${JSON.stringify(element)}`);
			return false;
		}

		if (!("memorySize" in element)) {
			console.warn(`An element of the input array is missing the required property "memorySize": ${JSON.stringify(element)}`);
			return false;
		}

		return true;
	});
};
