import 'package:flutter/material.dart';import '../core/app_export.dart';/// A class that offers pre-defined button styles for customizing button appearance.
class CustomButtonStyles {static ButtonStyle get fillGray =>  ElevatedButton.styleFrom(backgroundColor: appTheme.gray50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.h)));
static BoxDecoration get gradientCyanToPrimaryDecoration =>  BoxDecoration(borderRadius: BorderRadius.circular(14.h), gradient: LinearGradient(begin: Alignment(-0.26, 0), end: Alignment(1.14, 1), colors: [appTheme.cyan30002, theme.colorScheme.primary]));
static ButtonStyle get outlineGray =>  OutlinedButton.styleFrom(backgroundColor: Colors.transparent, side: BorderSide(color: appTheme.gray900, width: 1), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14.h)));
static ButtonStyle get outlineGrayTL8 =>  OutlinedButton.styleFrom(backgroundColor: Colors.transparent, side: BorderSide(color: appTheme.gray900, width: 1), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.h)));
static ButtonStyle get outlineRedF =>  ElevatedButton.styleFrom(backgroundColor: appTheme.red700, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24.h)), shadowColor: appTheme.red8003f, elevation: 4);
static ButtonStyle get none =>  ButtonStyle(backgroundColor: MaterialStateProperty.all<Color>(Colors.transparent), elevation: MaterialStateProperty.all<double>(0));
 }
