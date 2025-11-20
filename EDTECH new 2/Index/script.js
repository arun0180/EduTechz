const translations = {
    en: {
      tec: "Akshara",
      tech: "Light Of Education",
      kannada: "Kannada Grammar",
      english: "English Grammar",
      hindi: "Hindi Grammar",
      maths: "Mathematical Formulas",
      kavi: "Kannada Jnanpith Award Winners",
    },
    kn: {
      tec: "ಅಕ್ಷರ",
      tech: "ಜ್ಯೋತಿ<br>ಶಿಕ್ಷಣದ ಬೆಳಕು",
      kannada: "ಕನ್ನಡ ವ್ಯಾಕರಣ",
      english: "ಇಂಗ್ಲೀಷ್ ವ್ಯಾಕರಣ",
      hindi: "ಹಿಂದಿ ವ್ಯಾಕರಣ",
      maths: "ಗಣಿತ ಸೂತ್ರಗಳು",
      kavi: "ಕನ್ನಡ ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ವಿಜೇತರು",
    },
  };
  
  // Change language and persist the selection
  function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang); // Save selected language
    applyLanguage(lang); // Apply the language immediately
  }
  
  // Apply language to the page
  function applyLanguage(lang) {
    // Find all elements with `data-lang` attributes
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-lang"); // Get the key from `data-lang`
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key]; // Update the text with the translation
      }
    });
  }
  
  // Load the stored language on page load
  document.addEventListener("DOMContentLoaded", () => {
    const storedLanguage = localStorage.getItem("selectedLanguage") || "en";
    applyLanguage(storedLanguage);
  });
  