export default function getFirstLetters(str: string) {
	return str
		.split(' ')
		.map(word => word[0])
		.join('');
}
