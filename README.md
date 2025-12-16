# Health Symptom Checker

A modern web application that helps users find information about diseases and illnesses based on their symptoms. This tool provides credible medical information, severity indicators, and actionable next steps.

## Features

- **Symptom-based Search**: Enter symptoms to find matching conditions
- **Comprehensive Disease Database**: Includes detailed information about various illnesses
- **Credible Sources**: All information is linked to reputable medical sources (Mayo Clinic, CDC, WHO, etc.)
- **Severity Indicators**: Color-coded severity levels (Low, Moderate, High, Critical)
- **Action Plans**: Step-by-step recommendations for each condition
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Image Support**: Visual representations for better understanding

## How to Use

1. Open `index.html` in a web browser
2. Enter your symptoms in the search box (comma-separated or click suggested symptoms)
3. Click "Search" or press Enter
4. Review the matching conditions with their descriptions, severity, and action plans
5. Click on source links to read more from credible medical websites

## Important Disclaimer

⚠️ **This tool is for informational purposes only and does not replace professional medical advice. Always consult a healthcare provider for diagnosis and treatment.**

## Technical Details

- Pure HTML, CSS, and JavaScript (no dependencies)
- Responsive design that works on desktop and mobile
- Fast client-side search algorithm
- Easy to extend with more diseases and symptoms

## Adding More Diseases

To add more diseases, edit `diseases.js` and add new objects to the `diseasesDatabase` array. Each disease object should include:

- `name`: Disease name
- `symptoms`: Array of symptom keywords
- `description`: Detailed description
- `severity`: "low", "moderate", "high", or "critical"
- `image`: URL to an image (optional)
- `actionPlan`: Array of action steps
- `sources`: Array of objects with `name` and `url` for credible sources

## Browser Compatibility

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

# idk
