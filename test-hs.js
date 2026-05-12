

async function test() {
  const portalId = "145610228";
  const formId = "2v-pmxJetTAKLfJyQHOU20A";

  const response = await fetch(
    `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: [
          { name: "firstname", value: "Test" },
          { name: "lastname", value: "Test" },
          { name: "email", value: "test@test.com" },
          { name: "message", value: "test" },
          { name: "origine_du_lead", value: "Landing page (Inbound)" }
        ],
      }),
    }
  );

  const text = await response.text();
  console.log("Status:", response.status);
  console.log("Response:", text);
}

test();
