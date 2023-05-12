const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix;
let basePath;

if (isGithubActions) {
	// trim off `<owner>/`
	const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

	assetPrefix = `/${repo}/`;
	basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	...(basePath &&
		assetPrefix && { basePath: basePath, assetPrefix: assetPrefix }),
};

module.exports = nextConfig;
