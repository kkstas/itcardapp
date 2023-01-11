export interface User {
	firstName: string;
	lastName: string;
	login: string;
	email: string;
	phone: string;
	password: string;
	jobTitle: string;
}
const users = [
	{
		firstName: 'Kamil',
		lastName: 'Stasiak',
		login: 'kstasiak',
		email: 'k.stasiak@itcard.pl',
		phone: '+48 516 944 100',
		password: 'zob',
		jobTitle: 'Młodszy Specjalista ds. Aplikacji ATM',
	},
	{
		firstName: 'Arkadiusz',
		lastName: 'Sokal',
		login: 'asokal',
		email: 'a.sokal@itcard.pl',
		phone: '+48 000 000 000',
		password: 'zob',
		jobTitle: 'Specjalista ds. Łączności Bankomatów',
	},
	{
		firstName: 'Michał',
		lastName: 'Podgruszecki',
		login: 'mpodgruszecki',
		email: 'm.podgruszecki@itcard.pl',
		phone: '+48 000 000 000',
		password: 'zob',
		jobTitle: 'Specjalista ds. Procesów Bankomatowych',
	},
	{
		firstName: 'Paweł',
		lastName: 'Budziński',
		login: 'pbudzinski',
		email: 'p.budzinski@itcard.pl',
		phone: '+48 000 000 000',
		password: 'zob',
		jobTitle: 'Kierownik Działu Zarządzania Procesami i Aplikacją ATM',
	},
	{
		firstName: 'Grzegorz',
		lastName: 'Joachimiak',
		login: 'gjoachimiak',
		email: 'g.joachimiak@itcard.pl',
		phone: '+48 000 000 000',
		password: 'zob',
		jobTitle: 'Ekspert ds. Procesów Administracyjnych',
	},
	{
		firstName: 'Roman',
		lastName: 'Słociak',
		login: 'rslociak',
		email: 'r.slociak@itcard.pl',
		phone: '+48 000 000 000',
		password: 'zob',
		jobTitle: 'Starszy Specjalista ds. Administracji Systemów Bankomatowych',
	},
	{
		firstName: 'Patryk',
		lastName: 'Gryglak',
		login: 'pgryglak',
		email: 'p.gryglak@itcard.pl',
		phone: '+48 000 000 000',
		password: 'zob',
		jobTitle: 'Specjalista ds. Zarządzania Aplikacją ATM',
	},
];

export default users;
