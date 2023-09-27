@echo off

DEL /S "www/" "android" "sdk"
npx "@ionic\cli" "build"
npx "@ionic\cli" "capacitor" "add" "android"
cd "android"
./gradlew
./gradlew "assembleDebug"