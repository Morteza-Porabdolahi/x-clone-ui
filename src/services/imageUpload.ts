export const authenticateUser = async () => {
	try {
		const response = await fetch("/api/upload-auth");

		if (!response.ok) {
			const errorText = await response.text();

			throw new Error(
				`Request failed with status ${response.status}: ${errorText}`,
			);
		}

		const { token, signature, expire, publicKey } = await response.json();

		return { token, signature, expire, publicKey };
	} catch (error) {
		console.error("Authentication error:", error);
		throw new Error("Authentication request failed");
	}
};
