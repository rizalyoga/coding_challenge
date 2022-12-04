const domains = [
  "https://id.bitdegree.org",
  "https://finance.detik.com",
  "https://telkom.co.id",
  "https://corona.jakarta.go.id",
];

const filterSubDomain = (domain) => {
  const subDomainArray = [];

  domain.forEach((url) => {
    if (url.includes("https://")) {
      const domainWithoutSSL = url.slice(8);
      subDomainArray.push(domainWithoutSSL);
    }
  });

  if (subDomainArray.length > 0) return subDomainArray;
};

console.log(filterSubDomain(domains));
