import 'dart:ui';import 'package:flutter/material.dart';import '../../core/app_export.dart';String _appTheme = "primary";
PrimaryColors get appTheme =>  ThemeHelper().themeColor();ThemeData get theme =>  ThemeHelper().themeData();/// Helper class for managing themes and colors.

// ignore_for_file: must_be_immutable
class ThemeHelper {Map<String, PrimaryColors> _supportedCustomColor = {'primary' : PrimaryColors()};

Map<String, ColorScheme> _supportedColorScheme = {'primary' : ColorSchemes.primaryColorScheme};

/// Changes the app theme to [_newTheme].
void changeTheme(String _newTheme) { _appTheme = _newTheme; } 
/// Returns the primary colors for the current theme.
PrimaryColors _getThemeColors() { if (!_supportedCustomColor.containsKey(_appTheme)) {throw Exception("$_appTheme is not found.Make sure you have added this theme class in JSON Try running flutter pub run build_runner");} return _supportedCustomColor[_appTheme] ?? PrimaryColors(); } 
/// Returns the current theme data.
ThemeData _getThemeData() { if (!_supportedColorScheme.containsKey(_appTheme)) {throw Exception("$_appTheme is not found.Make sure you have added this theme class in JSON Try running flutter pub run build_runner");} var colorScheme = _supportedColorScheme[_appTheme] ?? ColorSchemes.primaryColorScheme; return ThemeData(visualDensity: VisualDensity.standard, colorScheme: colorScheme, textTheme: TextThemes.textTheme(colorScheme), scaffoldBackgroundColor: appTheme.whiteA700, outlinedButtonTheme: OutlinedButtonThemeData(style: OutlinedButton.styleFrom(backgroundColor: Colors.transparent, side: BorderSide(color: colorScheme.onPrimaryContainer.withOpacity(0.1), width: 1.h), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4.h)), visualDensity: const VisualDensity(vertical: -4, horizontal: -4), padding: EdgeInsets.zero)), elevatedButtonTheme: ElevatedButtonThemeData(style: ElevatedButton.styleFrom(shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14.h)), visualDensity: const VisualDensity(vertical: -4, horizontal: -4), padding: EdgeInsets.zero)), checkboxTheme: CheckboxThemeData(fillColor: MaterialStateColor.resolveWith((states) {if (states.contains(MaterialState.selected)) {return colorScheme.primary;} return colorScheme.onSurface;}), side: BorderSide(width: 1), visualDensity: const VisualDensity(vertical: -4, horizontal: -4)), dividerTheme: DividerThemeData(thickness: 1, space: 1, color: appTheme.gray900.withOpacity(0.39))); } 
/// Returns the primary colors for the current theme.
PrimaryColors themeColor() =>  _getThemeColors();
/// Returns the current theme data.
ThemeData themeData() =>  _getThemeData();
 }
/// Class containing the supported text theme styles.
class TextThemes {static TextTheme textTheme(ColorScheme colorScheme) =>  TextTheme(bodyLarge: TextStyle(color: appTheme.gray900.withOpacity(0.64), fontSize: 16.fSize, fontFamily: 'Poppins', fontWeight: FontWeight.w400), bodyMedium: TextStyle(color: appTheme.gray900.withOpacity(0.56), fontSize: 14.fSize, fontFamily: 'Poppins', fontWeight: FontWeight.w400), bodySmall: TextStyle(color: appTheme.gray900.withOpacity(0.42), fontSize: 10.fSize, fontFamily: 'Poppins', fontWeight: FontWeight.w400), displayMedium: TextStyle(color: appTheme.gray900, fontSize: 44.fSize, fontFamily: 'Poppins', fontWeight: FontWeight.w400), displaySmall: TextStyle(color: appTheme.gray900.withOpacity(0.64), fontSize: 38.fSize, fontFamily: 'Poppins', fontWeight: FontWeight.w600), headlineMedium: TextStyle(color: appTheme.gray900.withOpacity(0.64), fontSize: 28.fSize, fontFamily: 'Poppins', fontWeight: FontWeight.w600), headlineSmall: TextStyle(color: appTheme.gray900.withOpacity(0.64), fontSize: 24.fSize, fontFamily: 'Poppins', fontWeight: FontWeight.w600), labelLarge: TextStyle(color: appTheme.whiteA700, fontSize: 12.fSize, fontFamily: 'Poppins', fontWeight: FontWeight.w600), labelMedium: TextStyle(color: appTheme.cyan30001, fontSize: 10.fSize, fontFamily: 'Poppins', fontWeight: FontWeight.w500), titleLarge: TextStyle(color: appTheme.gray900.withOpacity(0.56), fontSize: 20.fSize, fontFamily: 'Poppins', fontWeight: FontWeight.w500), titleMedium: TextStyle(color: appTheme.gray900.withOpacity(0.64), fontSize: 18.fSize, fontFamily: 'Poppins', fontWeight: FontWeight.w600), titleSmall: TextStyle(color: colorScheme.onErrorContainer, fontSize: 14.fSize, fontFamily: 'Poppins', fontWeight: FontWeight.w700));
 }
/// Class containing the supported color schemes.
class ColorSchemes {static final primaryColorScheme = ColorScheme.light(primary: Color(0XFF41E784), primaryContainer: Color(0XFF2C2C2C), secondaryContainer: Color(0XFF9B9B9B), errorContainer: Color(0XFF2AA952), onError: Color(0XFFC4C4C4), onErrorContainer: Color(0X75130F26), onPrimary: Color(0XFF222222), onPrimaryContainer: Color(0X7E000000));

 }
/// Class containing custom colors for a primary theme.
class PrimaryColors {Color get cyan300 =>  Color(0XFF3DE4E4);
Color get cyan30001 =>  Color(0XFF33DEE9);
Color get cyan30002 =>  Color(0XFF33DDE8);
Color get cyan30003 =>  Color(0XFF3EE4E4);
Color get cyan30004 =>  Color(0XFF34DEE9);
Color get gray50 =>  Color(0XFFF9F9F9);
Color get gray5001 =>  Color(0XFFFAFAFA);
Color get gray900 =>  Color(0XFF292929);
Color get indigo600 =>  Color(0XFF3B5998);
Color get red700 =>  Color(0XFFDB3022);
Color get redA100 =>  Color(0XFFFF7B7B);
Color get red8003f =>  Color(0X3FD32525);
Color get whiteA700 =>  Color(0XFFFFFFFF);
 }
