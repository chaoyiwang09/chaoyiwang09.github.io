# Regenerate English academic CV PDF from HTML (US Letter).
# Usage (from repo root): powershell -File cv/build_cv.ps1

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $root

$html = Join-Path $root "cv\Chaoyi_Wang_CV.html"
$pdf  = Join-Path $root "files\Chaoyi_Wang_CV.pdf"
$edgeCandidates = @(
  "C:\Program Files\Microsoft\Edge\Application\msedge.exe",
  "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
)
$edge = $edgeCandidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { throw "Microsoft Edge not found." }

$ud = Join-Path $env:TEMP "edge-cv-print"
New-Item -ItemType Directory -Force -Path $ud | Out-Null
$uri = "file:///" + ($html -replace '\\','/')
& $edge --headless=new --user-data-dir="$ud" --disable-gpu --no-pdf-header-footer --print-to-pdf="$pdf" "$uri"
if (-not (Test-Path $pdf)) { throw "Failed to write PDF." }
Write-Output "Wrote $pdf"
