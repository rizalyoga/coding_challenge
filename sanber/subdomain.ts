const domains: string[] = [
  "https://id.bitdegree.org",
  "https://finance.detik.com",
  "https://telkom.co.id",
  "https://corona.jakarta.go.id",
];

const filterSubDomain = (domain: string[]): string[] | undefined => {
  const subDomainArray: string[] = [];

  domain.forEach((url: string) => {
    if (url.includes("https://")) {
      const domainWithoutSSL = url.slice(8);
      subDomainArray.push(domainWithoutSSL);
    }
  });

  if (subDomainArray.length > 0) return subDomainArray;
};

console.log(filterSubDomain(domains));
