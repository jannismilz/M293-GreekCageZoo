const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath;
let assetPrefix;

if (isGithubActions) {
	// trim off `<owner>/`
	const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

	basePath = `/${repo}`;
	assetPrefix = `/${repo}/`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	...(basePath &&
		assetPrefix && { basePath: basePath, assetPrefix: assetPrefix }),
};

module.exports = nextConfig;
