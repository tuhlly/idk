// Search functionality
const symptomInput = document.getElementById('symptomInput');
const searchBtn = document.getElementById('searchBtn');
const imageUpload = document.getElementById('imageUpload');
const uploadIcon = document.querySelector('.upload-icon');
const suggestionsDiv = document.getElementById('suggestions');
const resultsSection = document.getElementById('resultsSection');
const resultsContainer = document.getElementById('resultsContainer');
const noResults = document.getElementById('noResults');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const removeImage = document.getElementById('removeImage');
const imageResults = document.getElementById('imageResults');
const imageResultText = document.getElementById('imageResultText');
const sortBy = document.getElementById('sortBy');

let uploadedImage = null;
let currentMatches = [];

// Common symptom suggestions - kept for internal matching
const commonSymptoms = [
    "fever", "cough", "headache", "sore throat", "runny nose", "congestion",
    "nausea", "vomiting", "diarrhea", "fatigue", "body aches", "chills",
    "shortness of breath", "chest pain", "abdominal pain", "dizziness",
    "sneezing", "wheezing", "rash", "itchy eyes", "swollen lymph nodes",
    "heartache", "shallow breathing", "fainting", "rapid heartbeat", "palpitations",
    "back pain", "joint pain", "muscle pain", "stiffness", "weakness",
    "confusion", "memory loss", "blurred vision", "eye pain", "ear pain",
    "toothache", "jaw pain", "neck pain", "shoulder pain", "numbness",
    "tingling", "burning sensation", "itching", "swelling", "redness",
    "bleeding", "bruising", "pale skin", "yellow skin", "sweating",
    "hot flashes", "cold hands", "tremors", "seizures", "loss of balance"
];

// Display common symptom suggestions - disabled to keep interface clean
function displaySuggestions() {
    suggestionsDiv.innerHTML = '';
    // Suggestions list removed for cleaner interface
}

// Handle image upload
uploadIcon.addEventListener('click', () => {
    imageUpload.click();
});

removeImage.addEventListener('click', () => {
    uploadedImage = null;
    imageUpload.value = '';
    imagePreview.style.display = 'none';
    imageResults.style.display = 'none';
    resultsSection.style.display = 'none';
});

// Function to analyze uploaded image
async function analyzeUploadedImage() {
    if (!uploadedImage) {
        return;
    }
    
    // Clear previous symptom search results
    resultsSection.style.display = 'none';
    noResults.style.display = 'none';
    
    // Show image analysis results
    imageResults.style.display = 'block';
    imageResultText.textContent = 'Analyzing image...';
    
    // Use setTimeout to allow UI to update before heavy processing
    setTimeout(async () => {
        try {
            const startTime = Date.now();
            const result = await searchImageWithGoogle(uploadedImage);
            const elapsed = Date.now() - startTime;
            
            if (result.timeout) {
                imageResultText.textContent = 'Analysis timed out. Please try describing your symptoms instead or upload a clearer image.';
            } else if (result.match) {
                imageResultText.textContent = `Looks like ${result.match}. ${result.description || ''}`;
            } else {
                imageResultText.textContent = 'No match found for this image. Try describing your symptoms instead.';
            }
        } catch (error) {
            console.error('Image search error:', error);
            imageResultText.textContent = 'Unable to analyze image. Try describing your symptoms instead.';
        }
    }, 10);
}

// Show preview when image is uploaded (but don't analyze until search is clicked)
imageUpload.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async (event) => {
            uploadedImage = event.target.result;
            previewImg.src = uploadedImage;
            imagePreview.style.display = 'block';
            // Don't auto-analyze - wait for user to click search button
        };
        reader.readAsDataURL(file);
    }
});

// Search image with Google reverse image search
// Note: Due to CORS restrictions, we use client-side image analysis
// For production use, integrate with Google Custom Search API or similar service
async function searchImageWithGoogle(imageData) {
    return await analyzeImageForSymptoms(imageData);
}

// Analyze image for visual symptoms
async function analyzeImageForSymptoms(imageData) {
    // Create an image element to analyze
    const img = new Image();
    img.src = imageData;
    
    return new Promise((resolve) => {
        // Set timeout to ensure completion within 30 seconds
        const timeout = setTimeout(() => {
            resolve({ match: null, timeout: true });
        }, 30000);
        
        img.onload = () => {
            // Clear timeout if image loads successfully
            clearTimeout(timeout);
            // Basic image analysis - look for common visual symptoms
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Limit canvas size for performance - much smaller for faster processing
            const maxSize = 150;
            let width = img.width;
            let height = img.height;
            if (width > maxSize || height > maxSize) {
                const ratio = Math.min(maxSize / width, maxSize / height);
                width = Math.floor(width * ratio);
                height = Math.floor(height * ratio);
            }
            
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            
            const imageDataObj = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageDataObj.data;
            
            // Analyze colors for common visual symptoms
            let redCount = 0;
            let yellowCount = 0;
            let paleCount = 0;
            let blueCount = 0;
            let totalPixels = 0;
            
            // Sample pixels very aggressively (every 64th pixel) for maximum speed
            const step = 64;
            for (let i = 0; i < data.length; i += step * 4) {
                totalPixels++;
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                
                // Simplified checks for faster processing
                // Check for redness (rash, inflammation, irritation)
                if (r > 190 && r > g * 1.4 && r > b * 1.4) {
                    redCount++;
                }
                // Check for yellowing (jaundice)
                else if (r > 210 && g > 210 && b < 140) {
                    yellowCount++;
                }
                // Check for paleness (anemia, poor circulation)
                else if (r > 220 && g > 220 && b > 220) {
                    paleCount++;
                }
                // Check for bluish tint (cyanosis, poor oxygenation)
                else if (b > 160 && b > r * 1.3 && b > g * 1.3) {
                    blueCount++;
                }
            }
            
            const redRatio = redCount / totalPixels;
            const yellowRatio = yellowCount / totalPixels;
            const paleRatio = paleCount / totalPixels;
            const blueRatio = blueCount / totalPixels;
            
            // Match to diseases based on visual analysis
            // More conservative thresholds to improve accuracy
            if (redRatio > 0.18) {
                // Match to diseases with rash/redness symptoms
                const rashDiseases = diseasesDatabase.filter(d => 
                    d.symptoms.some(s => ['rash', 'redness', 'inflammation', 'swelling'].some(keyword => 
                        s.toLowerCase().includes(keyword)
                    ))
                );
                if (rashDiseases.length > 0) {
                    resolve({
                        match: rashDiseases[0].name.toLowerCase(),
                        description: `The image shows significant redness that may indicate ${rashDiseases[0].name} or a similar skin condition.`
                    });
                } else {
                    resolve({
                        match: 'a skin rash or inflammation',
                        description: 'The image shows signs of redness that may indicate a rash, inflammation, or skin condition.'
                    });
                }
            } else if (yellowRatio > 0.15) {
                resolve({
                    match: 'jaundice',
                    description: 'The image shows yellowing that may indicate jaundice or liver-related conditions. This could be related to hepatitis, liver disease, or other conditions affecting bilirubin levels.'
                });
            } else if (paleRatio > 0.40) {
                const anemiaDiseases = diseasesDatabase.filter(d => 
                    d.name.toLowerCase().includes('anemia') || 
                    d.symptoms.some(s => s.toLowerCase().includes('pale'))
                );
                if (anemiaDiseases.length > 0) {
                    resolve({
                        match: anemiaDiseases[0].name.toLowerCase(),
                        description: `The image shows paleness that may indicate ${anemiaDiseases[0].name}.`
                    });
                } else {
                    resolve({
                        match: 'pale skin, possibly indicating anemia',
                        description: 'The image shows paleness that may indicate anemia, low blood count, or poor circulation.'
                    });
                }
            } else if (blueRatio > 0.12) {
                resolve({
                    match: 'cyanosis or poor oxygenation',
                    description: 'The image shows a bluish tint that may indicate cyanosis, which can be related to respiratory or cardiovascular conditions.'
                });
            } else {
                // Skip secondary analysis for speed - just return no match
                resolve({ match: null });
            }
            
            // Clear timeout on successful completion
            clearTimeout(timeout);
        };
        
        img.onerror = () => {
            clearTimeout(timeout);
            resolve({ match: null });
        };
    });
}

// Detect visual symptoms from image - optimized for speed
function detectVisualSymptoms(img, imageData) {
    const symptoms = [];
    const data = imageData.data;
    
    // Basic pattern detection - sample less frequently for speed
    let redness = 0;
    let sampleCount = 0;
    
    // Sample every 64th pixel for faster processing
    for (let i = 0; i < data.length; i += 64) {
        sampleCount++;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        if (r > 180 && g < 120 && b < 120) {
            redness++;
        }
    }
    
    if (redness > sampleCount / 10) {
        symptoms.push('rash');
        symptoms.push('redness');
    }
    
    return symptoms;
}

// Search for diseases based on symptoms
function searchDiseasesBySymptoms(inputSymptoms) {
    const inputSymptomsLower = inputSymptoms.map(s => s.toLowerCase());
    
    const matches = diseasesDatabase.map(disease => {
        const matchedSymptoms = disease.symptoms.filter(symptom => 
            inputSymptomsLower.some(inputSymptom => {
                const symptomLower = symptom.toLowerCase();
                return symptomLower.includes(inputSymptom) || 
                       inputSymptom.includes(symptomLower) ||
                       symptomLower === inputSymptom;
            })
        );
        
        return {
            disease: disease,
            matchCount: matchedSymptoms.length,
            matchedSymptoms: matchedSymptoms,
            matchScore: matchedSymptoms.length / disease.symptoms.length
        };
    })
    .filter(match => match.matchCount > 0)
    .sort((a, b) => {
        if (b.matchCount !== a.matchCount) {
            return b.matchCount - a.matchCount;
        }
        return b.matchScore - a.matchScore;
    });
    
    return matches;
}

// Search for diseases based on symptoms
function searchDiseases() {
    // If an image is uploaded, analyze the image instead
    if (uploadedImage) {
        analyzeUploadedImage();
        return;
    }
    
    const inputText = symptomInput.value.toLowerCase().trim();
    
    if (!inputText) {
        alert('Please enter at least one symptom');
        return;
    }

    // Hide image results
    imageResults.style.display = 'none';

    // Parse symptoms from input - split by comma and clean up
    const inputSymptoms = inputText
        .split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .map(s => s.toLowerCase());
    
    // Find matching diseases
    const matches = diseasesDatabase.map(disease => {
        const matchedSymptoms = disease.symptoms.filter(symptom => 
            inputSymptoms.some(inputSymptom => {
                // More flexible matching - check if symptom contains input or vice versa
                const symptomLower = symptom.toLowerCase();
                return symptomLower.includes(inputSymptom) || 
                       inputSymptom.includes(symptomLower) ||
                       symptomLower === inputSymptom;
            })
        );
        
        return {
            disease: disease,
            matchCount: matchedSymptoms.length,
            matchedSymptoms: matchedSymptoms,
            matchScore: matchedSymptoms.length / disease.symptoms.length
        };
    })
    .filter(match => match.matchCount > 0)
    .sort((a, b) => {
        // Sort by match count first, then by match score
        if (b.matchCount !== a.matchCount) {
            return b.matchCount - a.matchCount;
        }
        return b.matchScore - a.matchScore;
    });

    // Store matches for sorting
    currentMatches = matches;
    
    // Display results
    if (matches.length > 0) {
        sortAndDisplayResults();
        resultsSection.style.display = 'block';
        noResults.style.display = 'none';
    } else {
        resultsSection.style.display = 'none';
        noResults.style.display = 'block';
    }
}

// Sort and display results based on selected sort option
function sortAndDisplayResults() {
    if (!currentMatches || currentMatches.length === 0) {
        return;
    }
    
    const sortValue = sortBy.value;
    let sortedMatches = [...currentMatches];
    
    switch(sortValue) {
        case 'severity':
            const severityOrder = { 'critical': 4, 'high': 3, 'moderate': 2, 'low': 1 };
            sortedMatches.sort((a, b) => {
                return severityOrder[b.disease.severity] - severityOrder[a.disease.severity];
            });
            break;
        case 'alphabetical':
            sortedMatches.sort((a, b) => {
                return a.disease.name.localeCompare(b.disease.name);
            });
            break;
        case 'matchCount':
            sortedMatches.sort((a, b) => {
                if (b.matchCount !== a.matchCount) {
                    return b.matchCount - a.matchCount;
                }
                return b.matchScore - a.matchScore;
            });
            break;
        case 'relevance':
        default:
            // Already sorted by relevance (match count and score)
            break;
    }
    
    displayResults(sortedMatches);
}

// Display disease results
function displayResults(matches) {
    resultsContainer.innerHTML = '';
    
    matches.forEach((match, index) => {
        const disease = match.disease;
        const card = document.createElement('div');
        card.className = 'disease-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const severityClass = `severity-${disease.severity}`;
        const severityLabels = {
            'low': 'Low Severity',
            'moderate': 'Moderate Severity',
            'high': 'High Severity',
            'critical': 'Critical - Seek Immediate Care'
        };
        
        card.innerHTML = `
            <div class="disease-header">
                <div>
                    <h3 class="disease-title">${disease.name}</h3>
                    <p style="color: #666; font-size: 0.9rem;">Matched ${match.matchCount} of your symptom(s): ${match.matchedSymptoms.join(', ')}</p>
                </div>
                <span class="severity-badge ${severityClass}">${severityLabels[disease.severity]}</span>
            </div>
            
            ${disease.image ? `<img src="${disease.image}" alt="${disease.name}" class="disease-image" onerror="this.style.display='none'">` : ''}
            
            <div class="disease-description">
                ${disease.description}
            </div>
            
            <div class="disease-section">
                <h4 class="section-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 11l3 3L22 4"></path>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    Recommended Action Plan
                </h4>
                <div class="action-plan">
                    <ul>
                        ${disease.actionPlan.map(action => `<li>${action}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="sources">
                <p class="sources-title">Credible Sources:</p>
                ${disease.sources.map(source => 
                    `<a href="${source.url}" target="_blank" rel="noopener noreferrer" class="source-link">${source.name}</a>`
                ).join('')}
            </div>
        `;
        
        resultsContainer.appendChild(card);
    });
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Event listeners
searchBtn.addEventListener('click', searchDiseases);

symptomInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchDiseases();
    }
});

// Sort dropdown change listener
sortBy.addEventListener('change', () => {
    if (currentMatches && currentMatches.length > 0) {
        sortAndDisplayResults();
    }
});

// Display suggestions on load
displaySuggestions();

// Focus input on load
window.addEventListener('load', () => {
    symptomInput.focus();
});
