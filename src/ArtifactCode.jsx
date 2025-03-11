<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glaze Ratio Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
            color: #333;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        .calculator {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input[type="number"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-bottom: 5px;
        }
        .results {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 15px;
            margin-top: 20px;
        }
        .result-item {
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
        }
        .value {
            font-weight: bold;
            color: #2980b9;
        }
        .separator {
            margin: 20px 0;
            border-top: 1px solid #eee;
        }
        .instructions {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .example {
            background-color: #eaf7ff;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
        }
        .formula {
            font-family: monospace;
            background-color: #f0f0f0;
            padding: 8px;
            border-radius: 4px;
            margin: 8px 0;
        }
    </style>
</head>
<body>
    <h1>Ceramic Glaze Additive Calculator</h1>
    
    <div class="calculator">
        <h2>Recipe Calculator</h2>
        
        <div class="form-group">
            <label for="dryBase">Dry Base (g):</label>
            <input type="number" id="dryBase" min="0" step="0.01" value="100">
        </div>
        
        <div class="form-group">
            <label for="water">Water (g):</label>
            <input type="number" id="water" min="0" step="0.01" value="100">
        </div>
        
        <div class="form-group">
            <label for="existingAdditive">Existing Additive (g):</label>
            <input type="number" id="existingAdditive" min="0" step="0.01" value="4">
            <small>e.g., rutile, oxide, stain already added to the base recipe</small>
        </div>
        
        <div class="separator"></div>
        
        <div class="form-group">
            <label for="portionSize">Portion Size (g):</label>
            <input type="number" id="portionSize" min="0" step="0.01" value="50">
        </div>
        
        <div class="form-group">
            <label for="newAdditivePercent">New Additive Percentage (%):</label>
            <input type="number" id="newAdditivePercent" min="0" max="100" step="0.01" value="4">
            <small>Percentage based on original dry base only</small>
        </div>
        
        <div class="results">
            <h3>Base Recipe Analysis</h3>
            
            <div class="result-item">
                <span>Total Base Mixture (without additives):</span>
                <span id="baseMixture" class="value">200.00 g</span>
            </div>
            
            <div class="result-item">
                <span>Total Recipe (with existing additive):</span>
                <span id="totalWithAdditive" class="value">204.00 g</span>
            </div>
            
            <div class="separator"></div>
            
            <div class="result-item">
                <span>Dry Base Ratio:</span>
                <span id="dryRatio" class="value">49.02%</span>
            </div>
            
            <div class="result-item">
                <span>Water Ratio:</span>
                <span id="waterRatio" class="value">49.02%</span>
            </div>
            
            <div class="result-item">
                <span>Existing Additive Ratio:</span>
                <span id="additiveRatio" class="value">1.96%</span>
            </div>
            
            <h3>Portion Analysis</h3>
            
            <div class="result-item">
                <span>Dry Base in Portion:</span>
                <span id="dryInPortion" class="value">24.51 g</span>
                <div><small>This is the actual amount of dry base material in your portion</small></div>
            </div>
            
            <div class="result-item">
                <span>Water in Portion:</span>
                <span id="waterInPortion" class="value">24.51 g</span>
            </div>
            
            <div class="result-item">
                <span>Existing Additive in Portion:</span>
                <span id="additiveInPortion" class="value">0.98 g</span>
            </div>
            
            <h3>New Additive Calculation</h3>
            
            <div class="result-item">
                <span>New Additive Needed:</span>
                <span id="newAdditiveNeeded" class="value">0.98 g</span>
                <div><small>This is calculated as the specified percentage of the dry base in your portion</small></div>
            </div>
            
            <div class="result-item">
                <span>Calculation Method:</span>
                <div class="formula">
                    <p>New Additive Amount = (New Additive %) × (Dry Base in Portion)</p>
                    <p>New Additive Amount = (4%) × (24.51g) = 0.98g</p>
                </div>
            </div>
            
            <div class="separator"></div>
            
            <div class="result-item">
                <span>Final Portion Weight (with new additive):</span>
                <span id="finalWeight" class="value">50.98 g</span>
            </div>
        </div>
    </div>
    
    <div class="instructions">
        <h2>What This Calculator Does</h2>
        <p>This calculator helps ceramicists and glaze formulators correctly calculate additive amounts when working with portions of a base glaze that already contains additives.</p>
        <ol>
            <li>Takes your base glaze recipe (dry material, water, and any existing additives)</li>
            <li>Calculates exactly how much of each component is in a smaller portion</li>
            <li>Determines the precise amount of new additive needed based on the dry base content only</li>
        </ol>
        
        <h2>How to Use It</h2>
        
        <h3>Step 1: Enter Your Base Recipe</h3>
        <ul>
            <li>In "Dry Base (g)" enter the amount of dry material in your full recipe (without water or additives)</li>
            <li>In "Water (g)" enter the amount of water in your full recipe</li>
            <li>In "Existing Additive (g)" enter any additives already in your base recipe (e.g., rutile, oxide, stain)</li>
        </ul>
        
        <h3>Step 2: Set Your Working Portion</h3>
        <ul>
            <li>In "Portion Size (g)" enter how much of the mixture you want to work with</li>
            <li>The calculator will show you exactly how much dry base, water, and existing additive are in this portion</li>
        </ul>
        
        <h3>Step 3: Set New Additive Percentage</h3>
        <ul>
            <li>In "New Additive Percentage (%)" enter the percentage for your new additive</li>
            <li>This percentage is calculated based on the dry base content only, not the total mixture</li>
            <li>The calculator will tell you exactly how much new additive to add</li>
        </ul>
        
        <div class="example">
            <h3>Example: Glaze with Rutile and Cobalt</h3>
            <p><strong>Base Recipe:</strong></p>
            <ul>
                <li>100g dry glaze base</li>
                <li>100g water</li>
                <li>4g rutile (4% of dry base)</li>
                <li>Total: 204g</li>
            </ul>
            <p><strong>Working Portion:</strong></p>
            <ul>
                <li>50g portion of the above mixture</li>
                <li>Want to add cobalt at 4% of dry base</li>
            </ul>
            <p><strong>The calculator shows:</strong></p>
            <ol>
                <li>Your 50g portion contains 24.51g dry base, 24.51g water, and 0.98g rutile</li>
                <li>You need to add 0.98g cobalt (4% of 24.51g dry base)</li>
                <li>Your final mixture will weigh 50.98g</li>
            </ol>
        </div>
        
        <h2>Important Notes</h2>
        <ul>
            <li>This calculator ensures that additives are calculated as a percentage of the <strong>dry base only</strong>, not the total mixture</li>
            <li>The calculator properly accounts for existing additives when determining the composition of your portion</li>
            <li>All percentage calculations for additives are based on the original dry base weight, following standard ceramic practice</li>
        </ul>
    </div>

    <script>
        // Get all input elements
        const dryBaseInput = document.getElementById('dryBase');
        const waterInput = document.getElementById('water');
        const existingAdditiveInput = document.getElementById('existingAdditive');
        const portionSizeInput = document.getElementById('portionSize');
        const newAdditivePercentInput = document.getElementById('newAdditivePercent');
        
        // Get all result elements
        const baseMixture = document.getElementById('baseMixture');
        const totalWithAdditive = document.getElementById('totalWithAdditive');
        const dryRatio = document.getElementById('dryRatio');
        const waterRatio = document.getElementById('waterRatio');
        const additiveRatio = document.getElementById('additiveRatio');
        const dryInPortion = document.getElementById('dryInPortion');
        const waterInPortion = document.getElementById('waterInPortion');
        const additiveInPortion = document.getElementById('additiveInPortion');
        const newAdditiveNeeded = document.getElementById('newAdditiveNeeded');
        const finalWeight = document.getElementById('finalWeight');
        
        // Function to calculate and update results
        function updateCalculator() {
            // Get input values
            const dryBase = parseFloat(dryBaseInput.value) || 0;
            const water = parseFloat(waterInput.value) || 0;
            const existingAdditive = parseFloat(existingAdditiveInput.value) || 0;
            const portionSize = parseFloat(portionSizeInput.value) || 0;
            const newAdditivePercentage = parseFloat(newAdditivePercentInput.value) || 0;
            
            // Calculate base mixture total (without additives)
            const baseMixtureTotal = dryBase + water;
            
            // Calculate total with existing additive
            const totalWithAdditiveValue = baseMixtureTotal + existingAdditive;
            
            // Calculate ratios based on total with existing additive
            const dryRatioValue = totalWithAdditiveValue > 0 ? (dryBase / totalWithAdditiveValue) * 100 : 0;
            const waterRatioValue = totalWithAdditiveValue > 0 ? (water / totalWithAdditiveValue) * 100 : 0;
            const additiveRatioValue = totalWithAdditiveValue > 0 ? (existingAdditive / totalWithAdditiveValue) * 100 : 0;
            
            // Calculate amounts in the portion
            const dryInPortionValue = totalWithAdditiveValue > 0 ? (dryBase / totalWithAdditiveValue) * portionSize : 0;
            const waterInPortionValue = totalWithAdditiveValue > 0 ? (water / totalWithAdditiveValue) * portionSize : 0;
            const additiveInPortionValue = totalWithAdditiveValue > 0 ? (existingAdditive / totalWithAdditiveValue) * portionSize : 0;
            
            // Calculate new additive needed based on dry base in portion
            const newAdditiveAmount = (newAdditivePercentage / 100) * dryInPortionValue;
            
            // Calculate final weight of portion with new additive
            const finalWeightValue = portionSize + newAdditiveAmount;
            
            // Update formula text
            const formulaText = document.querySelector('.formula');
            formulaText.innerHTML = `
                <p>New Additive Amount = (New Additive %) × (Dry Base in Portion)</p>
                <p>New Additive Amount = (${newAdditivePercentage.toFixed(0)}%) × (${dryInPortionValue.toFixed(2)}g) = ${newAdditiveAmount.toFixed(2)}g</p>
            `;
            
            // Update display
            baseMixture.textContent = baseMixtureTotal.toFixed(2) + ' g';
            totalWithAdditive.textContent = totalWithAdditiveValue.toFixed(2) + ' g';
            dryRatio.textContent = dryRatioValue.toFixed(2) + '%';
            waterRatio.textContent = waterRatioValue.toFixed(2) + '%';
            additiveRatio.textContent = additiveRatioValue.toFixed(2) + '%';
            dryInPortion.textContent = dryInPortionValue.toFixed(2) + ' g';
            waterInPortion.textContent = waterInPortionValue.toFixed(2) + ' g';
            additiveInPortion.textContent = additiveInPortionValue.toFixed(2) + ' g';
            newAdditiveNeeded.textContent = newAdditiveAmount.toFixed(2) + ' g';
            finalWeight.textContent = finalWeightValue.toFixed(2) + ' g';
        }
        
        // Add event listeners to inputs
        dryBaseInput.addEventListener('input', updateCalculator);
        waterInput.addEventListener('input', updateCalculator);
        existingAdditiveInput.addEventListener('input', updateCalculator);
        portionSizeInput.addEventListener('input', updateCalculator);
        newAdditivePercentInput.addEventListener('input', updateCalculator);
        
        // Initialize the calculator
        updateCalculator();
    </script>
</body>
</html>
