module.exports = {
  dnsAttemptDelayMs: 1250,
  dnsGateway: 'hsd.zone',
  errorContentHash: 'sia://dAC04C7fD2q0a5NTag6VTJ7KHhI-rW6ZBwboir6Gpwb7Kw',
  maxAdditionalDnsAttempts: 2,
  port: 3000,
  siaGateway: 'https://web3portal.com',
  siaPrefix: 'sia://',
  siaApiKey: process.env.SIA_API_KEY,
  arweaveGateway: 'https://arweave.net',
  arweavePrefix: 'arweave://',
  ipfsGateway: 'https://kgvhvn.mypinata.cloud/ipfs',
  ipfsPrefix: 'dnslink=/ipfs/',
  ipfsPrefixLegacy: 'ipfs://',
  txtPrefixes: ['_dnslink', '_contenthash'],
  nameserver: '44.231.6.183',
  hdns: ['103.196.38.38', '103.196.38.39'],
};
