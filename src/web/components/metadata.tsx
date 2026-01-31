import siteConfig from "../../../website.config.json";

export function Metadata() {
	return (
		<>
			<title>{siteConfig.name}</title>
			<meta name="description" content={siteConfig.description} />
			<meta name="keywords" content="AI co-pilot, real-time transcription, meeting assistant, privacy AI, screen awareness, smart notes" />

			{/* Open Graph */}
			<meta property="og:title" content={siteConfig.name} />
			<meta property="og:description" content={siteConfig.description} />
			<meta property="og:image" content={siteConfig.ogImage} />
			<meta property="og:url" content={siteConfig.url} />
			<meta property="og:type" content="website" />

			{/* Twitter */}
			<meta name="twitter:card" content={siteConfig.twitter.card} />
			<meta name="twitter:site" content={siteConfig.twitter.site} />
			<meta name="twitter:title" content={siteConfig.name} />
			<meta name="twitter:description" content={siteConfig.description} />
			<meta name="twitter:image" content={siteConfig.ogImage} />

			{/* Theme */}
			<meta name="theme-color" content={siteConfig.themeColor} />

			{/* Schema.org markup */}
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "SoftwareApplication",
					"name": "Panda",
					"operatingSystem": "macOS, Windows",
					"applicationCategory": "ProductivityApplication",
					"offers": {
						"@type": "Offer",
						"price": "0.00",
						"priceCurrency": "USD"
					},
					"description": siteConfig.description
				})}
			</script>
		</>
	);
}
