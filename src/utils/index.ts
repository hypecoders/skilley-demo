export const capitalizeFirstLetter = (s: string) =>
	s.charAt(0).toUpperCase() + s.slice(1);

export const getFormValues = <Keys extends string>(target: unknown) =>
	Object.values(target as { id?: string; value: string }[]).reduce(
		(prev, e) => (e.id ? { ...prev, [e.id]: e.value } : prev),
		{} as Record<Keys, string>
	);
