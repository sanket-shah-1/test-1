import 'dart:ui';import '../core/app_export.dart';String _appTheme = "primary";
PrimaryColors get appTheme =>  ThemeHelper().themeColor();ThemeData get theme =>  ThemeHelper().themeData();/// Helper class for managing themes and colors.

// ignore_for_file: must_be_immutable
class ThemeHelper {Map<String, PrimaryColors> _supportedCustomColor = {'primary' : PrimaryColors()};

Map<String, ColorScheme> _supportedColorScheme = {'primary' : ColorSchemes.primaryColorScheme};

/// Changes the app theme to [_newTheme].
void changeTheme(String _newTheme) { _appTheme = _newTheme; } 
/// Returns the primary colors for the current theme.
PrimaryColors _getThemeColors() { if (!_supportedCustomColor.containsKey(_appTheme)) {throw Exception("$_appTheme is not found.Make sure you have added this theme class in JSON Try running flutter pub run build_runner");} return _supportedCustomColor[_appTheme] ?? PrimaryColors(); } 
/// Returns the current theme data.
ThemeData _getThemeData() { if (!_supportedColorScheme.containsKey(_appTheme)) {throw Exception("$_appTheme is not found.Make sure you have added this theme class in JSON Try running flutter pub run build_runner");} var colorScheme = _supportedColorScheme[_appTheme] ?? ColorSchemes.primaryColorScheme; return ThemeData(visualDensity: VisualDensity.standard, colorScheme: colorScheme, textTheme: TextThemes.textTheme(colorScheme), scaffoldBackgroundColor: appTheme.whiteA700, elevatedButtonTheme: ElevatedButtonThemeData(style: ElevatedButton.styleFrom(backgroundColor: appTheme.lightBlue700, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.h)), visualDensity: const VisualDensity(vertical: -4, horizontal: -4), padding: EdgeInsets.zero)), outlinedButtonTheme: OutlinedButtonThemeData(style: OutlinedButton.styleFrom(backgroundColor: Colors.transparent, side: BorderSide(color: appTheme.whiteA700, width: 1.h), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(19.h)), visualDensity: const VisualDensity(vertical: -4, horizontal: -4), padding: EdgeInsets.zero)), dividerTheme: DividerThemeData(thickness: 1, space: 1, color: colorScheme.onErrorContainer)); } 
/// Returns the primary colors for the current theme.
PrimaryColors themeColor() =>  _getThemeColors();
/// Returns the current theme data.
ThemeData themeData() =>  _getThemeData();
 }
/// Class containing the supported text theme styles.
class TextThemes {static TextTheme textTheme(ColorScheme colorScheme) =>  TextTheme(bodyLarge: TextStyle(color: appTheme.lightBlue800, fontSize: 17.fSize, fontFamily: 'SF Pro Text', fontWeight: FontWeight.w400), bodyMedium: TextStyle(color: colorScheme.onErrorContainer, fontSize: 14.fSize, fontFamily: 'SF Pro Text', fontWeight: FontWeight.w400), bodySmall: TextStyle(color: colorScheme.onErrorContainer, fontSize: 12.fSize, fontFamily: 'SF Pro Text', fontWeight: FontWeight.w400), displayMedium: TextStyle(color: colorScheme.primary, fontSize: 40.fSize, fontFamily: 'SF Pro Display', fontWeight: FontWeight.w600), displaySmall: TextStyle(color: colorScheme.onErrorContainer, fontSize: 35.fSize, fontFamily: 'SF Pro Display', fontWeight: FontWeight.w500), headlineLarge: TextStyle(color: colorScheme.onErrorContainer, fontSize: 32.fSize, fontFamily: 'SF Pro Display', fontWeight: FontWeight.w600), headlineMedium: TextStyle(color: colorScheme.onErrorContainer, fontSize: 28.fSize, fontFamily: 'SF Pro Display', fontWeight: FontWeight.w600), headlineSmall: TextStyle(color: appTheme.gray600, fontSize: 24.fSize, fontFamily: 'SF Pro Display', fontWeight: FontWeight.w600), labelLarge: TextStyle(color: appTheme.gray600, fontSize: 12.fSize, fontFamily: 'SF Pro Text', fontWeight: FontWeight.w600), titleLarge: TextStyle(color: colorScheme.onErrorContainer, fontSize: 21.fSize, fontFamily: 'SF Pro Display', fontWeight: FontWeight.w600), titleMedium: TextStyle(color: colorScheme.onErrorContainer, fontSize: 17.fSize, fontFamily: 'SF Pro Text', fontWeight: FontWeight.w600), titleSmall: TextStyle(color: colorScheme.onErrorContainer, fontSize: 14.fSize, fontFamily: 'SF Pro Text', fontWeight: FontWeight.w600));
 }
/// Class containing the supported color schemes.
class ColorSchemes {static final primaryColorScheme = ColorScheme.light(primary: Color(0XFFF5F5F7), primaryContainer: Color(0XFF2948B1), secondaryContainer: Color(0X99F5F5F7), errorContainer: Color(0XFF00FF00), onError: Color(0XFF010101), onErrorContainer: Color(0XFF1D1D1F), onPrimary: Color(0XFF333333), onPrimaryContainer: Color(0XFF090A0E));

 }
/// Class containing custom colors for a primary theme.
class PrimaryColors {Color get black900 =>  Color(0XFF030303);
Color get black90001 =>  Color(0XFF000000);
Color get blue500 =>  Color(0XFF2997FF);
Color get blueGray100 =>  Color(0XFFD2D2D7);
Color get blueGray400 =>  Color(0XFF86868B);
Color get blueGray700 =>  Color(0XFF515154);
Color get deepOrange900 =>  Color(0XFFBF4800);
Color get deepPurpleA200 =>  Color(0XFFAC39FF);
Color get deepPurpleA20001 =>  Color(0XFFAB45FB);
Color get gray100 =>  Color(0XFFF2F2F2);
Color get gray200 =>  Color(0XFFE8E8ED);
Color get gray300 =>  Color(0XFFE0E0E0);
Color get gray30001 =>  Color(0XFFDED6D1);
Color get gray400 =>  Color(0XFFCCC4BC);
Color get gray50 =>  Color(0XFFFBFBFD);
Color get gray5001 =>  Color(0XFFF9F9F9);
Color get gray5002 =>  Color(0XFFFBFAFC);
Color get gray5003 =>  Color(0XFFF8F8F9);
Color get gray5004 =>  Color(0XFFFAFAFA);
Color get gray600 =>  Color(0XFF6E6E73);
Color get gray700 =>  Color(0XFF555555);
Color get gray800 =>  Color(0XFF424245);
Color get gray900 =>  Color(0XFF1A2530);
Color get gray90001 =>  Color(0XFF1D1D1D);
Color get gray90002 =>  Color(0XFF161617);
Color get indigo500 =>  Color(0XFF3153C6);
Color get indigo800 =>  Color(0XFF1E3791);
Color get indigoA400 =>  Color(0XFF385FDA);
Color get lightBlue700 =>  Color(0XFF0071E3);
Color get lightBlue800 =>  Color(0XFF0066CC);
Color get lightGreen600 =>  Color(0XFF6CCA4E);
Color get lightGreen60001 =>  Color(0XFF68CC45);
Color get orange800 =>  Color(0XFFF56300);
Color get red800 =>  Color(0XFFC80E2D);
Color get whiteA700 =>  Color(0XFFFFFFFF);
 }
