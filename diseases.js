// Disease database with symptoms, descriptions, severity, and credible sources
const diseasesDatabase = [
    {
        name: "Common Cold",
        symptoms: ["cough", "sneezing", "runny nose", "congestion", "sore throat", "mild fever", "fatigue"],
        description: "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold. Most people recover from a common cold in 7 to 10 days.",
        severity: "low",
        actionPlan: [
            "Get plenty of rest and stay hydrated",
            "Use over-the-counter cold medications to relieve symptoms",
            "Gargle with warm salt water for sore throat",
            "Use a humidifier to ease congestion",
            "Wash hands frequently to prevent spreading",
            "See a doctor if symptoms persist beyond 10 days or worsen"
        ],
        sources: [
            { name: "Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605" },
            { name: "CDC", url: "https://www.cdc.gov/antibiotic-use/colds.html" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/12342-common-cold" },
            { name: "NIH - National Institute of Allergy and Infectious Diseases", url: "https://www.niaid.nih.gov/diseases-conditions/common-cold" }
        ]
    },
    {
        name: "Influenza (Flu)",
        symptoms: ["fever", "chills", "body aches", "fatigue", "cough", "sore throat", "headache", "runny nose"],
        description: "Influenza is a contagious respiratory illness caused by influenza viruses. It can cause mild to severe illness, and at times can lead to death. The best way to prevent flu is by getting vaccinated each year. Symptoms typically appear 1-4 days after exposure.",
        severity: "moderate",
        actionPlan: [
            "Rest and stay home to avoid spreading the virus",
            "Stay hydrated with water, broth, or electrolyte drinks",
            "Take over-the-counter medications for fever and pain (acetaminophen, ibuprofen)",
            "Use antiviral medications if prescribed by a doctor (especially within 48 hours of symptoms)",
            "Seek immediate medical attention if experiencing difficulty breathing, chest pain, or severe dehydration",
            "Get annual flu vaccination to prevent future infections"
        ],
        sources: [
            { name: "Mayo Clinic - Influenza", url: "https://www.mayoclinic.org/diseases-conditions/flu/symptoms-causes/syc-20351719" },
            { name: "CDC - Influenza", url: "https://www.cdc.gov/flu/index.htm" },
            { name: "WHO - Influenza", url: "https://www.who.int/news-room/fact-sheets/detail/influenza-(seasonal)" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/4335-influenza" }
        ]
    },
    {
        name: "COVID-19",
        symptoms: ["fever", "cough", "shortness of breath", "fatigue", "loss of taste", "loss of smell", "body aches", "headache", "sore throat"],
        description: "COVID-19 is a respiratory illness caused by the SARS-CoV-2 virus. It can range from mild symptoms to severe illness. Some people may be asymptomatic. The virus spreads mainly through respiratory droplets when an infected person coughs, sneezes, or talks.",
        severity: "high",
        actionPlan: [
            "Isolate immediately and avoid contact with others",
            "Monitor symptoms closely, especially breathing difficulties",
            "Get tested for COVID-19 as soon as possible",
            "Rest and stay hydrated",
            "Use over-the-counter medications for fever and pain",
            "Seek emergency medical care if experiencing severe symptoms: difficulty breathing, persistent chest pain, confusion, or bluish lips",
            "Follow local health department guidelines for isolation and quarantine",
            "Consider vaccination and booster shots to prevent future infection"
        ],
        sources: [
            { name: "Mayo Clinic - COVID-19", url: "https://www.mayoclinic.org/diseases-conditions/coronavirus/symptoms-causes/syc-20479963" },
            { name: "CDC - COVID-19", url: "https://www.cdc.gov/coronavirus/2019-ncov/index.html" },
            { name: "WHO - COVID-19", url: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus" }
        ]
    },
    {
        name: "Migraine",
        symptoms: ["headache", "nausea", "vomiting", "sensitivity to light", "sensitivity to sound", "aura", "throbbing pain"],
        description: "A migraine is a headache that can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound. Migraine attacks can last for hours to days, and the pain can be so severe that it interferes with daily activities.",
        severity: "moderate",
        actionPlan: [
            "Rest in a quiet, dark room",
            "Apply cold or warm compresses to your head or neck",
            "Take over-the-counter pain relievers (ibuprofen, acetaminophen) at the first sign",
            "Stay hydrated and avoid skipping meals",
            "Consider prescription medications if migraines are frequent or severe",
            "Identify and avoid triggers (stress, certain foods, hormonal changes, sleep changes)",
            "Keep a migraine diary to track patterns",
            "Consult a neurologist if migraines significantly impact your life"
        ],
        sources: [
            { name: "Mayo Clinic - Migraine", url: "https://www.mayoclinic.org/diseases-conditions/migraine-headache/symptoms-causes/syc-20360201" },
            { name: "American Migraine Foundation", url: "https://americanmigrainefoundation.org/" },
            { name: "NIH - National Institute of Neurological Disorders and Stroke", url: "https://www.ninds.nih.gov/health-information/disorders/migraine" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/5005-migraine-headaches" }
        ]
    },
    {
        name: "Strep Throat",
        symptoms: ["sore throat", "fever", "swollen lymph nodes", "difficulty swallowing", "red spots on roof of mouth", "white patches on tonsils"],
        description: "Strep throat is a bacterial infection caused by group A Streptococcus bacteria. It's most common in children but can affect people of all ages. Strep throat requires antibiotic treatment to prevent complications such as rheumatic fever or kidney inflammation.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for a strep test (rapid test or throat culture)",
            "Take prescribed antibiotics as directed (usually penicillin or amoxicillin)",
            "Complete the full course of antibiotics even if symptoms improve",
            "Rest and stay hydrated",
            "Gargle with warm salt water to soothe throat",
            "Use over-the-counter pain relievers for fever and pain",
            "Avoid close contact with others until 24 hours after starting antibiotics",
            "Replace toothbrush after starting antibiotics to prevent reinfection"
        ],
        sources: [
            { name: "Mayo Clinic - Strep Throat", url: "https://www.mayoclinic.org/diseases-conditions/strep-throat/symptoms-causes/syc-20350338" },
            { name: "CDC - Strep Throat", url: "https://www.cdc.gov/groupastrep/diseases-public/strep-throat.html" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/4602-strep-throat" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/strep-throat" }
        ]
    },
    {
        name: "Pneumonia",
        symptoms: ["cough", "fever", "chills", "shortness of breath", "chest pain", "fatigue", "sweating", "nausea"],
        description: "Pneumonia is an infection that inflames air sacs in one or both lungs, which may fill with fluid. It can be caused by bacteria, viruses, or fungi. Pneumonia can range in seriousness from mild to life-threatening. It is most serious for infants, young children, people older than age 65, and people with health problems or weakened immune systems.",
        severity: "high",
        actionPlan: [
            "Seek immediate medical attention, especially if experiencing difficulty breathing",
            "Get a chest X-ray and other diagnostic tests as recommended by your doctor",
            "Take prescribed antibiotics (for bacterial pneumonia) or antivirals (for viral pneumonia)",
            "Rest and stay hydrated",
            "Use a humidifier to help with breathing",
            "Take over-the-counter medications for fever and pain",
            "Monitor oxygen levels if advised by healthcare provider",
            "Get vaccinated against pneumococcal pneumonia and flu to prevent future infections",
            "Return to doctor if symptoms worsen or don't improve within 48-72 hours"
        ],
        sources: [
            { name: "Mayo Clinic - Pneumonia", url: "https://www.mayoclinic.org/diseases-conditions/pneumonia/symptoms-causes/syc-20354204" },
            { name: "CDC - Pneumonia", url: "https://www.cdc.gov/pneumonia/index.html" },
            { name: "American Lung Association", url: "https://www.lung.org/lung-health-diseases/lung-disease-lookup/pneumonia" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/4471-pneumonia" }
        ]
    },
    {
        name: "Bronchitis",
        symptoms: ["cough", "mucus production", "fatigue", "shortness of breath", "chest discomfort", "mild fever", "chills"],
        description: "Bronchitis is an inflammation of the lining of your bronchial tubes, which carry air to and from your lungs. People who have bronchitis often cough up thickened mucus. Bronchitis may be either acute or chronic. Acute bronchitis is very common and often develops from a cold or other respiratory infection.",
        severity: "moderate",
        actionPlan: [
            "Rest and stay hydrated to help thin mucus",
            "Use a humidifier or steam from a hot shower to ease breathing",
            "Take over-the-counter cough suppressants or expectorants as needed",
            "Avoid irritants like smoke, dust, and fumes",
            "Take over-the-counter pain relievers for fever and body aches",
            "See a doctor if cough persists more than 3 weeks, produces blood, or is accompanied by high fever",
            "Consider prescription medications if symptoms are severe or if bacterial infection is suspected"
        ],
        sources: [
            { name: "Mayo Clinic - Bronchitis", url: "https://www.mayoclinic.org/diseases-conditions/bronchitis/symptoms-causes/syc-20355566" },
            { name: "American Lung Association - Bronchitis", url: "https://www.lung.org/lung-health-diseases/lung-disease-lookup/bronchitis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/3993-bronchitis" },
            { name: "NIH - National Heart, Lung, and Blood Institute", url: "https://www.nhlbi.nih.gov/health/bronchitis" }
        ]
    },
    {
        name: "Sinusitis",
        symptoms: ["facial pain", "nasal congestion", "runny nose", "headache", "postnasal drip", "cough", "fever", "fatigue"],
        description: "Sinusitis is an inflammation or swelling of the tissue lining the sinuses. Healthy sinuses are filled with air. But when they become blocked and filled with fluid, germs can grow and cause an infection. Sinusitis can be acute (lasting less than 4 weeks) or chronic (lasting more than 12 weeks).",
        severity: "low",
        actionPlan: [
            "Use saline nasal spray or irrigation to flush out sinuses",
            "Apply warm compresses to your face to relieve pain",
            "Use a humidifier to keep air moist",
            "Take over-the-counter decongestants and pain relievers",
            "Get plenty of rest and stay hydrated",
            "See a doctor if symptoms last more than 10 days, worsen, or include severe headache or fever above 102°F",
            "Consider antibiotics only if bacterial infection is confirmed by a doctor"
        ],
        sources: [
            { name: "Mayo Clinic - Sinusitis", url: "https://www.mayoclinic.org/diseases-conditions/acute-sinusitis/symptoms-causes/syc-20351671" },
            { name: "American Academy of Allergy, Asthma & Immunology", url: "https://www.aaaai.org/conditions-treatments/related-conditions/sinusitis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/17701-sinusitis" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/sinusitis" }
        ]
    },
    {
        name: "Gastroenteritis (Stomach Flu)",
        symptoms: ["nausea", "vomiting", "diarrhea", "abdominal cramps", "fever", "dehydration", "fatigue"],
        description: "Gastroenteritis, often called stomach flu, is an inflammation of the stomach and intestines. It's usually caused by a viral or bacterial infection. Symptoms typically include diarrhea, vomiting, and abdominal pain. Most cases resolve within a few days, but dehydration is a concern, especially in children and older adults.",
        severity: "moderate",
        actionPlan: [
            "Stay hydrated with water, clear broths, or oral rehydration solutions",
            "Avoid solid foods until vomiting stops, then gradually introduce bland foods (BRAT diet: bananas, rice, applesauce, toast)",
            "Avoid dairy products, caffeine, alcohol, and fatty foods",
            "Get plenty of rest",
            "Wash hands frequently to prevent spreading",
            "See a doctor if symptoms last more than 48 hours, if there's blood in vomit or stool, or if signs of severe dehydration appear (dry mouth, no urination, dizziness)",
            "Seek immediate care for severe dehydration or persistent high fever"
        ],
        sources: [
            { name: "Mayo Clinic - Gastroenteritis", url: "https://www.mayoclinic.org/diseases-conditions/viral-gastroenteritis/symptoms-causes/syc-20378847" },
            { name: "CDC - Viral Gastroenteritis", url: "https://www.cdc.gov/norovirus/index.html" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/12418-gastroenteritis" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/viral-gastroenteritis" }
        ]
    },
    {
        name: "Urinary Tract Infection (UTI)",
        symptoms: ["frequent urination", "burning sensation", "cloudy urine", "pelvic pain", "fever", "strong-smelling urine"],
        description: "A urinary tract infection (UTI) is an infection in any part of your urinary system — kidneys, ureters, bladder, and urethra. Most infections involve the lower urinary tract — the bladder and the urethra. Women are at greater risk of developing a UTI than are men. UTIs are typically treated with antibiotics.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis and antibiotic treatment",
            "Drink plenty of water to help flush out bacteria",
            "Take prescribed antibiotics as directed and complete the full course",
            "Avoid irritants like caffeine, alcohol, and spicy foods",
            "Use a heating pad to relieve abdominal discomfort",
            "Urinate frequently and empty your bladder completely",
            "Practice good hygiene and wipe from front to back",
            "Seek immediate care if experiencing fever, chills, back pain, or nausea (signs of kidney infection)"
        ],
        sources: [
            { name: "Mayo Clinic - UTI", url: "https://www.mayoclinic.org/diseases-conditions/urinary-tract-infection/symptoms-causes/syc-20353447" },
            { name: "National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-infection-uti-in-adults" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/9135-urinary-tract-infections" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/urinary-tract-infections" }
        ]
    },
    {
        name: "Appendicitis",
        symptoms: ["abdominal pain", "nausea", "vomiting", "fever", "loss of appetite", "constipation", "diarrhea", "abdominal swelling"],
        description: "Appendicitis is an inflammation of the appendix, a finger-shaped pouch that projects from your colon on the lower right side of your abdomen. Appendicitis causes pain in your lower right abdomen. However, in most people, pain begins around the navel and then moves. Appendicitis requires immediate medical attention.",
        severity: "critical",
        actionPlan: [
            "Seek immediate emergency medical care - appendicitis is a medical emergency",
            "Do not eat or drink anything until evaluated by a doctor",
            "Do not take pain medications that might mask symptoms before seeing a doctor",
            "Surgery (appendectomy) is typically required to remove the inflamed appendix",
            "If left untreated, the appendix can rupture, which is life-threatening",
            "After surgery, follow post-operative care instructions carefully"
        ],
        sources: [
            { name: "Mayo Clinic - Appendicitis", url: "https://www.mayoclinic.org/diseases-conditions/appendicitis/symptoms-causes/syc-20369543" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/appendicitis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/8095-appendicitis" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/appendicitis" }
        ]
    },
    {
        name: "Asthma",
        symptoms: ["shortness of breath", "wheezing", "chest tightness", "coughing", "difficulty breathing"],
        description: "Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, a whistling sound (wheezing) when you breathe out, and shortness of breath. For some people, asthma is a minor nuisance. For others, it can be a major problem that interferes with daily activities and may lead to a life-threatening asthma attack.",
        severity: "high",
        actionPlan: [
            "Use quick-relief (rescue) inhaler as prescribed during an attack",
            "Sit upright and try to stay calm",
            "Follow your asthma action plan if you have one",
            "Seek emergency care if symptoms don't improve with medication or if experiencing severe difficulty breathing",
            "Identify and avoid triggers (allergens, exercise, cold air, stress)",
            "Take long-term control medications as prescribed",
            "Monitor your breathing and peak flow regularly",
            "Get regular check-ups with your healthcare provider",
            "Consider allergy testing and treatment if allergies trigger your asthma"
        ],
        sources: [
            { name: "Mayo Clinic - Asthma", url: "https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653" },
            { name: "American Lung Association - Asthma", url: "https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma" },
            { name: "CDC - Asthma", url: "https://www.cdc.gov/asthma/default.htm" },
            { name: "NIH - National Heart, Lung, and Blood Institute", url: "https://www.nhlbi.nih.gov/health/asthma" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/6424-asthma" }
        ]
    },
    {
        name: "Allergic Rhinitis (Hay Fever)",
        symptoms: ["sneezing", "runny nose", "itchy eyes", "nasal congestion", "watery eyes", "postnasal drip"],
        description: "Allergic rhinitis, also called hay fever, is an allergic response to specific allergens. Pollen is the most common allergen in seasonal allergic rhinitis. These are allergy symptoms that occur with the change of seasons. Symptoms can include sneezing, runny nose, and itchy eyes.",
        severity: "low",
        actionPlan: [
            "Avoid allergens when possible (stay indoors on high pollen days, use air conditioning)",
            "Take over-the-counter antihistamines (loratadine, cetirizine, fexofenadine)",
            "Use nasal corticosteroid sprays for persistent symptoms",
            "Use saline nasal rinses to flush out allergens",
            "Keep windows closed during high pollen seasons",
            "Shower after being outdoors to remove pollen",
            "Consider allergy testing to identify specific triggers",
            "Discuss immunotherapy (allergy shots) with an allergist for long-term relief"
        ],
        sources: [
            { name: "Mayo Clinic - Hay Fever", url: "https://www.mayoclinic.org/diseases-conditions/hay-fever/symptoms-causes/syc-20373039" },
            { name: "American Academy of Allergy, Asthma & Immunology", url: "https://www.aaaai.org/conditions-treatments/allergies/allergic-rhinitis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/8622-allergic-rhinitis-hay-fever" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/allergic-rhinitis" }
        ]
    },
    {
        name: "Heart Attack (Myocardial Infarction)",
        symptoms: ["chest pain", "heartache", "shortness of breath", "shallow breathing", "fainting", "nausea", "sweating", "dizziness", "fatigue", "rapid heartbeat"],
        description: "A heart attack occurs when the flow of blood to the heart is severely reduced or blocked. The blockage is usually due to a buildup of fat, cholesterol and other substances in the heart's arteries. This is a medical emergency that requires immediate treatment.",
        severity: "critical",
        actionPlan: [
            "Call emergency services (911) immediately - this is a medical emergency",
            "Chew and swallow an aspirin if not allergic (unless advised otherwise)",
            "Stay calm and sit or lie down",
            "Do not drive yourself to the hospital",
            "If prescribed nitroglycerin, take it as directed",
            "Wait for emergency medical personnel - they can begin treatment immediately",
            "Do not delay seeking help - time is critical for heart attack treatment"
        ],
        sources: [
            { name: "Mayo Clinic - Heart Attack", url: "https://www.mayoclinic.org/diseases-conditions/heart-attack/symptoms-causes/syc-20373106" },
            { name: "American Heart Association", url: "https://www.heart.org/en/health-topics/heart-attack" },
            { name: "CDC - Heart Disease", url: "https://www.cdc.gov/heartdisease/heart_attack.htm" },
            { name: "NIH - National Heart, Lung, and Blood Institute", url: "https://www.nhlbi.nih.gov/health/heart-attack" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/16818-heart-attack-myocardial-infarction" }
        ]
    },
    {
        name: "Panic Attack",
        symptoms: ["rapid heartbeat", "heartache", "shallow breathing", "shortness of breath", "fainting", "dizziness", "sweating", "tremors", "chest pain", "nausea"],
        description: "A panic attack is a sudden episode of intense fear that triggers severe physical reactions when there is no real danger or apparent cause. Panic attacks can be very frightening and may make you feel like you're losing control, having a heart attack, or even dying.",
        severity: "moderate",
        actionPlan: [
            "Try to stay calm and remember that panic attacks are temporary",
            "Practice deep breathing exercises (breathe in slowly through nose, out through mouth)",
            "Focus on your surroundings and use grounding techniques (5-4-3-2-1 method)",
            "Move to a quiet place if possible",
            "Remind yourself that the symptoms will pass",
            "Consider therapy or counseling if panic attacks are frequent",
            "Avoid caffeine, alcohol, and other stimulants that can trigger attacks",
            "Seek medical attention if this is your first panic attack or if symptoms are severe"
        ],
        sources: [
            { name: "Mayo Clinic - Panic Attacks", url: "https://www.mayoclinic.org/diseases-conditions/panic-attacks/symptoms-causes/syc-20376021" },
            { name: "National Institute of Mental Health", url: "https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/4451-panic-disorder" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/panic-disorder" }
        ]
    },
    {
        name: "Anemia",
        symptoms: ["fatigue", "fainting", "dizziness", "shortness of breath", "pale skin", "rapid heartbeat", "weakness", "chest pain", "headache"],
        description: "Anemia is a condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues. Having anemia can make you feel tired and weak. There are many forms of anemia, each with its own cause. Anemia can be temporary or long term, and it can range from mild to severe.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for blood tests to diagnose anemia",
            "Eat iron-rich foods (red meat, beans, dark leafy greens, iron-fortified cereals)",
            "Take iron supplements if prescribed by your doctor",
            "Include vitamin C with iron-rich meals to improve absorption",
            "Avoid tea and coffee with meals as they can reduce iron absorption",
            "Get adequate rest and avoid overexertion",
            "Follow up with your doctor to monitor iron levels",
            "Seek immediate care if experiencing severe dizziness, fainting, or chest pain"
        ],
        sources: [
            { name: "Mayo Clinic - Anemia", url: "https://www.mayoclinic.org/diseases-conditions/anemia/symptoms-causes/syc-20351360" },
            { name: "NIH - National Heart, Lung, and Blood Institute", url: "https://www.nhlbi.nih.gov/health/anemia" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/3929-anemia" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/anemia" }
        ]
    },
    {
        name: "Dehydration",
        symptoms: ["fainting", "dizziness", "fatigue", "rapid heartbeat", "dry mouth", "thirst", "dark urine", "confusion", "weakness"],
        description: "Dehydration occurs when you use or lose more fluid than you take in, and your body doesn't have enough water and other fluids to carry out its normal functions. If you don't replace lost fluids, you will get dehydrated. Anyone may become dehydrated, but the condition is especially dangerous for young children and older adults.",
        severity: "moderate",
        actionPlan: [
            "Drink water or electrolyte solutions immediately",
            "Sip fluids slowly if severely dehydrated to avoid vomiting",
            "Avoid alcohol and caffeinated beverages which can worsen dehydration",
            "Rest in a cool place",
            "Eat foods with high water content (fruits, vegetables)",
            "Seek immediate medical attention if experiencing severe symptoms: fainting, confusion, no urination for 8+ hours, rapid heartbeat",
            "For children and elderly, seek medical care promptly as they can deteriorate quickly",
            "Prevent future dehydration by drinking fluids regularly throughout the day"
        ],
        sources: [
            { name: "Mayo Clinic - Dehydration", url: "https://www.mayoclinic.org/diseases-conditions/dehydration/symptoms-causes/syc-20354086" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/9013-dehydration" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/dehydration-and-heatstroke" },
            { name: "NIH - National Library of Medicine", url: "https://medlineplus.gov/dehydration.html" }
        ]
    },
    {
        name: "Arrhythmia (Irregular Heartbeat)",
        symptoms: ["rapid heartbeat", "heartache", "palpitations", "fainting", "dizziness", "shortness of breath", "chest pain", "weakness", "fatigue"],
        description: "A heart arrhythmia is an irregular heartbeat. Heart rhythm problems occur when the electrical signals that coordinate heartbeats don't work properly. The faulty signaling causes the heart to beat too fast, too slow, or irregularly. Some heart arrhythmias are harmless, while others can be life-threatening.",
        severity: "high",
        actionPlan: [
            "Seek immediate medical attention if experiencing chest pain, fainting, or severe dizziness",
            "Avoid stimulants like caffeine, nicotine, and alcohol",
            "Practice stress-reduction techniques",
            "Get adequate sleep and rest",
            "Follow your doctor's treatment plan if diagnosed",
            "Take medications as prescribed (antiarrhythmic drugs)",
            "Consider lifestyle changes: maintain healthy weight, exercise regularly, eat heart-healthy diet",
            "Monitor your heart rate and report any changes to your doctor",
            "In emergency situations, call 911 immediately"
        ],
        sources: [
            { name: "Mayo Clinic - Heart Arrhythmia", url: "https://www.mayoclinic.org/diseases-conditions/heart-arrhythmia/symptoms-causes/syc-20350668" },
            { name: "American Heart Association - Arrhythmia", url: "https://www.heart.org/en/health-topics/arrhythmia" },
            { name: "NIH - National Heart, Lung, and Blood Institute", url: "https://www.nhlbi.nih.gov/health/arrhythmias" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/16749-heart-arrhythmia" }
        ]
    },
    {
        name: "Hypertension (High Blood Pressure)",
        symptoms: ["headache", "dizziness", "chest pain", "heartache", "shortness of breath", "rapid heartbeat", "blurred vision", "fatigue"],
        description: "High blood pressure is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease. Blood pressure is determined both by the amount of blood your heart pumps and the amount of resistance to blood flow in your arteries.",
        severity: "high",
        actionPlan: [
            "See a healthcare provider for blood pressure monitoring and diagnosis",
            "Take prescribed blood pressure medications as directed",
            "Reduce sodium intake in your diet",
            "Eat a heart-healthy diet (DASH diet recommended)",
            "Exercise regularly (at least 150 minutes per week)",
            "Maintain a healthy weight",
            "Limit alcohol consumption",
            "Quit smoking if you smoke",
            "Manage stress through relaxation techniques",
            "Monitor blood pressure at home if advised by your doctor"
        ],
        sources: [
            { name: "Mayo Clinic - High Blood Pressure", url: "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/symptoms-causes/syc-20373410" },
            { name: "American Heart Association - High Blood Pressure", url: "https://www.heart.org/en/health-topics/high-blood-pressure" },
            { name: "NIH - National Heart, Lung, and Blood Institute", url: "https://www.nhlbi.nih.gov/health/high-blood-pressure" },
            { name: "CDC - High Blood Pressure", url: "https://www.cdc.gov/bloodpressure/index.htm" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/4314-hypertension-high-blood-pressure" }
        ]
    },
    {
        name: "Diabetes (Type 2)",
        symptoms: ["frequent urination", "increased thirst", "fatigue", "fainting", "blurred vision", "slow healing", "numbness", "tingling", "weight loss"],
        description: "Type 2 diabetes is an impairment in the way the body regulates and uses sugar (glucose) as a fuel. This long-term condition results in too much sugar circulating in the bloodstream. Eventually, high blood sugar levels can lead to disorders of the circulatory, nervous and immune systems.",
        severity: "high",
        actionPlan: [
            "See a healthcare provider for blood glucose testing and diagnosis",
            "Monitor blood sugar levels regularly as directed",
            "Take prescribed medications (insulin or oral medications) as directed",
            "Follow a diabetes meal plan (carbohydrate counting, glycemic index)",
            "Exercise regularly to help control blood sugar",
            "Maintain a healthy weight",
            "Check feet daily for cuts, blisters, or sores",
            "Get regular eye exams and dental checkups",
            "Seek immediate care if experiencing diabetic ketoacidosis symptoms: excessive thirst, frequent urination, nausea, confusion"
        ],
        sources: [
            { name: "Mayo Clinic - Type 2 Diabetes", url: "https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/symptoms-causes/syc-20351193" },
            { name: "American Diabetes Association", url: "https://www.diabetes.org/diabetes/type-2" },
            { name: "CDC - Diabetes", url: "https://www.cdc.gov/diabetes/basics/type2.html" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/diabetes" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/21501-type-2-diabetes" }
        ]
    },
    {
        name: "Hypoglycemia (Low Blood Sugar)",
        symptoms: ["fainting", "dizziness", "confusion", "rapid heartbeat", "sweating", "shaking", "weakness", "fatigue", "blurred vision"],
        description: "Hypoglycemia is a condition in which your blood sugar (glucose) level is lower than the standard range. Glucose is your body's main energy source. Hypoglycemia is often related to diabetes treatment. But other drugs and a variety of conditions can cause low blood sugar in people who don't have diabetes.",
        severity: "moderate",
        actionPlan: [
            "If conscious, consume 15-20 grams of fast-acting carbohydrates (glucose tablets, fruit juice, regular soda, candy)",
            "Wait 15 minutes and check blood sugar again",
            "If still low, repeat with another 15-20 grams of carbohydrates",
            "Once blood sugar is normal, eat a meal or snack to prevent it from dropping again",
            "If unconscious or unable to swallow, seek immediate emergency medical help",
            "For people with diabetes, always carry glucose tablets or fast-acting sugar",
            "Eat regular meals and snacks to prevent hypoglycemia",
            "Monitor blood sugar levels regularly if you have diabetes"
        ],
        sources: [
            { name: "Mayo Clinic - Hypoglycemia", url: "https://www.mayoclinic.org/diseases-conditions/hypoglycemia/symptoms-causes/syc-20373685" },
            { name: "American Diabetes Association - Hypoglycemia", url: "https://www.diabetes.org/healthy-living/medication-treatments/blood-glucose-testing-and-control/hypoglycemia" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/low-blood-glucose-hypoglycemia" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/11647-hypoglycemia-low-blood-sugar" }
        ]
    },
    {
        name: "Heat Exhaustion",
        symptoms: ["fainting", "dizziness", "sweating", "rapid heartbeat", "nausea", "fatigue", "weakness", "headache", "muscle cramps"],
        description: "Heat exhaustion is a condition whose symptoms may include heavy sweating and a rapid pulse, a result of your body overheating. It's one of three heat-related syndromes, with heat cramps being the mildest and heatstroke being the most severe. Causes of heat exhaustion include exposure to high temperatures, particularly when combined with high humidity, and strenuous physical activity.",
        severity: "moderate",
        actionPlan: [
            "Move to a cool, shaded area or air-conditioned space immediately",
            "Lie down and elevate legs and feet slightly",
            "Remove tight or unnecessary clothing",
            "Cool your body by taking a cool shower, bath, or applying cool, wet cloths",
            "Drink cool water or sports drinks (avoid alcohol and caffeine)",
            "If symptoms worsen or don't improve within an hour, seek medical attention",
            "If body temperature reaches 104°F (40°C) or higher, seek emergency care immediately",
            "Prevent future episodes by staying hydrated, avoiding excessive heat, and taking breaks in cool areas"
        ],
        sources: [
            { name: "Mayo Clinic - Heat Exhaustion", url: "https://www.mayoclinic.org/diseases-conditions/heat-exhaustion/symptoms-causes/syc-20373250" },
            { name: "CDC - Heat Stress", url: "https://www.cdc.gov/niosh/topics/heatstress/default.html" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/16480-heat-exhaustion" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/heat-related-illnesses-heat-exhaustion-heatstroke" }
        ]
    },
    {
        name: "Vertigo",
        symptoms: ["dizziness", "fainting", "loss of balance", "nausea", "vomiting", "nystagmus", "sweating", "headache"],
        description: "Vertigo is a sensation of feeling off balance. If you have these dizzy spells, you might feel like you are spinning or that the world around you is spinning. Vertigo is often caused by an inner ear problem. Some of the most common causes include BPPV (benign paroxysmal positional vertigo), Meniere's disease, and vestibular neuritis.",
        severity: "moderate",
        actionPlan: [
            "Sit or lie down immediately when vertigo occurs",
            "Avoid sudden movements or position changes",
            "Stay still in a quiet, dark room if symptoms are severe",
            "Avoid driving or operating machinery during episodes",
            "See a healthcare provider for diagnosis and treatment",
            "Consider vestibular rehabilitation therapy if recommended",
            "Take prescribed medications (antihistamines, antiemetics) as directed",
            "Perform Epley maneuver if diagnosed with BPPV (under medical guidance)",
            "Stay hydrated and get adequate rest"
        ],
        sources: [
            { name: "Mayo Clinic - Vertigo", url: "https://www.mayoclinic.org/diseases-conditions/vertigo/symptoms-causes/syc-20370055" },
            { name: "NIH - National Institute on Deafness and Other Communication Disorders", url: "https://www.nidcd.nih.gov/health/balance-disorders" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/21769-vertigo" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/vertigo" }
        ]
    },
    {
        name: "Mononucleosis (Mono)",
        symptoms: ["fatigue", "fever", "sore throat", "swollen lymph nodes", "headache", "body aches", "rash", "enlarged spleen"],
        description: "Infectious mononucleosis, also called 'mono,' is a contagious illness. The Epstein-Barr virus (EBV) is the most common cause of infectious mononucleosis, but other viruses can also cause this disease. It is common among teenagers and young adults, especially college students.",
        severity: "moderate",
        actionPlan: [
            "Get plenty of rest - mono can cause severe fatigue",
            "Stay hydrated with water, broth, and electrolyte drinks",
            "Take over-the-counter pain relievers for fever and body aches (avoid aspirin in children)",
            "Gargle with warm salt water for sore throat",
            "Avoid contact sports and heavy lifting (risk of spleen rupture)",
            "Don't share drinks, utensils, or personal items to prevent spreading",
            "See a doctor for diagnosis and to rule out other conditions",
            "Most cases resolve within 2-4 weeks, but fatigue may last longer"
        ],
        sources: [
            { name: "Mayo Clinic - Mononucleosis", url: "https://www.mayoclinic.org/diseases-conditions/mononucleosis/symptoms-causes/syc-20350328" },
            { name: "CDC - About Epstein-Barr Virus", url: "https://www.cdc.gov/epstein-barr/index.html" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/13974-mononucleosis" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/mononucleosis" }
        ]
    },
    {
        name: "Tonsillitis",
        symptoms: ["sore throat", "swollen lymph nodes", "fever", "difficulty swallowing", "white patches on tonsils", "headache", "fatigue", "bad breath"],
        description: "Tonsillitis is inflammation of the tonsils, two oval-shaped pads of tissue at the back of the throat. Tonsillitis is most often caused by common viruses, but bacterial infections also can be the cause. The most common bacterium causing tonsillitis is Streptococcus pyogenes (group A streptococcus), the same bacterium that causes strep throat.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis (rapid strep test or throat culture)",
            "Take prescribed antibiotics if bacterial infection is confirmed",
            "Complete the full course of antibiotics even if symptoms improve",
            "Get plenty of rest",
            "Stay hydrated with warm liquids (tea with honey, broth)",
            "Gargle with warm salt water several times a day",
            "Use over-the-counter pain relievers for fever and pain",
            "Use a humidifier to add moisture to the air",
            "Avoid irritants like smoke",
            "See a doctor if symptoms worsen or don't improve within 48 hours"
        ],
        sources: [
            { name: "Mayo Clinic - Tonsillitis", url: "https://www.mayoclinic.org/diseases-conditions/tonsillitis/symptoms-causes/syc-20378479" },
            { name: "Cleveland Clinic - Tonsillitis", url: "https://my.clevelandclinic.org/health/diseases/21146-tonsillitis" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/tonsillitis" },
            { name: "NIH - National Library of Medicine", url: "https://medlineplus.gov/tonsillitis.html" }
        ]
    },
    {
        name: "Ear Infection (Otitis Media)",
        symptoms: ["ear pain", "fever", "headache", "hearing loss", "drainage from ear", "difficulty sleeping", "loss of balance", "nausea"],
        description: "An ear infection (acute otitis media) is most often a bacterial or viral infection that affects the middle ear, the air-filled space behind the eardrum that contains the tiny vibrating bones of the ear. Children are more likely than adults to get ear infections. Ear infections often are painful because of inflammation and buildup of fluids in the middle ear.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis and treatment",
            "Take prescribed antibiotics if bacterial infection is confirmed",
            "Use over-the-counter pain relievers (acetaminophen, ibuprofen) for pain and fever",
            "Apply a warm compress to the affected ear",
            "Get plenty of rest",
            "Stay hydrated",
            "Avoid getting water in the ear",
            "For children, ensure they complete the full course of antibiotics",
            "Follow up with doctor if symptoms don't improve within 48-72 hours",
            "Seek immediate care if experiencing severe pain, high fever, or drainage from ear"
        ],
        sources: [
            { name: "Mayo Clinic - Ear Infection", url: "https://www.mayoclinic.org/diseases-conditions/ear-infections/symptoms-causes/syc-20351616" },
            { name: "CDC - Ear Infections", url: "https://www.cdc.gov/antibiotic-use/ear-infection.html" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/8383-ear-infection-otitis-media" },
            { name: "NIH - National Institute on Deafness and Other Communication Disorders", url: "https://www.nidcd.nih.gov/health/ear-infections-children" }
        ]
    },
    {
        name: "Conjunctivitis (Pink Eye)",
        symptoms: ["redness", "itching", "watery eyes", "eye pain", "discharge", "swelling", "blurred vision", "sensitivity to light"],
        description: "Pink eye (conjunctivitis) is an inflammation or infection of the transparent membrane (conjunctiva) that lines your eyelid and covers the white part of your eyeball. When small blood vessels in the conjunctiva become inflamed, they're more visible. This is what makes the whites of your eyes look reddish or pink.",
        severity: "low",
        actionPlan: [
            "See a healthcare provider for diagnosis (viral, bacterial, or allergic)",
            "Wash hands frequently to prevent spreading",
            "Avoid touching or rubbing your eyes",
            "Use clean towels and washcloths",
            "Don't share eye makeup, towels, or pillows",
            "Apply warm or cool compresses to relieve discomfort",
            "Use prescribed eye drops or ointments as directed",
            "Remove contact lenses and wear glasses until infection clears",
            "For allergic conjunctivitis, avoid allergens and use antihistamine eye drops"
        ],
        sources: [
            { name: "Mayo Clinic - Pink Eye", url: "https://www.mayoclinic.org/diseases-conditions/pink-eye/symptoms-causes/syc-20376355" },
            { name: "CDC - Conjunctivitis", url: "https://www.cdc.gov/conjunctivitis/index.html" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/8614-pink-eye" },
            { name: "American Academy of Ophthalmology", url: "https://www.aao.org/eye-health/diseases/what-is-pink-eye" }
        ]
    },
    {
        name: "Food Poisoning",
        symptoms: ["nausea", "vomiting", "diarrhea", "abdominal pain", "fever", "fatigue", "dehydration", "weakness"],
        description: "Food poisoning, also called foodborne illness, is illness caused by eating contaminated food. Infectious organisms — including bacteria, viruses and parasites — or their toxins are the most common causes of food poisoning. Symptoms usually start within hours or several days of eating the contaminated food.",
        severity: "moderate",
        actionPlan: [
            "Stay hydrated with water, clear broths, or oral rehydration solutions",
            "Avoid solid foods until vomiting and diarrhea subside",
            "Gradually reintroduce bland foods (BRAT diet: bananas, rice, applesauce, toast)",
            "Avoid dairy products, caffeine, alcohol, and fatty foods",
            "Get plenty of rest",
            "Wash hands frequently to prevent spreading",
            "See a doctor if symptoms last more than 48 hours, include blood in vomit/stool, or show signs of severe dehydration",
            "Seek immediate care for severe dehydration, high fever (above 101.3°F), or severe abdominal pain"
        ],
        sources: [
            { name: "Mayo Clinic - Food Poisoning", url: "https://www.mayoclinic.org/diseases-conditions/food-poisoning/symptoms-causes/syc-20356230" },
            { name: "CDC - Food Safety", url: "https://www.cdc.gov/foodsafety/index.html" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/21167-food-poisoning" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/food-poisoning" }
        ]
    },
    {
        name: "Kidney Stones",
        symptoms: ["abdominal pain", "back pain", "painful urination", "frequent urination", "nausea", "vomiting", "fever", "blood in urine"],
        description: "Kidney stones (also called renal calculi, nephrolithiasis or urolithiasis) are hard deposits made of minerals and salts that form inside your kidneys. Diet, excess body weight, some medical conditions, and certain supplements and medications are among the many causes of kidney stones.",
        severity: "high",
        actionPlan: [
            "Seek medical attention for diagnosis and pain management",
            "Drink plenty of water to help pass small stones",
            "Take prescribed pain medications as directed",
            "Use a heating pad on the affected area for pain relief",
            "Strain urine to catch stones for analysis",
            "Follow dietary recommendations from your doctor (may include reducing sodium, oxalate, or animal protein)",
            "Take prescribed medications to help pass stones or prevent new ones",
            "Seek emergency care if experiencing severe pain, inability to urinate, or signs of infection (fever, chills)"
        ],
        sources: [
            { name: "Mayo Clinic - Kidney Stones", url: "https://www.mayoclinic.org/diseases-conditions/kidney-stones/symptoms-causes/syc-20355755" },
            { name: "National Kidney Foundation", url: "https://www.kidney.org/atoz/content/kidneystones" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-stones" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/15804-kidney-stones" }
        ]
    },
    {
        name: "Gout",
        symptoms: ["joint pain", "swelling", "redness", "stiffness", "tenderness", "fever", "fatigue"],
        description: "Gout is a common and complex form of arthritis that can affect anyone. It's characterized by sudden, severe attacks of pain, swelling, redness and tenderness in one or more joints, most often in the big toe. An attack of gout can occur suddenly, often waking you up in the middle of the night with the sensation that your big toe is on fire.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis and treatment",
            "Take prescribed medications (NSAIDs, colchicine, corticosteroids) as directed",
            "Rest the affected joint",
            "Apply ice packs to reduce swelling and pain",
            "Elevate the affected joint",
            "Stay hydrated",
            "Avoid foods high in purines (red meat, organ meats, seafood, alcohol)",
            "Maintain a healthy weight",
            "Take medications to prevent future attacks if prescribed"
        ],
        sources: [
            { name: "Mayo Clinic - Gout", url: "https://www.mayoclinic.org/diseases-conditions/gout/symptoms-causes/syc-20372897" },
            { name: "Arthritis Foundation - Gout", url: "https://www.arthritis.org/diseases/gout" },
            { name: "NIH - National Institute of Arthritis and Musculoskeletal and Skin Diseases", url: "https://www.niams.nih.gov/health-topics/gout" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/4755-gout" }
        ]
    },
    {
        name: "Shingles (Herpes Zoster)",
        symptoms: ["rash", "pain", "burning sensation", "tingling", "itching", "fever", "headache", "fatigue", "sensitivity to light"],
        description: "Shingles is a viral infection that causes a painful rash. Although shingles can occur anywhere on your body, it most often appears as a single stripe of blisters that wraps around either the left or the right side of your torso. Shingles is caused by the varicella-zoster virus — the same virus that causes chickenpox.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider immediately - early treatment is important",
            "Start antiviral medications within 72 hours of rash appearance if prescribed",
            "Take prescribed pain medications",
            "Apply cool, wet compresses to the rash",
            "Keep the rash clean and dry",
            "Avoid scratching to prevent infection and scarring",
            "Wear loose-fitting clothing",
            "Get plenty of rest",
            "Consider getting the shingles vaccine if you're 50 or older",
            "Avoid contact with people who haven't had chickenpox or the vaccine"
        ],
        sources: [
            { name: "Mayo Clinic - Shingles", url: "https://www.mayoclinic.org/diseases-conditions/shingles/symptoms-causes/syc-20353054" },
            { name: "CDC - Shingles", url: "https://www.cdc.gov/shingles/index.html" },
            { name: "NIH - National Institute of Neurological Disorders and Stroke", url: "https://www.ninds.nih.gov/health-information/disorders/shingles" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/11036-shingles" }
        ]
    },
    {
        name: "Chickenpox",
        symptoms: ["rash", "fever", "fatigue", "headache", "loss of appetite", "itching", "blisters"],
        description: "Chickenpox is a highly contagious disease caused by the varicella-zoster virus. It causes an itchy, blister-like rash that appears first on the chest, back, and face, and then spreads over the entire body. Most people recover within 1-2 weeks.",
        severity: "moderate",
        actionPlan: [
            "Stay home and avoid contact with others until all blisters have scabbed over",
            "Take over-the-counter medications for fever and itching (avoid aspirin in children)",
            "Use calamine lotion or oatmeal baths to relieve itching",
            "Keep fingernails trimmed to prevent scratching and infection",
            "Stay hydrated and get plenty of rest",
            "Consider vaccination to prevent chickenpox",
            "Seek medical attention if symptoms are severe or if complications develop"
        ],
        sources: [
            { name: "Mayo Clinic - Chickenpox", url: "https://www.mayoclinic.org/diseases-conditions/chickenpox/symptoms-causes/syc-20351282" },
            { name: "CDC - Chickenpox", url: "https://www.cdc.gov/chickenpox/index.html" },
            { name: "WHO - Varicella", url: "https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/vaccines-quality/varicella" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/4017-chickenpox" }
        ]
    },
    {
        name: "Measles",
        symptoms: ["fever", "cough", "runny nose", "red eyes", "rash", "white spots in mouth", "sore throat"],
        description: "Measles is a highly contagious viral infection that causes a distinctive rash and fever. It can lead to serious complications, especially in young children. Measles is preventable through vaccination.",
        severity: "high",
        actionPlan: [
            "Seek medical attention immediately",
            "Isolate to prevent spreading the virus",
            "Get plenty of rest and stay hydrated",
            "Take over-the-counter medications for fever (avoid aspirin in children)",
            "Use a humidifier to ease cough and congestion",
            "Ensure vaccination status is up to date",
            "Monitor for complications: pneumonia, encephalitis, or severe dehydration"
        ],
        sources: [
            { name: "Mayo Clinic - Measles", url: "https://www.mayoclinic.org/diseases-conditions/measles/symptoms-causes/syc-20374857" },
            { name: "CDC - Measles", url: "https://www.cdc.gov/measles/index.html" },
            { name: "WHO - Measles", url: "https://www.who.int/news-room/fact-sheets/detail/measles" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/8584-measles" }
        ]
    },
    {
        name: "Mumps",
        symptoms: ["swollen salivary glands", "fever", "headache", "muscle aches", "fatigue", "loss of appetite", "pain while chewing"],
        description: "Mumps is a viral infection that primarily affects the salivary glands, causing them to swell. It's preventable through vaccination. Complications can include inflammation of the brain, testicles, or ovaries.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis",
            "Isolate to prevent spreading the virus",
            "Apply ice or heat packs to swollen glands",
            "Take over-the-counter pain relievers for discomfort",
            "Stay hydrated with plenty of fluids",
            "Eat soft foods that don't require much chewing",
            "Get plenty of rest",
            "Ensure vaccination status is up to date"
        ],
        sources: [
            { name: "Mayo Clinic - Mumps", url: "https://www.mayoclinic.org/diseases-conditions/mumps/symptoms-causes/syc-20375361" },
            { name: "CDC - Mumps", url: "https://www.cdc.gov/mumps/index.html" },
            { name: "WHO - Mumps", url: "https://www.who.int/immunization/diseases/mumps/en/" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/15007-mumps" }
        ]
    },
    {
        name: "Rubella (German Measles)",
        symptoms: ["mild fever", "rash", "headache", "runny nose", "red eyes", "swollen lymph nodes", "joint pain"],
        description: "Rubella, also called German measles, is a contagious viral infection best known for its distinctive red rash. It's usually mild in children but can cause serious complications in pregnant women, potentially leading to birth defects.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis",
            "Isolate to prevent spreading, especially from pregnant women",
            "Get plenty of rest",
            "Take over-the-counter medications for fever and pain",
            "Stay hydrated",
            "Ensure vaccination status is up to date (MMR vaccine)",
            "Pregnant women should seek immediate medical attention if exposed"
        ],
        sources: [
            { name: "Mayo Clinic - Rubella", url: "https://www.mayoclinic.org/diseases-conditions/rubella/symptoms-causes/syc-20377310" },
            { name: "CDC - Rubella", url: "https://www.cdc.gov/rubella/index.html" },
            { name: "WHO - Rubella", url: "https://www.who.int/news-room/fact-sheets/detail/rubella" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/17737-rubella" }
        ]
    },
    {
        name: "Whooping Cough (Pertussis)",
        symptoms: ["severe coughing", "whooping sound", "runny nose", "fever", "vomiting after coughing", "fatigue"],
        description: "Whooping cough (pertussis) is a highly contagious respiratory tract infection. In many people, it's marked by a severe hacking cough followed by a high-pitched intake of breath that sounds like 'whoop.' It's preventable through vaccination.",
        severity: "high",
        actionPlan: [
            "Seek medical attention immediately, especially for infants",
            "Take prescribed antibiotics as directed",
            "Get plenty of rest",
            "Stay hydrated",
            "Use a humidifier to ease breathing",
            "Avoid irritants like smoke",
            "Ensure vaccination status is up to date (DTaP/Tdap)",
            "Isolate to prevent spreading the infection"
        ],
        sources: [
            { name: "Mayo Clinic - Whooping Cough", url: "https://www.mayoclinic.org/diseases-conditions/whooping-cough/symptoms-causes/syc-20378973" },
            { name: "CDC - Pertussis", url: "https://www.cdc.gov/pertussis/index.html" },
            { name: "WHO - Pertussis", url: "https://www.who.int/health-topics/pertussis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/15661-whooping-cough-pertussis" }
        ]
    },
    {
        name: "Tuberculosis (TB)",
        symptoms: ["persistent cough", "chest pain", "coughing up blood", "fatigue", "fever", "night sweats", "weight loss", "loss of appetite"],
        description: "Tuberculosis (TB) is a potentially serious infectious disease that mainly affects the lungs. The bacteria that cause tuberculosis are spread from person to person through tiny droplets released into the air via coughs and sneezes.",
        severity: "high",
        actionPlan: [
            "Seek immediate medical attention for diagnosis and treatment",
            "Complete the full course of prescribed antibiotics (typically 6-9 months)",
            "Take medications exactly as prescribed - incomplete treatment can lead to drug-resistant TB",
            "Isolate as directed by healthcare provider until no longer contagious",
            "Get plenty of rest and maintain good nutrition",
            "Notify close contacts so they can be tested",
            "Follow up regularly with healthcare provider"
        ],
        sources: [
            { name: "Mayo Clinic - Tuberculosis", url: "https://www.mayoclinic.org/diseases-conditions/tuberculosis/symptoms-causes/syc-20351250" },
            { name: "CDC - Tuberculosis", url: "https://www.cdc.gov/tb/default.htm" },
            { name: "WHO - Tuberculosis", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/11301-tuberculosis" }
        ]
    },
    {
        name: "Hepatitis A",
        symptoms: ["fatigue", "nausea", "vomiting", "abdominal pain", "loss of appetite", "fever", "dark urine", "joint pain", "jaundice"],
        description: "Hepatitis A is a highly contagious liver infection caused by the hepatitis A virus. It's usually spread through contaminated food or water, or close contact with an infected person. Most people recover completely without permanent liver damage.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis",
            "Get plenty of rest",
            "Stay hydrated",
            "Avoid alcohol and medications that can harm the liver",
            "Eat a healthy, balanced diet",
            "Practice good hygiene to prevent spreading",
            "Consider vaccination if not already vaccinated",
            "Notify close contacts who may have been exposed"
        ],
        sources: [
            { name: "Mayo Clinic - Hepatitis A", url: "https://www.mayoclinic.org/diseases-conditions/hepatitis-a/symptoms-causes/syc-20367007" },
            { name: "CDC - Hepatitis A", url: "https://www.cdc.gov/hepatitis/hav/index.htm" },
            { name: "WHO - Hepatitis A", url: "https://www.who.int/news-room/fact-sheets/detail/hepatitis-a" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/liver-disease/viral-hepatitis/hepatitis-a" }
        ]
    },
    {
        name: "Hepatitis B",
        symptoms: ["fatigue", "nausea", "vomiting", "abdominal pain", "loss of appetite", "fever", "dark urine", "joint pain", "jaundice"],
        description: "Hepatitis B is a serious liver infection caused by the hepatitis B virus. It can be acute (short-term) or chronic (long-term). The virus is spread through contact with blood or other body fluids of an infected person.",
        severity: "high",
        actionPlan: [
            "See a healthcare provider for diagnosis and treatment",
            "Get plenty of rest",
            "Stay hydrated",
            "Avoid alcohol and medications that can harm the liver",
            "Take prescribed antiviral medications if chronic infection is diagnosed",
            "Get regular monitoring of liver function",
            "Consider vaccination if not already vaccinated",
            "Practice safe sex and avoid sharing needles"
        ],
        sources: [
            { name: "Mayo Clinic - Hepatitis B", url: "https://www.mayoclinic.org/diseases-conditions/hepatitis-b/symptoms-causes/syc-20366802" },
            { name: "CDC - Hepatitis B", url: "https://www.cdc.gov/hepatitis/hbv/index.htm" },
            { name: "WHO - Hepatitis B", url: "https://www.who.int/news-room/fact-sheets/detail/hepatitis-b" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/liver-disease/viral-hepatitis/hepatitis-b" }
        ]
    },
    {
        name: "Hepatitis C",
        symptoms: ["fatigue", "nausea", "vomiting", "abdominal pain", "loss of appetite", "fever", "dark urine", "joint pain", "jaundice"],
        description: "Hepatitis C is a viral infection that causes liver inflammation, sometimes leading to serious liver damage. The hepatitis C virus spreads through contaminated blood. Many people with hepatitis C don't know they're infected because they have no symptoms.",
        severity: "high",
        actionPlan: [
            "See a healthcare provider for diagnosis and treatment",
            "Take prescribed antiviral medications as directed",
            "Get regular monitoring of liver function",
            "Avoid alcohol and medications that can harm the liver",
            "Get plenty of rest and maintain good nutrition",
            "Practice safe sex and avoid sharing needles",
            "Consider vaccination for hepatitis A and B to protect the liver",
            "Follow up regularly with healthcare provider"
        ],
        sources: [
            { name: "Mayo Clinic - Hepatitis C", url: "https://www.mayoclinic.org/diseases-conditions/hepatitis-c/symptoms-causes/syc-20354278" },
            { name: "CDC - Hepatitis C", url: "https://www.cdc.gov/hepatitis/hcv/index.htm" },
            { name: "WHO - Hepatitis C", url: "https://www.who.int/news-room/fact-sheets/detail/hepatitis-c" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/liver-disease/viral-hepatitis/hepatitis-c" }
        ]
    },
    {
        name: "Lyme Disease",
        symptoms: ["rash", "fever", "chills", "fatigue", "body aches", "headache", "neck stiffness", "swollen lymph nodes"],
        description: "Lyme disease is caused by the bacterium Borrelia burgdorferi and is transmitted to humans through the bite of infected blacklegged ticks. Early symptoms include a characteristic 'bull's-eye' rash, fever, and fatigue. If left untreated, it can spread to joints, heart, and nervous system.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider immediately if you suspect Lyme disease",
            "Take prescribed antibiotics as directed (usually doxycycline, amoxicillin, or cefuroxime)",
            "Complete the full course of antibiotics",
            "Remove ticks promptly and properly if found on skin",
            "Use insect repellent and protective clothing when in tick-infested areas",
            "Check for ticks after being outdoors",
            "Monitor for symptoms of late-stage Lyme disease if treatment is delayed"
        ],
        sources: [
            { name: "Mayo Clinic - Lyme Disease", url: "https://www.mayoclinic.org/diseases-conditions/lyme-disease/symptoms-causes/syc-20374651" },
            { name: "CDC - Lyme Disease", url: "https://www.cdc.gov/lyme/index.html" },
            { name: "NIH - National Institute of Allergy and Infectious Diseases", url: "https://www.niaid.nih.gov/diseases-conditions/lyme-disease" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/11586-lyme-disease" }
        ]
    },
    {
        name: "Malaria",
        symptoms: ["fever", "chills", "sweating", "headache", "nausea", "vomiting", "body aches", "fatigue"],
        description: "Malaria is a disease caused by a parasite transmitted through the bite of infected mosquitoes. It's common in tropical and subtropical regions. Symptoms typically appear 10-15 days after being bitten. Severe cases can be life-threatening.",
        severity: "high",
        actionPlan: [
            "Seek immediate medical attention if you've been in a malaria-endemic area",
            "Take prescribed antimalarial medications exactly as directed",
            "Complete the full course of treatment",
            "Get plenty of rest and stay hydrated",
            "Take medications to prevent malaria before traveling to high-risk areas",
            "Use mosquito repellent and bed nets in malaria-endemic regions",
            "Monitor for severe symptoms: confusion, seizures, difficulty breathing"
        ],
        sources: [
            { name: "Mayo Clinic - Malaria", url: "https://www.mayoclinic.org/diseases-conditions/malaria/symptoms-causes/syc-20351184" },
            { name: "CDC - Malaria", url: "https://www.cdc.gov/malaria/index.html" },
            { name: "WHO - Malaria", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" },
            { name: "NIH - National Institute of Allergy and Infectious Diseases", url: "https://www.niaid.nih.gov/diseases-conditions/malaria" }
        ]
    },
    {
        name: "Dengue Fever",
        symptoms: ["high fever", "severe headache", "pain behind eyes", "joint pain", "muscle pain", "rash", "nausea", "vomiting"],
        description: "Dengue fever is a mosquito-borne viral infection common in tropical and subtropical regions. It causes high fever, severe headache, and joint pain. In severe cases, it can develop into dengue hemorrhagic fever, which can be life-threatening.",
        severity: "high",
        actionPlan: [
            "Seek medical attention if you've been in a dengue-endemic area",
            "Get plenty of rest",
            "Stay hydrated with water and electrolyte solutions",
            "Take acetaminophen for fever and pain (avoid aspirin and NSAIDs)",
            "Monitor for warning signs: severe abdominal pain, persistent vomiting, bleeding, difficulty breathing",
            "Use mosquito repellent and protective clothing in dengue-endemic areas",
            "Seek emergency care if warning signs appear"
        ],
        sources: [
            { name: "Mayo Clinic - Dengue Fever", url: "https://www.mayoclinic.org/diseases-conditions/dengue-fever/symptoms-causes/syc-20353078" },
            { name: "CDC - Dengue", url: "https://www.cdc.gov/dengue/index.html" },
            { name: "WHO - Dengue", url: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/17753-dengue-fever" }
        ]
    },
    {
        name: "Zika Virus",
        symptoms: ["fever", "rash", "joint pain", "red eyes", "headache", "muscle pain"],
        description: "Zika virus is a mosquito-borne virus that can cause mild symptoms in most people but can cause serious birth defects if a pregnant woman is infected. It's primarily found in tropical and subtropical regions.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider if you've been in a Zika-affected area",
            "Get plenty of rest",
            "Stay hydrated",
            "Take acetaminophen for fever and pain (avoid aspirin and NSAIDs)",
            "Pregnant women should seek immediate medical attention if exposed",
            "Use mosquito repellent and protective clothing in Zika-affected areas",
            "Practice safe sex if you or your partner have been in a Zika-affected area"
        ],
        sources: [
            { name: "Mayo Clinic - Zika Virus", url: "https://www.mayoclinic.org/diseases-conditions/zika-virus/symptoms-causes/syc-20353639" },
            { name: "CDC - Zika Virus", url: "https://www.cdc.gov/zika/index.html" },
            { name: "WHO - Zika Virus", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" },
            { name: "NIH - National Institute of Allergy and Infectious Diseases", url: "https://www.niaid.nih.gov/diseases-conditions/zika-virus" }
        ]
    },
    {
        name: "West Nile Virus",
        symptoms: ["fever", "headache", "body aches", "joint pain", "vomiting", "diarrhea", "rash", "fatigue"],
        description: "West Nile virus is a mosquito-borne virus that can cause mild flu-like symptoms in most people. In rare cases, it can cause severe neurological disease. Most people infected have no symptoms.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider if you develop symptoms after mosquito bites",
            "Get plenty of rest",
            "Stay hydrated",
            "Take over-the-counter medications for fever and pain",
            "Seek immediate medical attention if you develop severe symptoms: high fever, severe headache, neck stiffness, confusion, seizures",
            "Use mosquito repellent and protective clothing",
            "Eliminate standing water where mosquitoes breed"
        ],
        sources: [
            { name: "Mayo Clinic - West Nile Virus", url: "https://www.mayoclinic.org/diseases-conditions/west-nile-virus/symptoms-causes/syc-20350320" },
            { name: "CDC - West Nile Virus", url: "https://www.cdc.gov/westnile/index.html" },
            { name: "NIH - National Institute of Allergy and Infectious Diseases", url: "https://www.niaid.nih.gov/diseases-conditions/west-nile-virus" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/15015-west-nile-virus" }
        ]
    },
    {
        name: "Cholera",
        symptoms: ["severe diarrhea", "vomiting", "dehydration", "rapid heart rate", "low blood pressure", "muscle cramps"],
        description: "Cholera is a bacterial infection of the small intestine that causes severe diarrhea and dehydration. It's spread through contaminated water or food. Without treatment, it can be fatal within hours due to severe dehydration.",
        severity: "critical",
        actionPlan: [
            "Seek immediate medical attention - cholera is a medical emergency",
            "Begin oral rehydration therapy immediately",
            "Take prescribed antibiotics as directed",
            "Continue rehydration even after symptoms improve",
            "Practice good hygiene and food safety",
            "Drink only safe, treated water",
            "Consider cholera vaccination if traveling to high-risk areas",
            "Seek emergency care for severe dehydration"
        ],
        sources: [
            { name: "Mayo Clinic - Cholera", url: "https://www.mayoclinic.org/diseases-conditions/cholera/symptoms-causes/syc-20355287" },
            { name: "CDC - Cholera", url: "https://www.cdc.gov/cholera/index.html" },
            { name: "WHO - Cholera", url: "https://www.who.int/news-room/fact-sheets/detail/cholera" },
            { name: "NIH - National Institute of Allergy and Infectious Diseases", url: "https://www.niaid.nih.gov/diseases-conditions/cholera" }
        ]
    },
    {
        name: "Typhoid Fever",
        symptoms: ["high fever", "headache", "abdominal pain", "diarrhea", "constipation", "rash", "weakness", "fatigue"],
        description: "Typhoid fever is a bacterial infection caused by Salmonella typhi. It's spread through contaminated food or water. Symptoms include high fever, weakness, stomach pain, and sometimes a rash. It's common in areas with poor sanitation.",
        severity: "high",
        actionPlan: [
            "Seek medical attention immediately",
            "Take prescribed antibiotics as directed",
            "Complete the full course of antibiotics",
            "Get plenty of rest",
            "Stay hydrated",
            "Practice good hygiene and food safety",
            "Consider typhoid vaccination if traveling to high-risk areas",
            "Avoid contaminated food and water"
        ],
        sources: [
            { name: "Mayo Clinic - Typhoid Fever", url: "https://www.mayoclinic.org/diseases-conditions/typhoid-fever/symptoms-causes/syc-20378661" },
            { name: "CDC - Typhoid Fever", url: "https://www.cdc.gov/typhoid-fever/index.html" },
            { name: "WHO - Typhoid", url: "https://www.who.int/news-room/fact-sheets/detail/typhoid" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/17730-typhoid-fever" }
        ]
    },
    {
        name: "Meningitis",
        symptoms: ["sudden high fever", "stiff neck", "severe headache", "nausea", "vomiting", "confusion", "sensitivity to light", "rash"],
        description: "Meningitis is inflammation of the membranes (meninges) surrounding your brain and spinal cord. It can be caused by bacteria, viruses, or fungi. Bacterial meningitis is a medical emergency that requires immediate treatment.",
        severity: "critical",
        actionPlan: [
            "Seek immediate emergency medical care - meningitis is a medical emergency",
            "Do not delay treatment - bacterial meningitis can be fatal within hours",
            "Take prescribed antibiotics or antivirals as directed",
            "Get plenty of rest",
            "Stay hydrated",
            "Notify close contacts so they can receive preventive treatment if needed",
            "Consider vaccination against bacterial meningitis",
            "Follow up with healthcare provider after recovery"
        ],
        sources: [
            { name: "Mayo Clinic - Meningitis", url: "https://www.mayoclinic.org/diseases-conditions/meningitis/symptoms-causes/syc-20350508" },
            { name: "CDC - Meningitis", url: "https://www.cdc.gov/meningitis/index.html" },
            { name: "WHO - Meningitis", url: "https://www.who.int/news-room/fact-sheets/detail/meningitis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/14600-meningitis" }
        ]
    },
    {
        name: "Encephalitis",
        symptoms: ["fever", "headache", "confusion", "seizures", "weakness", "sensitivity to light", "nausea", "vomiting"],
        description: "Encephalitis is inflammation of the brain, usually caused by a viral infection. It can cause flu-like symptoms, confusion, seizures, and in severe cases, can be life-threatening. Early treatment is important.",
        severity: "critical",
        actionPlan: [
            "Seek immediate emergency medical care",
            "Take prescribed antiviral medications as directed",
            "Get plenty of rest",
            "Stay hydrated",
            "Take medications to control seizures if prescribed",
            "Monitor for worsening symptoms",
            "Follow up with neurologist if needed",
            "Consider rehabilitation therapy if neurological symptoms persist"
        ],
        sources: [
            { name: "Mayo Clinic - Encephalitis", url: "https://www.mayoclinic.org/diseases-conditions/encephalitis/symptoms-causes/syc-20356136" },
            { name: "CDC - Encephalitis", url: "https://www.cdc.gov/ncezid/dvbd/index.html" },
            { name: "NIH - National Institute of Neurological Disorders and Stroke", url: "https://www.ninds.nih.gov/health-information/disorders/encephalitis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/6038-encephalitis" }
        ]
    },
    {
        name: "Coronary Artery Disease",
        symptoms: ["chest pain", "shortness of breath", "fatigue", "heartache", "dizziness", "nausea", "sweating"],
        description: "Coronary artery disease develops when the major blood vessels that supply your heart with blood, oxygen and nutrients become damaged or diseased. Cholesterol-containing deposits (plaques) in your arteries and inflammation are usually to blame.",
        severity: "high",
        actionPlan: [
            "See a cardiologist for diagnosis and treatment",
            "Take prescribed medications (aspirin, statins, beta-blockers) as directed",
            "Make lifestyle changes: quit smoking, exercise regularly, eat heart-healthy diet",
            "Manage other conditions: diabetes, high blood pressure, high cholesterol",
            "Consider procedures like angioplasty or bypass surgery if recommended",
            "Monitor symptoms and seek emergency care for chest pain",
            "Attend cardiac rehabilitation if recommended"
        ],
        sources: [
            { name: "Mayo Clinic - Coronary Artery Disease", url: "https://www.mayoclinic.org/diseases-conditions/coronary-artery-disease/symptoms-causes/syc-20350613" },
            { name: "American Heart Association", url: "https://www.heart.org/en/health-topics/consumer-healthcare/what-is-cardiovascular-disease" },
            { name: "NIH - National Heart, Lung, and Blood Institute", url: "https://www.nhlbi.nih.gov/health/coronary-heart-disease" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/16898-coronary-artery-disease" }
        ]
    },
    {
        name: "Stroke",
        symptoms: ["sudden numbness", "confusion", "trouble speaking", "vision problems", "severe headache", "dizziness", "loss of balance"],
        description: "A stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes. This is a medical emergency requiring immediate treatment.",
        severity: "critical",
        actionPlan: [
            "Call emergency services (911) immediately - time is critical",
            "Note the time when symptoms first appeared",
            "Do not drive yourself to the hospital",
            "Receive emergency treatment (clot-busting drugs or procedures)",
            "Follow rehabilitation plan after stroke",
            "Take medications to prevent future strokes as prescribed",
            "Manage risk factors: high blood pressure, diabetes, high cholesterol",
            "Attend physical, occupational, and speech therapy as needed"
        ],
        sources: [
            { name: "Mayo Clinic - Stroke", url: "https://www.mayoclinic.org/diseases-conditions/stroke/symptoms-causes/syc-20350113" },
            { name: "American Stroke Association", url: "https://www.stroke.org/" },
            { name: "NIH - National Institute of Neurological Disorders and Stroke", url: "https://www.ninds.nih.gov/health-information/disorders/stroke" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/5601-stroke" }
        ]
    },
    {
        name: "Chronic Obstructive Pulmonary Disease (COPD)",
        symptoms: ["shortness of breath", "wheezing", "chest tightness", "chronic cough", "mucus production", "fatigue"],
        description: "COPD is a chronic inflammatory lung disease that causes obstructed airflow from the lungs. It's typically caused by long-term exposure to irritating gases or particulate matter, most often from cigarette smoke.",
        severity: "high",
        actionPlan: [
            "See a pulmonologist for diagnosis and treatment",
            "Quit smoking immediately - this is the most important step",
            "Take prescribed medications (bronchodilators, inhaled steroids) as directed",
            "Use oxygen therapy if prescribed",
            "Participate in pulmonary rehabilitation",
            "Get vaccinated against flu and pneumonia",
            "Avoid lung irritants: smoke, dust, fumes",
            "Exercise regularly as tolerated"
        ],
        sources: [
            { name: "Mayo Clinic - COPD", url: "https://www.mayoclinic.org/diseases-conditions/copd/symptoms-causes/syc-20353679" },
            { name: "American Lung Association - COPD", url: "https://www.lung.org/lung-health-diseases/lung-disease-lookup/copd" },
            { name: "NIH - National Heart, Lung, and Blood Institute", url: "https://www.nhlbi.nih.gov/health/copd" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/8709-chronic-obstructive-pulmonary-disease-copd" }
        ]
    },
    {
        name: "Chronic Kidney Disease",
        symptoms: ["fatigue", "nausea", "vomiting", "swelling", "changes in urination", "muscle cramps", "itching", "chest pain"],
        description: "Chronic kidney disease is the gradual loss of kidney function over time. Your kidneys filter wastes and excess fluids from your blood, which are then excreted in your urine. When chronic kidney disease reaches an advanced stage, dangerous levels of fluid, electrolytes and wastes can build up in your body.",
        severity: "high",
        actionPlan: [
            "See a nephrologist for diagnosis and treatment",
            "Take prescribed medications as directed",
            "Control blood pressure and blood sugar",
            "Follow a kidney-friendly diet (limit protein, sodium, potassium, phosphorus)",
            "Stay hydrated but follow fluid restrictions if advised",
            "Avoid medications that can harm kidneys (NSAIDs)",
            "Prepare for dialysis or kidney transplant if needed",
            "Get regular monitoring of kidney function"
        ],
        sources: [
            { name: "Mayo Clinic - Chronic Kidney Disease", url: "https://www.mayoclinic.org/diseases-conditions/chronic-kidney-disease/symptoms-causes/syc-20354521" },
            { name: "National Kidney Foundation", url: "https://www.kidney.org/kidneydisease" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/15096-chronic-kidney-disease" }
        ]
    },
    {
        name: "Rheumatoid Arthritis",
        symptoms: ["joint pain", "swelling", "stiffness", "fatigue", "fever", "loss of appetite", "morning stiffness"],
        description: "Rheumatoid arthritis is a chronic inflammatory disorder that can affect more than just your joints. In some people, the condition can damage a wide variety of body systems, including the skin, eyes, lungs, heart and blood vessels.",
        severity: "moderate",
        actionPlan: [
            "See a rheumatologist for diagnosis and treatment",
            "Take prescribed medications (DMARDs, biologics, NSAIDs) as directed",
            "Apply heat or cold to affected joints",
            "Get regular exercise (low-impact activities)",
            "Maintain a healthy weight",
            "Use assistive devices if needed",
            "Get plenty of rest",
            "Consider physical or occupational therapy"
        ],
        sources: [
            { name: "Mayo Clinic - Rheumatoid Arthritis", url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648" },
            { name: "Arthritis Foundation - Rheumatoid Arthritis", url: "https://www.arthritis.org/diseases/rheumatoid-arthritis" },
            { name: "NIH - National Institute of Arthritis and Musculoskeletal and Skin Diseases", url: "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/4924-rheumatoid-arthritis" }
        ]
    },
    {
        name: "Osteoarthritis",
        symptoms: ["joint pain", "stiffness", "swelling", "loss of flexibility", "grating sensation", "bone spurs"],
        description: "Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of your bones wears down over time. Although osteoarthritis can damage any joint, the disorder most commonly affects joints in your hands, knees, hips and spine.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis and treatment",
            "Take over-the-counter pain relievers (acetaminophen, NSAIDs) as needed",
            "Apply heat or cold to affected joints",
            "Get regular exercise (low-impact activities like swimming, walking)",
            "Maintain a healthy weight to reduce stress on joints",
            "Use assistive devices if needed",
            "Consider physical therapy",
            "Discuss joint replacement surgery if symptoms are severe"
        ],
        sources: [
            { name: "Mayo Clinic - Osteoarthritis", url: "https://www.mayoclinic.org/diseases-conditions/osteoarthritis/symptoms-causes/syc-20351925" },
            { name: "Arthritis Foundation - Osteoarthritis", url: "https://www.arthritis.org/diseases/osteoarthritis" },
            { name: "NIH - National Institute of Arthritis and Musculoskeletal and Skin Diseases", url: "https://www.niams.nih.gov/health-topics/osteoarthritis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/4925-osteoarthritis" }
        ]
    },
    {
        name: "Lupus (Systemic Lupus Erythematosus)",
        symptoms: ["fatigue", "fever", "joint pain", "rash", "chest pain", "hair loss", "sensitivity to light", "mouth sores"],
        description: "Lupus is a disease that occurs when your body's immune system attacks your own tissues and organs. Inflammation caused by lupus can affect many different body systems — including your joints, skin, kidneys, blood cells, brain, heart and lungs.",
        severity: "high",
        actionPlan: [
            "See a rheumatologist for diagnosis and treatment",
            "Take prescribed medications (corticosteroids, immunosuppressants, antimalarials) as directed",
            "Get plenty of rest",
            "Protect yourself from the sun (use sunscreen, wear protective clothing)",
            "Exercise regularly but avoid overexertion",
            "Eat a healthy, balanced diet",
            "Don't smoke",
            "Get regular checkups and monitoring"
        ],
        sources: [
            { name: "Mayo Clinic - Lupus", url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789" },
            { name: "Lupus Foundation of America", url: "https://www.lupus.org/" },
            { name: "NIH - National Institute of Arthritis and Musculoskeletal and Skin Diseases", url: "https://www.niams.nih.gov/health-topics/lupus" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/4875-lupus" }
        ]
    },
    {
        name: "Multiple Sclerosis (MS)",
        symptoms: ["numbness", "weakness", "tingling", "vision problems", "fatigue", "dizziness", "balance problems", "cognitive changes"],
        description: "Multiple sclerosis is a potentially disabling disease of the brain and spinal cord. In MS, the immune system attacks the protective sheath (myelin) that covers nerve fibers and causes communication problems between your brain and the rest of your body.",
        severity: "high",
        actionPlan: [
            "See a neurologist for diagnosis and treatment",
            "Take prescribed disease-modifying therapies as directed",
            "Manage symptoms with medications as needed",
            "Get regular exercise (as tolerated)",
            "Eat a healthy, balanced diet",
            "Get plenty of rest",
            "Consider physical, occupational, and speech therapy",
            "Join a support group for emotional support"
        ],
        sources: [
            { name: "Mayo Clinic - Multiple Sclerosis", url: "https://www.mayoclinic.org/diseases-conditions/multiple-sclerosis/symptoms-causes/syc-20350269" },
            { name: "National Multiple Sclerosis Society", url: "https://www.nationalmssociety.org/" },
            { name: "NIH - National Institute of Neurological Disorders and Stroke", url: "https://www.ninds.nih.gov/health-information/disorders/multiple-sclerosis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/17248-multiple-sclerosis" }
        ]
    },
    {
        name: "Parkinson's Disease",
        symptoms: ["tremors", "slowed movement", "rigid muscles", "impaired posture", "loss of automatic movements", "speech changes", "writing changes"],
        description: "Parkinson's disease is a progressive nervous system disorder that affects movement. Symptoms start gradually, sometimes starting with a barely noticeable tremor in just one hand. Tremors are common, but the disorder also commonly causes stiffness or slowing of movement.",
        severity: "high",
        actionPlan: [
            "See a neurologist for diagnosis and treatment",
            "Take prescribed medications (levodopa, dopamine agonists) as directed",
            "Consider deep brain stimulation if medications aren't effective",
            "Get regular exercise (physical therapy recommended)",
            "Eat a healthy, balanced diet",
            "Consider speech therapy if speech is affected",
            "Make home safety modifications to prevent falls",
            "Join a support group for emotional support"
        ],
        sources: [
            { name: "Mayo Clinic - Parkinson's Disease", url: "https://www.mayoclinic.org/diseases-conditions/parkinsons-disease/symptoms-causes/syc-20376055" },
            { name: "Parkinson's Foundation", url: "https://www.parkinson.org/" },
            { name: "NIH - National Institute of Neurological Disorders and Stroke", url: "https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/8525-parkinsons-disease" }
        ]
    },
    {
        name: "Epilepsy",
        symptoms: ["seizures", "temporary confusion", "staring spells", "uncontrollable jerking movements", "loss of consciousness", "psychic symptoms"],
        description: "Epilepsy is a central nervous system (neurological) disorder in which brain activity becomes abnormal, causing seizures or periods of unusual behavior, sensations, and sometimes loss of awareness. Anyone can develop epilepsy.",
        severity: "moderate",
        actionPlan: [
            "See a neurologist for diagnosis and treatment",
            "Take prescribed anti-seizure medications exactly as directed",
            "Never stop medications abruptly without doctor's approval",
            "Get adequate sleep and avoid sleep deprivation",
            "Avoid alcohol and recreational drugs",
            "Manage stress",
            "Wear a medical alert bracelet",
            "Have a seizure action plan and educate family/friends"
        ],
        sources: [
            { name: "Mayo Clinic - Epilepsy", url: "https://www.mayoclinic.org/diseases-conditions/epilepsy/symptoms-causes/syc-20350093" },
            { name: "Epilepsy Foundation", url: "https://www.epilepsy.com/" },
            { name: "NIH - National Institute of Neurological Disorders and Stroke", url: "https://www.ninds.nih.gov/health-information/disorders/epilepsy-and-seizures" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/17636-epilepsy" }
        ]
    },
    {
        name: "Irritable Bowel Syndrome (IBS)",
        symptoms: ["abdominal pain", "bloating", "diarrhea", "constipation", "gas", "mucus in stool", "cramping"],
        description: "Irritable bowel syndrome (IBS) is a common disorder that affects the large intestine. Signs and symptoms include cramping, abdominal pain, bloating, gas, and diarrhea or constipation, or both. IBS is a chronic condition that you'll need to manage long term.",
        severity: "moderate",
        actionPlan: [
            "See a gastroenterologist for diagnosis",
            "Keep a food diary to identify trigger foods",
            "Follow a low-FODMAP diet if recommended",
            "Eat smaller, more frequent meals",
            "Stay hydrated",
            "Get regular exercise",
            "Manage stress through relaxation techniques",
            "Take medications as prescribed (fiber supplements, antispasmodics, antidepressants)"
        ],
        sources: [
            { name: "Mayo Clinic - IBS", url: "https://www.mayoclinic.org/diseases-conditions/irritable-bowel-syndrome/symptoms-causes/syc-20360016" },
            { name: "International Foundation for Gastrointestinal Disorders", url: "https://www.iffgd.org/" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/4347-irritable-bowel-syndrome-ibs" }
        ]
    },
    {
        name: "Crohn's Disease",
        symptoms: ["diarrhea", "abdominal pain", "fatigue", "weight loss", "blood in stool", "fever", "mouth sores"],
        description: "Crohn's disease is a type of inflammatory bowel disease (IBD). It causes inflammation of your digestive tract, which can lead to abdominal pain, severe diarrhea, fatigue, weight loss and malnutrition. Inflammation caused by Crohn's disease can involve different areas of the digestive tract in different people.",
        severity: "high",
        actionPlan: [
            "See a gastroenterologist for diagnosis and treatment",
            "Take prescribed medications (anti-inflammatory drugs, immune system suppressors, biologics) as directed",
            "Follow a special diet as recommended by your doctor",
            "Get adequate nutrition and consider nutritional supplements",
            "Manage stress",
            "Get regular exercise",
            "Avoid smoking",
            "Monitor for complications and get regular checkups"
        ],
        sources: [
            { name: "Mayo Clinic - Crohn's Disease", url: "https://www.mayoclinic.org/diseases-conditions/crohns-disease/symptoms-causes/syc-20353304" },
            { name: "Crohn's & Colitis Foundation", url: "https://www.crohnscolitisfoundation.org/" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/crohns-disease" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/9357-crohns-disease" }
        ]
    },
    {
        name: "Ulcerative Colitis",
        symptoms: ["diarrhea", "abdominal pain", "rectal bleeding", "urgency to defecate", "fatigue", "weight loss", "fever"],
        description: "Ulcerative colitis is an inflammatory bowel disease that causes long-lasting inflammation and ulcers in your digestive tract. Ulcerative colitis affects the innermost lining of your large intestine (colon) and rectum. Symptoms usually develop over time, rather than suddenly.",
        severity: "high",
        actionPlan: [
            "See a gastroenterologist for diagnosis and treatment",
            "Take prescribed medications (aminosalicylates, corticosteroids, immune system suppressors, biologics) as directed",
            "Follow a special diet as recommended",
            "Stay hydrated",
            "Get adequate nutrition",
            "Manage stress",
            "Avoid smoking",
            "Consider surgery if medications aren't effective"
        ],
        sources: [
            { name: "Mayo Clinic - Ulcerative Colitis", url: "https://www.mayoclinic.org/diseases-conditions/ulcerative-colitis/symptoms-causes/syc-20353326" },
            { name: "Crohn's & Colitis Foundation", url: "https://www.crohnscolitisfoundation.org/" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/ulcerative-colitis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/10351-ulcerative-colitis" }
        ]
    },
    {
        name: "Gallstones",
        symptoms: ["abdominal pain", "back pain", "nausea", "vomiting", "bloating", "indigestion", "fever", "jaundice"],
        description: "Gallstones are hardened deposits of digestive fluid that can form in your gallbladder. Your gallbladder is a small, pear-shaped organ on the right side of your abdomen, just beneath your liver. Gallstones range in size from as small as a grain of sand to as large as a golf ball.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis",
            "Take prescribed medications if recommended",
            "Follow a low-fat diet",
            "Maintain a healthy weight",
            "Consider gallbladder removal surgery if symptoms are severe or recurrent",
            "Seek emergency care if experiencing severe pain, fever, or jaundice",
            "Avoid rapid weight loss",
            "Eat regular meals"
        ],
        sources: [
            { name: "Mayo Clinic - Gallstones", url: "https://www.mayoclinic.org/diseases-conditions/gallstones/symptoms-causes/syc-20354214" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/gallstones" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/7313-gallstones" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/gallstones" }
        ]
    },
    {
        name: "Peptic Ulcer",
        symptoms: ["abdominal pain", "bloating", "nausea", "vomiting", "heartburn", "loss of appetite", "weight loss"],
        description: "Peptic ulcers are open sores that develop on the inside lining of your stomach and the upper portion of your small intestine. The most common symptom of a peptic ulcer is stomach pain. Peptic ulcers include gastric ulcers and duodenal ulcers.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis",
            "Take prescribed medications (antibiotics if H. pylori infection, acid blockers, antacids) as directed",
            "Complete the full course of antibiotics if prescribed",
            "Avoid NSAIDs unless necessary",
            "Don't smoke",
            "Limit alcohol consumption",
            "Manage stress",
            "Eat a healthy diet and avoid foods that worsen symptoms"
        ],
        sources: [
            { name: "Mayo Clinic - Peptic Ulcer", url: "https://www.mayoclinic.org/diseases-conditions/peptic-ulcer/symptoms-causes/syc-20354223" },
            { name: "NIH - National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/peptic-ulcers-stomach-ulcers" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/10350-peptic-ulcer-disease" },
            { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/peptic-ulcer-disease" }
        ]
    },
    {
        name: "Eczema (Atopic Dermatitis)",
        symptoms: ["itching", "redness", "dry skin", "rash", "thickened skin", "scaly patches", "swelling"],
        description: "Eczema is a condition that makes your skin red and itchy. It's common in children but can occur at any age. Atopic dermatitis is long lasting (chronic) and tends to flare periodically. It may be accompanied by asthma or hay fever.",
        severity: "low",
        actionPlan: [
            "See a dermatologist for diagnosis and treatment",
            "Moisturize skin regularly with fragrance-free moisturizers",
            "Take lukewarm baths and apply moisturizer immediately after",
            "Use prescribed topical corticosteroids or other medications as directed",
            "Avoid triggers: harsh soaps, detergents, certain fabrics, stress",
            "Keep fingernails short to prevent scratching",
            "Use a humidifier in dry environments",
            "Wear soft, breathable fabrics"
        ],
        sources: [
            { name: "Mayo Clinic - Eczema", url: "https://www.mayoclinic.org/diseases-conditions/atopic-dermatitis-eczema/symptoms-causes/syc-20353273" },
            { name: "National Eczema Association", url: "https://nationaleczema.org/" },
            { name: "NIH - National Institute of Arthritis and Musculoskeletal and Skin Diseases", url: "https://www.niams.nih.gov/health-topics/atopic-dermatitis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/9998-eczema" }
        ]
    },
    {
        name: "Psoriasis",
        symptoms: ["red patches", "silvery scales", "dry skin", "itching", "burning", "thickened nails", "swollen joints"],
        description: "Psoriasis is a skin disease that causes red, itchy scaly patches, most commonly on the knees, elbows, trunk and scalp. Psoriasis is a common, long-term (chronic) disease with no cure. It tends to go through cycles, flaring for a few weeks or months, then subsiding for a while.",
        severity: "moderate",
        actionPlan: [
            "See a dermatologist for diagnosis and treatment",
            "Use prescribed topical treatments (corticosteroids, vitamin D analogues) as directed",
            "Take oral or injected medications if prescribed",
            "Try phototherapy (light therapy) if recommended",
            "Moisturize skin regularly",
            "Avoid triggers: stress, infections, certain medications, alcohol",
            "Take lukewarm baths with added bath oil or oatmeal",
            "Get regular exercise and maintain a healthy weight"
        ],
        sources: [
            { name: "Mayo Clinic - Psoriasis", url: "https://www.mayoclinic.org/diseases-conditions/psoriasis/symptoms-causes/syc-20355840" },
            { name: "National Psoriasis Foundation", url: "https://www.psoriasis.org/" },
            { name: "NIH - National Institute of Arthritis and Musculoskeletal and Skin Diseases", url: "https://www.niams.nih.gov/health-topics/psoriasis" },
            { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/6866-psoriasis" }
        ]
    },
    {
        name: "Rosacea",
        symptoms: ["facial redness", "visible blood vessels", "swollen bumps", "eye problems", "burning sensation", "dry skin"],
        description: "Rosacea is a common skin condition that causes redness and visible blood vessels in your face. It may also produce small, red, pus-filled bumps. These signs and symptoms may flare up for weeks to months and then go away for a while.",
        severity: "low",
        actionPlan: [
            "See a dermatologist for diagnosis and treatment",
            "Use prescribed topical or oral medications as directed",
            "Avoid triggers: sun exposure, hot drinks, spicy foods, alcohol, stress, extreme temperatures",
            "Use gentle, fragrance-free skin care products",
            "Protect skin from sun with broad-spectrum sunscreen (SPF 30+)",
            "Apply cool compresses to reduce redness",
            "Consider laser therapy if recommended",
            "Manage stress through relaxation techniques"
        ],
        sources: [
            { name: "Mayo Clinic - Rosacea", url: "https://www.mayoclinic.org/diseases-conditions/rosacea/symptoms-causes/syc-20353815" },
            { name: "National Rosacea Society", url: "https://www.rosacea.org/" }
        ]
    },
    {
        name: "Acne",
        symptoms: ["pimples", "blackheads", "whiteheads", "redness", "swelling", "cystic lesions"],
        description: "Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. It causes whiteheads, blackheads or pimples. Acne is most common among teenagers, though it affects people of all ages.",
        severity: "low",
        actionPlan: [
            "See a dermatologist if over-the-counter treatments don't work",
            "Wash face twice daily with gentle cleanser",
            "Use non-comedogenic (won't clog pores) skin care products",
            "Avoid picking or squeezing pimples",
            "Apply over-the-counter treatments (benzoyl peroxide, salicylic acid) as directed",
            "Take prescribed medications (topical retinoids, antibiotics, oral contraceptives) if needed",
            "Protect skin from sun",
            "Maintain a healthy diet and manage stress"
        ],
        sources: [
            { name: "Mayo Clinic - Acne", url: "https://www.mayoclinic.org/diseases-conditions/acne/symptoms-causes/syc-20368047" },
            { name: "American Academy of Dermatology - Acne", url: "https://www.aad.org/public/diseases/acne" }
        ]
    },
    {
        name: "Depression",
        symptoms: ["sadness", "loss of interest", "fatigue", "sleep problems", "appetite changes", "difficulty concentrating", "feelings of worthlessness"],
        description: "Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. Also called major depressive disorder or clinical depression, it affects how you feel, think and behave and can lead to a variety of emotional and physical problems.",
        severity: "moderate",
        actionPlan: [
            "See a mental health professional for diagnosis and treatment",
            "Take prescribed antidepressants as directed",
            "Attend psychotherapy (cognitive behavioral therapy, interpersonal therapy)",
            "Get regular exercise",
            "Maintain a regular sleep schedule",
            "Eat a healthy, balanced diet",
            "Avoid alcohol and recreational drugs",
            "Build a support network of family and friends",
            "Seek immediate help if having thoughts of self-harm or suicide"
        ],
        sources: [
            { name: "Mayo Clinic - Depression", url: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007" },
            { name: "National Institute of Mental Health - Depression", url: "https://www.nimh.nih.gov/health/topics/depression" }
        ]
    },
    {
        name: "Anxiety Disorders",
        symptoms: ["excessive worry", "restlessness", "fatigue", "difficulty concentrating", "irritability", "muscle tension", "sleep problems"],
        description: "Anxiety disorders are a group of mental health conditions that cause excessive anxiety, fear, worry, and related behavioral disturbances. Anxiety disorders can interfere with daily activities and can be disabling.",
        severity: "moderate",
        actionPlan: [
            "See a mental health professional for diagnosis and treatment",
            "Take prescribed medications (antidepressants, anti-anxiety medications) as directed",
            "Attend psychotherapy (cognitive behavioral therapy, exposure therapy)",
            "Practice relaxation techniques (deep breathing, meditation, yoga)",
            "Get regular exercise",
            "Limit caffeine and alcohol",
            "Get adequate sleep",
            "Join a support group",
            "Learn stress management techniques"
        ],
        sources: [
            { name: "Mayo Clinic - Anxiety Disorders", url: "https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961" },
            { name: "National Institute of Mental Health - Anxiety Disorders", url: "https://www.nimh.nih.gov/health/topics/anxiety-disorders" }
        ]
    },
    {
        name: "Bipolar Disorder",
        symptoms: ["mood swings", "mania", "depression", "irritability", "racing thoughts", "decreased need for sleep", "impulsive behavior"],
        description: "Bipolar disorder, formerly called manic depression, is a mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression). When you become depressed, you may feel sad or hopeless and lose interest or pleasure in most activities.",
        severity: "high",
        actionPlan: [
            "See a psychiatrist for diagnosis and treatment",
            "Take prescribed mood stabilizers and other medications exactly as directed",
            "Attend psychotherapy regularly",
            "Maintain a regular sleep schedule",
            "Avoid alcohol and recreational drugs",
            "Learn to recognize early warning signs of mood episodes",
            "Build a support network",
            "Keep a mood diary to track patterns",
            "Seek immediate help if having thoughts of self-harm"
        ],
        sources: [
            { name: "Mayo Clinic - Bipolar Disorder", url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955" },
            { name: "National Institute of Mental Health - Bipolar Disorder", url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder" }
        ]
    },
    {
        name: "Obsessive-Compulsive Disorder (OCD)",
        symptoms: ["obsessions", "compulsions", "anxiety", "repetitive behaviors", "intrusive thoughts", "rituals"],
        description: "Obsessive-compulsive disorder (OCD) features a pattern of unwanted thoughts and fears (obsessions) that lead you to do repetitive behaviors (compulsions). These obsessions and compulsions interfere with daily activities and cause significant distress.",
        severity: "moderate",
        actionPlan: [
            "See a mental health professional for diagnosis and treatment",
            "Take prescribed medications (SSRIs, antidepressants) as directed",
            "Attend cognitive behavioral therapy (CBT) with exposure and response prevention",
            "Learn to resist compulsions gradually",
            "Practice relaxation techniques",
            "Join a support group",
            "Educate family members about OCD",
            "Be patient with treatment - it takes time"
        ],
        sources: [
            { name: "Mayo Clinic - OCD", url: "https://www.mayoclinic.org/diseases-conditions/obsessive-compulsive-disorder/symptoms-causes/syc-20354432" },
            { name: "International OCD Foundation", url: "https://iocdf.org/" }
        ]
    },
    {
        name: "Post-Traumatic Stress Disorder (PTSD)",
        symptoms: ["flashbacks", "nightmares", "severe anxiety", "uncontrollable thoughts", "avoidance", "negative changes in thinking", "hypervigilance"],
        description: "Post-traumatic stress disorder (PTSD) is a mental health condition that's triggered by a terrifying event — either experiencing it or witnessing it. Symptoms may include flashbacks, nightmares and severe anxiety, as well as uncontrollable thoughts about the event.",
        severity: "high",
        actionPlan: [
            "See a mental health professional specializing in trauma",
            "Attend trauma-focused psychotherapy (EMDR, cognitive processing therapy)",
            "Take prescribed medications (antidepressants, anti-anxiety medications) as directed",
            "Practice grounding techniques during flashbacks",
            "Join a support group for trauma survivors",
            "Avoid alcohol and drugs",
            "Get regular exercise",
            "Practice relaxation techniques",
            "Build a support network"
        ],
        sources: [
            { name: "Mayo Clinic - PTSD", url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355968" },
            { name: "National Institute of Mental Health - PTSD", url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd" }
        ]
    },
    {
        name: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
        symptoms: ["inattention", "hyperactivity", "impulsivity", "difficulty focusing", "disorganization", "restlessness"],
        description: "Attention-deficit/hyperactivity disorder (ADHD) is a mental health disorder that includes a combination of persistent problems, such as difficulty paying attention, hyperactivity and impulsive behavior. ADHD can affect children and adults.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider or mental health professional for diagnosis",
            "Take prescribed medications (stimulants, non-stimulants) as directed",
            "Attend behavioral therapy or coaching",
            "Create structure and routines",
            "Use organizational tools and reminders",
            "Break tasks into smaller steps",
            "Get regular exercise",
            "Practice mindfulness and relaxation techniques",
            "Work with school or workplace for accommodations if needed"
        ],
        sources: [
            { name: "Mayo Clinic - ADHD", url: "https://www.mayoclinic.org/diseases-conditions/adhd/symptoms-causes/syc-20350889" },
            { name: "National Institute of Mental Health - ADHD", url: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" }
        ]
    },
    {
        name: "Schizophrenia",
        symptoms: ["hallucinations", "delusions", "disorganized thinking", "negative symptoms", "cognitive problems"],
        description: "Schizophrenia is a serious mental disorder in which people interpret reality abnormally. Schizophrenia may result in some combination of hallucinations, delusions, and extremely disordered thinking and behavior that impairs daily functioning, and can be disabling.",
        severity: "high",
        actionPlan: [
            "See a psychiatrist for diagnosis and treatment",
            "Take prescribed antipsychotic medications exactly as directed",
            "Attend psychotherapy and psychosocial treatments",
            "Participate in family therapy and education",
            "Join a support group",
            "Avoid alcohol and recreational drugs",
            "Learn to recognize early warning signs of relapse",
            "Have a crisis plan in place",
            "Work with a case manager or care coordinator"
        ],
        sources: [
            { name: "Mayo Clinic - Schizophrenia", url: "https://www.mayoclinic.org/diseases-conditions/schizophrenia/symptoms-causes/syc-20354443" },
            { name: "National Institute of Mental Health - Schizophrenia", url: "https://www.nimh.nih.gov/health/topics/schizophrenia" }
        ]
    },
    {
        name: "Eating Disorders (Anorexia, Bulimia, Binge Eating)",
        symptoms: ["extreme weight loss", "binge eating", "purging", "preoccupation with food", "body image issues", "secretive eating"],
        description: "Eating disorders are serious conditions related to persistent eating behaviors that negatively impact your health, your emotions and your ability to function in important areas of life. The most common eating disorders are anorexia nervosa, bulimia nervosa and binge-eating disorder.",
        severity: "high",
        actionPlan: [
            "Seek professional help from a team including a therapist, dietitian, and physician",
            "Attend specialized eating disorder treatment programs",
            "Address underlying psychological issues",
            "Work with a registered dietitian to develop healthy eating patterns",
            "Take prescribed medications if needed (antidepressants, mood stabilizers)",
            "Participate in family-based therapy if appropriate",
            "Join a support group",
            "Monitor for medical complications",
            "Seek emergency care if experiencing severe physical symptoms"
        ],
        sources: [
            { name: "Mayo Clinic - Eating Disorders", url: "https://www.mayoclinic.org/diseases-conditions/eating-disorders/symptoms-causes/syc-20353603" },
            { name: "National Eating Disorders Association", url: "https://www.nationaleatingdisorders.org/" }
        ]
    },
    {
        name: "Thyroid Disorders (Hyperthyroidism, Hypothyroidism)",
        symptoms: ["fatigue", "weight changes", "mood changes", "hair loss", "temperature sensitivity", "heart rate changes", "muscle weakness"],
        description: "Thyroid disorders are conditions that affect the thyroid gland, a butterfly-shaped gland in the front of the neck. The thyroid has important roles in regulating numerous metabolic processes throughout the body. Common disorders include hyperthyroidism (overactive) and hypothyroidism (underactive).",
        severity: "moderate",
        actionPlan: [
            "See an endocrinologist for diagnosis and treatment",
            "Take prescribed thyroid medications exactly as directed",
            "Get regular blood tests to monitor thyroid function",
            "Take medications on an empty stomach as directed",
            "Don't stop medications without doctor's approval",
            "Eat a balanced diet",
            "Get regular exercise",
            "Manage stress",
            "Follow up regularly with your healthcare provider"
        ],
        sources: [
            { name: "Mayo Clinic - Hypothyroidism", url: "https://www.mayoclinic.org/diseases-conditions/hypothyroidism/symptoms-causes/syc-20350284" },
            { name: "Mayo Clinic - Hyperthyroidism", url: "https://www.mayoclinic.org/diseases-conditions/hyperthyroidism/symptoms-causes/syc-20373659" },
            { name: "American Thyroid Association", url: "https://www.thyroid.org/" }
        ]
    },
    {
        name: "Celiac Disease",
        symptoms: ["diarrhea", "abdominal pain", "bloating", "fatigue", "weight loss", "anemia", "bone loss"],
        description: "Celiac disease is an immune reaction to eating gluten, a protein found in wheat, barley and rye. Over time, this reaction damages your small intestine's lining and prevents absorption of some nutrients. The intestinal damage often causes diarrhea, fatigue, weight loss, bloating and anemia.",
        severity: "moderate",
        actionPlan: [
            "See a gastroenterologist for diagnosis",
            "Follow a strict gluten-free diet for life",
            "Read food labels carefully",
            "Avoid cross-contamination in food preparation",
            "Work with a registered dietitian",
            "Take vitamin and mineral supplements if recommended",
            "Get regular monitoring for complications",
            "Join a celiac support group"
        ],
        sources: [
            { name: "Mayo Clinic - Celiac Disease", url: "https://www.mayoclinic.org/diseases-conditions/celiac-disease/symptoms-causes/syc-20352220" },
            { name: "Celiac Disease Foundation", url: "https://celiac.org/" }
        ]
    },
    {
        name: "Diverticulitis",
        symptoms: ["abdominal pain", "fever", "nausea", "constipation", "diarrhea", "bloating"],
        description: "Diverticulitis occurs when one or more pouches (diverticula) in your digestive tract become inflamed or infected. Diverticula are small, bulging pouches that can form in the lining of your digestive system, most often in the lower part of the large intestine (colon).",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis",
            "Take prescribed antibiotics as directed",
            "Follow a clear liquid diet initially, then gradually add low-fiber foods",
            "Get plenty of rest",
            "Take over-the-counter pain relievers as recommended",
            "After recovery, gradually increase fiber in your diet",
            "Stay hydrated",
            "Exercise regularly",
            "Seek emergency care if symptoms are severe"
        ],
        sources: [
            { name: "Mayo Clinic - Diverticulitis", url: "https://www.mayoclinic.org/diseases-conditions/diverticulitis/symptoms-causes/syc-20371758" },
            { name: "National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/diverticulosis-diverticulitis" }
        ]
    },
    {
        name: "Hemorrhoids",
        symptoms: ["rectal bleeding", "itching", "pain", "swelling", "lump near anus", "discomfort"],
        description: "Hemorrhoids are swollen veins in your anus and lower rectum, similar to varicose veins. Hemorrhoids can develop inside the rectum (internal hemorrhoids) or under the skin around the anus (external hemorrhoids).",
        severity: "low",
        actionPlan: [
            "See a healthcare provider if symptoms persist or are severe",
            "Eat high-fiber foods and drink plenty of water",
            "Avoid straining during bowel movements",
            "Take warm sitz baths",
            "Apply over-the-counter hemorrhoid creams or suppositories",
            "Use ice packs to reduce swelling",
            "Take over-the-counter pain relievers if needed",
            "Consider medical procedures if symptoms are severe"
        ],
        sources: [
            { name: "Mayo Clinic - Hemorrhoids", url: "https://www.mayoclinic.org/diseases-conditions/hemorrhoids/symptoms-causes/syc-20360268" },
            { name: "National Institute of Diabetes and Digestive and Kidney Diseases", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/hemorrhoids" }
        ]
    },
    {
        name: "Glaucoma",
        symptoms: ["gradual vision loss", "tunnel vision", "eye pain", "headache", "nausea", "blurred vision", "halos around lights"],
        description: "Glaucoma is a group of eye conditions that damage the optic nerve, which is vital for good vision. This damage is often caused by abnormally high pressure in your eye. Glaucoma is one of the leading causes of blindness for people over the age of 60.",
        severity: "high",
        actionPlan: [
            "See an ophthalmologist immediately for diagnosis and treatment",
            "Use prescribed eye drops exactly as directed",
            "Take oral medications if prescribed",
            "Consider laser therapy or surgery if medications aren't effective",
            "Get regular eye exams to monitor progression",
            "Protect your eyes from injury",
            "Manage other health conditions (diabetes, high blood pressure)",
            "Don't stop medications without doctor's approval"
        ],
        sources: [
            { name: "Mayo Clinic - Glaucoma", url: "https://www.mayoclinic.org/diseases-conditions/glaucoma/symptoms-causes/syc-20372839" },
            { name: "Glaucoma Research Foundation", url: "https://www.glaucoma.org/" }
        ]
    },
    {
        name: "Cataracts",
        symptoms: ["clouded vision", "blurred vision", "sensitivity to light", "difficulty seeing at night", "fading colors", "double vision"],
        description: "A cataract is a clouding of the normally clear lens of your eye. For people who have cataracts, seeing through cloudy lenses is a bit like looking through a frosty or fogged-up window. Clouded vision caused by cataracts can make it more difficult to read, drive a car or see the expression on a friend's face.",
        severity: "moderate",
        actionPlan: [
            "See an ophthalmologist for diagnosis",
            "Use brighter lighting and magnifying lenses for reading",
            "Wear anti-glare sunglasses",
            "Consider cataract surgery when vision interferes with daily activities",
            "Get regular eye exams",
            "Protect eyes from UV light",
            "Manage other health conditions (diabetes)",
            "Don't smoke"
        ],
        sources: [
            { name: "Mayo Clinic - Cataracts", url: "https://www.mayoclinic.org/diseases-conditions/cataracts/symptoms-causes/syc-20353790" },
            { name: "National Eye Institute - Cataracts", url: "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/cataracts" }
        ]
    },
    {
        name: "Macular Degeneration",
        symptoms: ["blurred vision", "distorted vision", "dark areas in central vision", "difficulty recognizing faces", "straight lines appearing wavy"],
        description: "Macular degeneration is an eye disease that may get worse over time. It's the leading cause of severe, permanent vision loss in people over 60. It happens when the small central portion of your retina, called the macula, wears down.",
        severity: "high",
        actionPlan: [
            "See an ophthalmologist immediately for diagnosis and treatment",
            "Take prescribed medications (anti-VEGF injections) as directed",
            "Consider laser therapy or photodynamic therapy if recommended",
            "Take AREDS2 supplements if recommended by your doctor",
            "Eat a diet rich in leafy greens and fish",
            "Don't smoke",
            "Protect eyes from UV light",
            "Get regular eye exams",
            "Use low-vision aids if needed"
        ],
        sources: [
            { name: "Mayo Clinic - Macular Degeneration", url: "https://www.mayoclinic.org/diseases-conditions/macular-degeneration/symptoms-causes/syc-20350375" },
            { name: "American Macular Degeneration Foundation", url: "https://www.macular.org/" }
        ]
    },
    {
        name: "Osteoporosis",
        symptoms: ["bone fractures", "loss of height", "stooped posture", "back pain"],
        description: "Osteoporosis causes bones to become weak and brittle — so brittle that a fall or even mild stresses such as bending over or coughing can cause a fracture. Osteoporosis-related fractures most commonly occur in the hip, wrist or spine.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis and bone density testing",
            "Take prescribed medications (bisphosphonates, hormone therapy) as directed",
            "Get adequate calcium and vitamin D",
            "Do weight-bearing exercises regularly",
            "Don't smoke",
            "Limit alcohol consumption",
            "Prevent falls (remove hazards, use assistive devices if needed)",
            "Eat a diet rich in calcium and vitamin D"
        ],
        sources: [
            { name: "Mayo Clinic - Osteoporosis", url: "https://www.mayoclinic.org/diseases-conditions/osteoporosis/symptoms-causes/syc-20351968" },
            { name: "National Osteoporosis Foundation", url: "https://www.nof.org/" }
        ]
    },
    {
        name: "Fibromyalgia",
        symptoms: ["widespread pain", "fatigue", "sleep problems", "cognitive problems", "headaches", "depression", "anxiety"],
        description: "Fibromyalgia is a disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory and mood issues. Researchers believe that fibromyalgia amplifies painful sensations by affecting how your brain and spinal cord process painful and nonpainful signals.",
        severity: "moderate",
        actionPlan: [
            "See a rheumatologist for diagnosis and treatment",
            "Take prescribed medications (pain relievers, antidepressants, anti-seizure drugs) as directed",
            "Get regular exercise (low-impact activities)",
            "Get adequate sleep",
            "Practice stress management techniques",
            "Consider physical therapy",
            "Try complementary therapies (massage, acupuncture, yoga)",
            "Join a support group"
        ],
        sources: [
            { name: "Mayo Clinic - Fibromyalgia", url: "https://www.mayoclinic.org/diseases-conditions/fibromyalgia/symptoms-causes/syc-20354780" },
            { name: "Arthritis Foundation - Fibromyalgia", url: "https://www.arthritis.org/diseases/fibromyalgia" }
        ]
    },
    {
        name: "Chronic Fatigue Syndrome",
        symptoms: ["severe fatigue", "sleep problems", "cognitive problems", "muscle pain", "joint pain", "headaches", "sore throat"],
        description: "Chronic fatigue syndrome (CFS) is a complicated disorder characterized by extreme fatigue that lasts for at least six months and that can't be fully explained by an underlying medical condition. The fatigue worsens with physical or mental activity, but doesn't improve with rest.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis",
            "Work with a team of specialists",
            "Pace activities to avoid overexertion",
            "Get adequate sleep",
            "Manage stress",
            "Consider cognitive behavioral therapy",
            "Try graded exercise therapy under supervision",
            "Join a support group",
            "Manage other symptoms with medications as needed"
        ],
        sources: [
            { name: "Mayo Clinic - Chronic Fatigue Syndrome", url: "https://www.mayoclinic.org/diseases-conditions/chronic-fatigue-syndrome/symptoms-causes/syc-20360490" },
            { name: "CDC - ME/CFS", url: "https://www.cdc.gov/me-cfs/index.html" }
        ]
    },
    {
        name: "Sleep Apnea",
        symptoms: ["loud snoring", "gasping for air", "excessive daytime sleepiness", "morning headache", "difficulty concentrating", "irritability"],
        description: "Sleep apnea is a potentially serious sleep disorder in which breathing repeatedly stops and starts. If you snore loudly and feel tired even after a full night's sleep, you might have sleep apnea. The main types are obstructive sleep apnea and central sleep apnea.",
        severity: "moderate",
        actionPlan: [
            "See a sleep specialist for diagnosis (sleep study)",
            "Use CPAP (continuous positive airway pressure) machine as prescribed",
            "Lose weight if overweight",
            "Avoid alcohol and sedatives before bed",
            "Sleep on your side instead of your back",
            "Quit smoking",
            "Treat nasal congestion",
            "Consider oral appliances or surgery if CPAP isn't effective"
        ],
        sources: [
            { name: "Mayo Clinic - Sleep Apnea", url: "https://www.mayoclinic.org/diseases-conditions/sleep-apnea/symptoms-causes/syc-20377631" },
            { name: "American Sleep Apnea Association", url: "https://www.sleepapnea.org/" }
        ]
    },
    {
        name: "Insomnia",
        symptoms: ["difficulty falling asleep", "waking up during the night", "waking up too early", "daytime fatigue", "irritability", "difficulty concentrating"],
        description: "Insomnia is a common sleep disorder that can make it hard to fall asleep, hard to stay asleep, or cause you to wake up too early and not be able to get back to sleep. You may still feel tired when you wake up. Insomnia can sap not only your energy level and mood but also your health, work performance and quality of life.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider if insomnia persists",
            "Practice good sleep hygiene (consistent sleep schedule, dark quiet room)",
            "Avoid caffeine, alcohol, and large meals before bed",
            "Create a relaxing bedtime routine",
            "Use your bed only for sleep and sex",
            "Get regular exercise (but not too close to bedtime)",
            "Consider cognitive behavioral therapy for insomnia",
            "Take prescribed sleep medications only as directed and short-term"
        ],
        sources: [
            { name: "Mayo Clinic - Insomnia", url: "https://www.mayoclinic.org/diseases-conditions/insomnia/symptoms-causes/syc-20355167" },
            { name: "National Sleep Foundation", url: "https://www.sleepfoundation.org/" }
        ]
    },
    {
        name: "Restless Legs Syndrome",
        symptoms: ["urge to move legs", "uncomfortable sensations", "worsening at night", "sleep problems", "twitching", "crawling sensations"],
        description: "Restless legs syndrome (RLS) is a condition that causes an uncontrollable urge to move your legs, usually because of an uncomfortable sensation. It typically happens in the evening or nighttime hours when you're sitting or lying down. Moving eases the unpleasant feeling temporarily.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis",
            "Take prescribed medications (dopamine agonists, gabapentin) as directed",
            "Try lifestyle changes: regular exercise, leg massages, warm baths",
            "Avoid caffeine, alcohol, and tobacco",
            "Establish good sleep habits",
            "Check iron levels and take supplements if deficient",
            "Consider treating underlying conditions (kidney disease, diabetes)",
            "Use compression stockings if helpful"
        ],
        sources: [
            { name: "Mayo Clinic - Restless Legs Syndrome", url: "https://www.mayoclinic.org/diseases-conditions/restless-legs-syndrome/symptoms-causes/syc-20377168" },
            { name: "Restless Legs Syndrome Foundation", url: "https://www.rls.org/" }
        ]
    },
    {
        name: "Alzheimer's Disease",
        symptoms: ["memory loss", "confusion", "difficulty with familiar tasks", "language problems", "disorientation", "poor judgment", "personality changes"],
        description: "Alzheimer's disease is a progressive neurologic disorder that causes the brain to shrink (atrophy) and brain cells to die. Alzheimer's disease is the most common cause of dementia — a continuous decline in thinking, behavioral and social skills that affects a person's ability to function independently.",
        severity: "critical",
        actionPlan: [
            "See a neurologist for diagnosis",
            "Take prescribed medications (cholinesterase inhibitors, memantine) as directed",
            "Create a safe and supportive environment",
            "Establish routines and structure",
            "Provide memory aids and reminders",
            "Ensure proper nutrition and hydration",
            "Plan for future care needs",
            "Join support groups for caregivers",
            "Consider clinical trials if appropriate"
        ],
        sources: [
            { name: "Mayo Clinic - Alzheimer's Disease", url: "https://www.mayoclinic.org/diseases-conditions/alzheimers-disease/symptoms-causes/syc-20350447" },
            { name: "Alzheimer's Association", url: "https://www.alz.org/" }
        ]
    },
    {
        name: "Dementia",
        symptoms: ["memory loss", "difficulty communicating", "confusion", "personality changes", "difficulty with reasoning", "inappropriate behavior"],
        description: "Dementia describes a group of symptoms affecting memory, thinking and social abilities severely enough to interfere with daily functioning. It isn't a specific disease, but several diseases can cause dementia. Though dementia generally involves memory loss, memory loss has different causes.",
        severity: "high",
        actionPlan: [
            "See a neurologist for diagnosis and to identify the cause",
            "Take prescribed medications as directed",
            "Create a safe and supportive environment",
            "Establish routines and structure",
            "Provide memory aids and reminders",
            "Ensure proper nutrition and hydration",
            "Plan for future care needs",
            "Join support groups for caregivers",
            "Consider day programs or respite care"
        ],
        sources: [
            { name: "Mayo Clinic - Dementia", url: "https://www.mayoclinic.org/diseases-conditions/dementia/symptoms-causes/syc-20352013" },
            { name: "Alzheimer's Association", url: "https://www.alz.org/" }
        ]
    },
    {
        name: "Bell's Palsy",
        symptoms: ["sudden weakness", "facial drooping", "difficulty closing eye", "drooling", "loss of taste", "headache"],
        description: "Bell's palsy is a condition that causes sudden, temporary weakness or paralysis of the muscles in one side of the face. It's believed to be caused by inflammation of the facial nerve. Most people recover fully within weeks to months.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider immediately for diagnosis",
            "Take prescribed corticosteroids to reduce inflammation",
            "Take antiviral medications if prescribed",
            "Protect the affected eye (use eye drops, eye patch)",
            "Do facial exercises as recommended",
            "Get plenty of rest",
            "Apply warm compresses to the face",
            "Massage the affected facial muscles gently",
            "Most people recover fully, but follow up with your doctor"
        ],
        sources: [
            { name: "Mayo Clinic - Bell's Palsy", url: "https://www.mayoclinic.org/diseases-conditions/bells-palsy/symptoms-causes/syc-20370028" },
            { name: "National Institute of Neurological Disorders and Stroke", url: "https://www.ninds.nih.gov/health-information/disorders/bells-palsy" }
        ]
    },
    {
        name: "Trigeminal Neuralgia",
        symptoms: ["severe facial pain", "electric shock-like pain", "brief episodes", "triggered by touch", "pain in jaw, cheek, or forehead"],
        description: "Trigeminal neuralgia is a chronic pain condition that affects the trigeminal nerve, which carries sensation from your face to your brain. If you have trigeminal neuralgia, even mild stimulation of your face — such as brushing your teeth or putting on makeup — may trigger a jolt of excruciating pain.",
        severity: "high",
        actionPlan: [
            "See a neurologist for diagnosis and treatment",
            "Take prescribed medications (anticonvulsants, tricyclic antidepressants) as directed",
            "Avoid triggers if possible",
            "Consider surgical procedures if medications aren't effective",
            "Apply heat or cold to the affected area",
            "Practice stress management",
            "Join a support group",
            "Work with a pain management specialist"
        ],
        sources: [
            { name: "Mayo Clinic - Trigeminal Neuralgia", url: "https://www.mayoclinic.org/diseases-conditions/trigeminal-neuralgia/symptoms-causes/syc-20353344" },
            { name: "National Institute of Neurological Disorders and Stroke", url: "https://www.ninds.nih.gov/health-information/disorders/trigeminal-neuralgia" }
        ]
    },
    {
        name: "Sciatica",
        symptoms: ["lower back pain", "leg pain", "numbness", "tingling", "weakness", "shooting pain"],
        description: "Sciatica refers to pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg. Typically, sciatica affects only one side of your body.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis",
            "Take over-the-counter pain relievers (NSAIDs) as needed",
            "Apply heat or ice to the affected area",
            "Do gentle stretching exercises",
            "Consider physical therapy",
            "Try epidural steroid injections if recommended",
            "Maintain good posture",
            "Avoid prolonged sitting",
            "Consider surgery if conservative treatments fail"
        ],
        sources: [
            { name: "Mayo Clinic - Sciatica", url: "https://www.mayoclinic.org/diseases-conditions/sciatica/symptoms-causes/syc-20377435" },
            { name: "American Academy of Orthopaedic Surgeons", url: "https://orthoinfo.aaos.org/en/diseases--conditions/sciatica" }
        ]
    },
    {
        name: "Herniated Disk",
        symptoms: ["back pain", "leg pain", "numbness", "tingling", "weakness", "muscle spasms"],
        description: "A herniated disk refers to a problem with one of the rubbery cushions (disks) that sit between the bones (vertebrae) that stack to make your spine. A herniated disk, which can occur in any part of the spine, can irritate a nearby nerve.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis",
            "Rest initially, then gradually resume activities",
            "Take over-the-counter pain relievers (NSAIDs) as needed",
            "Apply heat or ice to the affected area",
            "Consider physical therapy",
            "Try epidural steroid injections if recommended",
            "Maintain good posture",
            "Do strengthening exercises for your back",
            "Consider surgery if conservative treatments fail after 6 weeks"
        ],
        sources: [
            { name: "Mayo Clinic - Herniated Disk", url: "https://www.mayoclinic.org/diseases-conditions/herniated-disk/symptoms-causes/syc-20354095" },
            { name: "American Academy of Orthopaedic Surgeons", url: "https://orthoinfo.aaos.org/en/diseases--conditions/herniated-disk" }
        ]
    },
    {
        name: "Sarcoidosis",
        symptoms: ["fatigue", "fever", "swollen lymph nodes", "weight loss", "shortness of breath", "cough", "skin lesions"],
        description: "Sarcoidosis is a disease characterized by the growth of tiny collections of inflammatory cells (granulomas) in any part of your body — most commonly the lungs and lymph nodes. But it can also affect the eyes, skin, heart and other organs.",
        severity: "moderate",
        actionPlan: [
            "See a healthcare provider for diagnosis",
            "Take prescribed medications (corticosteroids, immunosuppressants) as directed",
            "Get regular monitoring of affected organs",
            "Get plenty of rest",
            "Eat a healthy, balanced diet",
            "Avoid smoking",
            "Protect your eyes if affected",
            "Follow up regularly with your healthcare provider"
        ],
        sources: [
            { name: "Mayo Clinic - Sarcoidosis", url: "https://www.mayoclinic.org/diseases-conditions/sarcoidosis/symptoms-causes/syc-20350358" },
            { name: "Foundation for Sarcoidosis Research", url: "https://www.stopsarcoidosis.org/" }
        ]
    }
];

