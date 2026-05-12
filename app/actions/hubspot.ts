"use server";

export async function submitToHubspot(data: {
  firstName: string;
  lastName: string;
  email: string;
  pratique: string;
}) {
  const portalId = "148455341";
  const formId = "bfea66c4-97ad-4c02-8b7c-9c901ce536d0";

  try {
    const response = await fetch(
      `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            { name: "firstname", value: data.firstName },
            { name: "lastname", value: data.lastName },
            { name: "email", value: data.email },
            { name: "pratique", value: data.pratique },
            { name: "source_dorigine", value: "Landing Page (Inbound)" }
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Erreur détaillée de l'API HubSpot (Côté Serveur):", errorData);
      return { success: false, message: errorData.message || "Veuillez vérifier les champs du formulaire." };
    }

    return { success: true };
  } catch (error) {
    console.error("Erreur serveur inattendue lors de la soumission HubSpot:", error);
    return { success: false, message: "Erreur interne du serveur." };
  }
}
