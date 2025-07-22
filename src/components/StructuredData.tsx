export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fuentelo's",
    "url": "https://fuentelos.com",
    "logo": "https://fuentelos.com/labels/White.png",
    "description": "Premium non-alcoholic sparkling grape juice made from Spanish Tempranillo and Airén grapes",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Celebration Lane",
      "addressLocality": "Napa Valley",
      "addressRegion": "CA",
      "postalCode": "94558",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-707-555-1234",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.instagram.com/fuentelos",
      "https://www.facebook.com/fuentelos"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Beverages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Fuentelo's Rosé Sparkling Grape Juice",
            "description": "Premium non-alcoholic sparkling grape juice made from Spanish Tempranillo grapes",
            "brand": {
              "@type": "Brand",
              "name": "Fuentelo's"
            },
            "category": "Non-Alcoholic Beverages",
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "110",
              "carbohydrateContent": "27g",
              "sugarContent": "27g",
              "fatContent": "0g",
              "sodiumContent": "0mg"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Fuentelo's White Sparkling Grape Juice",
            "description": "Premium non-alcoholic sparkling grape juice made from Spanish Airén grapes",
            "brand": {
              "@type": "Brand",
              "name": "Fuentelo's"
            },
            "category": "Non-Alcoholic Beverages",
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "110",
              "carbohydrateContent": "28g",
              "sugarContent": "28g",
              "fatContent": "0g",
              "sodiumContent": "0mg"
            }
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 