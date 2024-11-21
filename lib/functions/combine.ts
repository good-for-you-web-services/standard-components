export function Combine(values: (string | number | undefined | null)[]) {
	return values.filter((value) => value).join(' ');
}
