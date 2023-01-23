const GOOGLE_API_KEY = 'AIzaSyBTRekhJ6dxuLzr-p07L2Dc1TXgLgxzGAM';

export function getMapPreview(lat: number, lng: number): string {
	const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
	return imagePreviewUrl;
}

export async function getAddress(lat: number, lng: number) {
	const reverseGeocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
	const response = await fetch(reverseGeocodingUrl);
	if (!response.ok) {
		throw new Error('Failed to fetch address');
	}
	const data = await response.json();
	const address = data.results[0].formatted_address;
	// return address;
	return address;
}
