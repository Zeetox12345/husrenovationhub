# Script to update all tagrenovering city pages with the Aarhus template
# This will replace each city page with the Aarhus content, but substitute the city name

# Get the script's directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$tagRenoveringDir = Join-Path -Path $scriptDir -ChildPath "../tagrenovering"

# Source file path
$sourceFile = Join-Path -Path $tagRenoveringDir -ChildPath "TagrenoveringAarhus.tsx"
$sourceContent = Get-Content -Path $sourceFile -Raw

# Get source file content and extract Aarhus-specific values
$sourceCity = "Aarhus"
$sourceCityLowercase = "aarhus"

# City mapping with proper names and lowercase versions
$cities = @(
    @{Name = "Aalborg"; Lowercase = "aalborg"; ComponentName = "TagrenoveringAalborg"; FileName = "TagrenoveringAalborg.tsx"},
    @{Name = "København"; Lowercase = "kobenhavn"; ComponentName = "TagrenoveringKobenhavn"; FileName = "TagrenoveringKobenhavn.tsx"},
    @{Name = "Odense"; Lowercase = "odense"; ComponentName = "TagrenoveringOdense"; FileName = "TagrenoveringOdense.tsx"},
    @{Name = "Esbjerg"; Lowercase = "esbjerg"; ComponentName = "TagrenoveringEsbjerg"; FileName = "TagrenoveringEsbjerg.tsx"},
    @{Name = "Randers"; Lowercase = "randers"; ComponentName = "TagrenoveringRanders"; FileName = "TagrenoveringRanders.tsx"},
    @{Name = "Kolding"; Lowercase = "kolding"; ComponentName = "TagrenoveringKolding"; FileName = "TagrenoveringKolding.tsx"},
    @{Name = "Silkeborg"; Lowercase = "silkeborg"; ComponentName = "TagrenoveringSilkeborg"; FileName = "TagrenoveringSilkeborg.tsx"},
    @{Name = "Vejle"; Lowercase = "vejle"; ComponentName = "TagrenoveringVejle"; FileName = "TagrenoveringVejle.tsx"},
    @{Name = "Roskilde"; Lowercase = "roskilde"; ComponentName = "TagrenoveringRoskilde"; FileName = "TagrenoveringRoskilde.tsx"},
    @{Name = "Helsingør"; Lowercase = "helsingor"; ComponentName = "TagrenoveringHelsingor"; FileName = "TagrenoveringHelsingor.tsx"},
    @{Name = "Herning"; Lowercase = "herning"; ComponentName = "TagrenoveringHerning"; FileName = "TagrenoveringHerning.tsx"},
    @{Name = "Hørsholm"; Lowercase = "horsholm"; ComponentName = "TagrenoveringHorsholm"; FileName = "TagrenoveringHorsholm.tsx"}
)

Write-Host "Source file: $sourceFile"
Write-Host "Tagrenovering directory: $tagRenoveringDir"

foreach ($city in $cities) {
    $cityName = $city.Name
    $cityLowercase = $city.Lowercase
    $componentName = $city.ComponentName
    $fileName = $city.FileName
    $targetFile = Join-Path -Path $tagRenoveringDir -ChildPath $fileName
    
    # Skip if the city is Aarhus (source file)
    if ($cityName -eq $sourceCity) {
        Write-Host "Skipping $cityName (source file)"
        continue
    }
    
    Write-Host "Processing $cityName... Target file: $targetFile"
    
    # Replace content
    $newContent = $sourceContent -replace "TagrenoveringAarhus", $componentName `
                               -replace "const city = `"$sourceCity`"", "const city = `"$cityName`"" `
                               -replace "const cityLowercase = `"$sourceCityLowercase`"", "const cityLowercase = `"$cityLowercase`""
    
    # Save to the target file
    $newContent | Set-Content -Path $targetFile -Force
    
    Write-Host "Updated $targetFile successfully."
}

Write-Host "All city pages have been updated." 