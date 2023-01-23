export interface IatmElement {
	lat: number;
	lng: number;
	title: string;
	description: string;
	pinColor: string;
}
export const atmsDummyData: IatmElement[] = [
	{
		lat: 51.09999485226624,
		lng: 17.067454706266,
		title: 'title',
		description: 'desc',
		pinColor: 'red',
	},
	{
		lat: 51.09799144029021,
		lng: 17.071068452616803,
		title: 'title2',
		description: 'descasfw3',
		pinColor: 'yellow',
	},
	{
		lat: 51.097452,
		lng: 17.063619,
		title: 'dfadf',
		description: 'fefe',
		pinColor: 'purple',
	},
	{
		lat: 51.10261543016718,
		lng: 17.052772784658345,
		title: 'Biedronka',
		description: 'ul. Szybka',
		pinColor: 'lightblue',
	},
	{
		lat: 51.0592827232508,
		lng: 17.00862913558202,
		title: 'Bankomat + Wpłatomat',
		description: 'Zwycięska 14A-14B, Wrocław, Simply Market/Auchan',
		pinColor: 'lightblue',
	},
];
