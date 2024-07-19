import type { FormattedVirtualMachine, VirtualMachine } from "./types/virtual-machine.js";

const formatToGibibytes = (bytes: number) => {
	let number;
	if (bytes) {
		number = bytes / (1024 ** 3);
	} else {
		number = 0;
	}

	const rounded = (Math.round(number * 100) / 100);

	return `${rounded.toFixed(2)} GB`;
};

export const format = (virtualMachines: VirtualMachine[]): FormattedVirtualMachine[] => {
	return virtualMachines.map(virtualMachine => {
		const provisionedSpaceInGb = formatToGibibytes(virtualMachine.provisionedSpace);
		const memorySizeInGb = formatToGibibytes(virtualMachine.memorySize);

		return {
			...virtualMachine,
			provisionedSpaceInGb,
			memorySizeInGb
		};
	});
};
