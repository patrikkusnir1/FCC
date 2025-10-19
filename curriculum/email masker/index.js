const maskEmail = email => {
  const domainPosition = email.indexOf("@");
  const domain = email.slice(domainPosition + 1);

  const emailToMask = email.slice(1, domainPosition);


  const maskedPart = emailToMask.replace(emailToMask, "*");
  const maskedPartRepeated = maskedPart.repeat(emailToMask.length - 1);
  console.log(maskedPartRepeated);
  console.log(maskedPartRepeated.length)

  const fullEmail = email[0] + maskedPartRepeated + email.slice(domainPosition - 1);
  return fullEmail
}
const email = "user@domain.org";
console.log(maskEmail(email))
