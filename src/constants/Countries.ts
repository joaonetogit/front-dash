import type { ICountries } from "@/types/constants/Countries";

const countries: ICountries[] = [
	{ flag: "🇧🇷", name: "Brazil", value: "brazil" },
	{ flag: "🇺🇸", name: "United States", value: "usa" },
	{ flag: "🇨🇦", name: "Canada", value: "canada" },
	{ flag: "🇦🇷", name: "Argentina", value: "argentina" },
	{ flag: "🇨🇱", name: "Chile", value: "chile" },
	{ flag: "🇨🇴", name: "Colombia", value: "colombia" },
	{ flag: "🇲🇽", name: "Mexico", value: "mexico" },
	{ flag: "🇵🇪", name: "Peru", value: "peru" },
] as const;

export default countries;
