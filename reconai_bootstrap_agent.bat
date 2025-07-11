@echo off
setlocal enabledelayedexpansion

:: Navigate to your Downloads directory or project folder
cd /d "%~dp0"
echo ====================================================
echo ╔≡ÜÇ Navigated to Project Root: %cd%
echo ====================================================

:: Initialize Git repo
git init
echo ╔≡Ç Git repo initialized

:: Add remote
git remote add origin https://github.com/Trustbyrecon/reconai-core-ui.git
echo ╔öü Remote added

:: Add all files and commit
git add .
git commit -m "Initial Reflex UI push"
echo ╔≡Å Files committed: Initial Reflex UI push

:: Push to GitHub
git push -u origin main
echo ╔üÇ Push complete: https://github.com/Trustbyrecon/reconai-core-ui.git

echo ====================================================
echo ╔≡á Reflexive Adapter Agent bootstrap complete.
pause
