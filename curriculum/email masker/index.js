const maskEmail = email => {
  const domainPosition = email.indexOf("@");
  const domain = email.slice(domainPosition);
  const name = email.slice(0, domainPosition);
  console.log(name);

  // keep first and last character, mask the middle
  const maskedName = name[0] + "*".repeat(name.length - 2) + name[name.length - 1];
  return maskedName + domain;
}
const email = "user@domain.org";
console.log(maskEmail(email))
