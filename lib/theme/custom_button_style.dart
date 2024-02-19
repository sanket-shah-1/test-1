import '../core/app_export.dart';/// A class that offers pre-defined button styles for customizing button appearance.
class CustomButtonStyles {static ButtonStyle get fillGray =>  ElevatedButton.styleFrom(backgroundColor: appTheme.gray200, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18.h)));
static ButtonStyle get fillLightBlue =>  ElevatedButton.styleFrom(backgroundColor: appTheme.lightBlue700, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18.h)));
static ButtonStyle get fillOnErrorContainer =>  ElevatedButton.styleFrom(backgroundColor: theme.colorScheme.onErrorContainer, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.h)));
static ButtonStyle get fillOnErrorContainerTL18 =>  ElevatedButton.styleFrom(backgroundColor: theme.colorScheme.onErrorContainer, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18.h)));
static ButtonStyle get fillPrimary =>  ElevatedButton.styleFrom(backgroundColor: theme.colorScheme.primary, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.h)));
static ButtonStyle get fillPrimaryTL18 =>  ElevatedButton.styleFrom(backgroundColor: theme.colorScheme.primary, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18.h)));
static ButtonStyle get fillWhiteA =>  ElevatedButton.styleFrom(backgroundColor: appTheme.whiteA700, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18.h)));
static ButtonStyle get outlineWhiteA =>  OutlinedButton.styleFrom(backgroundColor: appTheme.whiteA700, side: BorderSide(color: appTheme.whiteA700, width: 1), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(23.h)));
static ButtonStyle get outlineWhiteATL19 =>  OutlinedButton.styleFrom(backgroundColor: Colors.transparent, side: BorderSide(color: appTheme.whiteA700.withOpacity(0.71), width: 1), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(19.h)));
static ButtonStyle get outlineWhiteATL192 =>  OutlinedButton.styleFrom(backgroundColor: Colors.transparent, side: BorderSide(color: appTheme.whiteA700, width: 1), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(19.h)));
static ButtonStyle get none =>  ButtonStyle(backgroundColor: MaterialStateProperty.all<Color>(Colors.transparent), elevation: MaterialStateProperty.all<double>(0));
 }
