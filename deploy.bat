@echo off
chcp 65001 > nul
set PATH=%PATH%;C:\Program Files\Git\cmd
echo ----------------------------------------
echo [GitHub] 웹사이트 자동 동기화를 시작합니다...
git add .
git commit -m "Auto Update: %date% %time%"
git push origin main
echo [완료] 수정 사항이 깃허브에 성공적으로 업로드되었습니다.
echo (실제 웹페이지 반영에는 1~2분이 소요될 수 있습니다.)
echo ----------------------------------------
pause
