const translations = {
    "en": {
        "name": "Mahmoud Mostafa Mahmoud El-Sayed",
        "job-title": "Tele Sales",
        "description": "University student with moderate experience in technology and sales.",
        "education": "Banha University - Specific Education, Technology Department - Graduation Year: 2029",
        "work-experience": [
            "Abwaab Platform - Tele Sales: 2019 - 2022",
            "Abwaab Platform - Supervisor: 2022 - 2023",
            "Ashtar Platform - Customer Service: Beginning of 2023",
            "Azhari Student Guide Platform - Manager: End of 2023"
        ],
        "skills": [
            "Computer (Excel, Word)",
            "Video Editing",
            "Marketing & Design"
        ]
    },
    "ar": {
        "name": "محمود مصطفى محمود السيد",
        "job-title": "تيلي سيلز",
        "description": "طالب جامعي ذو خبرة متوسطة في التكنولوجيا والمبيعات.",
        "education": "جامعة بنها - تربية نوعية، قسم التكنولوجيا - سنة التخرج: 2029",
        "work-experience": [
            "منصة أبواب - تيلي سيلز: 2019 - 2022",
            "منصة أبواب - مشرف: 2022 - 2023",
            "منصة أشطر - خدمة العملاء: بداية 2023",
            "منصة دليل الطلاب الأزهريين - مدير: نهاية 2023"
        ],
        "skills": [
            "حاسوب (Excel, Word)",
            "مونتاج و تصميم",
            "تسويق"
        ]
    }
};

let currentLanguage = 'en';

function toggleTranslation() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateContent();
}

function updateContent() {
    document.getElementById("name").innerText = translations[currentLanguage].name;
    document.getElementById("job-title").innerText = translations[currentLanguage]["job-title"];
    document.getElementById("description").innerText = translations[currentLanguage].description;
    document.getElementById("education").innerText = translations[currentLanguage].education;

    const workExperienceList = document.getElementById("work-experience");
    workExperienceList.innerHTML = "";
    translations[currentLanguage]["work-experience"].forEach
