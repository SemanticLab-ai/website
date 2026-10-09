// Renew this date before it passes so security researchers can trust the contact.
const securityTxt = `Contact: mailto:hello@semanticlab.ai
Expires: 2027-04-01T00:00:00Z
`;

export function loader() {
  return new Response(securityTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
