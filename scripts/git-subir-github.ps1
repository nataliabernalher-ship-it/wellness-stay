# Subir Wellness Stay a GitHub (ejecutar en PowerShell en la carpeta del proyecto)
# Uso: .\scripts\git-subir-github.ps1
# Antes: crea un repositorio vacio en https://github.com/new y copia la URL HTTPS.

$ErrorActionPreference = "Stop"
$git = "C:\Program Files\Git\cmd\git.exe"
if (-not (Test-Path $git)) {
  Write-Host "No se encuentra Git en $git. Ajusta la ruta en este script." -ForegroundColor Red
  exit 1
}

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $root

if (-not (Test-Path ".git")) {
  & $git init
}

# Identidad solo para este repo (cambia si quieres usar tu email de GitHub)
& $git config user.name 2>$null | Out-Null
if ($LASTEXITCODE -ne 0 -or -not (& $git config user.name)) {
  & $git config user.name "Wellness Stay"
  & $git config user.email "wellness-stay@users.noreply.github.com"
}

& $git add -A
& $git status

$msg = "Initial commit: Wellness Stay"
$hasCommit = & $git rev-parse HEAD 2>$null
if ($LASTEXITCODE -ne 0) {
  & $git commit -m $msg
} else {
  & $git diff --cached --quiet
  if ($LASTEXITCODE -ne 0) {
    & $git commit -m "Actualizacion proyecto"
  }
}

& $git branch -M main

Write-Host ""
Write-Host "Si aun no has anadido el remoto, ejecuta (sustituye URL):" -ForegroundColor Cyan
Write-Host '  git remote add origin https://github.com/TU_USUARIO/TU_REPO.git' -ForegroundColor Yellow
Write-Host "Si origin ya existe:" -ForegroundColor Cyan
Write-Host '  git remote set-url origin https://github.com/TU_USUARIO/TU_REPO.git' -ForegroundColor Yellow
Write-Host ""
Write-Host "Subir:" -ForegroundColor Cyan
Write-Host "  git push -u origin main" -ForegroundColor Yellow
Write-Host ""

$url = Read-Host "Pega la URL HTTPS del repo (Enter para omitir y hacer push manual)"
if ($url -match "^https://github\.com") {
  $hasOrigin = & $git remote get-url origin 2>$null
  if ($LASTEXITCODE -eq 0) {
    & $git remote set-url origin $url
  } else {
    & $git remote add origin $url
  }
  & $git push -u origin main
}
