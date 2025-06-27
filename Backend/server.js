require("dotenv").config(); // Load .env variables

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mailgun = require("mailgun-js");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '../frontend')));
// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve frontend from "public"

// Mailgun setup
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
  url: "https://api.eu.mailgun.net", // For EU sandbox
});

// Route to handle booking form
app.post("/submit-booking", (req, res) => {
  console.log("Received data:", req.body);

  const {
    "sender-name": fullName,
    "phone-number": phoneNumber,
    "email-book": emailBook,
    "departure-location": departureLocation,
    "departure-date": departureDate,
    "departure-time": departureTime,
    "arrival-location": arrivalLocation,
    "return-date": returnDate,
    "return-time": returnTime,
    "person-count": personCount,
    "bus-type": busType,
  } = req.body;

  const emailData = {
    from: `Booking Form <postmaster@${process.env.MAILGUN_DOMAIN}>`,
    to: "citybussaarpfalz@gmail.com",
    subject: "Neue Buchung erhalten",
    text: `Neue Buchung:\n
Vollständiger Name: ${fullName}\n
Telefonnummer: ${phoneNumber}\n
Email: ${emailBook}\n
Abfahrtsort: ${departureLocation}\n
Datum Hinfahrt: ${departureDate}\n
Uhrzeit Hinfahrt: ${departureTime}\n
Ankunftsort: ${arrivalLocation}\n
Datum Rückfahrt: ${returnDate}\n
Uhrzeit Rückfahrt: ${returnTime}\n
Personenanzahl: ${personCount}\n
Bus-Typ: ${busType}`, // <-- ADD THIS LINE
  };

  mg.messages().send(emailData, (error, body) => {
    if (error) {
      console.error("E-Mail Fehler:", error);
      return res.status(500).send("Fehler beim Senden der Buchung.");
    }
    console.log("E-Mail erfolgreich gesendet:", body);
    res.status(200).json({ success: true });
  });
});


// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route to handle application form
app.post("/submit-application", upload.fields([
  { name: "cv", maxCount: 1 },
  { name: "photo", maxCount: 1 },
]), (req, res) => {
  const {
    name, vorname, address, postal, phone, email, fuhrerschein, privacy
  } = req.body;

  const cv = req.files.cv?.[0];
  const photo = req.files.photo?.[0];

  console.log("Received application data:", {
    name, vorname, address, postal, phone, email, fuhrerschein, privacy
  });

  console.log("Uploaded files:", {
    cv: cv?.path,
    photo: photo?.path
  });

  const emailData = {
    from: `Application Form <postmaster@${process.env.MAILGUN_DOMAIN}>`,
    to: "citybussaarpfalz@gmail.com",
    subject: "Neue Bewerbung erhalten",
    text: `
Neue Bewerbung:\n
Name: ${name}\n
Vorname: ${vorname}\n
Adresse: ${address}\n
PLZ + Ort: ${postal}\n
Telefon: ${phone}\n
E-Mail: ${email}\n
Führerschein: ${fuhrerschein}\n
Datenschutz akzeptiert: ${privacy}
    `,
    attachment: [
      cv ? fs.createReadStream(cv.path) : null,
      photo ? fs.createReadStream(photo.path) : null
    ].filter(Boolean)
  };

  mg.messages().send(emailData, (error, body) => {
    if (error) {
      console.error("E-Mail Fehler:", error);
      return res.status(500).send("Fehler beim Senden der Bewerbung.");
    }
    console.log("Bewerbung erfolgreich per E-Mail gesendet:", body);
    res.status(200).send("Bewerbung erfolgreich eingereicht und E-Mail gesendet!");
  });
});


// Route to handle contact form
app.post("/submit-contact", (req, res) => {
  console.log("Received data:", req.body);

  const {
    "name-contact": nameContact,
    "phone-contact":phoneContact,
    "email-contact":emailContact,
    "message":message,
   
  } = req.body;

  const contactData = {
    from: `Contact Form <postmaster@${process.env.MAILGUN_DOMAIN}>`,
    to: "citybussaarpfalz@gmail.com",
    subject: "Neue Nachricht",
    text: `Neue Buchung:\n
Vollständiger Name: ${nameContact}\n
Telefonnummer: ${phoneContact}\n
Email: ${emailContact}\n
Nachricht: ${message}`,
  };

  mg.messages().send(contactData, (error, body) => {
    if (error) {
      console.error("E-Mail Fehler:", error);
      return res.status(500).send("Fehler beim Senden der Nachricht.");
    }
    console.log("Nachricht erfolgreich gesendet:", body);
    res.status(200).json({ success: true });
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server läuft auf http://localhost:${port}`);
});
