import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// This function dynamically finds and loads all .json files from the locales directory.
const languageModules = import.meta.glob("./locales/**/*.json", {
  eager: true,
});

// This code processes the found files and builds the 'resources' object for i18next.
const resources = Object.keys(languageModules).reduce((acc, path) => {
  // The path looks like "./locales/en/common.json"
  // We extract the language ("en") and the namespace ("common") from the path.
  const pathParts = path.split("/");
  const lang = pathParts[2];
  const namespace = pathParts[3].replace(".json", "");

  if (!acc[lang]) {
    acc[lang] = {};
  }

  // The JSON content is the default export of the module.
  acc[lang][namespace] = languageModules[path].default;

  return acc;
}, {});

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Set fallback language to English
    debug: process.env.NODE_ENV === "development", // Enable debug mode only for development
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    // Define the namespaces. This makes it clear what content categories exist.
    ns: ["common", "poems", "projects", "blog", "works"],
    defaultNS: "common",
  });

export default i18n;
