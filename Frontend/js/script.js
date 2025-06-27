


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});
//---------------------- 

// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


//------------------------ adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
function restoreNavStyles() {
  // Example logic — update this according to what your nav styling should be
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
    // Reapply necessary styles if needed
  });
}


  // -----------------Function to change language
  function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
  
    elements.forEach((element) => {
      const key = element.getAttribute('data-translate');
      const translatedText = getTranslation(key, language);
      if (!translatedText) return;
  
      if ('placeholder' in element) {
        element.placeholder = translatedText;
      } else if (element.tagName === 'OPTION') {
        element.text = translatedText;
      } else if (element.querySelector('.text')) {
        element.querySelector('.text').innerHTML = translatedText;
      } else {
        element.innerHTML = translatedText;
      }
    });
  
    localStorage.setItem('selectedLanguage', language);
  
    // Desktop buttons
    if (language === 'de') {
      document.getElementById('btn-de').style.display = 'none';
      document.getElementById('btn-en').style.display = 'inline-block';
    } else {
      document.getElementById('btn-de').style.display = 'inline-block';
      document.getElementById('btn-en').style.display = 'none';
    }
  
    // Mobile flag toggle
    if (language === 'de') {
      document.getElementById('flag-de').style.display = 'none';
      document.getElementById('flag-en').style.display = 'inline-block';
    } else {
      document.getElementById('flag-de').style.display = 'inline-block';
      document.getElementById('flag-en').style.display = 'none';
    }
  }
  

  function toggleLanguage() {
    const current = localStorage.getItem('selectedLanguage') || 'de';
    const nextLang = current === 'de' ? 'en' : 'de';
    changeLanguage(nextLang);
  }

  

function getTranslation(key, language) {
  const translations = {
    en: {
      home: 'Home',
      services: 'Services',
      locations: 'Locations',
      booking: 'Booking',
      career: 'Career',
      clients: 'Clients',
      contact: 'Contact',
      title_home: "CityBus SaarPfalz",
      subtitle_home: "ALWAYS ON THE MOVE!",
      description_home:
        "We offer modern shuttles, travel, and rental buses for airport transfers, corporate events, concerts, trade fairs, and group trips. Our well-maintained fleet and experienced drivers ensure a safe, punctual, and pleasant journey. Quality, comfort, and fair pricing are our top priorities. Hop on – we'll get you to your destination relaxed!",
      buttoncontact_home: "Contact us",
      expertise_title: "Services",
    expertise_description: `
      Our buses are equipped with <strong>comfortable seats</strong>, <strong>toilets</strong>, <strong>TV</strong> and even <strong>VIP services</strong>.<br>
      We offer both <strong>standard and premium options</strong> and flexibly adapt our services <strong>to your individual needs</strong>.
    `,
    airport_title: "Airport Transfer",
    airport_desc: "Punctual, comfortable airport transfers with modern shuttle buses and experienced drivers.",
    corporate_title: "Corporate Events",
    corporate_desc: "Stress-free transport for your employees and guests to meetings and events, with modern buses and professional drivers.",
    group_title: "Group Travel",
    group_desc: "Tailored transport solutions for group travel such as school trips, excursions, and company outings.",
    schoolbus_title: "School Bus Service",
    schoolbus_desc: "Safe and reliable transport for students with modern and comfortable buses.",
    wedding_title: "Event Transport",
    wedding_desc: "Stylish transport to your wedding and celebration with luxury vehicles and professional drivers.",
    transport_title: "Long-Distance Transport",
    transport_desc: "Reliable transport of goods over long distances, both nationally and internationally.",
    button_request: "Request Now",
    travel_planned: "Do you have a trip planned?",
    book_now: "Book now",
    fullname_label: "Full Name",
    phone_number: "Phone Number",
    email: "Email",
    departure_location: "Departure Location",
    departure_date: "Departure Date",
    departure_time: "Departure Time",
    arrival_location: "Arrival Location",
    return_date: "Return Date",
    return_time: "Return Time",
    person_count: "Number of Persons",
    bus_type: "Bus Type",
    select_option: "Please select",
    minibus_option: "Minibus (8–16 persons)",
    standard_option: "Standard Bus (up to 50 persons)",
    premium_option: "Premium Bus (more comfort)",
    vip_option: "VIP Bus (luxury equipment)",
    submit_booking: "Submit Booking",
    title_location: "Locations",
    description_location: "Discover our locations in the Saarpfalz region.",
    career_title: "We're hiring – Apply now!",
    career_subtitle: "Apply online easily!",
    career_description: "Apply quickly and easily via our online form. To complete your application, please fill out ALL fields and upload a complete CV and an application photo. <br> We can only process complete applications.",
    career_name: "Name*",
    career_vorname: "First name*",
    career_address: "Street + House number*",
    career_postal: "Postal code + City*",
    career_phone: "Phone*",
    career_email: "Email*",
    select_license: "Select driving license class*",
    option_b: "B – Car",
    option_be: "BE – Car with trailer",
    option_c: "C – Truck",
    option_ce: "CE – Truck with trailer",
    option_d: "D – Bus",
    option_de: "DE – Bus with trailer",
    label_cv: "Upload resume (PDF)*",
    label_photo: "Upload application photo (JPG!)*",
    privacy_text: "I have read the ",
    privacy_accept: " and accept it.",
    button_submit: "Apply now!",
    clients_title: "Satisfied Client Feedback",
    clients_text: "Whether airports, airlines, or leading companies from other industries – we are proud to work with our valued partners Deutsche Bahn, SWK, 1. FC Kaiserslautern, and Elis. With our commitment to quality and innovation, we offer tailor-made solutions that meet the highest standards...",
    contact_title: 'Do you have any questions?',
    contact_subtitle: 'Feel free to contact us',
    contact_name: 'Name',
    contact_email: 'E-mail',
    contact_phone: 'Phone number',
    message: 'Message',
    contact_submit: 'Submit',
    qr_code: 'Scan to rate us on Google Maps',
    bookingSuccess: 'Booking sent successfully. We will call you for confirmation. Thank you!',
    bookingError: 'There was an error sending the booking.',
    bookingConnectionError: 'Connection error. Please try again later.',
    contactMessageSuccess: "Message sent successfully!",
    contactMessageFailure: "Failed to send message. Please try again.",
    contactMessageError: "An error occurred. Please try again later.",
    applicationMessageSuccess: "Application sent successfully!",
    applicationMessageFailure: "Error sending the application.",
    applicationMessageError:  "An error occurred. Please try again later.",
    },
    de: {
      home: 'Startseite',
      services: 'Leistungen',
      locations: 'Standorte',
      booking: 'Bus mieten',
      career: 'Karriere',
      clients: 'Kunden',
      contact: 'Kontakt',
      title_home: "CityBus SaarPfalz",
      subtitle_home: "IMMER IN BEWEGUNG !",
      description_home:
        "Wir bieten moderne Shuttle-, Reise- und Mietbusse für Flughafentransfers, Firmen-Events, Konzerte, Messen und Gruppenreisen. Unsere bestens gewartete Flotte und erfahrenen Fahrer garantieren eine sichere, pünktliche und angenehme Fahrt. Qualität, Komfort und faire Preise stehen bei uns an erster Stelle. Steigen Sie ein wir bringen Sie entspannt ans Ziel!",
      buttoncontact_home: "Kontaktieren Sie uns",
      expertise_title: "Leistungen",
      expertise_description: `
      Unsere Busse sind mit <strong>komfortablen Sitzen</strong>, <strong>WC</strong> und sogar <strong>VIP-Services</strong> ausgestattet.<br>
      Wir bieten sowohl <strong>Standard- als auch Premium-Optionen</strong> an und passen unsere Dienstleistungen flexibel <strong>an Ihre individuellen Bedürfnisse</strong> an.
    `,
    airport_title: "Flughafentransfer",
    airport_desc: "Pünktlicher, komfortabler Flughafentransfer mit modernen Shuttlebussen und erfahrenen Fahrern.",
    corporate_title: "Firmenveranstaltungen",
    corporate_desc: "Stressfreier Transport für Ihre Mitarbeiter und Gäste zu Meetings und Events, mit modernen Bussen und professionellen Fahrern.",
    group_title: "Gruppenreisen",
    group_desc: "Maßgeschneiderte Transportlösungen für Gruppenreisen wie Klassenfahrten, Ausflüge und Betriebsausflüge.",
    schoolbus_title: "Schulbus-Service",
    schoolbus_desc: "Sicherer und zuverlässiger Transport für Schüler mit modernen und komfortablen Bussen.",
    wedding_title: "Eventstransport",
    wedding_desc: "Stilvoller Transport zu Ihrer Hochzeit und Feier mit luxuriösen Fahrzeugen und professionellen Fahrern.",
    transport_title: "Ferntransport",
    transport_desc: "Zuverlässiger Transport von Gütern über große Entfernungen, sowohl national als auch international.",
    button_request: "Jetzt Anfragen",
    travel_planned: "Haben Sie eine Reise geplant?",
    book_now: "Buchen Sie jetzt",
    fullname_label: "Vollständiger Name",
    phone_number: "Telefonnummer",
    email: "E-Mail",
    departure_location: "Abfahrtsort",
    departure_date: "Datum Hinfahrt",
    departure_time: "Uhrzeit Hinfahrt",
    arrival_location: "Ankunftsort",
    return_date: "Datum Rückfahrt",
    return_time: "Uhrzeit Rückfahrt",
    person_count: "Personenanzahl",
    bus_type: "Bus",
    select_option: "Bitte wählen",
    minibus_option: "Minibus (8–16 Personen)",
    standard_option: "Standardbus (bis 50 Personen)",
    premium_option: "Premiumbus (mehr Komfort)",
    vip_option: "VIP-Bus (Luxusausstattung)",
    submit_booking: "Buchung absenden",
    title_location: "Standorte",
    description_location: "Entdecken Sie unsere Standorte in der Region Saarpfalz.",
    career_title: "Wir stellen ein – Jetzt bewerben!",
    career_subtitle: "Einfach online bewerben!",
    career_description: "Bewerben Sie sich schnell und unkompliziert per Online-Formular. Für eine vollständige Bewerbung füllen Sie bitte Alle Felder aus und laden Sie einen vollständigen Lebenslauf sowie ein Bewerbungsfoto hoch. <br> Wir können nur vollständige Bewerbungen bearbeiten.",
    career_name: "Name*",
    career_vorname: "Vorname*",
    career_address: "Straße + Hausnummer*",
    postal: "Postleitzahl + Ort*",
    career_phone: "Telefon*",
    career_email: "E-Mail*",
    select_license: "Führerscheinklasse wählen*",
    option_b: "B – PKW",
    option_be: "BE – PKW mit Anhänger",
    option_c: "C – LKW",
    option_ce: "CE – LKW mit Anhänger",
    option_d: "D – Bus",
    option_de: "DE – Bus mit Anhänger",
    label_cv: "Lebenslauf hochladen (PDF)*",
    label_photo: "Bewerbungsfoto hochladen (JPG!)*",
    privacy_text: "Ich habe die ",
    privacy_accept: " gelesen und akzeptiere diese.",
    button_submit: "Jetzt bewerben!",
    clients_title: "Zufriedene Kundenfeedbacks",
clients_text: "Ob Flughäfen, Fluggesellschaften oder führende Unternehmen aus anderen Branchen – wir sind stolz darauf, mit unseren geschätzten Partnern Deutsche Bahn, SWK, 1. FC Kaiserslautern und Elis zusammenzuarbeiten. Mit unserem Engagement für Qualität und Innovation bieten wir maßgeschneiderte Lösungen, die den höchsten Standards gerecht werden...",
contact_title: 'Haben Sie Fragen?',
contact_subtitle: 'Kontaktieren Sie uns gerne',
contact_name: 'Name',
contact_email: 'E-Mail',
contact_phone: 'Telefonnummer',
message: 'Nachricht',
contact_submit: 'Einreichen',
qr_code : 'Scannen und bewerten Sie uns!',
bookingSuccess: 'Buchung erfolgreich gesendet. Wir werden Sie zur Bestätigung anrufen. Vielen Dank!',
    bookingError: 'Fehler beim Senden der Buchung.',
    bookingConnectionError: 'Verbindungsfehler. Bitte versuchen Sie es später erneut.',
    contactMessageSuccess: "Nachricht erfolgreich gesendet!",
    contactMessageFailure: "Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.",
    contactMessageError: "Ein Fehler ist aufgetreten. Bitte versuche es später erneut.",
    applicationMessageSuccess:  "Bewerbung erfolgreich gesendet!",
    applicationMessageFailure: "Fehler beim Senden der Bewerbung.",
    applicationMessageError: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
    },
  };

  return translations[language][key] || key;
}
//---------------------Sidebar

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');

  function openSidebar() {
    sidebar.classList.add('open');
    if (window.innerWidth <= 991) {
      mainContent.style.paddingLeft = '60px';
    }
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    if (window.innerWidth <= 991) {
      mainContent.style.paddingLeft = '60px';
    } else {
      mainContent.style.paddingLeft = '';
    }
  }
  const menuItems = sidebar.querySelectorAll('a'); // adjust selector if necessary
  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      if (window.innerWidth < 768) {
        closeSidebar();
      }
    });
  });
  
  if (window.innerWidth < 768) {
    sidebar.addEventListener('mouseenter', openSidebar);
    sidebar.addEventListener('mouseleave', closeSidebar);
  }

  window.toggleSidebar = function () {
    const isOpen = sidebar.classList.contains('open');
    sidebar.classList.toggle('open');

    if (window.innerWidth <= 991) {
      mainContent.style.paddingLeft = isOpen ? '60px' : '60px';
    } else {
      mainContent.style.paddingLeft = '';
    }
  };

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function (e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', function (e) {
  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;
  const dx = touchEndX - touchStartX;
  const dy = touchEndY - touchStartY;

  // Only respond to mostly horizontal swipes
  if (Math.abs(dx) > Math.abs(dy)) {
    // Open if swipe starts at left edge and moves right
    if (touchStartX < 20 && dx > 30) {
      openSidebar();
    }

    // Close if swipe starts inside sidebar and swipes left
    const sidebarRect = sidebar.getBoundingClientRect();
    if (touchStartX > sidebarRect.left && touchStartX < sidebarRect.right && dx < -30) {
      closeSidebar();
    }
  }
});

});

// -------------------------- Navbar 

document.addEventListener('DOMContentLoaded', () => {
  // Get all sections and navbar links
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.navbar-nav .nav-link');

  // Function to handle active link highlighting based on scroll position
  function setActiveLink() {
      let currentSection = '';

      // Get current scroll position
      const scrollPosition = window.scrollY + 150; // Adjust 150 to fine-tune the trigger point

      // Loop through each section and find which one is currently in the viewport
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              currentSection = section.getAttribute('id');
          }
      });

      // Remove active class from all links
      links.forEach(link => link.classList.remove('active'));

      // Add active class to the link that corresponds to the current section
      const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
      if (activeLink) {
          activeLink.classList.add('active');
      }
  }

  // Set active link on page load
  setActiveLink();

  // Update active link on scroll
  window.addEventListener('scroll', setActiveLink);

  // Optionally, you can add smooth scrolling for anchor clicks
  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(link.getAttribute('href'));
          window.scrollTo({
              top: target.offsetTop - 50, // Adjust if needed
              behavior: 'smooth'
          });
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); // Select all sections
  const navLinks = document.querySelectorAll(".sidebar .nav-link");

  function activateNavLink() {
      let scrollPosition = window.scrollY;

      sections.forEach((section) => {
          const sectionTop = section.offsetTop - 50; // Adjust for offset
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              let activeSection = section.getAttribute("id");

              navLinks.forEach((link) => {
                  link.classList.remove("active"); // Remove active class from all links
                  if (link.getAttribute("href") === `#${activeSection}`) {
                      link.classList.add("active"); // Add active class to the current section
                  }
              });
          }
      });
  }

  window.addEventListener("scroll", activateNavLink);
  activateNavLink(); // Run on page load
});


/*-------------------- Modal------------------*/
const alertModal = document.getElementById("alertModal");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");
const okButton = document.getElementById("okButton");

function showModal(message) {
  modalMessage.innerText = message;
  alertModal.style.display = "flex";
}

function hideModal() {
  alertModal.style.display = "none";
}

// Attach only once, globally
closeModal.addEventListener("click", hideModal);
okButton.addEventListener("click", hideModal);

// ---------------------- Form submission logic Booking
document.getElementById("bookingForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const bookingData = {
    "sender-name": document.getElementById("sender-name").value,
    "phone-number": document.getElementById("phone-number").value,
    "email-book": document.getElementById("email-book").value,
    "departure-location": document.getElementById("departure-location").value,
    "departure-date": document.getElementById("departure-date").value,
    "departure-time": document.getElementById("departure-time").value,
    "arrival-location": document.getElementById("arrival-location").value,
    "return-date": document.getElementById("return-date").value,
    "return-time": document.getElementById("return-time").value,
    "person-count": document.getElementById("person-count").value,
    "bus-type": document.getElementById("bus-type").value
  };
  const lang = localStorage.getItem("selectedLanguage") || "de";

  try {
    const response = await fetch("http://localhost:3000/submit-booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (response.ok) {
      document.getElementById("bookingForm").reset();
      showModal(getTranslation("bookingSuccess", lang));
    } else {
      showModal(getTranslation("bookingError", lang));
    }
  } catch (error) {
    console.error("Error:", error);
    showModal(getTranslation("bookingConnectionError", lang));
  }
});


// ---------------------- Contact Form submission logic
document.getElementById("contactForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent page refresh

  // Get form values
  const contactData = {
    "name-contact": document.getElementById("name-contact").value,
    "email-contact": document.getElementById("email-contact").value,
    "phone-contact": document.getElementById("phone-contact").value,
    "message": document.getElementById("message").value,
  };

  // Get the selected language
  const lang = localStorage.getItem("selectedLanguage") || "de";

  try {
    const response = await fetch("http://localhost:3000/submit-contact", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    // Show success or failure message in the selected language
    if (response.ok) {
      modalMessage.innerText = getTranslation("contactMessageSuccess", lang);
    } else {
      modalMessage.innerText = getTranslation("contactMessageFailure", lang);
    }
  } catch (error) {
    modalMessage.innerText = getTranslation("contactMessageError", lang);
    console.error("Error:", error);
  }

  // Show the modal
  alertModal.style.display = "flex"; // This will show the modal

  // Close the modal when clicking "X"
  closeModal.addEventListener("click", () => {
    alertModal.style.display = "none"; // Hide the modal
  });

  // Close the modal when clicking "OK"
  okButton.addEventListener("click", () => {
    alertModal.style.display = "none"; // Hide the modal
  });
});

//--------------------------- Application Form -------------------------//

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("applicationForm");
  const alertModal = document.getElementById("alertModal");
  const modalMessage = document.getElementById("modalMessage");
  const closeModal = document.getElementById("closeModal");
  const okButton = document.getElementById("okButton");

  if (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(form); // Collect form data, including files
      const lang = localStorage.getItem("selectedLanguage") || "de";

      try {
        const response = await fetch("http://localhost:3000/submit-application", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          modalMessage.innerText = getTranslation("applicationMessageSuccess", lang);
          form.reset(); // Reset the form on success
        } else {
          const errorText = await response.text();
          console.error("Serverfehler:", errorText);
          modalMessage.innerText = getTranslation("applicationMessageFailure", lang);
        }
      } catch (error) {
        console.error("Netzwerkfehler:", error);
        modalMessage.innerText = getTranslation("applicationMessageError", lang);
      }

      // Show the modal
      alertModal.style.display = "flex";

      // Modal close handlers
      closeModal.addEventListener("click", () => {
        alertModal.style.display = "none";
      });

      okButton.addEventListener("click", () => {
        alertModal.style.display = "none";
      });
    });
  } else {
    console.error("Formular mit ID 'applicationForm' wurde nicht gefunden.");
  }
});


  
//--------------------------------------Carousel--------------------------------------//

document.addEventListener('DOMContentLoaded', function () {
  var myCarousel = document.querySelector('#photoCarousel');
  if (myCarousel) {
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000,  // 3 seconds
      ride: 'carousel'
    });
  }
});
//----------------------------


  document.addEventListener("DOMContentLoaded", function () {
    const departureDateInput = document.getElementById("departure-date");
    const returnDateInput = document.getElementById("return-date");

    // Set minimum for departure date to today
    const today = new Date().toISOString().split("T")[0];
    departureDateInput.setAttribute("min", today);

    // Update return date minimum based on departure date
    departureDateInput.addEventListener("change", function () {
      const departureDate = departureDateInput.value;
      returnDateInput.setAttribute("min", departureDate);
    });

    // Optional: Validate on form submission
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        const departureDate = departureDateInput.value;
        const returnDate = returnDateInput.value;
        if (returnDate < departureDate) {
          e.preventDefault();
          alert(
            "Die Rückfahrt darf nicht vor der Hinfahrt liegen.\n" +
            "The return date must be after the departure date."
          );
        }
      });
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "de";
    changeLanguage(savedLang);
  });
  
//-------------------------------